# SquareView Technical Services Website

A modern, professional website for SquareView Technical Services - a UAE-based interior design and technical services company.

## 🌐 Live Preview

**GitHub Repository:** https://github.com/inarashinzo/squareview-website

**Deployed URL:** http://192.168.139.108:4173 (when deployed on Coolify)

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS + ShadCN UI
- **Data Fetching:** React Query
- **Forms:** React Hook Form + Zod

## 📁 Project Structure

```
squareview-website/
├── src/
│   ├── components/
│   │   ├── ui/          # ShadCN-style UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── ContactForm.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── route-tree.tsx   # TanStack Router configuration
│   └── main.tsx
├── coolify.json         # Coolify deployment config
├── Dockerfile           # Container deployment
└── deploy.sh            # Deployment script
```

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Deployment

### Option 1: Coolify (Recommended)

1. Access Coolify at `http://192.168.139.108:8000`
2. Create a new "Static" application
3. Configure:
   - Repository: `inarashinzo/squareview-website`
   - Branch: `main`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run preview`
   - Port: `4173`

### Option 2: Docker

```bash
docker build -t squareview-website .
docker run -p 80:80 squareview-website
```

### Option 3: Manual

```bash
npm install
npm run build
# Serve the dist folder with any static server
npx serve dist
```

## 🎨 Design Features

- **Hero Section:** High-impact visual with CTA buttons and stats
- **Services Grid:** Card-based layout showcasing all 5 services
- **Contact Form:** Validated form with localStorage for inquiries
- **Responsive Design:** Mobile-first approach with mobile navigation
- **Modern UI:** Clean typography, smooth animations, professional color scheme

## 📞 Contact Information

**SquareView Technical Services**
- 📍 Dubai, United Arab Emirates
- 📞 +971 50 000 0000
- ✉️ info@squareview.ae
- 🕐 Sat - Thu: 9:00 AM - 7:00 PM

## 📝 License

MIT License
