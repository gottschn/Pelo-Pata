import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  const stats = [
    { number: "2+", text: "Años de experiencia" },
    { number: "259+", text: "Clientes felices" },
    { number: "4.9", text: "Calificación promedio" },
    { number: "100%", text: "Satisfacción garantizada" },
  ];

  return (
    <section id="nosotros" className="py-12 bg-emerald-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div className="relative" variants={fadeInUp}>
            <div className="absolute -top-3 -left-3 w-48 h-48 bg-emerald-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-3 -right-3 w-48 h-48 bg-emerald-300 rounded-full opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Equipo Pelo & Pata" className="relative rounded-2xl shadow-xl max-w-full md:max-w-xs mx-auto" loading="lazy" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre <span className="text-emerald-500">Nosotros</span></h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">En Pelo & Pata, amamos a las mascotas tanto como tú. Con más de 2 años de experiencia, ofrecemos un servicio personalizado para que tu mascota luzca y se sienta increíble.</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div key={index} className="bg-white p-3 rounded-lg shadow-sm" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <p className="text-2xl font-bold text-emerald-500 mb-0.5">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}