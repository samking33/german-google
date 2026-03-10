import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowUpRight } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { CONTACT, IMAGES } from "../constants";

const companyCoords: [number, number] = [50.1736576, 8.7373316];
const companyMapLink = `https://www.openstreetmap.org/?mlat=${companyCoords[0]}&mlon=${companyCoords[1]}#map=17/${companyCoords[0]}/${companyCoords[1]}`;
const companyMarkerIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    { icon: Phone, label: "Telefon", value: CONTACT.phone, sub: "Montag – Freitag, 08:00 – 14:00", href: `tel:${CONTACT.phone}` },
    { icon: Mail, label: "E-Mail", value: CONTACT.email, sub: "Antwort innerhalb von 24 Stunden", href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: "Adresse", value: CONTACT.address, sub: CONTACT.city, href: companyMapLink },
  ];

  return (
    <section ref={sectionRef} id="kontakt" className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden">
      {/* BG IMAGE */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img src={IMAGES.contactTexture} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </motion.div>

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8">
        {/* HEADER */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-[1px] bg-brand-teal" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold">Kontakt</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-serif font-black leading-[0.9] tracking-tight"
          >
            LASSEN SIE<br />
            <span className="italic font-normal text-white/25">UNS</span>{" "}
            <span className="text-brand-teal">SPRECHEN.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: info */}
          <div className="flex flex-col gap-8">
            {/* Contact items */}
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer border border-white/5 p-6 hover:border-brand-teal/30 hover:bg-white/5 transition-all duration-400"
              >
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-all duration-400 flex-shrink-0">
                  <item.icon size={18} className="group-hover:text-brand-dark transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-brand-teal transition-colors truncate">{item.value}</p>
                  <p className="text-white/30 text-xs mt-0.5">{item.sub}</p>
                </div>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-brand-teal transition-colors flex-shrink-0" />
              </motion.a>
            ))}

            {/* Hours notice */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-brand-teal/10 border border-brand-teal/20"
            >
              <Clock size={18} className="text-brand-teal flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-teal mb-1">Öffnungszeiten</p>
                <div className="text-white/60 text-sm font-light">
                  <p>Montag – Freitag</p>
                  <p>08:00 – 14:00</p>
                </div>
              </div>
            </motion.div>

            {/* Portrait image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden h-48 img-zoom rounded-sm hidden lg:block"
            >
              <img src={IMAGES.kontaktDetail} alt="Aktas Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-serif text-xl font-bold">{CONTACT.ceo}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">Geschäftsführer</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white/[0.04] border border-white/8 p-10 backdrop-blur-sm"
          >
            <h3 className="font-serif text-2xl mb-8 text-white">Kostenlose Anfrage</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30">Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr vollständiger Name"
                    className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-teal transition-colors text-white placeholder:text-white/20 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30">E-Mail *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ihre E-Mail-Adresse"
                    className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-teal transition-colors text-white placeholder:text-white/20 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30">Gewünschte Leistung</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  className="bg-[#0a0a0a] border-b border-white/10 py-3 focus:outline-none focus:border-brand-teal transition-colors text-white/80 text-sm appearance-none"
                >
                  <option value="">Bitte wählen...</option>
                  <option>Containerreinigung</option>
                  <option>Baugrobreinigung</option>
                  <option>Baubegleitende Reinigung</option>
                  <option>Bauendreinigung</option>
                  <option>Grundreinigung</option>
                  <option>Unterhaltsreinigung</option>
                  <option>Teppich- & Bodenbelagsreinigung</option>
                  <option>Fassadenreinigung</option>
                  <option>Glasreinigung</option>
                  <option>Rahmenreinigung</option>
                  <option>Kleine Abbrucharbeiten</option>
                  <option>Winterdienst</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30">Nachricht *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Objekt und Ihre Anforderungen..."
                  className="bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-brand-teal transition-colors text-white placeholder:text-white/20 text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-3 py-5 font-bold uppercase tracking-[0.2em] text-[12px] transition-all duration-400 ${sent
                  ? "bg-brand-teal text-brand-dark"
                  : "bg-white text-brand-dark hover:bg-brand-teal"
                  }`}
              >
                {sent ? (
                  "✓ Erfolgreich gesendet"
                ) : (
                  <>
                    Nachricht senden
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              <p className="text-white/20 text-[10px] text-center leading-relaxed">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.<br />
                Wir antworten innerhalb von 24 Stunden.
              </p>
            </form>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-14 border border-white/8 overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 bg-white/[0.04] border-b border-white/8">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-teal">Unser Standort</p>
            <a
              href={companyMapLink}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-brand-teal transition-colors"
            >
              In OpenStreetMap öffnen
            </a>
          </div>
          <div className="h-[360px] w-full">
            <MapContainer center={companyCoords} zoom={16} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={companyCoords} icon={companyMarkerIcon}>
                <Popup>
                  {CONTACT.name}
                  <br />
                  {CONTACT.address}, {CONTACT.city}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
