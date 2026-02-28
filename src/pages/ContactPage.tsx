import Contact from "../components/Contact";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-black"
    >
      <Contact />
    </motion.div>
  );
}
