# Solid Coffee: Landing Page

Single static landing page for Solid Coffee, a friend's coffee shop. Built as a favor, so it must need almost no maintenance: the only regular update is the menu, about once a month.

## Rules
- Simple beats complex. Plain HTML + CSS + vanilla JS. No framework, no build step, no dependencies (Google Fonts link is the only external resource).
- One correct path, no fallbacks or alternative code paths.
- Surgical changes only. Fix root causes, not symptoms.
- Hosting: Vercel free `.vercel.app` address, deployed from GitHub on every push.

## Business info
- Name: Solid Coffee
- Tagline: "Kedai kopi tetangga sejak 2020." / "Your neighborhood coffee shop since 2020."
- Vibe: cozy, home-style, quiet, casual, trendy. Good for working on a laptop, solo, or small groups.
- Open since 2020. Serves coffee, non-coffee drinks, light meals.
- Price range: computed automatically from `menu.js` (lowest to highest price).
- Address: Jl. Flamboyan Blok G6 No. 1, Bencongan, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810, Indonesia
- WhatsApp / phone: +62 856-9179-1671 (WhatsApp link: https://wa.me/6285691791671)
- Instagram: https://www.instagram.com/coffee.solid/
- Google Maps link: https://maps.app.goo.gl/msEZaWfYcTd9jRCN8 (resolves to the "Solid Coffee" place at -6.2223317, 106.5986616)
  - Used for the "Directions" and "Open in Google Maps" buttons.
  - The embedded map is a Google place embed built from that link's place ID (0x2e69ff137dca6e19:0x21dc0497cc9865f0), so it shows the Solid Coffee card like Share > Embed a map does.

## Opening hours (confirmed by the owner)
| Day | Hours |
|---|---|
| Monday | 09:00 - 21:30 |
| Tuesday | 10:00 - 15:00, 16:00 - 23:00 |
| Wednesday - Friday | 10:00 - 23:00 |
| Saturday | 10:00 - 15:00, 16:00 - 23:00 |
| Sunday | 12:30 - 23:30 |

Today's row is highlighted using Jakarta time.

## Languages
- Indonesian is the default, English is secondary.
- One page with an ID/EN toggle. All text lives in the `TRANSLATIONS` object in `script.js`. No duplicate pages.

## Page structure (top to bottom)
1. Hero: logo, tagline, three buttons (Menu, Directions, Instagram)
2. About: 2-3 sentences on the vibe
3. Menu: grouped Coffee, Non-Coffee, Meal, rendered from `menu.js`, with price range and sold-out note
4. Gallery: all 9 photos (showcase only, not linked to the menu), captions from the photo names
5. Hours and location: icon rows (address, phone + WhatsApp, hours table), "Open in Google Maps" button, embedded map
6. Footer: WhatsApp, Instagram, address

## Menu
- All items live in one file, `menu.js`. The page renders from it. Prices are never hard-coded in HTML.
- Item shape: `{ name, price, category }`. Price is a string in thousands of rupiah ("15" shows "15K", "20-24" shows "20-24K").
- Categories: `coffee`, `non-coffee`, `meal`.
- Sold-out handling: a permanent note on the menu, no per-item flags.
- Monthly update flow: edit `menu.js`, commit, push, Vercel deploys.

## Design
- Black and white to match the logo. Off-white background, black text.
- Fraunces (serif) for headings, Inter for body text.
- Mobile first. Most visitors come from Instagram on a phone.
- `logo.webp` has a white background (no transparency); CSS `mix-blend-mode` hides it.
- Photos are WebP, with `loading="lazy"` on all images below the hero.

## Folder structure
```
CLAUDE.md
index.html
style.css
script.js      (translations, language toggle, menu rendering, hours highlight)
menu.js        (the only file edited monthly)
assets/
  logo.webp
  photos/      (9 WebP photos)
```
