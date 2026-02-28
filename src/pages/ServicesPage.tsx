import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage({ images }: { images: Record<string, string> }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-6 mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-teal">Unser Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight">
            UMFASSENDE <br />
            <span className="italic text-brand-blue">REINIGUNGSDIENSTE.</span>
          </h1>
          <p className="max-w-2xl text-xl text-black/50 font-light leading-relaxed">
            Von der täglichen Unterhaltsreinigung bis hin zu komplexen Industrie- und Baustellenprojekten – 
            wir bieten maßgeschneiderte Lösungen für jede Anforderung.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl group">
                  <img 
                    src={images[`service_${service.id}`] || "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1000"} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-1000" />
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-serif italic text-2xl">
                    {service.id}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-blue">{service.title}</h2>
                  <p className="text-lg text-black/60 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-medium text-black/70">
                      <CheckCircle2 size={18} className="text-brand-teal" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/kontakt"
                  className="inline-flex items-center gap-3 text-brand-blue font-bold tracking-widest text-xs uppercase group"
                >
                  Angebot anfordern
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
