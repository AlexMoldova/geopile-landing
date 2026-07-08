# Geopile — Landing Page pentru Facebook Ads

Landing page de înaltă conversie pentru campaniile de Facebook Ads pe piața din România.

## Despre

Site single-page optimizat pentru conversii maxim, creat pentru **Geopile** — companie specializată în fundații pe piloți prefabricați din beton prin presare statică.

## Caracteristici

- ✅ **Mobile-first** — optimizat pentru trafic de pe Facebook (80%+ mobil)
- ✅ **În limba română** — tot conținutul adaptat pieței locale
- ✅ **Meta Pixel integrat** — tracking complet: PageView, Lead, Contact, Scroll
- ✅ **Sticky CTA** — butoane fixe pe mobil (Sună / Ofertă)
- ✅ **Thank you page** — pentru tracking corect al conversiilor
- ✅ **Formular lead capture** — nume, telefon, email, locație, tip construcție
- ✅ **Fast loading** — fără framework-uri grele, HTML/CSS/JS pur
- ✅ **SEO optimizat** — Open Graph, meta tags, semantic HTML
- ✅ **Scroll animations** — Animații la scroll pentru engagement

## Structură

```
├── index.html       # Landing page principal
├── multumim.html     # Thank you page (după form submission)
├── style.css         # Stiluri complete
├── script.js         # Animări, tracking, form handling
└── README.md
```

## Secțiuni

1. **Hero** — Headline puternic + CTA dual (formular + telefon)
2. **Trust bar** — Statistici (7+ ani, 250+ proiecte, garanție 50 ani)
3. **Servicii** — 6 carduri cu toate serviciile Geopile
4. **De ce noi** — 6 avantaje ale presării statice
5. **Proces** — 4 pași (consultanță → proiectare → execuție → testare)
6. **Portofoliu** — Galerie proiecte 2018-2024
7. **Testimoniale** — 3 recenzii clienți
8. **Formular lead** — Capture date + telefon direct
9. **Footer** — Contact, servicii, social

## Setup Meta Pixel

Înainte de a lansa campania:

1. Înlocuiește `YOUR_PIXEL_ID_HERE` în `index.html` și `multumim.html` cu ID-ul Pixel real
2. Verifică evenimentele în Events Manager
3. Evenimente tracked:
   - `PageView` — la încărcarea paginii
   - `Lead` — la submit formular
   - `Contact` — la click pe telefon
   - `Scroll50` / `Scroll90` — la scroll adâncime

## Deploy pe GitHub Pages

```bash
# Push la GitHub
git remote add origin https://github.com/AlexMoldova/geopile-landing.git
git branch -M main
git add .
git commit -m "Initial: high-conversion landing page for FB ads"
git push -u origin main

# Activează GitHub Pages în repo settings:
# Settings → Pages → Source: main branch → /(root)
```

## Optimizare conversii

- **CTA-uri multiple** — telefon și formular, vizibile permanent pe mobil
- **Social proof** — statistici, testimoniale, portofoliu
- **Urgență** — badge "Disponibili acum" în orele de lucru
- **Friction redus** — formular scurt, doar câmpuri esențiale
- **Trust signals** — garanție 50 ani, 250+ proiecte, consultanță gratuită
- **Mobile UX** — butoane mari, sticky bar, scroll smooth

## Contact Geopile

- 📞 +40 736 977 215
- 📧 pilotipresati@gmail.com
- 📍 Constanța, bd. Tomis 46, cam. 3
- 🌐 [geopile.eu](https://geopile.eu)
