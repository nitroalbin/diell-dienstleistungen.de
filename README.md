# Diell Dienstleistungen - Website

Eine moderne, SEO-optimierte, DSGVO-konforme Website für Diell Dienstleistungen - Renovierung & Innenausbau in Laichingen.

## 🚀 Quick Start

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18 oder höher)
- npm oder yarn

### Installation

```bash
# Repository klonen oder herunterladen
cd diell-dienstleistungen

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:4321` erreichbar.

### Build

```bash
# Produktions-Build erstellen
npm run build

# Build lokal previewen
npm run preview
```

## 📁 Projektstruktur

```
diell-dienstleistungen/
├── src/
│   ├── components/          # Wiederverwendbare Komponenten
│   │   ├── Breadcrumbs.astro
│   │   ├── CookieConsent.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── PhoneButton.astro
│   │   ├── ServiceCard.astro
│   │   ├── StickyCTA.astro
│   │   ├── TestimonialCard.astro
│   │   └── WhatsAppButton.astro
│   ├── content/             # Inhalte und Daten
│   │   └── company-data.ts  # Firmendaten & Services
│   ├── layouts/             # Layout-Komponenten
│   │   └── Layout.astro     # Hauptlayout
│   ├── pages/               # Seiten
│   │   ├── index.astro      # Startseite
│   │   ├── kontakt.astro
│   │   ├── projekte.astro
│   │   ├── ueber-uns.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── cookies.astro
│   │   ├── 404.astro
│   │   └── leistungen/      # Service-Seiten
│   │       ├── index.astro
│   │       ├── trockenbau-unterkonstruktion.astro
│   │       ├── flurgestaltung.astro
│   │       ├── gipskarton-led.astro
│   │       ├── spachtelarbeiten.astro
│   │       └── renovierung-innenausbau.astro
│   └── styles/
│       └── global.css
├── public/                  # Statische Dateien
│   ├── images/              # Bilder
│   │   └── projects/        # Projektbilder
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs         # Astro-Konfiguration
├── tailwind.config.mjs      # Tailwind-Konfiguration
├── netlify.toml             # Netlify-Deployment-Konfiguration
└── package.json
```

## 🎨 Anpassungen vornehmen

### 1. Firmendaten ändern

Bearbeiten Sie die Datei `src/content/company-data.ts`:

```typescript
export const companyData = {
  name: 'Diell Dienstleistungen',
  owner: 'Kadri Kuqica',
  address: {
    street: 'Appenzellerweg 3',
    city: 'Laichingen',
    postalCode: '89150',
    country: 'Germany',
  },
  email: 'kadrikuqica1@icloud.com',
  phone: '+49 1515 6357966',
  taxNumber: '89440/01914',
  // ...
};
```

### 2. Bilder hinzufügen

