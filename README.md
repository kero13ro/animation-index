# animation-index

- blob: 漸變外框的圖片，[共有三種方式](https://kero13.notion.site/SVG-blob-f8a53d5ea8e94119bf51bfd4485a9011)
- 離場動畫：onBeforeRouteLeave
- 進場、離場：使用 transition, slot 封裝
- 操作列表動畫：Array.from(wrapper.value.children)
- nuxt 註冊 GSAP 插件：ScrollTrigger

## 參考資源

- 官網 vue 3
- <https://www.youtube.com/watch?v=37EFXLA-6dc>

## vite deploy to github

- 使用 Git 的子樹指令 subtree，將 dist 資料夾視為一個獨立的子專案，並將該子專案的變更推送到遠端儲存庫的 gh-pages 分支

```bash
npm run build
git add dist -f
git commit -m "Adding dist"
git subtree push --prefix dist origin gh-pages
```
