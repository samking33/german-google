import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export default function Hero({ images }: { images: { hero: string } }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[120vh] flex flex-col justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={images.hero || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"} 
          alt="Modern Office"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-white">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-semibold opacity-60"
            >
              <div className="w-8 h-[1px] bg-brand-teal" />
              Aktas Gebäudereinigung GmbH
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-serif leading-[0.85] tracking-tighter"
              >
                MIT UNS HABEN <br />
                <span className="italic font-normal text-brand-teal">SIE IMMER DEN</span> <br />
                DURCHBLICK.
              </motion.h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md text-lg md:text-xl text-white/60 leading-relaxed font-light"
            >
              Professionelle Gebäudereinigung für Unternehmen und Gewerbe. 
              Zuverlässig. Diskret. Makellos. Seit über 20 Jahren Ihr Partner – deutschlandweit.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-black transition-all duration-500">
                  <ArrowDownRight size={32} className="group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-teal">Scrollen</span>
                  <span className="text-sm font-medium uppercase tracking-widest">Leistungen entdecken</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements for "Stuff" */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-32 h-32 border border-brand-teal/20 rounded-full backdrop-blur-sm z-10 hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-10 w-48 h-48 border border-brand-blue/20 rounded-full backdrop-blur-[2px] z-10 hidden lg:block"
      />

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-10 overflow-hidden bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-24 whitespace-nowrap animate-marquee px-6">
          {[
            "MIT UNS HABEN SIE IMMER DEN DURCHBLICK", "BÜROREINIGUNG", "FENSTERREINIGUNG", "UNTERHALTSREINIGUNG", 
            "BAUENDREINIGUNG", "GEWERBEREINIGUNG", "TREPPENHAUSREINIGUNG"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="w-2 h-2 rounded-full bg-brand-teal" />
              <span className="text-xs font-bold tracking-[0.3em] text-white/60 group-hover:text-brand-teal transition-colors">{item}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "MIT UNS HABEN SIE IMMER DEN DURCHBLICK", "BÜROREINIGUNG", "FENSTERREINIGUNG", "UNTERHALTSREINIGUNG", 
            "BAUENDREINIGUNG", "GEWERBEREINIGUNG", "TREPPENHAUSREINIGUNG"
          ].map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-6">
              <div className="w-2 h-2 rounded-full bg-brand-teal" />
              <span className="text-xs font-bold tracking-[0.3em] text-white/60">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