**Projektbilder:**
1. Legen Sie Ihre Bilder im Ordner `public/images/projects/` ab
2. Unterstützte Formate: JPG, PNG, WebP, AVIF
3. Empfohlene Größe: 800x450px (16:9)
4. Optimieren Sie Bilder vor dem Upload (z.B. mit [Squoosh](https://squoosh.app/))

**Bilder in Projekte-Seite einbinden:**

Bearbeiten Sie `src/pages/projekte.astro` und fügen Sie Ihre Bilder hinzu:

```typescript
const projects = [
  {
    title: 'Mein Projekt',
    location: 'Laichingen',
    category: 'Renovierung',
    description: 'Projektbeschreibung...',
    image: '/images/projects/mein-projekt.jpg',  // ← Hier Pfad einfügen
  },
  // ...
];
```

### 3. Texte bearbeiten

**Startseite:** `src/pages/index.astro`
- Hero-Bereich, Services, Testimonials, FAQ

**Service-Seiten:** `src/pages/leistungen/[service].astro`
- Individuelle Beschreibungen pro Leistung

**Über uns:** `src/pages/ueber-uns.astro`
- Firmengeschichte, Werte, Team

### 4. SEO-Metadaten anpassen

Jede Seite hat individuelle SEO-Einstellungen:

```astro
<Layout 
  title="Seitentitel | Diell Dienstleistungen"
  description="Beschreibung für Google (max. 155 Zeichen)"
  ogImage="/images/og-image.jpg"
>
```

## 📱 WhatsApp-Integration

Der WhatsApp-Link ist automatisch konfiguriert. Um die vordefinierte Nachricht zu ändern:

```typescript
// In src/content/company-data.ts
export function getWhatsAppLink(message?: string): string {
  const phone = '4915156357966';
  const defaultMessage = message || 'Hallo, ich interessiere mich für Ihre Leistungen.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
}
```

## 🍪 Cookie-Banner & DSGVO

Das Cookie-Banner ist bereits implementiert und DSGVO-konform:

- **First-Layer Banner** mit Accept/Decline Buttons
- **Detaillierte Einstellungen** für 4 Kategorien (Notwendig, Präferenzen, Statistik, Marketing)
- **Consent-Speicherung** in Cookie + localStorage
- **Widerruf möglich** über Footer-Link oder /cookies/ Seite

### Analytics hinzufügen (nach Consent)

Suchen Sie in `src/components/CookieConsent.astro` nach `loadAnalytics()` und ersetzen Sie:

```javascript
const GA_ID = 'G-XXXXXXXXXX'; // ← Ihre Google Analytics ID
```

## 🚀 Deployment auf Netlify

### Option 1: Drag & Drop

1. Führen Sie `npm run build` aus
2. Laden Sie den `dist`-Ordner bei [Netlify Drop](https://app.netlify.com/drop) hoch

### Option 2: Git-Integration (empfohlen)

1. Push auf GitHub/GitLab
2. In Netlify: "Add new site" → "Import an existing project"
3. Repository auswählen
4. Build-Einstellungen werden automatisch aus `netlify.toml` gelesen

### Wichtige Einstellungen

1. **Primäre Domain festlegen:**
   - Site settings → Domain management
   - Fügen Sie Ihre Domain hinzu (z.B. `diell-dienstleistungen.de`)
   - Setzen Sie als Primary Domain

2. **HTTPS aktivieren:**
   - Wird automatisch mit Let's Encrypt bereitgestellt

3. **Netlify Subdomain ausschließen (SEO):**
   - In `netlify.toml` bereits konfiguriert
   - Leitet automatisch von `diell-dienstleistungen.netlify.app` auf Ihre Domain um

## 🔍 SEO-Checkliste

- [ ] Meta-Titel und Beschreibungen auf allen Seiten geprüft
- [ ] Keywords in H1, H2, Texten integriert
- [ ] Alt-Texte für alle Bilder hinzugefügt
- [ ] Projektbilder in `/public/images/projects/` eingefügt
- [ ] Google Analytics ID eingetragen (optional)
- [ ] Domain in `astro.config.mjs` aktualisiert
- [ ] `robots.txt` geprüft
- [ ] Sitemap.xml funktioniert (`/sitemap-index.xml`)

## 🎯 Lighthouse-Optimierung

Zielwerte für alle Seiten:
- **Performance:** > 90
- **Accessibility:** > 95
- **Best Practices:** > 95
- **SEO:** 100

### Performance-Tipps:

1. Bilder optimieren (WebP/AVIF, responsive srcset)
2. Lazy Loading für untere Bildbereiche
3. Critical CSS inline (bereits implementiert)
4. Font-Display: swap (bereits implementiert)
5. Caching-Header aktivieren (bereits in netlify.toml)

## 🛠️ Technische Details

**Framework:** [Astro](https://astro.build/) - Statischer Site Generator

**Styling:** 
- Tailwind CSS für Utility-First CSS
- CSS-Variablen für Brand Colors

**Komponenten:**
- Astro-Komponenten (`.astro`)
- Kein JavaScript-Framework notwendig
- Client-seitiges JS nur wo nötig (Cookie-Banner)

**SEO:**
- automatische Sitemap-Generierung
- robots.txt
- Structured Data (JSON-LD) für LocalBusiness, Service, FAQ
- Canonical URLs
- Open Graph Tags

## 📝 Lizenz

Diese Website wurde für Diell Dienstleistungen erstellt.

---

Bei Fragen oder Problemen:
- WhatsApp: +49 1515 6357966
- E-Mail: kadrikuqica1@icloud.com
