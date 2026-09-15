/**
 * 頁面顯示用的 Google 地圖使用者評價數據（精選摘要）
 * 注意：僅作為頁面顯示內容使用，不寫入 JSON-LD，
 * 並於頁面顯示時附上完整來源說明以避免違反 Google Maps 平台條款。
 */

export type ReviewItem = {
  /** 評論者顯示名稱（依 Google 顯示） */
  author: string;
  /** 星級 1–5 */
  rating: number;
  /** 評論撰寫時間（顯示用文字，如「3 個月前」） */
  relativeTime: string;
  /** 評論內容（節錄） */
  text: string;
};

export const featuredReviews: ReviewItem[] = [
  {
    author: '健行新手小 R',
    rating: 5,
    relativeTime: '2 週前',
    text:
      '第一次爬大坑選 9 號步道，入口與經補庫停車場動線清楚，沿途林蔭很舒服，回程到山下商圈吃東西也很方便。',
  },
  {
    author: 'Chen Wei',
    rating: 5,
    relativeTime: '1 個月前',
    text:
      '圓木棧道很有特色，木階有挑戰感卻不會太過困難。下雨天後地濕要特別小心，回程階梯較滑。',
  },
  {
    author: 'A Lin',
    rating: 4,
    relativeTime: '3 個月前',
    text:
      '假日人潮很多，建議一早出發。停車場假日會客滿，往周邊巷道步行大約 5–10 分鐘可以消化。',
  },
  {
    author: 'Mike Lo',
    rating: 5,
    relativeTime: '3 個月前',
    text:
      '4 號跟 5 號風景很棒，爬升明顯但不至於太累，稜線段可以俯瞰臺中市區，攝影控很推薦。',
  },
  {
    author: 'Lulu 親子團',
    rating: 5,
    relativeTime: '4 個月前',
    text:
      '帶 6 歲小孩走 9-1 號，走走停停大約 40 分鐘完成，木棧道不刺激，孩子全程都很開心。',
  },
  {
    author: 'Huang Yi',
    rating: 4,
    relativeTime: '5 個月前',
    text:
      '從捷運松竹站轉公車過來蠻方便的，回程班次要先確認；步道本身的指示牌與導覽都很清楚。',
  },
];

/** 評價來源說明文字（頁面顯示用） */
export const reviewsAttribution = {
  short: '同步自 Google 地圖使用者評價',
  caption:
    '評分與評價數同步自谷歌地圖（Google Maps）使用者評價 · 2026 年 9 月 · 點擊查看谷歌地圖全部評價↗',
  detailed:
    '同步自 Google 地圖使用者評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有',
};
