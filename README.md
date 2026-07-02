# Chandana Sirimalla — Professional MERN Stack Portfolio

A highly polished, editorial-style professional portfolio application engineered to showcase modern full-stack development expertise, responsive design precision, and aesthetic UI craftsmanship.

## 🌟 Key Features

- **Dynamic Theme Customizer**: An interactive floating panel allowing users to choose from 5 carefully curated visual profiles (Emerald Forest, Cyber Lavender, Oceanic Cyan, Sunset Amber, and Crimson Rose).
- **Responsive Typography & Spacing**: Desktop-first precision paired with fluid mobile layouts utilizing custom google fonts (*Plus Jakarta Sans*, *Playfair Display*, and *JetBrains Mono*).
- **Projects Showcase**: High-fidelity project cards with interactive status meters, key feature tags, and quick-links to GitHub and live previews.
- **Interactive Stack Metrics**: A clean, structured grid indicating active proficiency and ready toolsets (MERN, SQL, and dev workflows).
- **Smooth Animations**: Guided by fluid, physics-based state transitions powered by `motion`.
- **Direct Connect**: Minimalist integrated contact form with robust state handlers, instant email clipboard copying, and validation.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, TypeScript
- **Bundler & Tooling**: Vite 6
- **Styling Engine**: Tailwind CSS v4 (with native CSS custom properties for dynamic color themes)
- **Animations**: `motion` (imported from `motion/react`)
- **Iconography**: `lucide-react`

---

## 🚀 Quick Start (Local Development)

To run this repository locally, follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch the Development Server
```bash
npm run dev
```
The application will boot and become available at `http://localhost:3000`.

### 3. Production Build
To build a highly optimized static build for production deployment:
```bash
npm run build
```
The compiled assets will be placed cleanly inside the `/dist` directory, ready to be hosted on Netlify, Vercel, GitHub Pages, or Cloud Run.

---

## 🎨 Color Customization & Styling
The global custom properties are declared inside `/src/index.css` under theme variants:
- `--accent` matches the primary color highlight.
- `--accent-dark` governs active buttons, gradients, and scrollbars.
- `--accent-glow` defines soft container blurs and atmospheric lights.
