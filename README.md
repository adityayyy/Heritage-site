# GO HERITAGE

A cinematic Karnataka tourism site — plain HTML, CSS and JavaScript, no build step.

## Run locally

```bash
npm install
npm start
```

Opens at http://localhost:3000 (serves `go-heritage.html`).

## Structure

- `go-heritage.html` — homepage
- `pages/` — district pages (`vijayanagara.html`, `mysuru.html`, …) plus `chat.html`, `signin.html`
- `css/styles.css` — homepage styles; `responsive.css` — shared responsive rules
- `js/main.js` — data + interactions (slider, carousel, modal, map, chatbot)
- `assets/` — local images
- `server.js` — Express dev server + `/api/chat`, `/api/carto-config`
- `api/` — Vercel serverless functions (same endpoints)
