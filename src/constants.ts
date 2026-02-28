import { ShieldCheck, Users, Clock, Award, Star, Leaf } from "lucide-react";

/* ─────────────────────────────────────────────
   IMAGES – all from /images folder
───────────────────────────────────────────── */
export const IMAGES = {
  heroMain: "/images/hero-main.jpg",
  heroSide: "/images/hero-side-detail.jpg",
  heroCleaning: "/images/hero-cleaning 2.png",
  heroCleaningPNG: "/images/hero-cleaning.png.png",
  heroBg: "/images/hero-bg.jpg",

  aboutPortrait: "/images/why-aktas-portrait.jpg",
  teamAbstract: "/images/team-abstract.jpg",
  statementWorkspace: "/images/statement-workspace.jpg",
  processDetail: "/images/process-detail.jpg",
  professionalCleaning: "/images/professional-cleaning.jpg",
  atmosphericBreak: "/images/atmospheric-break.jpg",
  badVilbelAerial: "/images/bad-vilbel-aerial.jpg",

  servicesHero: "/images/leistungen-hero.jpg",
  servicesBg: "/images/services-bg.jpg",
  serviceCTA: "/images/service-cta-bg.jpg",

  serviceUnterhalts: "/images/service-unterhaltsreinigung.png.png",
  serviceUnterhaltsDetail: "/images/service-detail-unterhalts.jpg",
  serviceUnterhaltsJpg: "/images/service-unterhalts.jpg",
  serviceBueroDetail: "/images/service-detail-buero.jpg",

  serviceGlas: "/images/service-glasreinigung.png.png",
  serviceGlasDetail: "/images/service-detail-glas.jpg",
  serviceGlasJpg: "/images/service-glas.jpg",

  serviceGrundreinigung: "/images/service-grundreinigung.png.png",
  serviceGrundreinigungBg: "/images/service-grundreinigung-bg.jpg",

  serviceSonderreinigung: "/images/service-sonderreinigung.png.png",

  serviceTreppenhaus: "/images/service-treppenhaus.png.png",
  serviceTreppenhausDetail: "/images/service-detail-treppe.jpg",

  serviceFassade: "/images/service-fassade.png.png",
  serviceAussenanlagen: "/images/service-aussenanlagen.jpg",

  kontaktHero: "/images/kontakt-hero.jpg",
  kontaktDetail: "/images/kontakt-detail.jpg",
  contactTexture: "/images/contact-texture.jpg",

  footerAtmosphere: "/images/footer-atmosphere.png",
};

