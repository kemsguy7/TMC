# Truckmasters Nigeria — React Website

Modern React + Tailwind CSS rebuild with animations inspired by **coil-web** and **vestpad-website**, using Truckmasters brand colors (navy `#2c3e50`, accent red `#e53e3e`).

## Development

```bash
cd truckmasters-web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder. Images are served from `public/images` (symlinked to `../images`).

## Features

- Scroll-triggered section animations (Framer Motion)
- Animated stat counters (50+ clients, 2000+ vehicles, etc.)
- Bento-style image gallery
- Quote form submits JSON (console + preview until backend/email is wired)
- Mobile-responsive layout with generous whitespace
- Removed brands/clients: BMW, Nissan, Mitsubishi, Lafarge

## Tagline

**AUTOMOTIVE THERAPY — WE SELL PEACE OF MIND**
