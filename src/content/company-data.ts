// Firmendaten für Diell Dienstleistungen
export const companyData = {
  name: 'Diell Dienstleistungen',
  owner: 'Kadri Kuqica',
  address: {
    street: 'Appenzellerweg 3',
    city: 'Laichingen',
    postalCode: '89150',
    country: 'Germany',
    countryCode: 'DE',
  },
  fullAddress: 'Appenzellerweg 3, 89150 Laichingen, Germany',
  email: 'kadrikuqica1@icloud.com',
  phone: '+49 1515 6357966',
  phoneFormatted: '+49 1515 6357966',
  taxNumber: '89440/01914',
  brandColors: {
    primary: '#fad447',
    accent: '#b4f460',
  },
  foundingYear: 2020,
  serviceArea: ['Laichingen', 'Baden-Württemberg', 'Alb-Donau-Kreis', 'Ulm'],
};

// WhatsApp Link Generator
export function getWhatsAppLink(message?: string): string {
  const phone = '4915156357966';
  const defaultMessage = message || 'Hallo, ich interessiere mich für Ihre Leistungen.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
}

// Service Daten für alle Leistungen
export const services = [
  {
    id: 'trockenbau-unterkonstruktion',
    slug: 'trockenbau-unterkonstruktion',
    title: 'Montage der CD/UD-Profile (Trockenbau Unterkonstruktion)',
    shortTitle: 'Trockenbau Unterkonstruktion',
    metaTitle: 'Trockenbau Laichingen | CD/UD-Profile Montage | Diell Dienstleistungen',
    metaDescription: 'Professionelle Trockenbau Unterkonstruktion in Laichingen. Montage von CD/UD-Profilen für Wände, Decken und Vorhangschienen. ✓ Qualität ✓ Termintreue',
    h1: 'Trockenbau Unterkonstruktion in Laichingen',
    keywords: ['Trockenbau Laichingen', 'CD Profile Montage', 'UD Profile Montage', 'Trockenbau Unterkonstruktion', 'Vorhangschienen Laichingen'],
    description: 'Fachgerechte Montage von CD- und UD-Profilen für Ihren Trockenbau. Solide Basis für Wände, Decken und Vorhangschienen mit höchster Präzision.',
    icon: 'construction',
  },
  {
    id: 'flurgestaltung',
    slug: 'flurgestaltung',
    title: 'Flurgestaltung',
    shortTitle: 'Flurgestaltung',
    metaTitle: 'Flurgestaltung Laichingen | Innenausbau Flur | Diell Dienstleistungen',
    metaDescription: 'Kreative Flurgestaltung in Laichingen. Wir verwandeln Ihren Flur in ein stilvolles Entree. ✓ Modern ✓ Funktional ✓ Individuell',
    h1: 'Flurgestaltung in Laichingen',
    keywords: ['Flurgestaltung Laichingen', 'Flur renovieren', 'Eingangsbereich gestalten', 'Innenausbau Flur', 'Flur Ideen'],
    description: 'Ihr Flur ist die Visitenkarte Ihres Zuhauses. Wir gestalten ihn funktional, einladend und stilvoll nach Ihren Wünschen.',
    icon: 'door-open',
  },
  {
    id: 'gipskarton-led',
    slug: 'gipskarton-led',
    title: 'Montage der Gipskartonplatte und LED',
    shortTitle: 'Gipskarton & LED',
    metaTitle: 'Gipskarton Montage Laichingen | LED Beleuchtung | Diell Dienstleistungen',
    metaDescription: 'Gipskartonplatten Montage und LED Beleuchtung in Laichingen. Perfekte Oberflächen mit indirektem Licht. ✓ Saubere Arbeit ✓ Moderne Technik',
    h1: 'Gipskarton Montage & LED Beleuchtung in Laichingen',
    keywords: ['Gipskarton Montage Laichingen', 'Rigips verlegen', 'LED Beleuchtung', 'Indirektes Licht', 'Deckenbeleuchtung'],
    description: 'Präzise Gipskartonplatten-Montage kombiniert mit modernster LED-Beleuchtung für beeindruckende Lichteffekte und perfekte Oberflächen.',
    icon: 'lightbulb',
  },
  {
    id: 'spachtelarbeiten',
    slug: 'spachtelarbeiten',
    title: 'Spachtelarbeiten',
    shortTitle: 'Spachtelarbeiten',
    metaTitle: 'Spachtelarbeiten Laichingen | Gipserarbeiten | Diell Dienstleistungen',
    metaDescription: 'Professionelle Spachtelarbeiten in Laichingen. Glatte Wände und Decken für perfekte Oberflächen. ✓ Spachtelmeister-Qualität ✓ Garantie',
    h1: 'Spachtelarbeiten in Laichingen',
    keywords: ['Spachtelarbeiten Laichingen', 'Gipserarbeiten', 'Wände spachteln', 'Decken spachteln', 'Glätten'],
    description: 'Perfekte Oberflächen durch fachgerechte Spachtelarbeiten. Wir sorgen für glatte Wände und Decken als Basis für hochwertige Malerarbeiten.',
    icon: 'paint-roller',
  },
  {
    id: 'renovierung-innenausbau',
    slug: 'renovierung-innenausbau',
    title: 'RENOVIERUNG & INNENAUSBAU',
    shortTitle: 'Renovierung & Innenausbau',
    metaTitle: 'Renovierung Laichingen | Innenausbau Komplettlösung | Diell Dienstleistungen',
    metaDescription: 'Komplette Renovierung und Innenausbau in Laichingen. Vom Konzept bis zur Fertigstellung aus einer Hand. ✓ Erfahrung ✓ Zuverlässigkeit',
    h1: 'Renovierung & Innenausbau in Laichingen',
    keywords: ['Renovierung Laichingen', 'Innenausbau', 'Wohnung renovieren', 'Haus sanieren', 'Komplettrenovierung'],
    description: 'Umfassende Renovierungslösungen für Ihr Zuhause oder Gewerbeobjekt. Wir begleiten Sie von der Planung bis zur Schlüsselübergabe.',
    icon: 'home',
  },
];

