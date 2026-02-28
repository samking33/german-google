import { motion } from "motion/react";
import { STATS } from "../constants";

export default function About({ images }: { images: { about: string } }) {
  return (
    <section id="über-uns" className="py-32 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] rounded-[40px] overflow-hidden relative z-10 shadow-2xl"
            >
              <img 
                src={images.about || "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000"} 
                alt="Our Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/10" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-12 rounded-full shadow-2xl z-20 hidden md:block"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-5xl font-serif italic text-brand-blue">23</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Jahre Erfahrung</span>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -left-24 -bottom-24 w-64 h-64 border border-brand-teal/10 rounded-full z-0" />
            <div className="absolute -left-12 -bottom-12 w-32 h-32 border border-brand-blue/10 rounded-full z-0" />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-teal">Über Aktas Gebäudereinigung GmbH</span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                QUALITÄT SEIT <br />
                <span className="italic text-brand-blue">2001.</span>
              </h2>
              <p className="text-lg text-black/60 leading-relaxed font-light max-w-xl">
                Gegründet 2001, hat sich die Firma Mithat Aktas Glas- und Gebäudereinigung binnen kürzester Zeit etabliert. 
                Im Jahr 2013 wurde aus der Einzelfirma die Aktas Gebäudereinigung GmbH.
                Dieser Erfolg ist kein Zufall. Als Gebäudereinigungsbetrieb, der Dienstleistung noch wörtlich nimmt, schätzen unsere Kunden Qualität, Zuverlässigkeit und Preis.
              </p>
              <p className="text-lg text-black/60 leading-relaxed font-light max-w-xl">
                Die Firma Aktas Gebäudereinigung GmbH übernimmt Verantwortung – für Menschen, unsere Umwelt, sowie für Ihr Objekt. 
                Unser wichtigstes Ziel heißt Kundenzufriedenheit. In ihr sehen wir die Voraussetzung für langfristige Partnerschaft.
                Wir sind erst zufrieden, wenn der Kunde zufrieden ist.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4 p-8 bg-white rounded-3xl border border-black/5 hover:shadow-xl transition-shadow duration-500"
                >
                  <stat.icon size={24} className="text-brand-teal opacity-40" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif italic text-brand-blue">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

