import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Kontakt</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                LASSEN SIE UNS <br />
                <span className="italic opacity-40">SPRECHEN.</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed font-light max-w-md">
                Kontaktieren Sie uns für ein unverbindliches Angebot. Wir antworten innerhalb von 24 Stunden. 
                Unser Arbeitsgebiet erstreckt sich deutschlandweit.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: Phone, label: "Vertrieb & Kalkulation (Nevzat Arslan)", value: "0178 2435766" },
                { icon: Phone, label: "Zentrale", value: "06101 / 98 611 63" },
                { icon: Mail, label: "Email", value: "info@m-aktas.de" },
                { icon: MapPin, label: "Adresse", value: "Friedrich-Ebert-Str. 47, 61118 Bad Vilbel" }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-black transition-all duration-500">
                    <item.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{item.label}</span>
                    <span className="text-lg font-light group-hover:text-brand-teal transition-colors">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white/5 p-12 rounded-[40px] border border-white/10 backdrop-blur-xl"
          >
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Name</label>
                  <input 
                    type="text" 
                    placeholder="Ihr Name"
                    className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email</label>
                  <input 
                    type="email" 
                    placeholder="ihre@email.de"
                    className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg font-light"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Betreff</label>
                <select className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg font-light appearance-none">
                  <option className="bg-[#1a1a1a]">Unterhaltsreinigung</option>
                  <option className="bg-[#1a1a1a]">Glasreinigung</option>
                  <option className="bg-[#1a1a1a]">Bauendreinigung</option>
                  <option className="bg-[#1a1a1a]">Sonstiges</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Nachricht</label>
                <textarea 
                  rows={4}
                  placeholder="Wie können wir Ihnen helfen?"
                  className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg font-light resize-none"
                />
              </div>

              <button className="bg-brand-teal text-black py-6 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all duration-500 group">
                Nachricht senden
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
