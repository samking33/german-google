import { ShieldCheck, Users, Clock, Award, Star, Leaf } from "lucide-react";
import germanLogo from "./assets/german-logo.png";

/* ─────────────────────────────────────────────
   IMAGES – all from /images folder
───────────────────────────────────────────── */
export const IMAGES = {
  heroMain: "/images/hero-main.jpg",
  heroSide: "/images/hero-side-detail.jpg",
  heroCleaning: "/images/hero-cleaning 2.png",
  heroCleaningPNG: "/images/hero-cleaning.png",
  heroBg: "/images/hero-bg.jpg",

  aboutPortrait: "/images/About portrait image.jpg",
  teamAbstract: "/images/team-abstract.jpg",
  statementWorkspace: "/images/Statement workspace image.jpeg",
  processDetail: "/images/Process detail image.jpg",
  professionalCleaning: "/images/Professional cleaning image.jpg",
  atmosphericBreak: "/images/Atmospheric break image.jpeg",
  badVilbelAerial: "/images/Aerial location image.jpg",

  servicesHero: "/images/Services CTA background.jpg",
  servicesBg: "/images/Services CTA background.jpg",
  serviceCTA: "/images/Services CTA background.jpg",
  servicePlaceholder: "/images/Professional cleaning image.jpg",
  servicePlaceholderDetail: "/images/Process detail image.jpg",

  serviceContainer: "/images/Containerreinigung.png",
  serviceRoughConstruction: "/images/Baugrobreinigung.png",
  serviceConstructionAccompanying: "/images/services-optimized/baubegleitende-reinigung.webp",
  serviceFinalConstruction: "/images/Bauendreinigung.png",
  serviceDeepCleaning: "/images/services-optimized/grundreinigung.webp",
  serviceMaintenanceCleaning: "/images/services-optimized/unterhaltsreinigung.webp",
  serviceCarpetFloorCleaning: "/images/services-optimized/teppich-bodenbelag.webp",
  serviceFacadeCleaning: "/images/services-optimized/fassadenreinigung.webp",
  serviceGlassCleaning: "/images/services-optimized/glasreinigung.webp",
  serviceFrameCleaning: "/images/services-optimized/rahmenreinigung.webp",
  serviceSmallDemolition: "/images/services-optimized/kleine-abbrucharbeiten.webp",
  serviceWinter: "/images/services-optimized/winterdienst.webp",

  kontaktHero: "/images/Contact detail image.jpg",
  kontaktDetail: "/images/Contact detail image.jpg",
  contactTexture: "/images/Contact texture image.jpg",

  footerAtmosphere: "/images/footer-atmosphere.png",
  legalHero: "/images/legal.jpg",
};

export const LOGO = germanLogo;

