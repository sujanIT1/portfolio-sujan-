# Sujan Raskoti — Portfolio Website

A premium, dark-themed personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## 📄 Adding Your Resume

1. Export your resume as a PDF file
2. Name it exactly: `resume.pdf`
3. Place it in the `/public/` folder (overwrite the placeholder)

The "Download Resume" button will automatically serve `/public/resume.pdf`.

---

## 🌐 Deploy on Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite projects.

### Option B — Vercel Dashboard

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel will auto-detect Vite settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**

---

## 🗂️ Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Replace with your actual resume
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoiseOverlay.jsx
│   │   └── ParticleField.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ✨ Features

- Custom animated cursor (desktop)
- Particle field background with mouse interaction
- Full-screen hero with animated entrance
- Scroll-triggered section reveals (Framer Motion)
- Animated skill progress bars
- Interactive project cards with hover glow effects
- Contact form (opens your mail client)
- Mobile-responsive with animated hamburger menu
- Noise texture overlay for premium feel
- Grid background pattern

---

## 🎨 Customization

All personal data is in the section files under `src/sections/`. Edit each file to update:
- `Hero.jsx` — Name, tagline, social links
- `About.jsx` — Bio text
- `Skills.jsx` — Skill levels
- `Projects.jsx` — Project details & links
- `Experience.jsx` — Work/leadership history
- `Education.jsx` — Academic info
- `Contact.jsx` — Contact links

Colors and fonts are in `tailwind.config.js` and `src/index.css`.
