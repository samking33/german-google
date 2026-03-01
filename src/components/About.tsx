import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { STATS, IMAGES, PROCESS } from "../constants";

function CountUp({ value, suffix }: { value: string; suffix: string }) {
  return (
    <span className="font-serif text-5xl font-black leading-none tracking-tight text-white">
      {value}<span className="text-brand-teal text-3xl">{suffix}</span>
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={sectionRef} id="ueber-uns" className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden">
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[1px] bg-brand-teal" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold">Über Aktas</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] tracking-tight"
            >
              QUALITÄT<br />
              <span className="italic font-normal text-white/30">SEIT</span>{" "}
              <span className="text-brand-teal">2001.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-white/50 leading-relaxed font-light pt-4 md:pt-12 text-lg"
          >
            Gegründet 2001, wurde aus der Einzelfirma Mithat Aktas 2013 die
            Aktas Gebäudereinigung GmbH. Heute beschäftigen wir über 70 erfahrene
            Mitarbeiter und betreuen Unternehmen in ganz Deutschland.
          </motion.p>
        </div>

        {/* ── MAIN TWO-COL ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left: Stacked images */}
          <div className="relative h-[70vh] lg:h-auto min-h-[500px]">
            {/* Main portrait */}
            <motion.div
              style={{ y: imgY }}
              className="absolute inset-0 lg:relative rounded-sm overflow-hidden h-full"
            >
              <img
                src={IMAGES.aboutPortrait}
                alt="Aktas Gebäudereinigung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 left-6 z-10 bg-brand-teal px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <Star size={14} className="text-brand-dark" fill="currentColor" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark">Seit 2001</p>
                  <p className="font-serif text-2xl font-black text-brand-dark leading-none">23+ Jahre</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark">Erfahrung</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Workspace + text */}
          <div className="flex flex-col gap-6">
            <motion.div
              style={{ y: imgY2 }}
              className="relative overflow-hidden rounded-sm h-64 img-zoom"
            >
              <img
                src={IMAGES.statementWorkspace}
                alt="Professionelle Reinigung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/20" />
            </motion.div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/8 p-10 rounded-sm flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-6 mb-10">
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  Als Gebäudereinigungsbetrieb, der Dienstleistung noch wörtlich nimmt,
                  schätzen unsere Kunden <span className="text-white font-medium">Qualität, Zuverlässigkeit und transparente Preise</span>.
                </p>
                <p className="text-white/50 leading-relaxed font-light">
                  Die Firma Aktas Gebäudereinigung GmbH übernimmt Verantwortung – für
                  Menschen, unsere Umwelt sowie für Ihr Objekt. Unser wichtigstes Ziel
                  ist Ihre Kundenzufriedenheit.
                </p>
              </div>
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 border border-white/20 px-6 py-4 self-start hover:border-brand-teal hover:text-brand-teal transition-all duration-300"
              >
                <span className="text-[12px] uppercase tracking-[0.2em] font-bold">Kontakt aufnehmen</span>
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── STATS GRID ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-white/8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-3 p-8 border-r border-white/8 last:border-r-0 group hover:bg-white/5 transition-colors duration-400"
            >
              <stat.icon size={26} className="text-brand-teal opacity-85 group-hover:opacity-100 transition-opacity" />
              <CountUp value={stat.value} suffix={stat.suffix} />
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PROCESS SECTION ── */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-10 h-[1px] bg-brand-teal" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold">Unser Prozess</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-[#0a0a0a] p-10 group hover:bg-white/5 transition-colors"
              >
                <div className="font-serif text-7xl font-black text-white/5 group-hover:text-brand-teal/20 transition-colors leading-none mb-8">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl text-white mb-4">{step.title}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm">{step.description}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 border border-white/10 rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── AERIAL IMAGE STATEMENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 relative overflow-hidden rounded-sm h-80 img-zoom"
        >
          <img
            src={IMAGES.badVilbelAerial}
            alt="Bad Vilbel - Unser Standort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold mb-4">Unser Standort</p>
              <p className="font-serif text-4xl text-white font-black">Bad Vilbel, Hessen</p>
              <p className="text-white/50 mt-2 font-light">Friedrich-Ebert-Str. 47 · 61118 Bad Vilbel</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
