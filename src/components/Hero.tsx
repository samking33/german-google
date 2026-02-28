import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants";

const words = ["PROFESSIONELL", "ZUVERLÄSSIG", "MAKELLOS", "PRÄZISE"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [wordIdx, setWordIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.65]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-end pb-24 overflow-hidden bg-brand-dark"
    >
      {/* ── CINEMATIC BG ── */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.heroMain}
          alt="Professionelle Gebäudereinigung"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── GRADIENT OVERLAYS ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/80"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* ── GRID LINES ── */}
      <div className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* ── FLOATING SIDE IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:block"
      >
        <div className="w-72 h-96 overflow-hidden rounded-sm shadow-2xl border border-white/10">
          <img
            src={IMAGES.heroCleaning}
            alt="Reinigungsprofis bei der Arbeit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">Bad Vilbel, Hessen</span>
        </div>
      </motion.div>

      {/* ── ROTATING BADGE ── */}
      <div className="absolute right-8 bottom-32 z-20 hidden xl:block">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text fontSize="10.5" fill="rgba(255,255,255,0.5)" fontFamily="Inter" fontWeight="700" letterSpacing="3.5">
              <textPath href="#circle">
                AKTAS GEBÄUDEREINIGUNG · SEIT 2001 ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
              <ArrowUpRight size={16} className="text-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-20 max-w-[1440px] mx-auto px-8 w-full"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-brand-teal" />
          <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-brand-teal">
            Aktas Gebäudereinigung GmbH · Seit 2001
          </span>
        </motion.div>

        {/* HEADLINE */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] font-serif font-black leading-[0.88] tracking-[-0.02em] text-white uppercase"
          >
            MIT UNS HABEN
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] font-serif italic font-normal leading-[0.88] tracking-[-0.02em] text-brand-teal"
          >
            SIE IMMER DEN
          </motion.div>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] font-serif font-black leading-[0.88] tracking-[-0.02em] text-white uppercase"
          >
            DURCHBLICK.
          </motion.h1>
        </div>

        {/* BOTTOM ROW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        >
          <p className="text-lg md:text-xl text-white/55 leading-relaxed font-light max-w-lg">
            Professionelle Gebäudereinigung für Unternehmen, Gewerbe und Wohnanlagen.
            <br className="hidden md:block" />
            <span className="text-brand-teal font-medium">Zuverlässig. Diskret. Makellos.</span> Seit über 23 Jahren.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/leistungen"
              className="group flex items-center gap-4 bg-brand-teal text-brand-dark px-8 py-4 font-bold uppercase tracking-[0.15em] text-[12px] hover:bg-white transition-all duration-400"
            >
              Leistungen
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
            <Link
              to="/kontakt"
              className="group flex items-center gap-4 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-[0.15em] text-[12px] hover:border-brand-teal hover:text-brand-teal transition-all duration-400"
            >
              Kontakt
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-brand-teal"
          />
        </div>
        <ArrowDown size={12} className="text-white/30 animate-bounce" />
      </motion.div>

      {/* ── MARQUEE BAND ── */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm border-t border-white/5 py-4 z-20 overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {["MIT UNS HABEN SIE IMMER DEN DURCHBLICK", "UNTERHALTSREINIGUNG", "GLASREINIGUNG", "GRUNDREINIGUNG", "SONDERREINIGUNG", "FASSADENREINIGUNG", "TREPPENHAUSREINIGUNG", "SEIT 2001", "BAD VILBEL"].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-white/40">{item}</span>
            </div>
          ))}
          {["MIT UNS HABEN SIE IMMER DEN DURCHBLICK", "UNTERHALTSREINIGUNG", "GLASREINIGUNG", "GRUNDREINIGUNG", "SONDERREINIGUNG", "FASSADENREINIGUNG", "TREPPENHAUSREINIGUNG", "SEIT 2001", "BAD VILBEL"].map((item, i) => (
            <div key={`d-${i}`} className="flex items-center gap-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-white/40">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
