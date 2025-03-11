import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  const testimonials = [
    { quote: "¡Mi perro nunca había estado tan guapo! El equipo es increíblemente profesional y cariñoso.", author: "Ana G.", image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", rating: 5 },
    { quote: "Servicio rápido y súper amable. Mi mascota siempre sale feliz y hermosa de aquí.", author: "Carlos M.", image: "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", rating: 5 },
    { quote: "El mejor lugar para el cuidado de mi mascota. Los precios son justos y el servicio es excelente.", author: "Laura P.", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60", rating: 5 },
  ];

  return (
    <section id="testimonios" className="py-20 px-4 bg-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Lo que dicen nuestros <span className="text-emerald-500">clientes</span></h2>
          <p className="text-xl text-gray-600">Experiencias reales de dueños de mascotas felices</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" variants={fadeInUp} whileHover={{ y: -10 }}>
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full object-cover mr-4" loading="lazy" />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <div className="flex text-yellow-400">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}