export type ServiceCategory = "cleaning" | "glass-exterior" | "construction" | "facility";
export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  imageDetail: string;
  imageAlt: string;
  color: "#003580" | "#00c4b3" | "#c9a84c";
  category: ServiceCategory;
};

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "containerreinigung",
    title: "Containerreinigung",
    subtitle: "Hygienisch. Geruchsfrei. Zuverlässig.",
    description:
      "Wir reinigen Abfall- und Lagercontainer gründlich, desinfizierend und termingerecht für einen sauberen Betrieb.",
    longDescription:
      "Wir wissen, dass Container täglich hoher Belastung ausgesetzt sind und regelmäßige Pflege brauchen. Wir entfernen Rückstände, Gerüche und Keime zuverlässig. So bleiben die Flächen hygienisch, sicher und repräsentativ.",
    features: [
      "Innen- und Außenreinigung",
      "Desinfektion",
      "Geruchsneutralisation",
      "Abfallplatzpflege",
      "Flexible Intervalle",
      "Gewerbe & Wohnanlagen",
    ],
    image: IMAGES.serviceContainer,
    imageDetail: IMAGES.serviceContainer,
    imageAlt: "Reinigung von Bau- und Sanitärcontainern",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "02",
    slug: "baugrobreinigung",
    title: "Baugrobreinigung",
    subtitle: "Ordnung auf der Baustelle.",
    description:
      "Wir entfernen Grobschmutz, Verpackungen und Baumaterialreste für sichere und effiziente Bauabläufe.",
    longDescription:
      "Wir entfernen während der Bauphase laufend Schmutz und Rückstände. Mit der Baugrobreinigung schaffen wir klare Arbeitsbereiche und reduzieren Unfallrisiken. Dadurch arbeiten alle Gewerke strukturierter und schneller.",
    features: [
      "Entfernung von Grobschmutz",
      "Laufwege freihalten",
      "Staubreduktion",
      "Sicherheitsorientierte Reinigung",
      "Regelmäßige Einsätze",
      "Alle Bauphasen",
    ],
    image: IMAGES.serviceRoughConstruction,
    imageDetail: IMAGES.serviceRoughConstruction,
    imageAlt: "Baugrobreinigung auf einer aktiven Baustelle",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "03",
    slug: "baubegleitende-reinigung",
    title: "Baubegleitende Reinigung",
    subtitle: "Kontinuierlich sauber im Projektverlauf.",
    description:
      "Mit regelmäßigen Reinigungseinsätzen während der Bauzeit halten wir Flächen nutzbar und Abläufe stabil.",
    longDescription:
      "Wir sorgen mit der baubegleitenden Reinigung dafür, dass das Objekt während der gesamten Bauzeit in einem kontrollierten Zustand bleibt. Wir stimmen Taktung und Umfang eng auf den Baufortschritt ab. So wird die Übergabe deutlich effizienter vorbereitet.",
    features: [
      "Intervallreinigung",
      "Abstimmung mit Bauleitung",
      "Etagenweise Einsätze",
      "Staubmanagement",
      "Schutz sensibler Bereiche",
      "Dokumentierte Durchführung",
    ],
    image: IMAGES.serviceConstructionAccompanying,
    imageDetail: IMAGES.serviceConstructionAccompanying,
    imageAlt: "/images/Construction-Accompanying Cleaning.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "04",
    slug: "bauendreinigung",
    title: "Bauendreinigung",
    subtitle: "Übergabefertig bis ins Detail.",
    description:
      "Wir liefern eine gründliche Endreinigung für die bezugs- und übergabefertige Immobilie.",
    longDescription:
      "Nach Abschluss aller Bauarbeiten bereiten wir das Objekt professionell für die Übergabe vor. Wir entfernen Feinstaub, Folienreste und Bauschmutz systematisch. So entsteht ein sauberer, hochwertiger Gesamteindruck.",
    features: [
      "Feinreinigung aller Flächen",
      "Entfernung von Schutzfolien",
      "Fenster- und Rahmenreinigung",
      "Sanitär-Endreinigung",
      "Bodenaufbereitung",
      "Übergabecheck",
    ],
    image: IMAGES.serviceFinalConstruction,
    imageDetail: IMAGES.serviceFinalConstruction,
    imageAlt: "Bauendreinigung vor der Objektübergabe",
    color: "#00c4b3",
    category: "cleaning",
  },
  {
    id: "05",
    slug: "grundreinigung",
    title: "Grundreinigung",
    subtitle: "Tiefenreinigung. Neustart.",
    description:
      "Wir führen eine intensive Tiefenreinigung für Böden, Oberflächen und schwer zugängliche Bereiche durch, wenn Standardreinigung nicht ausreicht.",
    longDescription:
      "Manchmal braucht es mehr als Routine. Wir entfernen hartnäckige Verschmutzungen, Beläge und alte Pflegemittelschichten maschinell und manuell. So stellen wir die volle Hygiene und Werterhaltung der Flächen wieder her.",
    features: [
      "Steinböden",
      "PVC & Linoleum",
      "Parkett & Laminat",
      "Industrieböden",
      "Sanitäranlagen",
      "Maschineneinsatz",
    ],
    image: IMAGES.serviceDeepCleaning,
    imageDetail: IMAGES.serviceDeepCleaning,
    imageAlt: "/images/Deep Cleaning.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "06",
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    subtitle: "Tägliche Pflege. Dauerhafter Glanz.",
    description:
      "Wir reinigen Objekte regelmäßig und zuverlässig für ein dauerhaft gepflegtes und professionelles Erscheinungsbild.",
    longDescription:
      "Für uns ist Sauberkeit das Fundament eines professionellen Auftritts. Wir reinigen täglich oder im Wunschintervall und stimmen alles exakt auf die Nutzung ab. So bleiben die Räume dauerhaft einladend und hygienisch.",
    features: [
      "Büros & Kanzleien",
      "Praxen & Kliniken",
      "Verkaufsflächen",
      "Schulen & Behörden",
      "Logistikflächen",
      "Flexible Turnusse",
    ],
    image: IMAGES.serviceMaintenanceCleaning,
    imageDetail: IMAGES.serviceMaintenanceCleaning,
    imageAlt: "/images/Maintenance Cleaning.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "07",
    slug: "teppich-bodenbelagsreinigung",
    title: "Teppich- & Bodenbelagsreinigung",
    subtitle: "Frische Optik für stark genutzte Böden.",
    description:
      "Wir reinigen textile und elastische Bodenbeläge materialgerecht und gründlich für eine lange Nutzungsdauer.",
    longDescription:
      "Wir wissen, dass Bodenbeläge den ersten Eindruck der Räume prägen. Mit abgestimmten Reinigungsverfahren entfernen wir tief sitzenden Schmutz und erhalten die Materialqualität. Das verbessert Hygiene, Optik und Wertigkeit.",
    features: [
      "Teppichböden",
      "Polsternahe Randzonen",
      "Fleckbehandlung",
      "Schonende Verfahren",
      "Geruchsreduzierung",
      "Werterhalt der Beläge",
    ],
    image: IMAGES.serviceCarpetFloorCleaning,
    imageDetail: IMAGES.serviceCarpetFloorCleaning,
    imageAlt: "/images/Carpet & Floor Covering Cleaning.jpg",
    color: "#00c4b3",
    category: "cleaning",
  },
  {
    id: "08",
    slug: "fassadenreinigung",
    title: "Fassadenreinigung",
    subtitle: "Außen glänzend. Werterhaltend.",
    description:
      "Wir reinigen Fassadenmaterialien schonend und gründlich, um Optik und Substanz der Immobilie zu schützen.",
    longDescription:
      "Wir sehen täglich, wie Witterung und Umwelteinflüsse jede Fassade belasten. Wir entfernen Rückstände materialgerecht und steigern den Gesamteindruck des Objekts. Gleichzeitig unterstützen wir den langfristigen Werterhalt.",
    features: [
      "Klinker & Putz",
      "Naturstein",
      "Algen- und Moosentfernung",
      "Graffiti-Entfernung",
      "Schonende Verfahren",
      "Hydrophobierung optional",
    ],
    image: IMAGES.serviceFacadeCleaning,
    imageDetail: IMAGES.serviceFacadeCleaning,
    imageAlt: "/images/Facade Cleaning.jpg",
    color: "#003580",
    category: "glass-exterior",
  },
  {
    id: "09",
    slug: "glasreinigung",
    title: "Glasreinigung",
    subtitle: "Streifenfrei. Klar. Repräsentativ.",
    description:
      "Wir reinigen Glasflächen professionell für maximale Transparenz und einen überzeugenden ersten Eindruck.",
    longDescription:
      "Wir wissen, dass klare Glasflächen die Qualität eines Gebäudes unterstreichen. Wir reinigen präzise, streifenfrei und auf die Objektstruktur abgestimmt. Innen- und Außenflächen pflegen wir zuverlässig.",
    features: [
      "Fensterflächen",
      "Schaufenster",
      "Glasfassaden",
      "Dachverglasungen",
      "Innen- und Außenreinigung",
      "Regelmäßige Intervalle",
    ],
    image: IMAGES.serviceGlassCleaning,
    imageDetail: IMAGES.serviceGlassCleaning,
    imageAlt: "/images/Glass Cleaning.jpg",
    color: "#00c4b3",
    category: "glass-exterior",
  },
  {
    id: "10",
    slug: "rahmenreinigung",
    title: "Rahmenreinigung",
    subtitle: "Das Detail macht den Unterschied.",
    description:
      "Wir reinigen Fenster- und Türelemente inklusive Rahmen, Falzen und Beschlägen gründlich und materialgerecht.",
    longDescription:
      "Wir wissen, dass saubere Rahmen entscheidend für ein vollständig gepflegtes Erscheinungsbild sind. Wir entfernen Schmutz in Kanten und Fugen präzise und schonend. Das verbessert Optik und Funktion dauerhaft.",
    features: [
      "Fensterrahmen",
      "Türrahmen",
      "Falz- und Kantenreinigung",
      "Beschläge & Dichtungen",
      "Materialgerechte Pflege",
      "Kombinierbar mit Glasreinigung",
    ],
    image: IMAGES.serviceFrameCleaning,
    imageDetail: IMAGES.serviceFrameCleaning,
    imageAlt: "/images/Frame Cleaning.jpg",
    color: "#c9a84c",
    category: "glass-exterior",
  },
  {
    id: "11",
    slug: "kleine-abbrucharbeiten",
    title: "Kleine Abbrucharbeiten",
    subtitle: "Kontrolliert rückbauen.",
    description:
      "Wir führen kleine Rückbau- und Abbrucharbeiten sicher, strukturiert und sauber durch.",
    longDescription:
      "Für Umbauten sind oft vorbereitende Rückbauarbeiten erforderlich. Wir entfernen Bauteile kontrolliert und achten auf sichere Arbeitsbereiche. Anschließend hinterlassen wir die Fläche bereit für den nächsten Schritt.",
    features: [
      "Selektiver Rückbau",
      "Sichere Arbeitsweise",
      "Kleinflächen-Abbruch",
      "Staubarme Durchführung",
      "Baustellenordnung",
      "Abtransportvorbereitung",
    ],
    image: IMAGES.serviceSmallDemolition,
    imageDetail: IMAGES.serviceSmallDemolition,
    imageAlt: "/images/Small Demolition Works.jpg",
    color: "#c9a84c",
    category: "construction",
  },
  {
    id: "12",
    slug: "winterdienst",
    title: "Winterdienst",
    subtitle: "Sicher durch Eis und Schnee.",
    description:
      "Wir sichern Wege, Zufahrten und Eingänge durch Räumen und Streuen im Winter zuverlässig ab.",
    longDescription:
      "Im Winter sind schnelle Reaktionszeiten entscheidend. Wir sorgen für sichere Begeh- und Befahrbarkeit der Flächen bei Schnee und Glätte. Das reduziert Risiken und schafft verlässliche Verhältnisse.",
    features: [
      "Schneeräumung",
      "Streudienst",
      "Eingangsbereiche",
      "Parkplätze & Zufahrten",
      "Früh- und Bereitschaftseinsätze",
      "Objektbezogene Pläne",
    ],
    image: IMAGES.serviceWinter,
    imageDetail: IMAGES.serviceWinter,
    imageAlt: "/images/winter service.jpg",
    color: "#003580",
    category: "facility",
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
  sales: "",
  salesName: "",
  email: "info@m-aktas.de",
  website: "www.m-aktas.de",
  founded: "2013",
  hours: "Montag – Freitag, 08:00 – 14:00",
};

/* ─────────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────────── */
export const PROCESS = [
  {
    step: "01",
    title: "Kontaktaufnahme",
    description: "Wir nehmen Anfragen unverbindlich entgegen und melden uns innerhalb von 24 Stunden.",
  },
  {
    step: "02",
    title: "Begehung & Analyse",
    description: "Wir besichtigen das Objekt und analysieren den Bedarf vor Ort.",
  },
  {
    step: "03",
    title: "Individuelles Angebot",
    description: "Wir erstellen ein transparentes, maßgeschneidertes Angebot.",
  },
  {
    step: "04",
    title: "Professionelle Ausführung",
    description: "Unser erfahrenes Team führt die Arbeiten termingerecht und diskret aus.",
  },
];
