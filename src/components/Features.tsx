import { Heart, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  const features = [
    { icon: <Heart className="w-8 h-8 text-emerald-500" />, title: "Cuidado Personalizado", description: "Cada mascota recibe atención única adaptada a sus necesidades específicas" },
    { icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />, title: "Profesionales Expertos", description: "Equipo certificado con años de experiencia en peluquería canina" },
    { icon: <Star className="w-8 h-8 text-emerald-500" />, title: "Productos Premium", description: "Utilizamos solo productos de la más alta calidad para el cuidado de tu mascota" },
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          {features.map((feature, index) => (
            <motion.div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}