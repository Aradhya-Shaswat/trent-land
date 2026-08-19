# trentarev landing page v2

yo welcome to the codebase for the official trentarev landing page. i built this because our desktop trading app is way too good to have some mid looking website.

### what is this

this is the frontend site for trentarev. trentarev is a native windows trading intelligence platform for tracking calls, market signals, and portfolio gains so people can stop losing money.

this repo is just the landing page. it has smooth 3d stuff, animations, pricing tables, docs, and direct links to download.

### tech stack

- next.js 14 (app router because im not a boomer)
- react 18 + typescript
- tailwind css for the drip
- gsap, motion, and lenis for silky buttery smooth scrolling
- three.js and cobe for the globe and 3d eye candy
- lucide and hugeicons for icons

### how to get this thing running

you need node 20 or bun installed on your pc.

1. clone the repo and go inside:
```bash
git clone https://github.com/aradhya-shaswat/trent-land.git
cd t-land-v2
```

2. install the dependencies:
```bash
npm install
```
or if you use bun <3 :
```bash
bun install
```

3. set up your env:
make a .env.local file in the root if you need custom api keys or analytics tokens.

4. run the dev server:
```bash
npm run dev
```
or:
```bash
bun dev
```

5. open your browser:
go to http://localhost:3000.

### building for production

if you actually want to ship this :
```bash
npm run build
npm run start
```

### rules

- don't touch the gsap animations unless you actually know math
- keep it fast, don't bloat the bundle size with garbage node packages
- if you find a bug, fix it yourself or dm me

made for horizons, hack club for @trentarev/cli
