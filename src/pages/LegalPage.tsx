import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CONTACT, IMAGES } from "../constants";

function LegalHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="relative h-[55vh] min-h-[420px] overflow-hidden bg-brand-dark flex items-end pb-14">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={IMAGES.legalHero} alt="Rechtliche Informationen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0a0a0a]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-[1px] bg-brand-teal" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold">Rechtliches</span>
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-black leading-[0.9] text-white tracking-tight"
          >
            IMPRESSUM
            <br />
            <span className="italic font-normal text-white/35">&amp; AGB.</span>
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
}

export default function LegalPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-warm"
    >
      <LegalHero />

      <section className="relative bg-brand-warm text-brand-dark">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative max-w-[1200px] mx-auto px-8 py-16 md:py-24 space-y-12">
          <motion.div
            id="impressum"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-28 bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-teal mb-4">Impressum</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">{CONTACT.name}</h2>
            <p className="mt-3 text-sm text-black/70">
              Wir bieten professionelle Gebäudereinigung und haben unseren Sitz in {CONTACT.city}.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
              <div className="space-y-2">
                <p>{CONTACT.address}</p>
                <p>{CONTACT.city}</p>
                <p>Telefon: {CONTACT.phone}</p>
                <p>Fax: 06101 / 98 611 65</p>
                <p>E-Mail: {CONTACT.email}</p>
                <p>Web: {CONTACT.website}</p>
              </div>
              <div className="space-y-2">
                <p>Geschäftsführer: {CONTACT.ceo}</p>
                <p>Amtsgericht Frankfurt HRB 96331</p>
                <p>Finanzamt Gießen</p>
                <p>St.-Nr. 020 228 13165</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="agb"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="scroll-mt-28 bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-teal mb-4">AGB</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Allgemeine Geschäftsbedingungen (AGB)</h2>
            <ol className="mt-8 space-y-6 text-sm leading-relaxed text-black/85">
              <li>
                <p className="font-semibold text-black">1. Geltungsbereich</p>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Reinigungsfirma und ihren
                  Kunden über Reinigungsdienstleistungen.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">2. Leistungen</p>
                <p>
                  Die Reinigungsfirma bietet Dienstleistungen wie Unterhaltsreinigung, Büroreinigung,
                  Treppenhausreinigung, Glasreinigung und Sonderreinigungen an. Der genaue Leistungsumfang ergibt sich aus
                  dem jeweiligen Angebot.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">3. Vertragsschluss</p>
                <p>
                  Ein Vertrag kommt zustande, wenn der Kunde ein Angebot bestätigt oder einen Auftrag erteilt und die
                  Reinigungsfirma diesen annimmt.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">4. Preise und Zahlungsbedingungen</p>
                <p>Alle Preise verstehen sich in Euro. Rechnungen sind innerhalb von 14 Tagen ohne Abzug zu zahlen.</p>
              </li>
              <li>
                <p className="font-semibold text-black">5. Termine</p>
                <p>
                  Vereinbarte Termine sind verbindlich. Sollte ein Termin aufgrund höherer Gewalt nicht eingehalten werden
                  können, wird ein Ersatztermin vereinbart.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">6. Mitwirkungspflichten des Kunden</p>
                <p>
                  Der Kunde sorgt dafür, dass die zu reinigenden Räume zugänglich sind und keine Gefahrenquellen bestehen.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">7. Haftung</p>
                <p>
                  Die Reinigungsfirma haftet nur bei Vorsatz oder grober Fahrlässigkeit. Für leichte Fahrlässigkeit haftet
                  sie nur bei Verletzung wesentlicher Vertragspflichten.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">8. Reklamationen</p>
                <p>Reklamationen müssen innerhalb von 24 Stunden nach Durchführung der Reinigung gemeldet werden.</p>
              </li>
              <li>
                <p className="font-semibold text-black">9. Kündigung</p>
                <p>
                  Daueraufträge können von beiden Parteien mit einer Frist von vier Wochen zum Monatsende gekündigt
                  werden.
                </p>
              </li>
              <li>
                <p className="font-semibold text-black">10. Schlussbestimmungen</p>
                <p>Es gilt deutsches Recht. Gerichtsstand ist der Sitz der Reinigungsfirma.</p>
              </li>
            </ol>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
