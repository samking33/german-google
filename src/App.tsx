import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { CONTACT, LOGO } from "./constants";

/* ── SCROLL PROGRESS – unused; App uses inline version below ── */

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={LOGO} alt="Aktas Gebäudereinigung Logo" className="h-16 w-auto max-w-[260px] object-contain" />
            </div>
            <p className="text-white/30 text-sm font-light leading-relaxed max-w-sm mb-6">
              Professionelle Gebäudereinigung seit 2001. Zuverlässig, diskret und makellos –
              für Unternehmen, Gewerbe und Wohnanlagen in ganz Deutschland.
            </p>
            <p className="text-white/20 text-xs font-mono">{CONTACT.website}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/25 mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Start", href: "/" },
                { label: "Leistungen", href: "/leistungen" },
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Kontakt", href: "/kontakt" },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/40 text-sm font-light hover:text-brand-teal transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/25 mb-6">Kontakt</p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${CONTACT.phone}`} className="text-white/40 text-sm font-light hover:text-brand-teal transition-colors">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-white/40 text-sm font-light hover:text-brand-teal transition-colors">
                {CONTACT.email}
              </a>
              <p className="text-white/30 text-sm font-light">{CONTACT.address}</p>
              <p className="text-white/30 text-sm font-light">{CONTACT.city}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/20 text-xs font-light">
            © 2024 Aktas Gebäudereinigung GmbH — Geschäftsführer: {CONTACT.ceo}
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">Impressum</a>
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">Datenschutz</a>
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">AGB</a>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[15vw] font-serif font-black italic text-white/[0.025] leading-none select-none whitespace-nowrap text-center"
          >
            AKTAS REINIGUNG
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

/* ── ANIMATED ROUTES ── */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<ServicesPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── APP ── */
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Router>
      <div className="min-h-screen font-sans bg-brand-dark">
        {/* Scroll Progress */}
        <motion.div
          style={{ scaleX, background: "linear-gradient(90deg, #003580, #00c4b3)" }}
          className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
