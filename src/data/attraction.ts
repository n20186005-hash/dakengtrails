/**
 * 大坑風景區官方實體資料（單一真實來源）
 * 用於全站 SEO 結構化資料與頁面顯示；評價僅用於頁面顯示，不寫入 JSON-LD。
 */

export type AttractionRating = {
  /** Google 地圖使用者評分（5 分制） */
  score: number;
  /** Google 地圖總評論數 */
  reviewCount: number;
  /** 數據同步時間顯示字串，如「2026 年 9 月」 */
  syncedAt: string;
  /** 同步時間 ISO 字串 */
  syncedAtIso: string;
};

export type Attraction = {
  fullName: string;
  shortName: string;
  domain: string;
  city: string;
  district: string;
  state: string;
  country: string;
  countryCode: string;
  postalCode: string;
  streetAddress: string;
  phone: string;
  plusCode: string;
  latitude: number;
  longitude: number;
  googleMapsShareUrl: string;
  googleMapsEmbedSrc: string;
  officialTourismUrl: string;
  heroImage: string;
  images: string[];
  /** 景點對應的 Google 評分資料（只作頁面顯示用，不寫入 JSON-LD） */
  rating: AttractionRating;
  nearbyLandmarks: string[];
};

const DOMAIN = 'dakengtrails.com';
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/RwLZQ2ZR7biqjuJN7';
const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=%E5%A4%A7%E5%9D%91%E9%A2%A8%E6%99%AF%E5%8D%80&output=embed';

export const attraction: Attraction = {
  fullName: '大坑風景區',
  shortName: 'Dakeng Trails',
  domain: DOMAIN,
  city: '臺中市',
  district: '北屯區',
  state: '臺中市',
  country: '臺灣',
  countryCode: 'TW',
  postalCode: '406',
  streetAddress: '東山路一段383巷',
  phone: '+886422289111',
  plusCode: '5PJM+3F 北屯區 台灣臺中市',
  latitude: 24.180193,
  longitude: 120.733698,
  googleMapsShareUrl: MAPS_SHARE_URL,
  googleMapsEmbedSrc: MAPS_EMBED_SRC,
  officialTourismUrl: 'https://travel.taichung.gov.tw/zh-tw/attractions/intro/419',
  heroImage: 'https://dakengtrails.com/images/trails/dakeng-4.jpg',
  images: [
    'https://dakengtrails.com/images/trails/dakeng-1.jpg',
    'https://dakengtrails.com/images/trails/dakeng-2.jpg',
    'https://dakengtrails.com/images/trails/dakeng-3.jpg',
    'https://dakengtrails.com/images/trails/dakeng-4.jpg',
    'https://dakengtrails.com/images/trails/dakeng-5.jpg',
  ],
  /**
   * 頁面顯示用評分（同步自 Google 地圖使用者評價）
   * 禁止寫入 JSON-LD，避免冒充官方評分造成違反 Google 政策。
   * 同步時間：2026 年 9 月。
   */
  rating: {
    score: 4.5,
    reviewCount: 6058,
    syncedAt: '2026 年 9 月',
    syncedAtIso: '2026-09-15',
  },
  nearbyLandmarks: ['頭嵙山', '經補庫停車場', '大坑商圈'],
};

/** 全站統一抓取地址物件，給結構化資料使用。 */
export const attractionPostalAddress = {
  '@type': 'PostalAddress',
  streetAddress: `臺中市${attraction.district}${attraction.streetAddress}`,
  addressLocality: attraction.city,
  addressRegion: attraction.state,
  postalCode: attraction.postalCode,
  addressCountry: attraction.countryCode,
};

export const attractionGeo = {
  '@type': 'GeoCoordinates',
  latitude: attraction.latitude,
  longitude: attraction.longitude,
};

export const attractionSiteUrl = `https://${attraction.domain}/`;

/**
 * TouristAttraction schema：完整版（包含 @id 與 image 陣列），
 * 給首頁與涉及本實體的權威頁面使用。
 */
export const touristAttractionSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  '@id': `${attractionSiteUrl}#attraction`,
  name: attraction.fullName,
  alternateName: [attraction.shortName, `${attraction.city}${attraction.fullName}`, 'Dakeng Scenic Area'],
  description: `${attraction.fullName}位於${attraction.city}${attraction.district}，是${attraction.country}最具代表性的郊山步道群之一，共14條登山路線，適合親子、新手與挑戰型健行者；本站整理難度、入口、停車與大眾運輸等資料。`,
  url: attractionSiteUrl,
  image: attraction.images,
  isAccessibleForFree: true,
  address: attractionPostalAddress,
  geo: attractionGeo,
  hasMap: attraction.googleMapsShareUrl,
  telephone: attraction.phone,
  sameAs: [attraction.googleMapsShareUrl, attraction.officialTourismUrl],
};

/**
 * Google 地圖相關連結集合：頁面顯示用以及對外導引用。
 * 重要：所有 Google Maps 連結都會保留，不進 JSON-LD 評價。
 */
export const googleMapsLinks = {
  share: attraction.googleMapsShareUrl,
  embed: attraction.googleMapsEmbedSrc,
  allReviews: attraction.googleMapsShareUrl,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    attraction.fullName,
  )}`,
};
