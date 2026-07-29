[![登山步道－台中观光旅游网 Taichung Tourism](https://tse2.mm.bing.net/th/id/OIP.us-FCZFcYM2tAcuHotg1bgHaFj?r=0\&pid=Api)](https://travel.taichung.gov.tw/zh-cn/experience/hikingtrail?utm_source=chatgpt.com)

# dakengtrails.com 完整建站建議

## 一、網站核心定位

**dakengtrails.com 不應只是一個「大坑風景區介紹站」，而應做成大坑步道的選擇、比較與導航工具。**

大坑風景區的特殊之處，在於它不是單一入口、單一路線的景點，而是由1號至11號，以及3-1、5-1、9-1等共14條步道組成。不同步道的入口、難度、路面、停車方式和適合客群差異很大。([台中市旅游局][1])

網站首先要解決遊客的實際問題：

1. 第一次去大坑，應該走哪一條？
2. 哪條適合親子、長輩或登山新手？
3. 哪條有經典圓木棧道？
4. 哪個停車場距離入口最近？
5. Google Maps 應該導航到哪個地點？
6. 可以如何組合兩條步道？
7. 出發前應該注意什麼？

因此建議定位為：

> **台中大坑14條步道的比較、停車、交通與 Google Maps 導航指南**

---

# 二、品牌設定

## 網站名稱

### 主品牌

**Dakeng Trails**

### 中文名稱

**大坑步道指南**

網站Header可以呈現為：

```text
Dakeng Trails
大坑步道指南
```

## 品牌標語

首選：

> **選對步道，找到入口，直接出發。**

其他可用版本：

* 14條大坑步道，一次比較
* 從親子散步到圓木挑戰
* 大坑步道、停車與導航一次搞懂
* 找到適合你的大坑登山路線

## 網域設定

主網域固定使用：

```text
https://dakengtrails.com
```

建議：

* `dakengtrails.com` 作為唯一Canonical網域；
* `www.dakengtrails.com` 301轉址至主網域；
* 網站標題保留英文品牌，內容全面使用繁體中文；
* HTML語言設定為 `zh-Hant-TW`；
* URL使用簡短英文，不使用中文網址。

---

# 三、目標客群

## 1. 第一次來大坑的遊客

主要搜尋：

* 大坑步道推薦
* 大坑第一次走哪條
* 大坑步道哪一條最簡單
* 大坑步道怎麼選
* 大坑9號步道好走嗎

這群人是網站最重要的流量入口。

## 2. 親子與長輩同行

他們更關心：

* 有沒有廁所；
* 坡度是否太陡；
* 是否需要攀爬；
* 圓木間距是否太大；
* 能否中途折返；
* 停車場離入口多遠；
* 是否有遮蔭和休息亭。

## 3. 台中本地健行者

主要需求：

* 兩小時內可以走完的路線；
* 週末臨時健走；
* 不同步道組合；
* 騎機車或開車如何前往；
* 走完去哪裡吃飯。

## 4. 外地旅客

主要需求：

* 從台中車站、捷運松竹站如何前往；
* 半日遊或一日遊安排；
* 大坑步道加溫泉、餐廳、新社景點；
* 沒有開車是否方便。

## 5. 健腳與登山愛好者

主要需求：

* 圓木棧道；
* 總爬升；
* 稜線景觀；
* 路線組合；
* 頭嵙山；
* 挑戰難度；
* 原路折返或O形路線。

---

# 四、網站的核心差異化

官方網站主要提供各步道資料和公告；部落格文章通常只介紹其中一條步道。dakengtrails.com 應該補上官方與一般文章之間缺少的「決策層」。

## 網站應有的四個核心工具

### 1. 步道快速選擇器

讓遊客按照條件篩選：

```text
同行者
□ 一個人
□ 情侶朋友
□ 帶小孩
□ 帶長輩

可用時間
□ 1小時內
□ 1至2小時
□ 2至4小時
□ 半天以上

想要的體驗
□ 輕鬆散步
□ 圓木棧道
□ 城市景觀
□ 山林步道
□ 挑戰路線

交通方式
□ 開車
□ 機車
□ 大眾運輸
```

不需要資料庫，使用原生JavaScript在瀏覽器端過濾靜態資料即可。

### 2. 14條步道比較表

必須讓遊客在同一頁比較，而不是逐頁打開。

建議欄位：

| 欄位    | 說明            |
| ----- | ------------- |
| 步道    | 1號、2號、3-1號等   |
| 難度    | 親子、入門、進階、挑戰   |
| 距離    | 公里            |
| 建議時間  | 以區間呈現         |
| 海拔範圍  | 最低至最高         |
| 主要路面  | 階梯、產業道路、圓木    |
| 遮蔭    | 少、中等、多        |
| 親子適合度 | 1至5           |
| 景觀    | 城市、山林、稜線      |
| 停車便利度 | 1至5           |
| 大眾運輸  | 是否方便          |
| 導航    | Google Maps按鈕 |

手機版不要硬塞大型表格，應改成可展開的比較卡片。

### 3. 正確入口與停車導航

每條步道至少建立三個Google Maps操作：

* 開啟步道地點；
* 導航至登山口；
* 導航至建議停車場。

### 4. 情境式行程推薦

例如：

* 第一次來大坑；
* 帶小孩半日遊；
* 長輩輕鬆健走；
* 圓木棧道體驗；
* 兩小時快速健行；
* 大坑健行加溫泉；
* 大坑步道加新社一日遊。

---

# 五、網站資訊架構

## 主選單

```text
首頁
步道總覽
步道比較
路線推薦
地圖導航
停車交通
行前準備
周邊玩法
```

右側主要按鈕：

```text
選擇步道
```

## 完整URL結構

```text
/
/trails/
/trails/1/
/trails/2/
/trails/3/
/trails/3-1/
/trails/4/
/trails/5/
/trails/5-1/
/trails/6/
/trails/7/
/trails/8/
/trails/9/
/trails/9-1/
/trails/10/
/trails/11/

/compare/
/map/
/parking/
/transport/

/routes/
/routes/first-time/
/routes/family/
/routes/seniors/
/routes/beginner/
/routes/log-stairs/
/routes/challenge/
/routes/two-hours/
/routes/half-day/
/routes/one-day/

/guides/
/guides/what-to-bring/
/guides/rainy-day/
/guides/summer-hiking/
/guides/log-stairs-safety/
/guides/hiking-with-children/

/nearby/
/nearby/food/
/nearby/hot-springs/
/nearby/attractions/

/faq/
/about/
/editorial-policy/
/privacy/
```

---

# 六、首頁完整結構

## 1. 頂部提醒列

不要顯示具體核對時間，也不要把某條步道的開放狀態永久寫死。

建議文字：

> 步道可能因施工、豪雨或現場狀況臨時管制，出發前請查看官方通行情形與現場告示。

官方會依施工與天候更新各步道通行狀態，也曾因強風豪雨預警性封閉整個步道群，因此網站應提供官方公告入口，而不是把即時狀態當成永久內容。([台中风景网][2])

按鈕：

```text
查看官方通行情形
```

## 2. Hero首屏

### H1

```text
大坑步道怎麼選？
```

### 副標題

```text
比較台中大坑14條步道的難度、時間、入口與停車方式，
找到適合你的路線，再用 Google Maps 直接導航。
```

### CTA

```text
選擇適合我的步道
查看14條步道
```

### Hero圖片

使用：

* 大坑代表性圓木棧道；
* 畫面中有人健行，但人物不要過大；
* 能看出林地、坡度與步道特色；
* 不使用普通森林素材；
* 桌面比例約16:9；
* 手機使用4:5獨立裁切版本。

## 3. 快速選擇器

首頁首屏後立即呈現：

```text
你和誰一起走？
想走多久？
想要什麼體驗？
如何前往？
```

結果顯示三條推薦路線，每張卡片附：

* 推薦原因；
* 難度；
* 建議時間；
* 主要特色；
* 查看攻略；
* Google Maps導航。

## 4. 第一次來怎麼選

建議分類：

| 使用情境   | 優先介紹        |
| ------ | ----------- |
| 第一次到大坑 | 9號、9-1號     |
| 親子健走   | 6號、7號、8號、9號 |
| 經典圓木體驗 | 1號至4號相關路線   |
| 山景與挑戰  | 4號及高地路線     |
| 輕鬆短程   | 8號、9-1號     |
| 半日健行   | 可組合的相鄰步道    |

官方資料將9號及9-1號描述為適合全家大小健走，且入口與經補庫停車場關係清楚，非常適合作為第一次造訪大坑的主力內容。([台中市旅游局][3])

## 5. 步道比較區

首頁只顯示精簡比較：

* 最簡單；
* 最適合親子；
* 最具代表性；
* 最有挑戰；
* 大眾運輸最方便。

提供按鈕：

```text
查看完整步道比較
```

## 6. Google Maps導航區

呈現一張大坑區域Google Maps嵌入地圖，下方列出常用目的地：

* 大坑風景區；
* 大坑9號步道；
* 經補庫停車場；
* 各步道登山口；
* 主要公車站。

醒目提醒：

> 大坑各條步道入口不同，請導航至具體步道或停車場，不要只導航「大坑風景區」。

## 7. 路線行程

首頁顯示三套代表性行程：

### 輕鬆兩小時

```text
停車或下車
→ 短程步道
→ 觀景休息
→ 返回市集或周邊用餐
```

### 親子半日

```text
親子級步道
→ 公園或地震教育景點
→ 大坑在地美食
```

### 挑戰半日

```text
進階步道
→ 稜線或山頂
→ 原路或組合路線返回
→ 溫泉或景觀餐廳
```

## 8. 行前準備

使用圖示卡片呈現：

* 防滑鞋；
* 飲用水；
* 防曬與防蚊；
* 雨後圓木濕滑；
* 不驚擾野生動物；
* 下載離線資訊；
* 確認回程時間；
* 以現場管制為準。

## 9. 周邊玩法

建議顯示：

* 大坑美食；
* 農夫市集；
* 溫泉；
* 地震公園；
* 生態園區；
* 新社順遊；
* 親子景點；
* 景觀餐廳。

## 10. FAQ

首頁優先回答：

* 大坑步道哪一條最簡單？
* 第一次去大坑走哪一條？
* 大坑步道需要門票嗎？
* 大坑步道可以帶小孩嗎？
* 哪條步道有圓木棧道？
* 大坑步道停車方便嗎？
* 沒有開車怎麼去？
* 下雨後適合走嗎？

---

# 七、步道總覽頁

URL：

```text
/trails/
```

## 頁面功能

### 上方篩選

* 難度；
* 所需時間；
* 同行者；
* 路面類型；
* 景觀類型；
* 停車便利度；
* 大眾運輸；
* 是否包含圓木棧道。

### 排序

* 最適合新手；
* 距離最短；
* 時間最短；
* 停車最方便；
* 挑戰度最高。

### 卡片資料

```text
大坑9號步道
親子級
約1.6公里
適合：新手、親子、朋友
特色：綠蔭、城市景觀、交通方便
```

每張卡片只能有兩個主要按鈕：

```text
查看完整攻略
Google Maps導航
```

---

# 八、單條步道頁面

以 `/trails/9/` 為例。

## 頁首資訊

```text
大坑9號步道

適合第一次造訪大坑、親子與一般健行者的入門路線
```

資訊摘要：

```text
難度
距離
建議時間
海拔範圍
路線類型
主要路面
適合對象
交通便利度
```

## 內容順序

### 1. 這條步道適合誰

直接給結論，不要先寫歷史背景。

### 2. 為什麼選這條

列出最有辨識度的三個理由。

### 3. 路線會經過什麼

按照實際順序描述：

```text
登山口
→ 前段路面
→ 主要爬升
→ 觀景點
→ 折返或銜接點
```

### 4. 難度與體力要求

不能只寫官方級別，還應解釋：

* 是否連續爬升；
* 是否有高低落差；
* 圓木間距；
* 是否曝曬；
* 雨後風險；
* 膝蓋負擔。

### 5. 登山口在哪裡

提供：

* 地點名稱；
* Google Maps；
* 從停車場步行方向；
* 容易走錯的岔路；
* 入口照片。

### 6. 停車

分成：

* 建議停車場；
* 備用停車方式；
* 停車後步行距離；
* 假日注意事項；
* 禁止違停提醒。

### 7. 大眾運輸

提供：

* 從台鐵站出發；
* 從捷運站出發；
* 下車站名；
* 下車後如何步行；
* 回程注意事項。

官方交通資料提到可從捷運與台鐵松竹站一帶轉乘公車前往多條大坑步道，也可先到經補庫停車場再轉乘，因此網站可以把「松竹站—大坑」做成獨立交通主題頁。([台中风景网][4])

### 8. Google Maps

一個頁面只嵌入一張主要地圖，其他地點使用按鈕，避免載入過多iframe。

### 9. 建議行程

例如：

* 單走；
* 原路折返；
* 與相鄰步道組合；
* 健行後周邊行程。

### 10. 常見問題

每條步道建立獨立FAQ，避免所有頁面複製相同答案。

### 11. 相關步道

例如：

```text
比這條更簡單
難度相近
比這條更有挑戰
附近可銜接
```

---

# 九、Google Maps實作方式

## 不需要Google Maps JavaScript API

這個網站沒有即時定位、車隊調度或自訂地圖資料需求，因此不必建立複雜地圖系統。

推薦使用：

1. Google Maps URLs；
2. Google Maps嵌入地圖；
3. 每個景點的Place ID；
4. Google Maps導航按鈕。

Google Maps URLs可跨手機與桌面開啟搜尋、路線和地圖，不需要API Key；所有網址都應包含 `api=1`。針對具體景點，加入Place ID能更準確地開啟正確地點。([Google for Developers][5])

## 每條步道保存的地圖資料

```yaml
googleMaps:
  placeUrl: ""
  directionsUrl: ""
  parkingUrl: ""
  busStopUrl: ""
  embedUrl: ""
  placeId: ""
```

## 搜尋網址格式

```text
https://www.google.com/maps/search/?api=1&query=大坑9號登山步道
```

## 導航網址格式

```text
https://www.google.com/maps/dir/?api=1&destination=大坑9號登山步道&travelmode=driving
```

更推薦正式資料使用：

```text
https://www.google.com/maps/dir/?api=1
&destination=大坑9號登山步道
&destination_place_id=PLACE_ID
&travelmode=driving
```

## 手機底部固定按鈕

```text
步道入口
停車場
路線比較
```

## Google Maps內容使用原則

Google Maps只用於：

* 官方地圖嵌入；
* 導航連結；
* 地點開啟；
* 使用者自行查看評分與評論。

不要：

* 批次抓取Google Maps評論；
* 下載Google Maps使用者相片重新刊登；
* 把地圖截圖當作自製地圖；
* 將Google評分與評論數永久寫死；
* 移除Google地圖的品牌與標示。

Google Maps Platform條款對內容擷取、重製和標示都有使用限制，因此網站的照片、路線描述與比較資料應建立自己的獨立內容價值。([Google Cloud][6])

---

# 十、內容資料模型

建議使用四個Astro Content Collections：

```text
trails
routes
guides
places
```

Astro目前可透過 `src/content.config.ts` 定義Collection，使用 `glob()` 載入本機Markdown或MDX，再用Zod Schema驗證欄位，適合這種無資料庫的內容站。([Astro 文档][7])

## 目錄

```text
src/
├── content/
│   ├── trails/
│   ├── routes/
│   ├── guides/
│   └── places/
└── content.config.ts
```

## `src/content.config.ts`

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const trails = defineCollection({
  loader: glob({
    base: './src/content/trails',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    routeNumber: z.string(),
    description: z.string(),

    difficulty: z.enum([
      '親子',
      '入門',
      '中等',
      '進階',
      '挑戰',
    ]),

    distanceKm: z.number().positive(),
    duration: z.object({
      min: z.number().int().positive(),
      max: z.number().int().positive(),
    }),

    elevation: z.object({
      min: z.number().int().nonnegative(),
      max: z.number().int().positive(),
    }),

    routeTypes: z.array(z.string()),
    suitableFor: z.array(z.string()),
    features: z.array(z.string()),
    surfaces: z.array(z.string()),

    shade: z.enum(['少', '中等', '多']),
    parkingScore: z.number().min(1).max(5),
    transitScore: z.number().min(1).max(5),
    familyScore: z.number().min(1).max(5),

    facilities: z.object({
      restroom: z.boolean(),
      parking: z.boolean(),
      publicTransport: z.boolean(),
      foodNearby: z.boolean(),
    }),

    googleMaps: z.object({
      placeUrl: z.string().url(),
      directionsUrl: z.string().url(),
      parkingUrl: z.string().url().optional(),
      busStopUrl: z.string().url().optional(),
      embedUrl: z.string().url().optional(),
      placeId: z.string().optional(),
    }),

    relatedTrails: z.array(z.string()).default([]),

    heroImage: z.string(),
    heroAlt: z.string(),

    seoTitle: z.string(),
    seoDescription: z.string(),

    draft: z.boolean().default(false),
  }),
});

const routes = defineCollection({
  loader: glob({
    base: './src/content/routes',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audience: z.array(z.string()),
    durationMinutes: z.number().int().positive(),
    trailIds: z.array(z.string()),
    heroImage: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({
    base: './src/content/guides',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    heroImage: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    draft: z.boolean().default(false),
  }),
});

const places = defineCollection({
  loader: glob({
    base: './src/content/places',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    placeType: z.enum([
      '停車場',
      '公車站',
      '景點',
      '美食',
      '溫泉',
    ]),
    description: z.string(),
    googleMapsUrl: z.string().url(),
    relatedTrails: z.array(z.string()).default([]),
  }),
});

export const collections = {
  trails,
  routes,
  guides,
  places,
};
```

## 單條步道MDX範例

```mdx
---
title: "大坑9號步道"
routeNumber: "9"
description: "適合第一次造訪大坑、親子與一般健行者的入門步道。"

difficulty: "親子"
distanceKm: 1.6

duration:
  min: 50
  max: 100

elevation:
  min: 170
  max: 320

routeTypes:
  - "往返"
  - "可組合"

suitableFor:
  - "第一次造訪"
  - "親子"
  - "登山新手"
  - "朋友同行"

features:
  - "城市景觀"
  - "林蔭"
  - "觀景點"
  - "交通方便"

surfaces:
  - "階梯"
  - "一般步道"
  - "木棧道"

shade: "多"
parkingScore: 4
transitScore: 5
familyScore: 5

facilities:
  restroom: true
  parking: true
  publicTransport: true
  foodNearby: true

googleMaps:
  placeUrl: "https://..."
  directionsUrl: "https://..."
  parkingUrl: "https://..."
  embedUrl: "https://..."
  placeId: ""

relatedTrails:
  - "9-1"
  - "10"

heroImage: "/images/trails/trail-9/hero.webp"
heroAlt: "大坑9號步道林蔭與階梯"

seoTitle: "大坑9號步道攻略｜難度、停車、交通與Google Maps導航"
seoDescription: "整理大坑9號步道難度、距離、入口、停車場、大眾運輸及Google Maps導航。"

draft: false
---

## 適合哪些人？

這條步道適合……
```

## 不建議建立的欄位

```yaml
googleRating:
googleReviewCount:
liveCrowdLevel:
liveParkingSpaces:
lastCheckedAt:
fixedOpenStatus:
```

理由是這些資料容易失效，且不符合目前的純靜態維護方式。

---

# 十一、Astro專案結構

```text
dakengtrails/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── _headers
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── TrailCard.astro
│   │   ├── TrailFilter.astro
│   │   ├── TrailComparison.astro
│   │   ├── TrailFacts.astro
│   │   ├── GoogleMap.astro
│   │   ├── DirectionButtons.astro
│   │   ├── RouteTimeline.astro
│   │   ├── SafetyNotice.astro
│   │   ├── FAQ.astro
│   │   ├── Breadcrumbs.astro
│   │   └── StructuredData.astro
│   ├── content/
│   │   ├── trails/
│   │   ├── routes/
│   │   ├── guides/
│   │   └── places/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── TrailLayout.astro
│   │   ├── RouteLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   ├── scripts/
│   │   └── trail-filter.ts
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 十二、安裝與技術設定

Astro適合內容型網站，預設能以較少客戶端JavaScript輸出頁面，符合這個以SEO、Markdown內容與載入速度為主的景點站。([Astro 文档][8])

## 建立專案

```bash
pnpm create astro@latest dakengtrails
cd dakengtrails

pnpm astro add mdx
pnpm astro add sitemap
pnpm astro add tailwind
```

Astro目前建議以Tailwind CSS 4的Vite Plugin接入，而不是使用舊的 `@astrojs/tailwind` 整合。([Astro 文档][9])

## `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dakengtrails.com',
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
```

這是純靜態網站，不需要安裝 `@astrojs/cloudflare`。Astro官方文件也說明，Cloudflare Adapter主要供按需渲染、Actions和Sessions等動態功能使用，純靜態站不需要Adapter。([Astro 文档][10])

## `package.json`

```json
{
  "name": "dakengtrails",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "packageManager": "pnpm@10"
}
```

正式專案應將 `packageManager` 改為你本機實際使用的pnpm完整版本。

---

# 十三、Tailwind與系統字體

## `src/styles/global.css`

```css
@import "tailwindcss";

:root {
  --color-forest: #173f35;
  --color-moss: #657560;
  --color-wood: #a87145;
  --color-earth: #72543d;
  --color-paper: #f5f1e8;
  --color-cream: #fcfaf5;
  --color-ink: #202b27;
  --color-muted: #65706b;
  --color-warning: #a54c39;

  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang TC",
    "Noto Sans TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;

  color: var(--color-ink);
  background: var(--color-paper);
}

html {
  scroll-behavior: smooth;
  background: var(--color-paper);
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-paper);
  text-rendering: optimizeLegibility;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}
```

雖然字體列表中可以保留 `Noto Sans TC` 作為使用者系統已安裝時的Fallback，但不要從Google Fonts或其他CDN載入。

---

# 十四、視覺設計方向

## 核心風格

> **台灣郊山導覽系統＋現代旅遊編輯設計**

不要做成：

* 旅行社網站；
* 政府入口網站；
* 大量玻璃擬態；
* 過度漸層；
* 滿版綠色；
* 戶外用品電商。

## 配色

| 用途   | 色碼        |
| ---- | --------- |
| 深森林綠 | `#173F35` |
| 苔蘚綠  | `#657560` |
| 相思木棕 | `#A87145` |
| 暖米白  | `#F5F1E8` |
| 淺紙白  | `#FCFAF5` |
| 深灰綠  | `#202B27` |
| 警示磚紅 | `#A54C39` |

## 路線難度色彩

不要只靠顏色表達，同時顯示文字和圖示。

```text
親子：圓點＋親子
入門：一個山峰＋入門
中等：兩個山峰＋中等
進階：三個山峰＋進階
挑戰：陡坡圖示＋挑戰
```

## Logo方向

建議元素：

* 英文字母 `D` 或 `DT`；
* 等高線；
* 圓木階梯；
* 山稜；
* 路徑箭頭。

不要直接使用大坑風景區官方標誌。

---

# 十五、圖片規格

## 圖片來源

優先順序：

1. 自行拍攝；
2. 取得授權的在地攝影；
3. 官方開放授權素材；
4. 合法圖庫；
5. 原創插畫或資訊圖。

不要下載Google Maps使用者上傳照片作為網站圖片。

## 建議尺寸

| 用途     | 比例       |
| ------ | -------- |
| 首頁Hero | 16:9     |
| 手機Hero | 4:5      |
| 步道卡片   | 4:3      |
| 文章封面   | 16:9     |
| OG圖片   | 1200×630 |
| 步道入口   | 3:2      |
| 路線重點   | 4:3      |

## 圖片內容清單

每條步道至少準備：

* 登山口；
* 主要路面；
* 最困難路段；
* 代表性景觀；
* 觀景點；
* 岔路或轉折；
* 停車場；
* 公車下車點。

這些圖片比單純風景照更能解決使用者問題。

---

# 十六、SEO架構

## 首頁

### Title

```text
大坑步道指南｜14條步道難度、停車、交通與Google Maps導航
```

### Description

```text
整理台中大坑14條登山步道的難度、距離、建議時間、入口、停車與大眾運輸，快速選擇適合你的路線並開啟Google Maps導航。
```

### H1

```text
大坑步道怎麼選？
```

## 步道總覽

```text
大坑步道總覽｜14條路線特色、難度與時間比較
```

## 比較頁

```text
大坑步道難度比較｜親子、新手與挑戰路線怎麼選
```

## 停車頁

```text
大坑步道停車攻略｜各登山口停車場與Google Maps導航
```

## 交通頁

```text
大坑步道怎麼去｜公車、捷運轉乘與自駕交通
```

## 個別頁面公式

```text
大坑{編號}號步道攻略｜難度、停車、入口與Google Maps導航
```

---

# 十七、關鍵字內容群

## 核心詞

* 大坑步道
* 大坑風景區
* 大坑登山步道
* 大坑步道推薦
* 大坑步道地圖
* 大坑步道難度
* 大坑步道停車
* 大坑步道交通

## 新手需求

* 大坑步道哪一條最簡單
* 大坑第一次走哪條
* 大坑步道新手
* 大坑步道要走多久
* 大坑步道需要登山鞋嗎

## 親子需求

* 大坑親子步道
* 大坑步道適合小孩
* 大坑步道適合長輩
* 大坑步道有廁所嗎
* 大坑步道可以推嬰兒車嗎

## 路線特色

* 大坑圓木步道
* 大坑木棧道
* 大坑城市景觀
* 大坑頭嵙山
* 大坑步道日出
* 大坑步道夕陽

## 交通需求

* 大坑步道公車
* 松竹站到大坑步道
* 大坑9號步道停車
* 大坑步道機車停車
* 大坑步道登山口

---

# 十八、結構化資料

## 首頁

使用：

* `WebSite`
* `TouristAttraction`
* `BreadcrumbList`
* `ItemList`

## 步道頁面

使用：

* `TouristAttraction`
* `Place`
* `GeoCoordinates`
* `BreadcrumbList`
* `FAQPage`

## 文章頁面

使用：

* `Article`
* `BreadcrumbList`

## 注意事項

不要在Schema中加入：

* 未持續維護的Google評分；
* 評論數；
* 固定開放時間；
* 即時停車位；
* 宣稱官方網站；
* 未經確認的票價。

首頁可以使用你提供的大坑風景區座標：

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "大坑風景區",
  "alternateName": "Dakeng Scenic Area",
  "description": "台中大坑登山步道、交通、停車與路線選擇指南。",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.180193,
    "longitude": 120.733698
  },
  "hasMap": "Google Maps地點連結"
}
```

---

# 十九、GEO與AI搜尋最佳化

每個頁面都應先回答問題，再補充背景。

## 建議文章結構

```text
H1：大坑9號步道攻略

開頭結論：
大坑9號步道適合誰、難度如何、需要多久。

H2：大坑9號步道適合第一次去嗎？
H2：入口和停車場在哪裡？
H2：實際走起來難不難？
H2：可以和哪條步道一起走？
H2：搭公車怎麼去？
H2：出發前需要準備什麼？
```

每個H2下第一段直接給答案，讓搜尋引擎和AI摘要容易抽取。

不要大量使用：

* 「接下來讓我們一起看看」；
* 「你是否也在煩惱」；
* 沒有資訊量的旅遊形容詞；
* 每頁相同的安全提醒；
* AI生成式空泛景色描寫。

---

# 二十、內部連結策略

## 個別步道頁

固定連到：

* 步道比較；
* 停車頁；
* 交通頁；
* 一條更簡單的步道；
* 一條相近難度的步道；
* 一條更有挑戰的步道；
* 一個相關行程。

## 專題頁

例如「大坑親子步道」應連到：

* 6號；
* 7號；
* 8號；
* 9號；
* 9-1號；
* 親子行前準備；
* 停車；
* 廁所與補給。

## 麵包屑

```text
首頁
> 大坑步道
> 大坑9號步道
```

---

# 二十一、Cloudflare Pages部署

Cloudflare Pages的Astro部署設定使用建置指令和 `dist` 輸出目錄；每次推送到Git倉庫都可以自動重新建置，Pull Request亦可建立預覽部署。([Cloudflare Docs][11])

## 建置設定

```text
Production branch: main
Build command: pnpm build
Build directory: dist
```

## 環境變數

純靜態第一階段不需要任何秘密環境變數。

可選公開設定：

```text
PUBLIC_SITE_URL=https://dakengtrails.com
```

## `public/robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://dakengtrails.com/sitemap-index.xml
```

## `public/_headers`

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: SAMEORIGIN

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=2592000
```

若Google Maps iframe需要定位權限，仍不建議在網站內要求定位；讓使用者點擊導航後由Google Maps自行取得位置即可。

---

# 二十二、效能要求

## 建議目標

* 首屏不載入地圖iframe；
* 地圖進入視窗後才Lazy Load；
* 首頁不超過一個地圖iframe；
* 每張圖片設定寬高，避免版面跳動；
* 首頁Hero優先載入；
* 卡片圖片延遲載入；
* 不安裝大型前端框架；
* 篩選器使用原生TypeScript；
* 不使用外部字體；
* 不使用外部圖示字體；
* SVG圖示直接放在專案內。

## JavaScript控制

首頁必要JavaScript只有：

* 手機選單；
* 步道篩選；
* 比較排序；
* FAQ展開；
* 圖片燈箱；
* 複製地點名稱。

其餘頁面盡量保持純HTML。

---

# 二十三、無障礙與手機體驗

* 所有按鈕至少44×44像素；
* 主要CTA固定於手機底部；
* 不使用顏色作為唯一難度識別；
* 地圖iframe要有明確 `title`；
* 圖片Alt描述實際路面與環境；
* 篩選器可使用鍵盤操作；
* 展開元件使用原生 `<details>`；
* 正文行高至少1.7；
* 表格在手機改成卡片；
* 避免淺綠文字放在白底；
* 所有外部連結標示會開啟Google Maps。

---

# 二十四、首批上線內容

建議第一版至少完成 **30個左右的有效頁面**。

## 基礎頁面

1. 首頁
2. 14條步道總覽
3. 步道比較
4. Google Maps地圖與入口
5. 停車攻略
6. 大眾運輸
7. 行前準備
8. FAQ
9. 關於網站
10. 編輯原則
11. 隱私政策

## 14條步道頁面

完整建立：

```text
1、2、3、3-1、4、5、5-1、
6、7、8、9、9-1、10、11
```

## 首批專題

1. 第一次去大坑走哪條
2. 大坑親子步道推薦
3. 大坑長輩健走路線
4. 大坑圓木棧道在哪裡
5. 大坑兩小時路線
6. 大坑半日遊
7. 大坑步道搭公車攻略
8. 大坑健行後美食與溫泉

---

# 二十五、後續內容擴展

## 第二階段

* 各步道入口實拍；
* 停車場實拍；
* 公車下車後步行圖；
* 原創大坑步道示意圖；
* 路線高度剖面；
* 雨天與夏季攻略；
* 健行用品清單；
* 周邊美食與溫泉。

## 第三階段

* 靜態英文版；
* 日文重點頁面；
* 可列印的PDF行前清單；
* PWA離線頁面；
* 原創GPX下載；
* 更多台中郊山內容。

英文版不要直接翻譯全部內容，優先建立：

```text
/en/
/en/trails/
/en/trails/9/
/en/transport/
/en/first-time/
```

---

# 二十六、不建議加入的功能

第一階段不要做：

* 會員註冊；
* 使用者登入；
* 留言系統；
* 線上訂位；
* 行程預訂；
* 即時聊天室；
* 即時停車位；
* 即時人潮；
* 天氣API；
* Google評論抓取；
* 自建CMS；
* 資料庫；
* SSR；
* React整站；
* 自建導航系統。

這些功能不會明顯提高初期SEO價值，反而增加成本、維護和錯誤風險。

---

# 二十七、最終建站規格

## 品牌

```text
Dakeng Trails
大坑步道指南
```

## 網域

```text
dakengtrails.com
```

## 語言

```text
繁體中文
zh-Hant-TW
```

## 核心功能

```text
步道選擇
步道比較
入口說明
停車資訊
大眾運輸
Google Maps導航
情境行程
行前準備
```

## 技術架構

```text
pnpm
Astro
Tailwind CSS 4
Markdown / MDX
Astro Content Collections
原生 TypeScript
Cloudflare Pages
純靜態輸出
系統字體
```

## 明確排除

```text
無資料庫
無會員登入
無線上預訂
無外部字體
無SSR
無Google Maps資料抓取
```

## 網站核心流程

```text
使用者搜尋問題
→ 進入專題或步道頁
→ 確認是否適合自己
→ 查看入口與停車
→ 開啟Google Maps
→ 前往步道
```

**dakengtrails.com 最重要的競爭力，不是內容篇幅比別人長，而是把大坑14條步道整理成真正能幫助遊客作決定的工具：選哪條、難不難、停哪裡、入口在哪裡，以及如何直接出發。**

[1]: https://travel.taichung.gov.tw/zh-tw/attractions/intro/419?utm_source=chatgpt.com "大坑風景區- 臺中觀光旅遊網"
[2]: https://www.scenic.taichung.gov.tw/833821/833844/833845/3040068?utm_source=chatgpt.com "大坑步道最新通行情形 - 臺中市風景區管理所"
[3]: https://travel.taichung.gov.tw/zh-tw/attractions/intro/44?utm_source=chatgpt.com "大坑9號及9-1號登山步道 - 臺中觀光旅遊網"
[4]: https://www.scenic.taichung.gov.tw/833821/833822/833823/3280090?utm_source=chatgpt.com "前往大坑1號步道體訓場交通資訊及建議停車方式"
[5]: https://developers.google.com/maps/documentation/urls/get-started "Get Started  |  Maps URLs  |  Google for Developers"
[6]: https://cloud.google.com/maps-platform/terms?utm_source=chatgpt.com "Google Maps Platform Terms Of Service"
[7]: https://docs.astro.build/en/guides/content-collections/ "Content collections | Docs"
[8]: https://docs.astro.build/zh-tw/concepts/why-astro/?utm_source=chatgpt.com "為何選擇Astro？"
[9]: https://docs.astro.build/en/guides/integrations-guide/tailwind/?utm_source=chatgpt.com "@astrojs/tailwind | Docs"
[10]: https://docs.astro.build/en/guides/integrations-guide/cloudflare/?utm_source=chatgpt.com "astrojs/cloudflare - Astro Docs"
[11]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"

