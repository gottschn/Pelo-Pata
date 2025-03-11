import { Dog, ShowerHeadIcon as Shower, ScissorsIcon as NailScissors, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesProps {
  handleWhatsApp: () => void;
}

export default function Services({ handleWhatsApp }: ServicesProps) {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  const services = [
    { icon: <Dog className="w-12 h-12 text-emerald-500" />, title: "Corte de pelo y estilizado", description: "Cortes personalizados según la raza y preferencia" },
    { icon: <Shower className="w-12 h-12 text-emerald-500" />, title: "Baño y deslanado", description: "Limpieza profunda y cuidado del pelaje" },
    { icon: <NailScissors className="w-12 h-12 text-emerald-500" />, title: "Corte de uñas", description: "Mantenimiento seguro y profesional" },
    { icon: <Sparkles className="w-12 h-12 text-emerald-500" />, title: "Tratamientos especiales", description: "Spa y tratamientos de belleza exclusivos" },
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Nuestros <span className="text-emerald-500">Servicios</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ofrecemos una gama completa de servicios de peluquería y cuidado para que tu mascota luzca y se sienta increíble.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          {services.map((service, index) => (
            <motion.div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="flex justify-center mb-6">
                <div className="bg-emerald-50 p-4 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <div className="mt-4 flex justify-center">
                <button onClick={handleWhatsApp} className="text-emerald-500 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" /> Consultar
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}