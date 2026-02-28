import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import { motion } from "motion/react";

export default function Home({ images }: { images: Record<string, string> }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero images={{ hero: images.hero }} />
      <Services images={{ services: images.services }} />
      <About images={{ about: images.about }} />
    </motion.div>
  );
}
