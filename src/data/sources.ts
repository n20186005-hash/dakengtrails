/**
 * 圖片與資料來源清單，集中管理避免分散
 * 包含 5 張 Wikimedia Commons 授權照片以及官方與 Google 主要資料來源
 */

export type PhotoCredit = {
  file: string;
  alt: string;
  original: string;
  url: string;
};

export const photos: PhotoCredit[] = [
  {
    file: 'dakeng-1.jpg',
    alt: '大坑登山步道入口',
    original: 'Dakeng Hiking Trail 大坑登山步道 - panoramio.jpg',
    url: 'https://commons.wikimedia.org/wiki/File:Dakeng_Hiking_Trail_%E5%A4%A7%E5%9D%91%E7%99%BB%E5%B1%B1%E6%AD%A5%E9%81%93_-_panoramio.jpg',
  },
  {
    file: 'dakeng-2.jpg',
    alt: '大坑林蔭階梯',
    original: '大坑步道 Dakeng Hiking Trail - panoramio.jpg',
    url: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%9D%91%E6%AD%A5%E9%81%93_Dakeng_Hiking_Trail_-_panoramio.jpg',
  },
  {
    file: 'dakeng-3.jpg',
    alt: '大坑山林景觀',
    original: '大坑登山步道 Dakeng Hiking Trail - panoramio.jpg',
    url: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%9D%91%E7%99%BB%E5%B1%B1%E6%AD%A5%E9%81%93_Dakeng_Hiking_Trail_-_panoramio.jpg',
  },
  {
    file: 'dakeng-4.jpg',
    alt: '大坑木棧階梯與健行者',
    original: '大坑登山步道 Dakeng Hiking Trail - panoramio (1).jpg',
    url: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%9D%91%E7%99%BB%E5%B1%B1%E6%AD%A5%E9%81%93_Dakeng_Hiking_Trail_-_panoramio_(1).jpg',
  },
  {
    file: 'dakeng-5.jpg',
    alt: '大坑林間木棧與岩石',
    original: '大坑登山步道 Dakeng Hiking Trail - panoramio (2).jpg',
    url: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%9D%91%E7%99%BB%E5%B1%B1%E6%AD%A5%E9%81%93_Dakeng_Hiking_Trail_-_panoramio_(2).jpg',
  },
];

export type SourceLink = {
  title: string;
  href: string;
  description: string;
  /** 同步時間，若來自開放資料或會更新欄位 */
  syncedAt?: string;
  category: 'photo' | 'official' | 'reviews' | 'transit' | 'tourism' | 'map-doc';
};

export const dataSources: SourceLink[] = [
  {
    title: '大坑步道通行情形',
    href: 'https://www.scenic.taichung.gov.tw/833821/833844/833845/3040068',
    description: '各步道最新施工、管制與天候限制公告。',
    category: 'official',
  },
  {
    title: '大坑風景區',
    href: 'https://travel.taichung.gov.tw/zh-tw/attractions/intro/419',
    description: '臺中觀光旅遊網景點介紹與周邊資訊。',
    category: 'tourism',
  },
  {
    title: '前往大坑1號步道體訓場交通資訊',
    href: 'https://www.scenic.taichung.gov.tw/833821/833822/833823/3280090',
    description: '官方整理的停車方式與交通建議。',
    category: 'official',
  },
  {
    title: 'Google Maps 大坑風景區',
    href: 'https://maps.app.goo.gl/RwLZQ2ZR7biqjuJN7',
    description: '景點位置、評分與使用者評價原始來源。',
    syncedAt: '2026 年 9 月',
    category: 'reviews',
  },
  {
    title: 'Google Maps URLs 開發者文件',
    href: 'https://developers.google.com/maps/documentation/urls/get-started',
    description: '地點查詢與路線規劃 URL 結構官方說明。',
    category: 'map-doc',
  },
];
