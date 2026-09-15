# Dakeng Trails 大坑步道指南

## 部署在 Cloudflare Workers

本專案已切換為 **Astro 5（`output: 'server'`）+ `@astrojs/cloudflare`** Adapter，並可在 Cloudflare Workers 上提供 SSR 與靜態資源的混合輸出。

### 本地開發
```bash
pnpm install
pnpm dev          # 開發伺服器；用 @astrojs/cloudflare adapter
```

### 部署（Cloudflare Workers）
```bash
pnpm deploy       # pnpm build && wrangler deploy
```
發布前請先 `npx wrangler login` 登入帳號。

### 設定重點
- `astro.config.mjs`：使用 `@astrojs/cloudflare` Adapter + `output: 'server'`
- `wrangler.jsonc`：`main` 指向 `./dist/_worker.js/index.js`，並以 `assets` binding 服務靜態檔
- 所有動態路由頁（`trails/[id]`、`routes/[slug]`、`guides/[slug]`）均明確標記 `export const prerender = true;`，這些頁面於部署時預先生成
- `/weather/`、`/offline` 不預渲染，由 Workers 提供 SSR（Cache API 內建快取天氣 30 分鐘）
- 站內 `_headers` 已預先加入 PWA manifest 快取與 No-Cache for `sw.js`

---

## SEO 與結構化資料（單頁面整合模板）

每個頁面都會從 `BaseLayout` 收到：
- `<title>` + meta description
- Open Graph（含圖片 alt）
- Twitter card
- Canonical link
- `TouristAttraction` schema（包含 `@id`、`address`、`geo`、`hasMap`、`sameAs`）
- `WebSite` + `Organization` 與 `BreadcrumbList`
- 額外的 `FAQPage` schema（由各頁資料傳入）

> ⚠️ 評分與精選評價為**頁面顯示用途**，不寫入 JSON-LD，避免冒充官方評分。

---

## Google 地圖評價同步規則
- 顯示位置：`首頁 > Google Maps 評價精選`、`/sources/` 評價區塊、`Footer` 評價來源說明
- 來源文字：
  - 評分下方小字："評分與評價數同步自谷歌地圖（Google Maps）使用者評價 · 2026 年 9 月 · 點擊查看谷歌地圖全部評價↗"
  - 評價區塊："同步自 Google 地圖使用者評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有"
  - 入口按鈕："在谷歌地圖查看全部評價"
- 同步時間、版權與按鈕連結處手動維護，建議每 30 天更新一次

---

## PWA 支援
- `manifest.webmanifest` 提供 `name`、`theme_color`、`icons`、`shortcuts`
- `sw.js` 在使用者登入時自動註冊
- 離線時顯示 `/offline` 頁面（伺服器端 fallback）

---

## 即時氣象
- `/weather` 透過伺服器端呼叫 `Open-Meteo`，並用 `caches.open('weather-dakeng-v1')` 快取 30 分鐘
- UI 由 `WeatherPanel.astro` 呈現，並以「出門建議」區塊取代技術性說明
- 結構：
  - `src/lib/weather.ts` 為 SSR 拉取邏輯
  - `src/components/WeatherPanel.astro` 為 UI 元件
  - `src/pages/weather.astro` 為頁面（`prerender = false`）

---

## 新增/擴充頁面
- `/weather` 即時氣象與七日預報
- `/seasons` 四季遊覽策略（基於中央氣象署常年均態）
- `/itinerary` 行程節奏：半日 / 全日 / 親子 / 攝影 / 無障礙
- `/facilities` 週邊設施類型指南（中立呈現，不推薦商家）
- `/history` 歷史、故事與地名由來（921 大地震整修與地方傳說）

---

## 內容編輯守則（非營利科普站台）
- 不推薦任何特定商家或品牌
- 不冒充官方評分（`aggregateRating` 從 JSON-LD 中省略）
- 數值僅用於頁面呈現，並加上「同步時間」、「來源」、「copyright」說明
- 設施項目以「類型」描述（如「公共廁所」、「加油」），不評論或排名
