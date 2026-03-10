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
            <p className="text-white/85 text-base font-light leading-relaxed max-w-sm mb-6">
              Professionelle Gebäudereinigung seit 2001. Zuverlässig, diskret und makellos –
              für Unternehmen, Gewerbe und Wohnanlagen in ganz Deutschland.
            </p>
            <p className="text-white/80 text-xs font-mono">{CONTACT.website}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Navigation</p>
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
                  className="text-white text-sm font-light hover:text-brand-teal transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Kontakt</p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${CONTACT.phone}`} className="text-white text-sm font-light hover:text-brand-teal transition-colors">
                Telefon: {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-white text-sm font-light hover:text-brand-teal transition-colors">
                E-Mail: {CONTACT.email}
              </a>
              <p className="text-white/85 text-sm font-light">Öffnungszeiten: Montag – Freitag, 08:00 – 14:00</p>
              <p className="text-white/85 text-sm font-light">{CONTACT.address}</p>
              <p className="text-white/85 text-sm font-light">{CONTACT.city}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/80 text-xs font-light">
            © 2024 Aktas Gebäudereinigung GmbH — Geschäftsführer: {CONTACT.ceo}
          </p>
          <div className="flex items-center gap-8">
            <a href="#impressum" className="text-white text-xs hover:text-brand-teal transition-colors">Impressum</a>
            <a href="#" className="text-white text-xs hover:text-brand-teal transition-colors">Datenschutz</a>
            <a href="#" className="text-white text-xs hover:text-brand-teal transition-colors">AGB</a>
          </div>
        </div>

        {/* Impressum */}
        <div id="impressum" className="mt-10 bg-white text-black rounded-sm p-8 border border-black/10">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/60 mb-4">Impressum</p>
          <div className="text-sm leading-relaxed text-black/90">
            <p>Aktas Gebäudereinigung GmbH</p>
            <p>Friedrich-Ebert-Str. 47</p>
            <p>61118 Bad Vilbel</p>
            <p>Telefon: 06101 / 98 611 63</p>
            <p>Fax: 06101 / 98 611 65</p>
            <p>E-Mail: info@m-aktas.de</p>
            <p>Geschäftsführer: Mithat Aktas</p>
            <p>Amtsgericht Frankfurt HRB 96331</p>
            <p>Finanzamt Gießen</p>
            <p>St.-Nr. 020 228 13165</p>
          </div>
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
