# Vikas Gupta — Portfolio Website

A clean, modern, fully responsive single-page portfolio built with **HTML**, **Tailwind CSS (CDN)**, and **vanilla JavaScript** for a **Data Analyst & AI/ML Enthusiast**.

## 🚀 Quick Start

Just open `index.html` in any modern browser — no build step or install needed.

```bash
# option: serve locally for best experience
python -m http.server 8000
# then visit http://localhost:8000
```

## 📁 Project Structure

```
Portfolio/
├── index.html          # Single-page portfolio (all sections)
├── css/
│   └── styles.css      # Custom styles (glow, animations, cards, timeline)
├── js/
│   └── script.js       # Typing effect, menu, scroll animations, form
└── assets/
    ├── logo.png/.svg    # Brand logo (header, footer & favicon)
    ├── profile.jpg      # Your photo (hero avatar)
    ├── profile.svg      # Fallback avatar
    └── Vikas_Gupta_Resume.pdf   # ← ADD YOUR RESUME HERE (PDF)
```

## ✨ Features

- Dark theme (`#0f172a`) with glowing `#38bdf8` / `#818cf8` accents
- Poppins + Inter fonts (Google Fonts)
- Sticky navbar with scroll progress bar, active-link highlighting & mobile menu
- Hero with dynamic typing effect, glowing avatar ring & animated stat counters
- About, Skills (categorized), Projects (6 cards), Experience (timeline),
  Certifications & Education, Contact (validated form)
- Social links: LinkedIn, GitHub, Kaggle, Email, YouTube
- Scroll-reveal animations, back-to-top button, toast notifications

## ✏️ How to Customize Your Info

1. **Photo** → already added as **`assets/profile.jpg`** (optimized from your 2MB upload to just 56KB).
   To change it later, just replace that file.
2. **Resume** → drop `Vikas_Gupta_Resume.pdf` into `assets/`
   (all `Resume` / `Download CV` buttons point there).
3. **Name** → search & replace `Vikas Gupta` in `index.html`;
   the logo monogram `VG` is rendered from `assets/logo.png` (SVG source in `assets/logo.svg`).
   Replace those two files to swap in your own logo design.
4. **Social links** → update the `href="https://.../vikasgupta"` URLs and the
   `mailto:` address in the contact section & footer.
5. **Content** → headings, project descriptions, experience entries and
   certifications are plain HTML — edit them directly in `index.html`.
6. **Typing roles** → edit the `roles` array at the top of `js/script.js`.
7. **Stats** → change `data-target` / `data-suffix` on the counters in the hero.
8. **Contact form backend** → the form currently shows a success toast (client-side).
   To receive real emails, wire it to a free service like
   [FormSubmit](https://formsubmit.co) or Netlify Forms and adjust the handler in
   `js/script.js` (section 7).

## 🧩 Design Tokens

| Token      | Value     | Usage                         |
| ---------- | --------- | ----------------------------- |
| `bg`       | `#0f172a` | Page background (slate-900)   |
| `panel`    | `#1e293b` | Card/panel surfaces           |
| `primary`  | `#38bdf8` | Sky-400 accent / glows        |
| `accent`   | `#818cf8` | Indigo-400 accent / gradients |

## 📜 License

Free to use for your personal portfolio.
