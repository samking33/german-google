import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, IMAGES } from "../constants";

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} id="leistungen" className="relative bg-brand-warm py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[1px] bg-brand-blue" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-brand-blue font-bold">Unsere Leistungen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] tracking-tight"
            >
              MASS­GESCHNEI-<br />
              <span className="italic font-normal text-black/25">DERTE</span>{" "}
              <span className="text-brand-blue">LÖSUNGEN.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-sm"
          >
            <div className="aspect-video rounded-sm overflow-hidden img-zoom mb-6 border border-black/5">
              <img src={IMAGES.professionalCleaning} alt="Professionelle Reinigung" className="w-full h-full object-cover" />
            </div>
            <p className="text-black/50 text-sm leading-relaxed font-light">
              Wir bieten ein breites Spektrum an Reinigungsdienstleistungen,
              maßgeschneidert auf Ihren Bedarf.
            </p>
          </motion.div>
        </div>

        {/* ── SERVICE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group bg-brand-warm hover:bg-brand-dark transition-colors duration-700 overflow-hidden cursor-pointer"
            >
              {/* Image reveal on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 p-10">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-serif text-5xl italic font-black text-black/8 group-hover:text-white/10 transition-colors duration-700">
                    {service.id}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/10 group-hover:border-brand-teal flex items-center justify-center transition-colors duration-500">
                    <ArrowUpRight size={16} className="text-black/30 group-hover:text-brand-teal group-hover:rotate-0 transition-all duration-500" style={{ transform: hoveredId === service.id ? "rotate(0deg)" : "" }} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-white mb-4 transition-colors duration-500 leading-tight">
                  {service.title}
                </h3>
                <p className="text-black/50 group-hover:text-white/50 text-sm leading-relaxed mb-8 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-black/30 group-hover:text-brand-teal/70 transition-colors duration-500">
                      <CheckCircle2 size={10} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-teal group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* ── CTA BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-black/8 p-10"
        >
          <div>
            <p className="font-serif text-3xl font-black">Alle Leistungen ansehen</p>
            <p className="text-black/50 text-sm mt-1 font-light">Detaillierte Informationen zu jedem unserer Dienste</p>
          </div>
          <Link
            to="/leistungen"
            className="group flex items-center gap-4 bg-brand-blue text-white px-10 py-5 font-bold uppercase tracking-[0.15em] text-[12px] hover:bg-brand-teal hover:text-brand-dark transition-all duration-400 whitespace-nowrap"
          >
            Leistungsübersicht
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* ── MARQUEE STRIP ── */}
        <div className="mt-24 overflow-hidden border-t border-b border-black/5 py-6">
          <div className="animate-marquee-reverse flex items-center gap-16 whitespace-nowrap">
            {[...SERVICES, ...SERVICES].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
