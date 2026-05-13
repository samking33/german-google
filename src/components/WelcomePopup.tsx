import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Phone, ArrowUpRight, CalendarCheck, Layers } from "lucide-react";

const POPUP_KEY = "aktas-popup-dismissed";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(POPUP_KEY, "1");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Panel */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 bottom-6 md:inset-auto md:bottom-10 md:right-10 md:w-[420px] z-[201] overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-teal" />

            <div className="bg-[#0d0d0d] border border-white/10 rounded-b-2xl p-7">
              {/* Close */}
              <button
                onClick={dismiss}
                aria-label="Schließen"
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                <X size={14} />
              </button>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-teal/15 border border-brand-teal/30 rounded-full px-3 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-teal">Jetzt verfügbar</span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-2xl font-black text-white leading-tight mb-2">
                Professionelle Reinigung<br />
                <span className="italic font-normal text-white/35">für Ihr Objekt.</span>
              </h2>
              <p className="text-white/55 text-sm font-light leading-relaxed mb-7">
                Kostenloses Beratungsgespräch — wir analysieren Ihren Bedarf und erstellen ein transparentes Angebot.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  to="/kontakt"
                  onClick={dismiss}
                  className="group flex items-center justify-between bg-brand-teal text-brand-dark px-5 py-3.5 font-bold text-[12px] uppercase tracking-[0.18em] hover:bg-white transition-colors duration-300 rounded-lg"
                >
                  <span className="flex items-center gap-2.5">
                    <CalendarCheck size={15} />
                    Beratung anfragen
                  </span>
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>

                <Link
                  to="/leistungen"
                  onClick={dismiss}
                  className="group flex items-center justify-between border border-white/15 bg-white/5 text-white px-5 py-3.5 font-bold text-[12px] uppercase tracking-[0.18em] hover:border-white/35 hover:bg-white/10 transition-colors duration-300 rounded-lg"
                >
                  <span className="flex items-center gap-2.5">
                    <Layers size={15} />
                    Leistungen ansehen
                  </span>
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>

                <a
                  href="tel:+4961019861163"
                  className="flex items-center justify-center gap-3 border border-brand-blue/40 bg-brand-blue/10 text-white px-5 py-3.5 font-black text-base hover:bg-brand-blue/20 hover:border-brand-blue/70 transition-colors duration-300 rounded-lg"
                >
                  <Phone size={15} className="text-brand-teal" />
                  +49 6101 98611 63
                </a>
              </div>

              {/* Footer note */}
              <p className="text-white/25 text-[10px] text-center mt-5 leading-relaxed">
                Mo – Fr · 08:00 – 14:00 Uhr · Kostenlos &amp; unverbindlich
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
