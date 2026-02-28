import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import About from "../components/About";
import { IMAGES } from "../constants";

function AboutHero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <div ref={ref} className="relative h-[60vh] overflow-hidden bg-brand-dark flex items-end pb-16">
            <motion.div style={{ y }} className="absolute inset-0">
                <img src={IMAGES.teamAbstract} alt="Über uns" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#0a0a0a]" />
            </motion.div>

            <motion.div style={{ opacity }} className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="w-10 h-[1px] bg-brand-teal" />
                    <span className="text-[10px] uppercase tracking-[0.35em] text-brand-teal font-bold">Unternehmen</span>
                </motion.div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-serif font-black leading-[0.88] text-white tracking-tight"
                    >
                        ÜBER<br />
                        <span className="italic font-normal text-white/30">AKTAS.</span>
                    </motion.h1>
                </div>
            </motion.div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-brand-dark"
        >
            <AboutHero />
            <About />
        </motion.div>
    );
}
