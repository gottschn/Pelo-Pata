"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from 'react-icons/fa';
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionRefs: any = {
    home: useRef(null),
    servicios: useRef(null),
    nosotros: useRef(null),
    testimonios: useRef(null),
    contacto: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      const scrollPosition = window.scrollY + 100;
      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => window.open("https://wa.me/5493812426005", "_blank");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNavClick = (sectionId: string) => {
    const element = sectionRefs[sectionId].current;
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Navbar isScrolled={isScrolled} activeSection={activeSection} handleNavClick={handleNavClick} handleWhatsApp={handleWhatsApp} />
      <div ref={sectionRefs.home}><Layout handleWhatsApp={handleWhatsApp} handleNavClick={handleNavClick} /></div>
      <Features />
      <div ref={sectionRefs.servicios}><Services handleWhatsApp={handleWhatsApp} /></div>
      <div ref={sectionRefs.nosotros}><About /></div>
      <div ref={sectionRefs.testimonios}><Testimonials /></div>
      <div ref={sectionRefs.contacto}><Contact handleWhatsApp={handleWhatsApp} /></div>
      <Footer handleNavClick={handleNavClick} />
    </div>
  );
}

export default App;