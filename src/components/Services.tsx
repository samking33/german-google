import { motion } from "motion/react";
import { CheckCircle2, ArrowUpRight, ArrowRight } from "lucide-react";
import { SERVICES } from "../constants";
import { Link } from "react-router-dom";

export default function Services({ images }: { images: { services: string } }) {
  return (
    <section id="leistungen" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-teal">Unsere Leistungen</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              MASSGESCHNEIDERTE <br />
              <span className="italic text-brand-blue">LÖSUNGEN.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 items-end">
            <div className="w-48 h-32 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5">
              <img 
                src={images.services || "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=500"} 
                alt="Cleaning Equipment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="max-w-xs text-black/50 text-sm leading-relaxed text-right">
              Wir bieten ein breites Spektrum an Reinigungsdienstleistungen, die exakt auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {SERVICES.slice(0, 6).map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 group hover:bg-brand-blue hover:text-white transition-all duration-700 cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-4xl font-serif italic text-brand-teal opacity-20 group-hover:opacity-40 transition-opacity">
                  {service.id}
                </span>
                <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-3xl font-serif group-hover:text-brand-teal transition-colors">{service.title}</h3>
                <p className="text-black/50 group-hover:text-white/60 leading-relaxed max-w-sm">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  {service.features.slice(0, 2).map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 group-hover:text-brand-teal transition-all"
                    >
                      <CheckCircle2 size={12} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link 
            to="/leistungen"
            className="inline-flex items-center gap-4 bg-brand-blue text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-teal hover:text-black transition-all duration-500 group"
          >
            Alle Leistungen ansehen
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

