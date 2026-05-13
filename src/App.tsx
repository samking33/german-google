import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import WelcomePopup from "./components/WelcomePopup";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ContactThankYouPage from "./pages/ContactThankYouPage";
import AboutPage from "./pages/AboutPage";
import LegalPage from "./pages/LegalPage";
import DatenschutzPage from "./pages/DatenschutzPage";
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
              Wir bieten professionelle Gebäudereinigung seit 2001. Wir arbeiten zuverlässig, diskret
              und makellos – für Unternehmen, Gewerbe und Wohnanlagen in ganz Deutschland.
            </p>
            <p className="text-white/80 text-xs font-mono">{CONTACT.website}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Start", path: "/" },
                { label: "Leistungen", path: "/leistungen" },
                { label: "Über uns", path: "/ueber-uns" },
                { label: "Kontakt", path: "/kontakt" },
              ].map(item => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-white text-sm font-light hover:text-brand-teal transition-colors"
                >
                  {item.label}
                </Link>
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
              <p className="text-white text-sm font-light">Öffnungszeiten: {CONTACT.hours}</p>
              <p className="text-white/85 text-sm font-light">{CONTACT.address}</p>
              <p className="text-white/85 text-sm font-light">{CONTACT.city}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/85 text-xs font-light">© 2026 Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-8">
            <Link to="/impressum" className="text-white/90 text-xs hover:text-brand-teal transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-white/90 text-xs hover:text-brand-teal transition-colors">Datenschutz</Link>
            <Link to="/impressum#agb" className="text-white/90 text-xs hover:text-brand-teal transition-colors">AGB</Link>
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
          <Route path="/kontakt/danke" element={<ContactThankYouPage />} />
          <Route path="/impressum" element={<LegalPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
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

        {/* Welcome Popup */}
        <WelcomePopup />

        {/* Floating Call Button */}
        <a
          href="tel:+4961019861163"
          aria-label="Jetzt anrufen"
          className="fixed bottom-6 right-6 z-[190] group flex items-center gap-3 bg-brand-teal text-brand-dark pl-4 pr-5 py-3.5 rounded-full shadow-[0_8px_32px_rgba(0,196,179,0.45)] hover:shadow-[0_8px_40px_rgba(0,196,179,0.65)] hover:bg-white transition-all duration-300"
        >
          <span className="relative flex h-5 w-5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-20" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-[13px] font-black tracking-tight whitespace-nowrap">+49 6101 98611 63</span>
        </a>

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
