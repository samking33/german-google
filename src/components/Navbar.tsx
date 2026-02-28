import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Kontakt", path: "/kontakt" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-3"
        >
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-brand-blue transform rotate-45" />
            <div className="absolute inset-0 bg-brand-teal transform -rotate-45 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-xl font-bold">A</div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-blue leading-none">AKTAS</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-teal leading-none mt-1">
              Gebäudereinigung GmbH
            </span>
            <span className="text-[8px] font-mono text-brand-blue/40 mt-0.5">www.m-aktas.de</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-brand-teal' : 'hover:text-brand-teal'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Link
              to="/kontakt"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-teal transition-colors"
            >
              Anfrage senden
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-blue hover:text-brand-teal transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-black/5 p-6 flex flex-col gap-6 shadow-xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium transition-colors ${
                location.pathname === item.path ? 'text-brand-teal' : 'hover:text-brand-teal'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/kontakt"
            onClick={() => setIsOpen(false)}
            className="bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-teal transition-colors text-center"
          >
            Anfrage senden
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

