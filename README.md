# Portfolio

Personal portfolio of Robin Thomas, senior front-end engineer in Bengaluru.

**Live: https://therealhazzard.github.io/portfolio/**

## The idea

Robin writes, directs and acts in plays, so the page is a stage. A frame stays pinned in the middle of the screen while four projects take their turn inside it, and each one is the real, running site: you can use Tickerline, schema-ui and mfe-starter right there, not look at screenshots of them.

## What is on the page

- **Introduction:** a card over a dim theatre that shrinks into a ticket stub as you scroll.
- **Work at Tekion:** four full-screen plates, each a measured outcome with a figure drawn in code.
- **Projects:** the pinned stage with live, interactive frames (and a note when a project has no hosted demo).
- **Backstage:** a pinned word with four pictures passing behind it, about the plays and films.
- **Contact:** a card on a photograph of Bengaluru, and a cropped-name footer.

## How it is built

Next.js 16 (static export), React 19, TypeScript and plain CSS. No UI library, no animation library: the pinned sections use `position: sticky`, and script only reads the scroll position (the hero card and the stage) or starts entrances with an `IntersectionObserver`. Everything respects `prefers-reduced-motion`, and nothing stays hidden if script fails.

- One typeface, Hanken Grotesk, in two weights.
- Navy and pink, defined once as custom properties in `src/app/globals.css`.
- Photographs are openly licensed (CC0, CC BY, CC BY-SA) and credited in the footer and under each picture.
- The live frames load lazily as you reach them, and only react to touch after you choose "Use it live", so they never trap scrolling.

Lighthouse (mobile, live site, Nov 2026): performance 100, accessibility 100, best practices 100, SEO 100.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Page content lives in `src/lib/data.ts`; the layout and styles are in `src/components/` and `src/app/globals.css`.

To build the static site the way GitHub Pages serves it:

```bash
BASE_PATH=/portfolio npm run build   # output in ./out
```
