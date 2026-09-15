/**
 * 天氣資料服務：在伺服器端取得當下與多日預報
 * - 站點由資料統一管理（attraction.ts）
 * - Cloudflare Workers 透過原生 fetch 與 Cache API 快取 30 分鐘
 * - 依氣象資料產出「給一般遊客」的結構化建議：
 *   風險提醒 / 出行穿搭 / 遊玩安排 / 隨身物品
 * - 結合景點類型（terrain）做在地化擴展（山、海、森林、城市等）
 */

import { attraction } from '../data/attraction';

const CACHE_NAME = 'weather-dakeng-v1';
const CACHE_TTL_SECONDS = 30 * 60; // 30 分鐘

/** 景點類型：用於在地化建議模板 */
export type Terrain = 'mountain' | 'coast' | 'forest' | 'urban' | 'cave' | 'desert' | 'lake-river';

/** 當前站點類型（大坑為近郊山區步道） */
export const terrain: Terrain = 'mountain';

export interface WeatherCurrent {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  precipitation: number;
  weatherCode: number;
  weatherLabel: string;
  isDay: boolean;
  updatedAt: string;
}

export interface WeatherDaily {
  date: string;
  weekday: string;
  weatherCode: number;
  weatherLabel: string;
  highC: number;
  lowC: number;
  precipitationSum: number;
  precipitationProbabilityMax: number;
  windMax: number;
  uvMax: number;
}

export interface WeatherBundle {
  location: {
    label: string;
    latitude: number;
    longitude: number;
  };
  current: WeatherCurrent;
  daily: WeatherDaily[];
  source: string;
}

/** 結構化建議：四區塊動態渲染 */
export interface AdviceSection {
  /** 風險提醒（紅色置頂） */
  risks: string[];
  /** 出行穿搭 */
  outfit: string[];
  /** 遊玩安排 */
  itinerary: string[];
  /** 隨身物品 */
  gear: string[];
  /** 一句話總結，便於搜尋摘錄 */
  headline: string;
}

const WEEKDAY_ZH = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

const weatherCodeMap: Record<number, string> = {
  0: '晴',
  1: '大致晴',
  2: '局部多雲',
  3: '陰天',
  45: '有霧',
  48: '霧凇',
  51: '小毛毛雨',
  53: '中毛毛雨',
  55: '濃毛毛雨',
  56: '凍毛毛雨',
  57: '凍濃毛毛雨',
  61: '小雨',
  63: '中雨',
  65: '大雨',
  66: '凍雨',
  67: '強凍雨',
  71: '小雪',
  73: '中雪',
  75: '大雪',
  77: '雪粒',
  80: '小陣雨',
  81: '中陣雨',
  82: '強陣雨',
  85: '陣雪',
  86: '強陣雪',
  95: '雷雨',
  96: '雷雨伴小冰雹',
  99: '雷雨伴大冰雹',
};

export function describeWeather(code: number): string {
  return weatherCodeMap[code] ?? '未知';
}

interface FetchOptions {
  /** 跳過快取直連來源 */
  bypass?: boolean;
}

/** 在伺服器端取得目前與七日天氣（每日含預報）。 */
export async function loadWeather(options: FetchOptions = {}): Promise<WeatherBundle | null> {
  const { latitude, longitude } = attraction;
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: [
      'temperature_2m',
      'apparent_temperature',
      'relative_humidity_2m',
      'is_day',
      'precipitation',
      'weather_code',
      'wind_speed_10m',
      'wind_direction_10m',
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'precipitation_probability_max',
      'wind_speed_10m_max',
      'uv_index_max',
    ].join(','),
    timezone: 'Asia/Taipei',
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const cacheKey = `https://weather.dakengtrails.local/v1/${latitude.toFixed(4)},${longitude.toFixed(4)}`;

  let data: unknown;
  if (typeof caches !== 'undefined' && !options.bypass) {
    try {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(cacheKey);
      if (cached) {
        data = await cached.json();
      } else {
        const resp = await fetch(url, { cf: { cacheTtl: 1800, cacheEverything: true } } as RequestInit);
        await cache.put(cacheKey, resp.clone());
        applyCacheHeaders(resp);
        data = await applyResponse(resp);
      }
    } catch (_) {
      data = await fetchAndDeserialize(url);
    }
  } else {
    data = await fetchAndDeserialize(url);
  }

  return transformWeather(data);
}

