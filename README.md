# Copilot Plans

快速部署的 React + Vite 應用

## 快速開始

### 本地開發

```bash
npm install
npm run dev
```

### 生產構建

```bash
npm run build
npm run preview
```

## Vercel 部署 ✅ 推薦

### 方法 1：使用 Vercel 按鈕（最簡單）

即將添加部署按鈕

### 方法 2：手動部署

1. **連接 GitHub**
   - 訪問 https://vercel.com
   - 選擇「Add New Project」
   - 連接 GitHub 帳戶
   - 選擇此倉庫

2. **配置構建設置**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node Version: `20.x`

3. **環境變數（可選）**
   - 在 Settings > Environment Variables 中添加

4. **部署**
   - 點擊「Deploy」
   - 等待部署完成（約 1-2 分鐘）

### 自動部署

每次 push 到 `main` 分支時，Vercel 會自動部署新版本

## 部署後的配置

### 自定義域名

1. 在 Vercel Dashboard 中選擇你的項目
2. 進入 Settings > Domains
3. 添加自定義域名
4. 按照指示設置 DNS 記錄

### 環境變數

在 Vercel Dashboard 中：
1. Settings > Environment Variables
2. 添加所需的變數
3. 重新部署應用

## 快速命令參考

```bash
# 安裝依賴
npm install

# 開發服務器
npm run dev          # http://localhost:5173

# 生產構建
npm run build        # 生成 dist 文件夾

# 預覽構建
npm run preview      # 本地預覽構建結果
```

## 文件結構

```
.
├── index.html          # HTML 入口
├── package.json        # 項目依賴
├── vite.config.js      # Vite 配置
├── vercel.json         # Vercel 配置
├── src/
│   └── main.jsx        # React 入口
└── dist/               # 構建輸出（自動生成）
```

## 故障排除

### 部署顯示 404

**原因**：缺少 `dist` 文件夾或構建失敗

**解決方案**：
1. 本地運行 `npm install` 和 `npm run build`
2. 檢查 Vercel 部署日誌
3. 確保 `vercel.json` 配置正確

### 構建失敗

```bash
# 清除緩存
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 頁面為空

檢查瀏覽器開發工具的 Console，查看是否有 JavaScript 錯誤

## 性能優化

✅ 已配置：
- Gzip 壓縮
- CSS/JS 最小化
- 資源優化
- HTTP/2

## 支持

- [Vercel 文檔](https://vercel.com/docs)
- [Vite 文檔](https://vitejs.dev)
- [React 文檔](https://react.dev)
