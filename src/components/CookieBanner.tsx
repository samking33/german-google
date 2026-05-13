import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, Check } from "lucide-react";

const COOKIE_KEY = "aktas-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem(COOKIE_KEY, "all");
    setVisible(false);
  }

  function acceptEssential() {
    localStorage.setItem(COOKIE_KEY, "essential");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 left-4 right-4 md:left-6 md:right-auto md:max-w-[420px] z-[180] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.25)] border border-black/10"
        >
          {/* Top accent */}
          <div className="h-[3px] w-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-teal" />

          <div className="bg-white p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie size={16} className="text-brand-teal" />
              </div>
              <div>
                <h3 className="font-black text-brand-dark text-base leading-tight">
                  Datenschutz &amp; Cookies
                </h3>
                <p className="text-black/50 text-xs mt-0.5">Aktas Gebäudereinigung GmbH</p>
              </div>
            </div>

            {/* Body */}
            <p className="text-black/60 text-sm leading-relaxed mb-5">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten und unseren Datenverkehr zu analysieren. Weitere Informationen finden Sie in unserer{" "}
              <Link
                to="/datenschutz"
                className="text-brand-teal font-medium underline underline-offset-2 hover:text-brand-blue transition-colors"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={acceptAll}
                className="flex items-center justify-center gap-2 w-full bg-brand-teal text-brand-dark py-3 rounded-lg font-bold text-[12px] uppercase tracking-[0.18em] hover:bg-brand-blue hover:text-white transition-colors duration-300"
              >
                <Check size={14} />
                Alle akzeptieren
              </button>
              <button
                onClick={acceptEssential}
                className="flex items-center justify-center gap-2 w-full border border-black/12 text-black/55 py-3 rounded-lg font-bold text-[12px] uppercase tracking-[0.18em] hover:border-black/25 hover:text-black/80 transition-colors duration-300"
              >
                <X size={14} />
                Nur notwendige
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
