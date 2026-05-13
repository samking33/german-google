import { motion } from "motion/react";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark"
    >
      <SEO
        title="Kontakt – Kostenloses Angebot anfordern"
        description="Kontaktieren Sie Aktas Gebäudereinigung GmbH für ein kostenloses Angebot. Telefon: 06101 / 98 611 63 – E-Mail: service@m-aktas.com – Antwort innerhalb von 24 Stunden."
        canonical="/kontakt"
        breadcrumbs={[{ name: 'Kontakt', url: '/kontakt' }]}
      />
      <Contact />
    </motion.div>
  );
}
