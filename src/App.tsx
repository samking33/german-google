import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { loadImages, saveImages } from "./lib/db";
import { SERVICES } from "./constants";

const PROMPTS = {
  hero: "Professional high-end architectural photography of a modern glass building with perfectly clean, crystal clear windows, reflecting a bright blue sky, cinematic lighting, 8k resolution, 'Durchblick' concept.",
  about: "A professional team of cleaners in uniform working in a modern office, minimalist, clean, soft natural lighting.",
  contact: "A minimalist professional office reception in Germany, bright and airy, high-end architectural photography."
};

export default function App() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const initImages = async () => {
      try {
        const savedImages = await loadImages();
        if (savedImages && Object.keys(savedImages).length >= (Object.keys(PROMPTS).length + SERVICES.length)) {
          setImages(savedImages);
        } else {
          generateAllImages();
        }
      } catch (e) {
        console.error("Failed to load images from DB:", e);
        generateAllImages();
      }
    };
    initImages();
  }, []);

  const generateAllImages = async () => {
    if (!process.env.GEMINI_API_KEY) return;
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const newImages: Record<string, string> = {};

    try {
      // Generate general images
      for (const [key, prompt] of Object.entries(PROMPTS)) {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
          config: { imageConfig: { aspectRatio: "16:9" } },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            newImages[key] = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      // Generate service-specific images
      for (const service of SERVICES) {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: service.prompt }] },
          config: { imageConfig: { aspectRatio: "16:9" } },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            newImages[`service_${service.id}`] = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      setImages(newImages);
      await saveImages(newImages);
    } catch (error) {
      console.error("Image generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-black selection:text-white bg-[#f8f9fa]">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[100] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home images={images} />} />
            <Route path="/leistungen" element={<ServicesPage images={images} />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Generation Status */}
        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest z-50 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
            GENERATING HIGH-RES ASSETS...
          </motion.div>
        )}

        <footer className="bg-[#1a1a1a] text-white py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-3xl font-bold tracking-tight text-brand-blue">AKTAS</span>
                  <div className="h-4 w-[1px] bg-white/20 mx-1" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-teal leading-none">
                    Gebäude<br />reinigung GmbH
                  </span>
                </div>
                <p className="text-white/40 text-sm font-light">© 2024 Aktas Gebäudereinigung GmbH. Alle Rechte vorbehalten.</p>
                <p className="text-white/20 text-xs font-light max-w-xs">Friedrich-Ebert-Str. 47, 61118 Bad Vilbel</p>
                <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold mt-2">Geschäftsführer: Mithat Aktas</p>
              </div>

              <div className="flex gap-12">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Rechtliches</span>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Impressum</a>
                    <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Datenschutz</a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Social</span>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">Instagram</a>
                    <a href="#" className="text-sm font-light hover:opacity-60 transition-opacity">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center gap-8"
            >
              <div className="text-[15vw] font-serif italic opacity-[0.02] leading-none select-none">
                AKTAS REINIGUNG
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </Router>
  );
}



