/**
 * 大坑步道「季度遊覽策略」
 * 整合中央氣象署的氣候常識（CWB）與在地實務經驗
 * - 不含預報、不含評論、不冒充官方
 * - 數值僅作長期均態參考，請以當日實況為主
 */

export type SeasonKey = 'spring' | 'summer' | 'autumn' | 'winter';

export interface SeasonProfile {
  key: SeasonKey;
  label: string;
  months: string;
  cwbNormal: {
    avgHighC: number;
    avgLowC: number;
    rainyDays: number;
    rainyNote: string;
    visitorsNote: string;
  };
  /** 來自於長期均態觀察的典型風險 */
  risks: { title: string; detail: string }[];
  /** 適宜的步道（無特定商業推薦） */
  bestFor: string[];
  /** 季節建議主題（行程/裝備/觀察重點） */
  suggested: {
    theme: string;
    detail: string;
  }[];
  /** 季節要點 / 給非營利科普網站的客觀提示 */
  visitorPointers: string[];
}

export const seasons: SeasonProfile[] = [
  {
    key: 'spring',
    label: '春季（3–5月）',
    months: '3 月 – 5 月',
    cwbNormal: {
      avgHighC: 27,
      avgLowC: 18,
      rainyDays: 11,
      rainyNote: '春季鋒面與華南雲系較活躍，常有陣雨，建議攜帶雨具。',
      visitorsNote: '連假期間（清明、勞動）人潮偏多，建議提早出發。',
    },
    risks: [
      { title: '濃霧', detail: '清晨至上午山區易起霧，影響能見度，建議帶頭燈。' },
      { title: '梅雨前夕', detail: '5 月常有滯留鋒面過境，山徑濕滑避免走圓木。' },
      { title: '花粉 / 蚊蟲', detail: '溫暖潮濕有利蚊蟲，建議使用防蚊液並穿長袖。' },
    ],
    bestFor: ['林蔭比例較高的路線', '中等難度', '喜愛觀察植物嫩芽與鳥類活動的訪客'],
    suggested: [
      { theme: '輕裝健行', detail: '林蔭與微風適合新手與長輩。' },
      { theme: '生態觀察', detail: '觀察春季新芽與繁殖季鳥類活動。' },
      { theme: '微距攝影', detail: '雨後的蕨類、苔蘚與山徑水的質感細節豐富。' },
    ],
    visitorPointers: [
      '氣溫溫差較大，建議採「洋蔥式」穿法。',
      '連假期間停車場可能提早滿場，建議事前查詢。',
      '若遇降雨，請避免走圓木棧道並評估折返。',
    ],
  },
  {
    key: 'summer',
    label: '夏季（6–8月）',
    months: '6 月 – 8 月',
    cwbNormal: {
      avgHighC: 32,
      avgLowC: 25,
      rainyDays: 13,
      rainyNote: '午後雷陣雨頻繁，常伴隨強陣風與雷擊。',
      visitorsNote: '暑假為全年最高峰，登山口周邊容易塞車。',
    },
    risks: [
      { title: '高溫熱傷害', detail: '中午前後避免長時間曝曬，務必補水與電解質。' },
      { title: '午後雷雨', detail: '午後對流雲系發展快速，建議於中午前下山。' },
      { title: '蛇類出沒', detail: '清晨與夜間較活躍，建議打草驚蛇並使用頭燈。' },
    ],
    bestFor: ['短程路線', '親子親近山林', '有遮蔭或夜間行程'],
    suggested: [
      { theme: '避暑路線', detail: '選擇海拔較高、林蔭比例重的路線。' },
      { theme: '清晨行程', detail: '於日出前後出發避開高溫。' },
      { theme: '夜間觀察', detail: '夏季夜間可觀察夜行性昆蟲與兩棲類。' },
    ],
    visitorPointers: [
      '建議 8:00 前出發、12:00 前下山。',
      '穿淺色寬鬆衣物與遮陽帽。',
      '關注中央氣象署雷雨訊息，及早下撤。',
    ],
  },
  {
    key: 'autumn',
    label: '秋季（10–11月）',
    months: '10 月 – 11 月',
    cwbNormal: {
      avgHighC: 28,
      avgLowC: 19,
      rainyDays: 6,
      rainyNote: '秋高氣爽，降雨減少但東北季風偶有強陣風。',
      visitorsNote: '為舒適度最高的季節，連假仍可能壅塞。',
    },
    risks: [
      { title: '東北季風', detail: '稜線段風勢明顯，需注意保暖並固定帽子。' },
      { title: '步道落葉', detail: '落葉與樹枝會使木階濕滑，請放慢腳步。' },
      { title: '日夜溫差', detail: '清晨山區氣溫偏低，建議攜帶薄外套。' },
    ],
    bestFor: ['全路線', '中高難度挑戰', '景觀型路線'],
    suggested: [
      { theme: '圓木挑戰', detail: '天氣乾燥適合走 2–4 號等挑戰型步道。' },
      { theme: '城市景觀', detail: '稜線段可俯瞰臺中市區能見度高。' },
      { theme: '人文搭配', detail: '結合大坑商圈與在地小吃。' },
    ],
    visitorPointers: [
      '秋季為全年最推薦的季節，但仍需評估體力。',
      '山區早晚偏涼，應採分層穿搭。',
      '颱風季尾聲仍可能受外圍環流影響。',
    ],
  },
  {
    key: 'winter',
    label: '冬季（12–2月）',
    months: '12 月 – 2 月',
    cwbNormal: {
      avgHighC: 22,
      avgLowC: 13,
      rainyDays: 7,
      rainyNote: '東北季風強盛，山區偶有低溫與濃霧。',
      visitorsNote: '非假日人潮較少，動線順暢。',
    },
    risks: [
      { title: '低溫', detail: '清晨及夜間低溫可降至 10°C 以下，注意保暖。' },
      { title: '濃霧', detail: '能見度差，建議結伴與攜帶定位裝置。' },
      { title: '路面濕滑', detail: '露水與低溫易使岩石與木棧濕滑。' },
    ],
    bestFor: ['低難度散步', '無障礙設施商圈', '喜愛清幽的訪客'],
    suggested: [
      { theme: '暖身行程', detail: '挑選短程且有遮蔭的路線起步。' },
      { theme: '裝備升級', detail: '加強保暖、防風與防滑裝備。' },
      { theme: '人文體驗', detail: '結合大坑在地商圈與節慶活動。' },
    ],
    visitorPointers: [
      '冬季非假日動線順暢，適合新手慢慢認識步道。',
      '郊區夜間氣溫偏低，戶外活動應留意心血管負擔。',
      '若有降雨或濃霧，請縮小計畫或選擇平緩替代路線。',
    ],
  },
];

/** 季節一覽表（首頁與 /seasons 頁面共用） */
export const seasonTableColumns = [
  { key: 'weather', label: '氣象重點' },
  { key: 'level', label: '建議路線' },
  { key: 'risks', label: '注意事項' },
  { key: 'outfit', label: '裝備建議' },
];
