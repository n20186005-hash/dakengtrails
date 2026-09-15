/**
 * 大坑步道行程資料
 * - 半日 / 全日
 * - 親子和緩路線
 * - 攝影自然路線
 * - 低體力 / 無障礙路線
 * 以「類型與節奏」呈現，不推薦具體商家、不涉及商業推銷。
 */

export type ItineraryGroup = 'half-day' | 'full-day' | 'family' | 'photography' | 'accessible';

export interface Itinerary {
  slug: ItineraryGroup;
  label: string;
  description: string;
  durationLabel: string;
  trails: string[];
  outline: { time: string; label: string; note?: string }[];
  safetyNotes: string[];
  alternatives?: { label: string; detail: string }[];
  meta?: { label: string; value: string }[];
}

export const itineraries: Itinerary[] = [
  {
    slug: 'half-day',
    label: '半日通用路線',
    description: '適合作為週末輕量安排，總耗時 3–4 小時，包含交通與用餐緩衝。',
    durationLabel: '約 3–4 小時',
    trails: ['9', '9-1'],
    outline: [
      { time: '07:30', label: '集合 / 經補庫停車場', note: '假日建議提前 30 分鐘抵達' },
      { time: '08:00', label: '熱身 + 入口介紹', note: '於登山口做 5 分鐘伸展' },
      { time: '08:15', label: '9 號步道來回', note: '保留彈性可改走 9-1 號' },
      { time: '10:30', label: '結束下山', note: '回停車場前回顧路線' },
      { time: '11:00', label: '山腳商圈 / 豆花 / 補給', note: '用豆花或冰品恢復體力' },
      { time: '12:00', label: '賦歸', note: '評估當日體力決定是否前往下一站' },
    ],
    safetyNotes: [
      '請於行前 24 小時檢視中央氣象署預報與步道通行情形。',
      '若體力透支或氣溫偏高，請於 10:00 前結束。',
      '建議行前留一張行程給緊急聯絡人。',
    ],
    meta: [
      { label: '步行總時', value: '約 1.5–2 小時' },
      { label: '休息緩衝', value: '約 1.5–2 小時' },
      { label: '體能需求', value: '一般 / 入門' },
    ],
  },
  {
    slug: 'full-day',
    label: '全日探索路線',
    description: '針對已具備基本體力者，安排上午挑戰、下午緩坡或商圈巡禮。',
    durationLabel: '約 7–8 小時',
    trails: ['4', '6', '9'],
    outline: [
      { time: '06:30', label: '登山口集合 / 晨間暖身' },
      { time: '07:00', label: '4 號或 6 號步道主行程' },
      { time: '11:30', label: '下山後於商圈用餐' },
      { time: '13:30', label: '9 號 / 9-1 號散步' },
      { time: '15:30', label: '下午茶 / 補給' },
      { time: '16:30', label: '回程或轉往鄰近景點' },
    ],
    safetyNotes: [
      '全日行程需備 1500–2000 ml 飲水。',
      '正午前應完成主要爬升段，避免午後雷雨。',
      '建議兩人以上同行並彼此保留定位。',
    ],
    alternatives: [
      { label: '縮為半日', detail: '若體力下降，可只保留 4 號或 6 號主行程。' },
      { label: '改為親子版', detail: '將 4 號改為 8 號或 9-1 號。' },
    ],
    meta: [
      { label: '步行總時', value: '約 4–5 小時' },
      { label: '休息緩衝', value: '約 3 小時' },
      { label: '體能需求', value: '中等以上' },
    ],
  },
  {
    slug: 'family',
    label: '親子和緩路線',
    description: '6 歲以上兒童可參與的版本，強調林蔭、彈性折返與安全觀察。',
    durationLabel: '約 2–3 小時',
    trails: ['9-1', '8', '9'],
    outline: [
      { time: '08:00', label: '停車 + 補給', note: '上完廁所、補滿飲水' },
      { time: '08:30', label: '9-1 號緩坡', note: '視情況走到稜線即折返' },
      { time: '10:00', label: '山腳豆花 / 茶飲' },
      { time: '11:00', label: '遊戲場或生態小徑' },
      { time: '12:00', label: '回家前午餐' },
    ],
    safetyNotes: [
      '不建議推嬰兒車上階梯步道。',
      '小孩需由成人全程陪同，避免單獨行動。',
      '建議攜帶常備藥品與替換衣物。',
    ],
    meta: [
      { label: '步行總時', value: '約 1–1.5 小時' },
      { label: '體能需求', value: '輕度' },
      { label: '適合年齡', value: '6 歲以上' },
    ],
  },
  {
    slug: 'photography',
    label: '攝影自然路線',
    description: '以自然觀察與攝影為主的行程，建議放慢節奏、保留觀察時間。',
    durationLabel: '約 4–5 小時',
    trails: ['4', '3', '5'],
    outline: [
      { time: '06:00', label: '前往入口', note: '趕日出光線' },
      { time: '06:30', label: '晨霧 / 林相攝影' },
      { time: '09:30', label: '中途休息 + 觀察' },
      { time: '11:30', label: '下山後於商圈用餐' },
      { time: '13:30', label: '視光線轉往鄰近景點' },
    ],
    safetyNotes: [
      '建議攜帶備用電池、記憶卡與防水袋。',
      '鏡頭與腳架易增加負重，請評估體力。',
      '為保護生態與其他訪客，請勿進入封閉區或採集標本。',
    ],
    alternatives: [
      { label: '雨天版', detail: '可改拍雨珠、林相或室內人文題材。' },
      { label: '夜間版', detail: '部分路段適合夜拍星空，請評估安全。' },
    ],
    meta: [
      { label: '步行總時', value: '約 3 小時' },
      { label: '體能需求', value: '中等' },
    ],
  },
  {
    slug: 'accessible',
    label: '低體力 / 無障礙路線',
    description: '行動不便者、長輩或體力受限者的低強度安排，盡量避開階梯。',
    durationLabel: '約 1.5–2.5 小時',
    trails: ['9-1', '商圈步道'],
    outline: [
      { time: '09:30', label: '經補庫停車 / 補給' },
      { time: '10:00', label: '緩坡段來回' },
      { time: '11:30', label: '山腳商圈散步' },
      { time: '12:30', label: '午餐 / 賦歸' },
    ],
    safetyNotes: [
      '若需無障礙廁所，請事先確認公廁開放時間。',
      '建議備輪椅或助行器輪胎用防滑墊。',
      '與親友保持聯絡，避免走進無通訊訊號區段。',
    ],
    alternatives: [
      { label: '雨天替代', detail: '可改為商圈與室內場館巡禮。' },
    ],
    meta: [
      { label: '步行總時', value: '約 1 小時以內' },
      { label: '體能需求', value: '極低' },
    ],
  },
];

/** 全域標籤 */
export const itineraryCategoryBlurbs: Record<ItineraryGroup, string> = {
  'half-day': '週末輕量：3–4 小時搞定交通與健行。',
  'full-day': '挑戰型：完整一日，含兩段不同難度步道。',
  family: '親子友善：林蔭、彈性、短步道。',
  photography: '攝影友善：放慢節奏、保留光線觀察時間。',
  accessible: '低體力：階梯少、補給密集、可彈性縮短。',
};