export const LOGO = "/documents/logo.jpg";

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
export const SERVICES = [
  {
    id: "01",
    slug: "unterhaltsreinigung",
    title: "Unterhalts­reinigung",
    subtitle: "Tägliche Pflege. Dauerhafter Glanz.",
    description:
      "Regelmäßige, zuverlässige Reinigung Ihrer Geschäftsräume für ein dauerhaft gepflegtes und professionelles Erscheinungsbild – individuell auf Ihren Betrieb abgestimmt.",
    longDescription:
      "Sauberkeit ist keine Selbstverständlichkeit, sie ist das Fundament eines professionellen Auftritts. Unsere Unterhaltsreinigung sorgt täglich oder nach Ihrem Wunschintervall dafür, dass Ihre Räumlichkeiten stets in bestem Zustand sind.",
    features: ["Büros & Kanzleien", "Praxen & Kliniken", "Verkaufsflächen", "Schulen & Behörden", "Logistikflächen", "Wochentäglich buchbar"],
    image: IMAGES.serviceUnterhalts,
    imageDetail: IMAGES.serviceUnterhaltsDetail,
    imageAlt: "/images/service-unterhalts.jpg",
    color: "#003580",
  },
  {
    id: "02",
    slug: "glasreinigung",
    title: "Glas- & Fassaden­reinigung",
    subtitle: "Streifenfrei. Kristallklar. Beeindruckend.",
    description:
      "Perfekt klare Scheiben, glänzende Glasfassaden und makellose Rahmen – für einen ersten Eindruck, der begeistert. Innen wie außen.",
    longDescription:
      "Ihr Gebäude ist Ihre Visitenkarte. Schmutzige Fensterscheiben trüben diesen Eindruck. Mit unserer professionellen Glas- und Fassadenreinigung erstrahlt Ihr Objekt in neuem Glanz.",
    features: ["Rahmenreinigung", "Glasfassaden", "Schaufenster", "Dachfenster", "Wintergärten", "Hochhausscheiben"],
    image: IMAGES.serviceGlas,
    imageDetail: IMAGES.serviceGlasDetail,
    imageAlt: "/images/service-glas.jpg",
    color: "#00c4b3",
  },
  {
    id: "03",
    slug: "grundreinigung",
    title: "Grunds­reinigung",
    subtitle: "Tiefenreinigung. Neustart.",
    description:
      "Intensive Tiefenreinigung für Böden, Oberflächen und schwer zugängliche Bereiche – wenn normale Reinigung nicht mehr ausreicht.",
    longDescription:
      "Manchmal braucht es mehr als Routine. Unsere Grundreinigung entfernt hartnäckige Verschmutzungen, Beläge und alte Pflegemittelschichten – maschinell und von Hand.",
    features: ["Steinböden", "PVC & Linoleum", "Parkett & Laminat", "Industrieböden", "Sanitäranlagen", "Maschineneinsatz"],
    image: IMAGES.serviceGrundreinigung,
    imageDetail: IMAGES.serviceGrundreinigungBg,
    imageAlt: "/images/service-grundreinigung-bg.jpg",
    color: "#003580",
  },
  {
    id: "04",
    slug: "sonderreinigung",
    title: "Sonder­reinigung",
    subtitle: "Außergewöhnlich. Gründlich. Diskret.",
    description:
      "Spezielle Reinigungsleistungen für besondere Situationen – schnell, diskret und professionell durchgeführt.",
    longDescription:
      "Von Brandschadensanierung über Entrümpelung bis zur Desinfektion: Unsere Sonderreinigung ist für die außergewöhnlichen Fälle da, in denen normale Reinigung nicht ausreicht.",
    features: ["Brandschadensanierung", "Desinfektion", "Schimmelsanierung", "Tatortreinigung", "Entrümpelung", "Notfalleinsatz"],
    image: IMAGES.serviceSonderreinigung,
    imageDetail: IMAGES.kontaktDetail,
    imageAlt: "/images/service-sonderreinigung.png.png",
    color: "#c9a84c",
  },
  {
    id: "05",
    slug: "treppenhaus",
    title: "Treppen­haus­reinigung",
    subtitle: "Verbindend. Sauber. Sicher.",
    description:
      "Gepflegte Treppenhäuser sind das Aushängeschild jedes Gebäudes. Wir sorgen dafür, dass der erste Eindruck Ihrer Mieter stimmt.",
    longDescription:
      "Das Treppenhaus ist der gemeinsame Raum aller Bewohner. Mit unserer zuverlässigen Reinigung bleibt dieser Bereich hygienisch, sauber und einladend.",
    features: ["Mehrfamilienhäuser", "Wohnanlagen", "Gewerbeobjekte", "Briefkästen", "Keller & Flure", "Wöchentlicher Turnus"],
    image: IMAGES.serviceTreppenhaus,
    imageDetail: IMAGES.serviceTreppenhausDetail,
    imageAlt: "/images/service-treppenhaus.png.png",
    color: "#00c4b3",
  },
  {
    id: "06",
    slug: "fassadenreinigung",
    title: "Fassaden­reinigung",
    subtitle: "Außen glänzend. Innen wertsteigernd.",
    description:
      "Saubere Fassaden schützen Ihre Immobilie vor Verwitterung und Moosbewuchs – und erhöhen dauerhaft den Wert Ihres Objekts.",
    longDescription:
      "Algen, Moose und Luftschadstoffe setzen Ihrer Fassade zu. Unsere professionelle Fassadenreinigung entfernt hartnäckige Rückstände schonend und effektiv.",
    features: ["Klinker & Putz", "Naturstein", "Kalkschlämme", "Graffiti-Entfernung", "Hydrophobierung", "Dachrinnenreinigung"],
    image: IMAGES.serviceFassade,
    imageDetail: IMAGES.serviceAussenanlagen,
    imageAlt: "/images/service-fassade.png.png",
    color: "#003580",
  },
];

/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
export const STATS = [
  { icon: Clock, label: "Jahre Erfahrung", value: "23+", suffix: "" },
  { icon: Users, label: "Mitarbeiter", value: "70", suffix: "+" },
  { icon: ShieldCheck, label: "Zertifiziert", value: "100", suffix: "%" },
  { icon: Award, label: "Kundenzufriedenheit", value: "Top", suffix: "" },
  { icon: Star, label: "Objekte betreut", value: "500", suffix: "+" },
  { icon: Leaf, label: "Nachhaltig", value: "Öko", suffix: "" },
];

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
export const CONTACT = {
  name: "Aktas Gebäudereinigung GmbH",
  ceo: "Mithat Aktas",
  address: "Friedrich-Ebert-Str. 47",
  city: "61118 Bad Vilbel",
  phone: "06101 / 98 611 63",
  sales: "0178 24 35 766",
  salesName: "Nevzat Arslan",
  email: "info@m-aktas.de",
  website: "www.m-aktas.de",
  founded: "2013",
  hours: "Mo–Fr: 08:00–16:00 Uhr",
};

/* ─────────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────────── */
export const PROCESS = [
  {
    step: "01",
    title: "Kontaktaufnahme",
    description: "Sie nehmen unverbindlich Kontakt auf. Wir melden uns innerhalb von 24 Stunden.",
  },
  {
    step: "02",
    title: "Begehung & Analyse",
    description: "Wir besichtigen Ihr Objekt und analysieren Ihren Bedarf vor Ort.",
  },
  {
    step: "03",
    title: "Individuelles Angebot",
    description: "Sie erhalten ein transparentes, maßgeschneidertes Angebot.",
  },
  {
    step: "04",
    title: "Professionelle Ausführung",
    description: "Unser erfahrenes Team führt die Arbeiten termingerecht und diskret aus.",
  },
];