async function fetchAndDeserialize(url: string) {
  const resp = await fetch(url);
  return applyResponse(resp);
}

function applyResponse(resp: Response) {
  if (!resp.ok) throw new Error(`weather: ${resp.status}`);
  return resp.json();
}

function applyCacheHeaders(resp: Response) {
  try {
    resp.headers.set('Cache-Control', `public, max-age=${CACHE_TTL_SECONDS}`);
  } catch (_) { /* immutable response */ }
}

function transformWeather(payload: unknown): WeatherBundle | null {
  if (!payload || typeof payload !== 'object') return null;
  const data = payload as {
    current?: Record<string, unknown>;
    daily?: Record<string, unknown[]>;
  };
  if (!data.current || !data.daily) return null;

  const current: WeatherCurrent = {
    temperature: round(data.current.temperature_2m),
    apparentTemperature: round(data.current.apparent_temperature),
    humidity: Math.round(Number(data.current.relative_humidity_2m ?? 0)),
    windSpeed: round(data.current.wind_speed_10m),
    windDirection: Math.round(Number(data.current.wind_direction_10m ?? 0)),
    precipitation: round(data.current.precipitation),
    weatherCode: Number(data.current.weather_code ?? 0),
    weatherLabel: describeWeather(Number(data.current.weather_code ?? 0)),
    isDay: Boolean(data.current.is_day),
    updatedAt: new Date().toISOString(),
  };

  const days = (data.daily.time ?? []) as string[];
  const daily: WeatherDaily[] = days.map((date, index) => {
    const code = Number(data.daily!.weather_code?.[index] ?? 0);
    return {
      date,
      weekday: weekdayLabel(date),
      weatherCode: code,
      weatherLabel: describeWeather(code),
      highC: round(data.daily!.temperature_2m_max?.[index]),
      lowC: round(data.daily!.temperature_2m_min?.[index]),
      precipitationSum: round(data.daily!.precipitation_sum?.[index]),
      precipitationProbabilityMax: Math.round(Number(data.daily!.precipitation_probability_max?.[index] ?? 0)),
      windMax: round(data.daily!.wind_speed_10m_max?.[index]),
      uvMax: round(data.daily!.uv_index_max?.[index]),
    };
  });

  return {
    location: {
      label: `${attraction.fullName}（${attraction.city}）`,
      latitude: attraction.latitude,
      longitude: attraction.longitude,
    },
    current,
    daily,
    source: '第三方即時氣象服務',
  };
}

function round(value: unknown): number {
  const num = Number(value);
  if (Number.isNaN(num)) return 0;
  return Math.round(num * 10) / 10;
}