// Zusätzliche Leistungen
export const additionalServices = [
  {
    title: 'Hausmeisterservice',
    description: 'Zuverlässige Betreuung Ihrer Immobilie – von der Wartung bis zur Reparatur.',
    icon: 'wrench',
  },
  {
    title: 'Gartenpflege',
    description: 'Professionelle Pflege Ihrer Grünanlagen für ganzjährige Schönheit.',
    icon: 'leaf',
  },
  {
    title: 'Reinigungsservice',
    description: 'Gründliche Reinigungsarbeiten für ein makelloses Ergebnis.',
    icon: 'sparkles',
  },
];

// Schema.org JSON-LD Generatoren
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: companyData.name,
    description: 'Renovierung und Innenausbau in Laichingen. Professionelle Trockenbau, Spachtel- und Gipsarbeiten aus einer Hand.',
    url: 'https://diell-dienstleistungen.de',
    telephone: companyData.phone,
    email: companyData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyData.address.street,
      addressLocality: companyData.address.city,
      postalCode: companyData.address.postalCode,
      addressCountry: companyData.address.countryCode,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.4914,
        longitude: 9.6843,
      },
      geoRadius: '50000',
    },
    priceRange: '€€',
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Diell+Dienstleistungen+Laichingen',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function generateServiceSchema(service: typeof services[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: companyData.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Laichingen',
    },
    serviceType: service.shortTitle,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://diell-dienstleistungen.de${crumb.url}`,
    })),
  };
}

export function generateReviewSchema(reviews: Array<{ author: string; rating: number; text: string; date: string }>) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.text,
    datePublished: review.date,
    publisher: {
      '@type': 'HomeAndConstructionBusiness',
      name: companyData.name,
    },
  }));
}
