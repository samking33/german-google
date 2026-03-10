import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, IMAGES } from "../constants";

function ServiceHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="relative h-[70vh] overflow-hidden bg-brand-dark flex items-end pb-20">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={IMAGES.servicesHero} alt="Leistungen" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0a0a0a]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-[1px] bg-brand-teal" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold">Unser Portfolio</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10vw] font-serif font-black leading-[0.88] text-white tracking-tight"
          >
            UNSERE<br />
            <span className="italic font-normal text-white/30">LEISTUNGEN.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/50 text-lg font-light mt-8 max-w-xl"
        >
          Von der täglichen Unterhaltsreinigung bis zu anspruchsvollen Spezialprojekten –
          maßgeschneiderte Lösungen für jeden Bedarf.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark"
    >
      <ServiceHero />

      {/* SERVICES DETAIL */}
      <div className="bg-brand-warm">
        <div className="max-w-[1440px] mx-auto px-8 py-24">
          <div className="flex flex-col gap-0">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 border-b border-black/8 py-24`}
              >
                {/* IMAGE */}
                <div className="lg:w-1/2 relative overflow-hidden img-zoom" style={{ minHeight: 420 }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover absolute inset-0"
                    style={{ minHeight: 420 }}
                  />
                  {/* Service number */}
                  <div className="absolute top-8 left-8 z-10">
                    <div className="font-serif text-8xl font-black text-white/40 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] leading-none">
                      {service.id}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`lg:w-1/2 flex flex-col justify-center ${i % 2 === 0 ? "lg:pl-16" : "lg:pr-16"} py-12 lg:py-0`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-[1px]" style={{ background: service.color }} />
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold" style={{ color: service.color }}>
                      Leistung {service.id}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-serif font-black leading-[0.95] tracking-tight text-brand-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-brand-blue font-medium text-sm mb-6 uppercase tracking-[0.15em]">{service.subtitle}</p>

                  <p className="text-black/60 leading-relaxed font-light mb-4">{service.description}</p>
                  <p className="text-black/40 leading-relaxed font-light text-sm mb-10">{service.longDescription}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-sm text-black/70">
                        <CheckCircle2 size={14} className="text-brand-teal flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/kontakt"
                    className="group inline-flex items-center gap-3 self-start border border-brand-dark px-8 py-4 font-bold uppercase tracking-[0.15em] text-[12px] hover:bg-brand-dark hover:text-white transition-all duration-400"
                  >
                    Angebot anfordern
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="relative overflow-hidden h-80">
          <img src={IMAGES.serviceCTA} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-6xl font-black text-white mb-8"
              >
                Bereit für einen <span className="text-brand-teal italic">makellosen Glanz?</span>
              </motion.h2>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-brand-teal text-brand-dark px-10 py-5 font-bold uppercase tracking-[0.15em] text-[13px] hover:bg-white transition-all duration-400 group"
              >
                Kostenlose Anfrage
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
