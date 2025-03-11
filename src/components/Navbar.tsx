"use client";

import { useState } from "react";
import { PawPrintIcon as Paw, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
  handleWhatsApp: () => void;
}

export default function Navbar({ isScrolled, activeSection, handleNavClick, handleWhatsApp }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["servicios", "nosotros", "testimonios", "contacto"];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Paw className={`w-8 h-8 ${isScrolled ? "text-emerald-500" : "text-white"}`} />
          <span className={`text-2xl font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>Pelo & Pata</span>
        </div>

        <div className={`hidden md:flex space-x-8 ${isScrolled ? "text-gray-600" : "text-white"}`}>
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`hover:text-emerald-500 transition-colors capitalize ${activeSection === section ? "text-emerald-500 font-semibold" : ""}`}
            >
              {section}
            </button>
          ))}
        </div>

        <button
          className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick(section);
                  }}
                  className={`text-gray-800 hover:text-emerald-500 transition-colors capitalize py-2 ${activeSection === section ? "text-emerald-500 font-semibold" : ""}`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={handleWhatsApp}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 mt-2"
              >
                Reserva tu cita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}