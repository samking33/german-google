import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import SEO from "../components/SEO";
import { IMAGES } from "../constants";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import reweLogo from "../../client logos/Logo_REWE.svg.png";
import interriskLogo from "../../client logos/InterRisk VIENNA INSURANCE GROUP.jpg";
import hebergerLogo from "../../client logos/HEBERGER.webp";
import careVisionLogo from "../../client logos/care.png";

const CLIENT_LOGOS = [
  {
    id: "01",
    name: "REWE",
    logo: reweLogo,
    alt: "REWE Logo",
    logoClassName: "max-h-14",
  },
  {
    id: "02",
    name: "InterRisk Vienna Insurance Group",
    logo: interriskLogo,
    alt: "InterRisk Vienna Insurance Group Logo",
    logoClassName: "max-h-16",
  },
  {
    id: "03",
    name: "HEBERGER",
    logo: hebergerLogo,
    alt: "HEBERGER Logo",
    logoClassName: "max-h-14",
  },
  {
    id: "04",
    name: "Care Vision",
    logo: careVisionLogo,
    alt: "Care Vision Logo",
    logoClassName: "max-h-14",
  },
] as const;

/* ── STATEMENT SECTION ── */
function StatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <div ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMAGES.atmosphericBreak}
          alt="Reinigung auf höchstem Niveau"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-brand-teal font-bold mb-8">
            Unser Versprechen
          </p>
          <blockquote className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-black leading-[0.95] tracking-tight max-w-5xl mx-auto">
            „WIR SIND ERST ZUFRIEDEN,<br />
            <span className="italic font-normal text-white/40">WENN DER KUNDE</span><br />
            ZUFRIEDEN IST.“
          </blockquote>
          <p className="text-white/40 mt-8 text-sm font-light tracking-[0.2em] uppercase">— Mithat Aktas, Geschäftsführer</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── WHY AKTAS SECTION ── */
function WhyAktas() {
  const pillars = [
    { no: "01", title: "Zuverlässigkeit", desc: "Wir halten, was wir versprechen. Termingerecht. Jeden Tag." },
    { no: "02", title: "Qualität", desc: "Wir arbeiten nach höchsten Standards bei Material, Methode und Mitarbeitenden." },
    { no: "03", title: "Diskretion", desc: "Wir gehen respektvoll mit dem Eigentum und der Privatsphäre um." },
    { no: "04", title: "Nachhaltigkeit", desc: "Wir nutzen umweltschonende Reinigungsmittel für Mensch und Natur." },
  ];

  return (
    <section className="bg-brand-warm py-28 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden img-zoom rounded-sm shadow-2xl">
              <img
                src={IMAGES.processDetail}
                alt="Warum Aktas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-teal flex items-center justify-center">
              <div className="text-center text-brand-dark">
                <p className="font-serif text-4xl font-black leading-none">70+</p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold mt-1">Mitarbeiter</p>
              </div>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-brand-blue" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-brand-blue font-bold">Warum Aktas</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-black leading-[0.92] tracking-tight">
                IHR VERTRAUENS-<br />
                <span className="italic font-normal text-black/25">WÜRDIGER</span>{" "}
                <span className="text-brand-blue">PARTNER.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col divide-y divide-black/5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.no}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="py-8 group flex items-start gap-6 hover:pl-2 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-brand-teal/60 font-bold mt-1 flex-shrink-0">{p.no}</span>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                    <p className="text-black/50 font-light text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-[0.15em] text-[12px] hover:bg-brand-blue transition-all duration-400"
              >
                Angebot anfordern
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── REFERENCES SECTION ── */
function ReferencesSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28 px-8">
      {/* Ambient glows */}
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-teal/8 blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-brand-blue/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-brand-teal" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-teal font-bold">Referenzen</span>
            <div className="w-8 h-[1px] bg-brand-teal" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-black leading-[0.92] tracking-tight text-white">
            UNSERE{" "}
            <span className="italic font-normal text-white/25">KUNDEN.</span>
          </h2>
          <p className="mt-5 text-white/45 font-light max-w-lg mx-auto text-base leading-relaxed">
            Unternehmen aus Gewerbe, Verwaltung und Bauprojekten, die auf unsere Qualität vertrauen.
          </p>
        </motion.div>

        {/* Logo grid — always 2×2, centered */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CLIENT_LOGOS.map((client, index) => (
            <motion.article
              key={client.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center gap-6 border border-white/8 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/20 transition-all duration-500 p-8 md:p-10 cursor-default"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 h-8 w-[2px] bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-center w-full h-20">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className={`w-full object-contain ${client.logoClassName} transition-all duration-500 group-hover:scale-105 brightness-0 invert opacity-60 group-hover:opacity-100`}
                />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 group-hover:text-brand-teal transition-colors duration-300">
                {client.name}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/8 pt-8"
        >
          <p className="text-white/35 text-sm font-light text-center md:text-left">
            500+ betreute Objekte · bundesweit · seit 2013
          </p>
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-3 border border-white/15 text-white/70 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.22em] hover:border-brand-teal hover:text-brand-teal transition-all duration-300"
          >
            Referenzen anfragen
            <ArrowUpRight size={13} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aktas Gebäudereinigung GmbH',
  url: 'https://www.m-aktas.com',
  logo: 'https://www.m-aktas.com/documents/logo.jpg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-6101-98611-63',
    contactType: 'customer service',
    availableLanguage: 'German',
    hoursAvailable: 'Mo-Fr 08:00-14:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Reinigungsleistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Unterhaltsreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glasreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fassadenreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bauendreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grundreinigung' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Winterdienst' } },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <SEO
        canonical="/"
        description="Aktas Gebäudereinigung GmbH – Ihr zuverlässiger Partner für professionelle Gebäudereinigung seit 2013. 70+ Mitarbeiter, 500+ Objekte, bundesweit tätig. Unterhaltsreinigung, Glasreinigung, Fassadenreinigung & mehr."
        schema={HOME_SCHEMA}
      />
      <Hero />
      <Services />
      <StatementSection />
      <WhyAktas />
      <About variant="home" />
      <ReferencesSection />
      <Contact />
    </div>
  );
}
