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
  servicePlaceholder: "/images/services-bg.jpg",
  servicePlaceholderDetail: "/images/process-detail.jpg",

  serviceUnterhalts: "/images/service-unterhaltsreinigung.png",
  serviceUnterhaltsDetail: "/images/service-detail-unterhalts.jpg",
  serviceUnterhaltsJpg: "/images/service-unterhalts.jpg",
  serviceBueroDetail: "/images/service-detail-buero.jpg",

  serviceGlas: "/images/service-glasreinigung.png",
  serviceGlasDetail: "/images/service-detail-glas.jpg",
  serviceGlasJpg: "/images/service-glas.jpg",

  serviceGrundreinigung: "/images/service-grundreinigung.png",
  serviceGrundreinigungBg: "/images/service-grundreinigung-bg.jpg",

  serviceSonderreinigung: "/images/service-sonderreinigung.png",

  serviceTreppenhaus: "/images/service-treppenhaus.png",
  serviceTreppenhausDetail: "/images/service-detail-treppe.jpg",

  serviceFassade: "/images/service-fassade.png",
  serviceAussenanlagen: "/images/service-aussenanlagen.jpg",

  kontaktHero: "/images/kontakt-hero.jpg",
  kontaktDetail: "/images/kontakt-detail.jpg",
  contactTexture: "/images/contact-texture.jpg",

  footerAtmosphere: "/images/footer-atmosphere.png",
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
      "Container sind täglich hoher Belastung ausgesetzt und benötigen regelmäßige Pflege. Unsere Containerreinigung entfernt Rückstände, Gerüche und Keime zuverlässig. So bleiben Ihre Flächen hygienisch, sicher und repräsentativ.",
    features: [
      "Innen- und Außenreinigung",
      "Desinfektion",
      "Geruchsneutralisation",
      "Abfallplatzpflege",
      "Flexible Intervalle",
      "Gewerbe & Wohnanlagen",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
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
      "Während der Bauphase entstehen laufend Schmutz und Rückstände. Mit der Baugrobreinigung schaffen wir klare Arbeitsbereiche und reduzieren Unfallrisiken. Dadurch arbeiten alle Gewerke strukturierter und schneller.",
    features: [
      "Entfernung von Grobschmutz",
      "Laufwege freihalten",
      "Staubreduktion",
      "Sicherheitsorientierte Reinigung",
      "Regelmäßige Einsätze",
      "Alle Bauphasen",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "03",
    slug: "bauabfallentsorgung",
    title: "Bauabfallentsorgung",
    subtitle: "Sauber entsorgt. Rechtssicher dokumentiert.",
    description:
      "Wir übernehmen die fachgerechte Erfassung, Sortierung und Entsorgung von Bauabfällen nach geltenden Vorgaben.",
    longDescription:
      "Baustellen erzeugen unterschiedliche Abfallarten, die korrekt behandelt werden müssen. Wir organisieren die geordnete Trennung und Entsorgung inklusive nachvollziehbarer Abläufe. Das entlastet Ihr Team und sorgt für klare Prozesse.",
    features: [
      "Sortierung nach Fraktionen",
      "Abtransportorganisation",
      "Rechtssichere Abläufe",
      "Containerkoordination",
      "Baustellenlogistik",
      "Zeitnahe Abholung",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#c9a84c",
    category: "construction",
  },
  {
    id: "04",
    slug: "baubegleitende-reinigung",
    title: "Baubegleitende Reinigung",
    subtitle: "Kontinuierlich sauber im Projektverlauf.",
    description:
      "Mit regelmäßigen Reinigungseinsätzen während der Bauzeit halten wir Flächen nutzbar und Abläufe stabil.",
    longDescription:
      "Die baubegleitende Reinigung sorgt dafür, dass Ihr Objekt während der gesamten Bauzeit in einem kontrollierten Zustand bleibt. Wir stimmen Taktung und Umfang eng auf den Baufortschritt ab. So wird die Übergabe deutlich effizienter vorbereitet.",
    features: [
      "Intervallreinigung",
      "Abstimmung mit Bauleitung",
      "Etagenweise Einsätze",
      "Staubmanagement",
      "Schutz sensibler Bereiche",
      "Dokumentierte Durchführung",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "05",
    slug: "bauendreinigung",
    title: "Bauendreinigung",
    subtitle: "Übergabefertig bis ins Detail.",
    description:
      "Wir liefern eine gründliche Endreinigung für die bezugs- und übergabefertige Immobilie.",
    longDescription:
      "Nach Abschluss aller Bauarbeiten bereiten wir Ihr Objekt professionell für die Übergabe vor. Feinstaub, Folienreste und Bauschmutz werden systematisch entfernt. Das Ergebnis ist ein sauberer, hochwertiger Gesamteindruck.",
    features: [
      "Feinreinigung aller Flächen",
      "Entfernung von Schutzfolien",
      "Fenster- und Rahmenreinigung",
      "Sanitär-Endreinigung",
      "Bodenaufbereitung",
      "Übergabecheck",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#00c4b3",
    category: "cleaning",
  },
  {
    id: "06",
    slug: "grundreinigung",
    title: "Grundreinigung",
    subtitle: "Tiefenreinigung. Neustart.",
    description:
      "Intensive Tiefenreinigung für Böden, Oberflächen und schwer zugängliche Bereiche, wenn Standardreinigung nicht ausreicht.",
    longDescription:
      "Manchmal braucht es mehr als Routine. Unsere Grundreinigung entfernt hartnäckige Verschmutzungen, Beläge und alte Pflegemittelschichten maschinell und manuell. So stellen wir die volle Hygiene und Werterhaltung Ihrer Flächen wieder her.",
    features: [
      "Steinböden",
      "PVC & Linoleum",
      "Parkett & Laminat",
      "Industrieböden",
      "Sanitäranlagen",
      "Maschineneinsatz",
    ],
    image: IMAGES.serviceGrundreinigung,
    imageDetail: IMAGES.serviceGrundreinigungBg,
    imageAlt: "/images/service-grundreinigung-bg.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "07",
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    subtitle: "Tägliche Pflege. Dauerhafter Glanz.",
    description:
      "Regelmäßige, zuverlässige Reinigung Ihrer Objekte für ein dauerhaft gepflegtes und professionelles Erscheinungsbild.",
    longDescription:
      "Sauberkeit ist das Fundament eines professionellen Auftritts. Unsere Unterhaltsreinigung erfolgt täglich oder im Wunschintervall und wird exakt auf Ihre Nutzung abgestimmt. So bleiben Ihre Räume dauerhaft einladend und hygienisch.",
    features: [
      "Büros & Kanzleien",
      "Praxen & Kliniken",
      "Verkaufsflächen",
      "Schulen & Behörden",
      "Logistikflächen",
      "Flexible Turnusse",
    ],
    image: IMAGES.serviceUnterhalts,
    imageDetail: IMAGES.serviceUnterhaltsDetail,
    imageAlt: "/images/service-unterhalts.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "08",
    slug: "industriereinigung",
    title: "Industriereinigung",
    subtitle: "Leistungsstark in Produktion und Technik.",
    description:
      "Wir reinigen Produktions- und Technikbereiche mit abgestimmten Verfahren für Sicherheit und Betriebsstabilität.",
    longDescription:
      "In Industrieumgebungen gelten hohe Anforderungen an Verfahren, Sicherheit und Timing. Unsere Teams arbeiten strukturiert, effizient und abgestimmt auf Ihre Prozesse. So bleiben Anlagen, Hallen und Arbeitsbereiche einsatzbereit.",
    features: [
      "Produktionsflächen",
      "Maschinenumfelder",
      "Hallenreinigung",
      "Sicherheitskonforme Abläufe",
      "Schichtnahe Einsätze",
      "Betriebsorientierte Planung",
    ],
    image: IMAGES.professionalCleaning,
    imageDetail: IMAGES.processDetail,
    imageAlt: "/images/professional-cleaning.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "09",
    slug: "teppich-bodenbelagsreinigung",
    title: "Teppich- & Bodenbelagsreinigung",
    subtitle: "Frische Optik für stark genutzte Böden.",
    description:
      "Wir reinigen textile und elastische Bodenbeläge materialgerecht und gründlich für eine lange Nutzungsdauer.",
    longDescription:
      "Bodenbeläge prägen den ersten Eindruck Ihrer Räume. Mit abgestimmten Reinigungsverfahren entfernen wir tief sitzenden Schmutz und erhalten die Materialqualität. Das verbessert Hygiene, Optik und Wertigkeit.",
    features: [
      "Teppichböden",
      "Polsternahe Randzonen",
      "Fleckbehandlung",
      "Schonende Verfahren",
      "Geruchsreduzierung",
      "Werterhalt der Beläge",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#00c4b3",
    category: "cleaning",
  },
  {
    id: "10",
    slug: "strassenreinigung",
    title: "Straßenreinigung",
    subtitle: "Saubere Außenflächen mit System.",
    description:
      "Wir reinigen Verkehrs- und Außenflächen zuverlässig für einen gepflegten und sicheren Gesamteindruck.",
    longDescription:
      "Saubere Straßen und Wege erhöhen Sicherheit und Aufenthaltsqualität. Wir entfernen Schmutz, Laub und Ablagerungen planbar im passenden Intervall. So bleiben Ihre Außenbereiche repräsentativ und nutzbar.",
    features: [
      "Wege & Zufahrten",
      "Kehrdienste",
      "Laubentfernung",
      "Schmutzablagerungen",
      "Objektumfelder",
      "Regelmäßige Touren",
    ],
    image: IMAGES.serviceAussenanlagen,
    imageDetail: IMAGES.badVilbelAerial,
    imageAlt: "/images/service-aussenanlagen.jpg",
    color: "#003580",
    category: "cleaning",
  },
  {
    id: "11",
    slug: "fassadenreinigung",
    title: "Fassadenreinigung",
    subtitle: "Außen glänzend. Werterhaltend.",
    description:
      "Wir reinigen Fassadenmaterialien schonend und gründlich, um Optik und Substanz Ihrer Immobilie zu schützen.",
    longDescription:
      "Witterung und Umwelteinflüsse belasten jede Fassade. Unsere Fassadenreinigung entfernt Rückstände materialgerecht und steigert den Gesamteindruck Ihres Objekts. Gleichzeitig unterstützen wir den langfristigen Werterhalt.",
    features: [
      "Klinker & Putz",
      "Naturstein",
      "Algen- und Moosentfernung",
      "Graffiti-Entfernung",
      "Schonende Verfahren",
      "Hydrophobierung optional",
    ],
    image: IMAGES.serviceFassade,
    imageDetail: IMAGES.serviceAussenanlagen,
    imageAlt: "/images/service-fassade.png",
    color: "#003580",
    category: "glass-exterior",
  },
  {
    id: "12",
    slug: "glasreinigung",
    title: "Glasreinigung",
    subtitle: "Streifenfrei. Klar. Repräsentativ.",
    description:
      "Wir reinigen Glasflächen professionell für maximale Transparenz und einen überzeugenden ersten Eindruck.",
    longDescription:
      "Klare Glasflächen unterstreichen die Qualität eines Gebäudes. Unsere Glasreinigung erfolgt präzise, streifenfrei und auf Ihre Objektstruktur abgestimmt. Innen- und Außenflächen werden zuverlässig gepflegt.",
    features: [
      "Fensterflächen",
      "Schaufenster",
      "Glasfassaden",
      "Dachverglasungen",
      "Innen- und Außenreinigung",
      "Regelmäßige Intervalle",
    ],
    image: IMAGES.serviceGlas,
    imageDetail: IMAGES.serviceGlasDetail,
    imageAlt: "/images/service-glas.jpg",
    color: "#00c4b3",
    category: "glass-exterior",
  },
  {
    id: "13",
    slug: "rahmenreinigung",
    title: "Rahmenreinigung",
    subtitle: "Das Detail macht den Unterschied.",
    description:
      "Wir reinigen Fenster- und Türelemente inklusive Rahmen, Falzen und Beschlägen gründlich und materialgerecht.",
    longDescription:
      "Saubere Rahmen sind entscheidend für ein vollständig gepflegtes Erscheinungsbild. Unsere Rahmenreinigung entfernt Schmutz in Kanten und Fugen präzise und schonend. Das verbessert Optik und Funktion dauerhaft.",
    features: [
      "Fensterrahmen",
      "Türrahmen",
      "Falz- und Kantenreinigung",
      "Beschläge & Dichtungen",
      "Materialgerechte Pflege",
      "Kombinierbar mit Glasreinigung",
    ],
    image: IMAGES.serviceGlasJpg,
    imageDetail: IMAGES.serviceGlasDetail,
    imageAlt: "/images/service-detail-glas.jpg",
    color: "#c9a84c",
    category: "glass-exterior",
  },
  {
    id: "14",
    slug: "trockenbauarbeiten",
    title: "Trockenbauarbeiten",
    subtitle: "Flexibel bauen im Bestand.",
    description:
      "Wir übernehmen ausgewählte Trockenbauleistungen zur funktionalen Anpassung Ihrer Innenräume.",
    longDescription:
      "Wenn Räume neu strukturiert werden sollen, sind präzise Trockenbauarbeiten entscheidend. Wir setzen Trennwände und Ausbauten sauber und termingerecht um. Dabei achten wir auf effiziente Abläufe im laufenden Betrieb.",
    features: [
      "Leichtbauwände",
      "Verkleidungen",
      "Raumanpassungen",
      "Kleinere Innenausbauten",
      "Termingerechte Ausführung",
      "Saubere Übergabe",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#c9a84c",
    category: "construction",
  },
  {
    id: "15",
    slug: "kleine-abbrucharbeiten",
    title: "Kleine Abbrucharbeiten",
    subtitle: "Kontrolliert rückbauen.",
    description:
      "Wir führen kleine Rückbau- und Abbrucharbeiten sicher, strukturiert und sauber durch.",
    longDescription:
      "Für Umbauten sind oft vorbereitende Rückbauarbeiten erforderlich. Unser Team entfernt Bauteile kontrolliert und achtet auf sichere Arbeitsbereiche. Anschließend hinterlassen wir die Fläche bereit für den nächsten Schritt.",
    features: [
      "Selektiver Rückbau",
      "Sichere Arbeitsweise",
      "Kleinflächen-Abbruch",
      "Staubarme Durchführung",
      "Baustellenordnung",
      "Abtransportvorbereitung",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#c9a84c",
    category: "construction",
  },
  {
    id: "16",
    slug: "hausmeisterservice",
    title: "Hausmeisterservice",
    subtitle: "Rundum-Betreuung für Ihre Immobilie.",
    description:
      "Unser Hausmeisterservice übernimmt laufende Kontrollen, Kleinaufgaben und Koordination vor Ort.",
    longDescription:
      "Mit einem verlässlichen Hausmeisterservice bleibt Ihr Objekt jederzeit betreut. Wir kümmern uns um regelmäßige Sichtprüfungen, kleine Instandhaltungsaufgaben und die Objektorganisation. So entlasten wir Verwaltung und Eigentümer spürbar.",
    features: [
      "Objektkontrollen",
      "Kleinreparaturen",
      "Technik-Sichtprüfung",
      "Mieternahe Betreuung",
      "Koordination von Fremdgewerken",
      "Dokumentierte Rundgänge",
    ],
    image: IMAGES.teamAbstract,
    imageDetail: IMAGES.statementWorkspace,
    imageAlt: "/images/team-abstract.jpg",
    color: "#003580",
    category: "facility",
  },
  {
    id: "17",
    slug: "winterdienst",
    title: "Winterdienst",
    subtitle: "Sicher durch Eis und Schnee.",
    description:
      "Wir sichern Wege, Zufahrten und Eingänge durch Räumen und Streuen im Winter zuverlässig ab.",
    longDescription:
      "Im Winter sind schnelle Reaktionszeiten entscheidend. Unser Winterdienst sorgt für sichere Begeh- und Befahrbarkeit Ihrer Flächen bei Schnee und Glätte. Das reduziert Risiken und schafft verlässliche Verhältnisse.",
    features: [
      "Schneeräumung",
      "Streudienst",
      "Eingangsbereiche",
      "Parkplätze & Zufahrten",
      "Früh- und Bereitschaftseinsätze",
      "Objektbezogene Pläne",
    ],
    image: IMAGES.servicePlaceholder,
    imageDetail: IMAGES.servicePlaceholderDetail,
    imageAlt: "/images/services-bg.jpg",
    color: "#003580",
    category: "facility",
  },
  {
    id: "18",
    slug: "pflege-von-gruenanlagen",
    title: "Pflege von Grünanlagen",
    subtitle: "Gepflegte Außenflächen das ganze Jahr.",
    description:
      "Wir übernehmen die regelmäßige Pflege von Grünflächen für ein ordentliches und einladendes Gesamtbild.",
    longDescription:
      "Außenanlagen sind Teil Ihrer Visitenkarte. Mit planbarer Pflege halten wir Grünflächen, Beete und Randbereiche dauerhaft in gutem Zustand. Das stärkt den ersten Eindruck Ihrer Immobilie.",
    features: [
      "Rasen- und Flächenpflege",
      "Hecken- und Strauchschnitt",
      "Unkrautentfernung",
      "Saisonale Pflegearbeiten",
      "Laubmanagement",
      "Objektbezogene Pflegepläne",
    ],
    image: IMAGES.serviceAussenanlagen,
    imageDetail: IMAGES.badVilbelAerial,
    imageAlt: "/images/service-aussenanlagen.jpg",
    color: "#00c4b3",
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
