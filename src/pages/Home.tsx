import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { IMAGES } from "../constants";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
            ZUFRIEDEN IST."
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
    { no: "02", title: "Qualität", desc: "Höchste Standards bei Material, Methode und Mitarbeitern." },
    { no: "03", title: "Diskretion", desc: "Respektvoller Umgang mit Ihrem Eigentum und Ihrer Privatsphäre." },
    { no: "04", title: "Nachhaltigkeit", desc: "Umweltschonende Reinigungsmittel für Mensch und Natur." },
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

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <StatementSection />
      <WhyAktas />
      <About />
      <Contact />
    </div>
  );
}
