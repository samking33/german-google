import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../constants";

const navItems = [
  { name: "Start", path: "/" },
  { name: "Leistungen", path: "/leistungen" },
  { name: "Über uns", path: "/ueber-uns" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
    setHidden(y > 120 && y > lastY);
    setLastY(y);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <img src={LOGO} alt="Aktas Gebäudereinigung Logo" className="h-14 w-auto max-w-[220px] object-contain flex-shrink-0" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`relative text-[13px] font-medium tracking-wide transition-colors duration-300 group ${location.pathname === item.path
                      ? "text-brand-teal"
                      : "text-white/70 hover:text-white"
                    }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-teal transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:061019861163"
              className="text-[12px] font-mono text-white/40 hover:text-brand-teal transition-colors"
            >
              +49 6101 98611 63
            </a>
            <Link
              to="/kontakt"
              className="flex items-center gap-2 bg-brand-teal text-brand-dark px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-white transition-all duration-300 group"
            >
              Anfrage
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-5xl font-serif py-4 border-b border-white/5 transition-colors ${location.pathname === item.path ? "text-brand-teal italic" : "text-white/60 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-col gap-4"
            >
              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="bg-brand-teal text-brand-dark py-4 text-center font-bold uppercase tracking-widest text-sm"
              >
                Anfrage senden
              </Link>
              <a href="tel:061019861163" className="text-white/40 text-center text-sm">
                061019861163
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
