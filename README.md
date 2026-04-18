# 台股 CPO 概念股深度分析 2026

自適應深色主題單頁網站,含產業分析、分級排行、股價連結、中英切換、目錄導航。

## 檔案結構

```
cpo/
├── index.html       主頁面(繁中為主)
├── styles.css       樣式(深色主題,手機優先 RWD)
├── app.js           互動邏輯 + 中英文字典
└── README.md        本檔案
```

## 本地預覽

直接用瀏覽器打開 `index.html` 即可。或用簡易伺服器:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

打開 http://localhost:8000

## 部署方式(5 分鐘上線)

### 方案 A:GitHub Pages(最推薦,免費)

```bash
cd cpo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的帳號>/cpo-analysis.git
git push -u origin main
```

然後到 GitHub Repo 的 `Settings → Pages`:
- Source:選 `Deploy from a branch`
- Branch:選 `main` / `root`
- 儲存後等 1-2 分鐘,網址會是 `https://<你的帳號>.github.io/cpo-analysis/`

### 方案 B:Vercel(最快,有 HTTPS 與 CDN)

1. 到 https://vercel.com 註冊(用 GitHub 登入最快)
2. `Add New → Project` → Import 你的 repo
3. Framework Preset 選 `Other`,其他全部預設,按 Deploy
4. 網址會是 `https://cpo-analysis.vercel.app`

也可以不開 Git,直接拖檔案:
```bash
npm i -g vercel
cd cpo
vercel
```

### 方案 C:Cloudflare Pages

與 Vercel 類似,全球 CDN 速度最好。到 https://pages.cloudflare.com 連接 GitHub repo 即可。

### 方案 D:Netlify(拖放上傳)

1. 到 https://app.netlify.com/drop
2. 把 `cpo` 資料夾整個拖進去
3. 立即得到一個 `*.netlify.app` 網址

## 功能特色

- **深色金融儀表板風格** — Bloomberg / Reuters 質感
- **手機優先 RWD** — 單欄堆疊 → 平板 2 欄 → 桌機含側邊目錄
- **股價連結** — 點股票代號跳 Yahoo 奇摩股市看即時行情
- **中英文切換** — 頂部 EN/中 按鈕,儲存於 localStorage
- **目錄導航** — 手機抽屜式,桌機常駐側邊,捲動自動高亮
- **回到頂部** — 捲動 400px 後浮現
- **可列印** — 加了列印樣式,可存成 PDF 分享

## 客製化

### 改品牌名/作者
- `index.html` 的 `<title>` 和 `topnav-brand`
- `app.js` 的 `I18N.zh.brand` 和 `I18N.en.brand`
- `index.html` 和 `app.js` 底部的 `作者:Eric`

### 加入 Google Analytics
在 `index.html` 的 `</head>` 前加入 GA 標籤。

### 修改股票清單
編輯 `app.js` 頂部的 `STOCKS` 陣列即可。

### 修改主題色
編輯 `styles.css` 最上面 `:root` 的 CSS 變數:
- `--accent` (金色強調) — 目前是 `#E8A735`
- `--bg-page` (底色) — 目前是 `#0B0B0E`

## 授權

本報告內容僅供研究參考,不構成投資建議。
