# Project Template

静的LPテンプレートです。画像を `assets/` に置くだけで、Vercelに公開できます。

## ファイル

```text
index.html
styles.css
script.js
site.config.js
assets/
```

## 案件ごとの編集

まず `site.config.js` のブランド名、Heroコピー、CTA、数値、フッターを変更します。
大きく構成を変える場合だけ `index.html` と `styles.css` を編集してください。

## 画像

推奨:

- `assets/hero.jpg`
- `assets/results.jpg`
- `assets/background.jpg`

未配置の場合でも、代替背景でレイアウト確認できます。

## ローカル確認

```powershell
node local-server.js
```

```text
http://127.0.0.1:4173/
```

## デプロイ

```powershell
npx vercel --prod --yes
```
