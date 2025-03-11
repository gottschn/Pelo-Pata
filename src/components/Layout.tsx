import { PawPrintIcon as Paw, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import fondoCopado from '../img/fondito.jpg';

interface LayoutProps {
  handleWhatsApp: () => void;
  handleNavClick: (sectionId: string) => void;
}

export default function Hero({ handleWhatsApp, handleNavClick }: LayoutProps) {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src={fondoCopado}
          alt="layout"
          className="w-full h-full object-cover object-center transform scale-105 shadow-lg"
          loading="eager"
        />
      </div>
      <motion.div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div className="flex justify-center mb-6" variants={fadeInUp}><Paw className="w-16 h-16 text-emerald-400" /></motion.div>
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" variants={fadeInUp}><span className="text-emerald-400">Pelo & Pata</span></motion.h1>
        <motion.p className="text-xl md:text-2xl mb-12 text-gray-200" variants={fadeInUp}>Donde el cuidado y el estilo se encuentran para hacer brillar a tu mejor amigo</motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
          <motion.button onClick={handleWhatsApp} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MessageCircle className="w-6 h-6 group-hover:animate-bounce" /> Reserva tu cita ahora
          </motion.button>
          <motion.button onClick={() => handleNavClick("servicios")} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Conoce nuestros servicios
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  );
}
