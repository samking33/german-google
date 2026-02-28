import { ShieldCheck, Users, Clock, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export const SERVICES = [
  {
    id: "01",
    title: "Unterhaltsreinigung",
    description: "Regelmäßige Reinigung Ihrer Geschäftsräume für ein dauerhaft gepflegtes Erscheinungsbild.",
    features: ["Büros & Kanzleien", "Praxen & Kliniken", "Verkaufsflächen"],
    prompt: "Professional high-end architectural photography of a minimalist modern office interior being cleaned, soft natural morning light, clean lines, 8k resolution."
  },
  {
    id: "02",
    title: "Bau- & Spezialreinigung",
    description: "Umfassende Reinigungslösungen für Baustellen und anspruchsvolle Projekte.",
    features: ["Baugrobreinigung", "Bauendreinigung", "Containerreinigung"],
    prompt: "Professional cleaning of a large industrial container and construction site, high-end equipment, cinematic lighting, architectural style, 8k resolution."
  },
  {
    id: "03",
    title: "Glas- & Fassadenreinigung",
    description: "Streifenfreier Glanz für Ihre Fenster, Glasfassaden und Rahmen.",
    features: ["Rahmenreinigung", "Glasfassaden", "Schaufenster"],
    prompt: "Professional window cleaning of a modern glass skyscraper facade, reflecting a bright blue sky, architectural photography, 8k resolution."
  },
  {
    id: "04",
    title: "Industrie- & Bodenreinigung",
    description: "Spezielle Reinigungsleistungen für Industrieanlagen und Bodenbeläge.",
    features: ["Industriereinigung", "Teppichreinigung", "Grundreinigung"],
    prompt: "Professional industrial floor cleaning with high-end machines, polished concrete, minimalist, clean, architectural style, 8k resolution."
  },
  {
    id: "05",
    title: "Hausmeister & Außenanlagen",
    description: "Rundum-Service für Ihr Objekt und die dazugehörigen Außenflächen.",
    features: ["Winterdienst", "Grünanlagenpflege", "Straßenreinigung"],
    prompt: "Professional maintenance of a modern office building exterior and green gardens, bright and airy, professional photography, 8k resolution."
  },
  {
    id: "06",
    title: "Spezialdienste",
    description: "Zusätzliche Leistungen für die Instandhaltung und Entsorgung.",
    features: ["Trockenbau", "Abbrucharbeiten", "Abfallentsorgung"],
    prompt: "Professional construction waste disposal and interior renovation, minimalist, clean, architectural style, 8k resolution."
  }
];

export const STATS = [
  { icon: ShieldCheck, label: "Zertifiziert", value: "100%" },
  { icon: Users, label: "Mitarbeiter", value: "70" },
  { icon: Clock, label: "Erfahrung", value: "23J" },
  { icon: Award, label: "Qualität", value: "Top" }
];