function weekdayLabel(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00+08:00`);
  return WEEKDAY_ZH[date.getDay()] ?? isoDate;
}

/**
 * WMO 代碼 → 風險等級
 */
function classifyRain(code: number, precipitationMm: number) {
  if ([95, 96, 99].includes(code)) return 'thunder';
  if ([65, 67, 82].includes(code) || precipitationMm >= 8) return 'heavy';
  if ([63, 66, 81].includes(code) || precipitationMm >= 2.5) return 'moderate';
  if ([61, 80].includes(code) || precipitationMm >= 0.2) return 'light';
  return 'none';
}

function classifyWind(speedKmh: number): 'none' | 'breeze' | 'strong' | 'gale' {
  if (speedKmh >= 50) return 'gale';
  if (speedKmh >= 30) return 'strong';
  if (speedKmh >= 20) return 'breeze';
  return 'none';
}

function classifyUv(uv: number): 'none' | 'moderate' | 'high' {
  if (uv >= 6) return 'high';
  if (uv >= 3) return 'moderate';
  return 'none';
}

function classifyTemp(high: number): 'cold' | 'cool' | 'mild' | 'warm' | 'hot' {
  if (high <= 10) return 'cold';
  if (high <= 17) return 'cool';
  if (high <= 27) return 'mild';
  if (high <= 32) return 'warm';
  return 'hot';
}

/** 依 WMO 與雨量判斷是否屬於「霧 / 視野受限」場景 */
function classifyFog(code: number): boolean {
  return code === 45 || code === 48;
}

/** 依 WMO 與雨量判斷是否屬於「雷暴」場景 */
function classifyThunder(code: number): boolean {
  return [95, 96, 99].includes(code);
}

/**
 * 構造面向普通遊客的結構化建議
 * - 全部以人話撰寫（不直接出現「相對濕度」「輻照強度」等專業詞彙）
 * - 動態決定是否輸出，避免出現「不下雨卻顯示雨具」這種多餘提示
 */
export function buildAdvice(
  current: WeatherCurrent,
  today: WeatherDaily,
  tomorrow: WeatherDaily | null,
  surface: Terrain = terrain,
): AdviceSection {
  const rain = classifyRain(today.weatherCode, today.precipitationSum);
  const rainNow = classifyRain(current.weatherCode, current.precipitation);
  const wind = classifyWind(Math.max(current.windSpeed, today.windMax));
  const uv = classifyUv(today.uvMax);
  const temp = classifyTemp(today.highC);
  const fog = classifyFog(today.weatherCode) || classifyFog(current.weatherCode);
  const thunder = classifyThunder(today.weatherCode) || classifyThunder(current.weatherCode);
  const tempDiff = today.highC - today.lowC;
  const rainProb = today.precipitationProbabilityMax;
  const tomorrowRainProb = tomorrow?.precipitationProbabilityMax ?? 0;
  const tomorrowHeavy = tomorrow
    ? classifyRain(tomorrow.weatherCode, tomorrow.precipitationSum) === 'heavy'
    : false;

  const risks: string[] = [];
  const outfit: string[] = [];
  const itinerary: string[] = [];
  const gear: string[] = [];

  /* ---------- 風險提醒（紅色置頂） ---------- */
  if (thunder) {
    risks.push('雷雨當下，避免登山、戲水與在樹下避雨；請改至室內或延期。');
  }
  if (rain === 'heavy') {
    risks.push('降雨偏強，避開山谷、溪溝、低窪路段與邊坡。');
  }
  if (fog) {
    risks.push('能見度差，拉開行進距離、攜帶頭燈與定位裝置，避免進入無訊號的稜線。');
  }
  if (wind === 'gale') {
    risks.push('風力偏大，遠離懸掛物、招牌與步道吊橋；長裙與寬鬆衣物易被吹亂。');
  }
  if (today.precipitationSum >= 50 || (tomorrow && tomorrow.precipitationSum >= 50)) {
    risks.push('降雨量大，留意山洪、土石流與邊坡落石；建議調整或取消行程。');
  }

  /* ---------- 出行穿搭 ---------- */
  if (rain === 'heavy' || rain === 'moderate' || thunder) {
    outfit.push('風雨較大，建議穿防水外套與防滑登山鞋，避免穿新鞋或拖鞋。');
  } else if (rain === 'light') {
    outfit.push('有小雨，路面濕滑，建議防滑鞋款並避免光滑路面行走。');
  }
  if (temp === 'hot') {
    outfit.push('氣溫偏高，建議淺色、薄長袖或透氣衣物，避免中午長時間曝曬。');
  } else if (temp === 'cold') {
    outfit.push('氣溫偏低，建議厚外套、圍巾與保暖內層，預留洋蔥式穿搭空間。');
  } else if (tempDiff > 8) {
    outfit.push('早晚溫差大，建議多帶一件薄外套，方便增減。');
  } else {
    outfit.push('氣溫舒適，建議透氣層；山區早晚可再加一件薄外套。');
  }

  /* ---------- 遊玩安排 ---------- */
  if (rainProb >= 60) {
    itinerary.push('降雨機率高，優先安排室內或商圈行程；如要走步道，建議改為短程與低難度。');
  } else if (rain === 'light') {
    itinerary.push('小雨天仍可上山，建議放慢節奏、避開圓木與階梯段，並提早下山。');
  }
  if (thunder || rain === 'heavy') {
    itinerary.push('強降雨與雷雨，建議延後或改走都市商圈、人文館所等室內行程。');
  } else if (temp === 'hot') {
    itinerary.push('高溫時段避免正午外出，建議清晨或下午三點後再走稜線段。');
  } else if (temp === 'cold') {
    itinerary.push('氣溫偏低，建議安排有陽光的上午時段；體感較冷需加長熱身。');
  } else if (fog) {
    itinerary.push('起霧時不建議觀景、看山景；如堅持上山請攜伴並縮短停留。');
  } else if (today.weatherCode === 0 || today.weatherCode === 1) {
    itinerary.push('天氣晴朗，適合看日出日落、稜線展望與定點攝影；可安排挑戰型步道。');
  } else if (today.weatherCode === 2 || today.weatherCode === 3) {
    itinerary.push('陰天光線柔和，適合長時間步行與拍照，不易有晒伤壓力。');
  }

  /* ---------- 隨身物品（動態輸出） ---------- */
  if (rainProb >= 30 || rain !== 'none' || rainNow !== 'none') {
    if (wind === 'gale') {
      gear.push('雨衣（風大時雨傘易受損，建議以雨衣為主）');
    } else if (rain === 'light') {
      gear.push('折疊傘');
    } else {
      gear.push('雨衣與雨傘');
    }
  }
  if (uv === 'high' || temp === 'hot') {
    gear.push('防曬乳、墨鏡、遮陽帽');
    gear.push('充足飲水（建議 800–1500 ml）');
  }
  if (temp === 'cold' || tempDiff > 8) {
    gear.push('薄外套或保暖衣物');
  }
  if (wind === 'strong' || wind === 'gale') {
    gear.push('綁繩帽或止滑髮圈');
  }
  if (fog) {
    gear.push('口罩、頭燈');
  }
  if (surface === 'mountain') {
    gear.push('防滑登山鞋、頭燈與備用電池');
    gear.push('行動電源與緊急聯絡用通訊設備');
  }
  if (surface === 'coast') {
    gear.push('防曬用品、海岸防滑鞋');
  }

  /* ---------- 明日提醒：安排次日行程 ---------- */
  if (tomorrow && tomorrowRainProb >= 60 && rainProb < 60) {
    itinerary.push('明日降雨機率高，若需走步道，建議提早到今日完成；或改走低難度與商圈。');
  }
  if (tomorrowHeavy && rain === 'none') {
    risks.push('明日預估有大雨，建議今天完成主行程或調整為室內活動。');
  }

  /* ---------- 一句話總結 ---------- */
  const headline = summarizeHeadline({
    weatherLabel: today.weatherLabel,
    rainProb,
    temp,
    tempHigh: today.highC,
    tempLow: today.lowC,
    wind,
    surface,
  });

  // 去重
  const dedupe = (arr: string[]) => Array.from(new Set(arr));

  return {
    risks: dedupe(risks),
    outfit: dedupe(outfit),
    itinerary: dedupe(itinerary),
    gear: dedupe(gear),
    headline,
  };
}

function summarizeHeadline(opts: {
  weatherLabel: string;
  rainProb: number;
  temp: ReturnType<typeof classifyTemp>;
  tempHigh: number;
  tempLow: number;
  wind: ReturnType<typeof classifyWind>;
  surface: Terrain;
}): string {
  const { weatherLabel, rainProb, temp, tempHigh, tempLow, wind, surface } = opts;
  const rainPart = rainProb >= 60 ? '高降雨機率，建議攜帶雨具與調整行程' : rainProb >= 30 ? '偶有降雨，建議備傘' : '降雨機率低';
  const tempPart = temp === 'hot'
    ? `高溫 ${Math.round(tempHigh)}°C，注意防曬與補水`
    : temp === 'cold'
      ? `低溫 ${Math.round(tempLow)}°C，注意保暖`
      : `氣溫 ${Math.round(tempLow)}–${Math.round(tempHigh)}°C，整體舒適`;
  const windPart = wind === 'gale' || wind === 'strong' ? '風力偏大，需注意' : wind === 'breeze' ? '微風' : '風力平穩';
  const surfacePart = surface === 'mountain' ? '山區步道請評估稜線與吊橋段' : '';
  return [rainPart, tempPart, windPart, surfacePart].filter(Boolean).join('；');
}

/** 舊版簡易 deriveTravelAdvice 向下相容 — 內部以新邏輯取代 */
export function deriveTravelAdvice(current: WeatherCurrent, today: WeatherDaily) {
  const a = buildAdvice(current, today, null);
  return {
    bringUmbrella: a.gear.some((g) => g.includes('雨衣') || g.includes('雨傘') || g.includes('折疊傘')),
    sunProtection: a.gear.some((g) => g.includes('防曬') || g.includes('遮陽')),
    cooler: a.outfit.some((o) => o.includes('外套') || o.includes('保暖')),
    wetCaution: a.risks.some((r) => r.includes('濕滑') || r.includes('雨')) || a.itinerary.some((i) => i.includes('雨')),
    windCaution: a.risks.some((r) => r.includes('風')) || a.itinerary.some((i) => i.includes('風')),
    headline: a.headline,
  };
}