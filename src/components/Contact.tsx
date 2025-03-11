import { Clock, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
  handleWhatsApp: () => void;
}

export default function Contact({ handleWhatsApp }: ContactProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const contactInfo = [
    { icon: Clock, title: "Horario", text: "Lun - Sáb: 9:00 - 19:00" },
    { icon: Phone, title: "Teléfono", text: "+54 9 3812426005" },
    { icon: Mail, title: "Email", text: "ritagscheuschner@gmail.com" },
    { icon: MapPin, title: "Dirección", text: "Miguel Lillo 858, San Miguel de Tucumán" },
  ];

  return (
    <section id="contacto" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
              Contáctanos <span className="text-emerald-500">hoy</span>
            </h2>
            <p className="text-lg text-gray-600 text-center mb-6">
              Cuidamos a tu mascota
            </p>
            <form className="space-y-4 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                Enviar mensaje
              </button>
            </form>
            <div className="text-center">
              <p className="text-gray-600 mb-2">
                O contáctanos directamente por WhatsApp
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" /> WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
              Horarios <span className="text-emerald-500">de Atención</span>
            </h2>
            <p className="text-lg text-gray-600 text-center mb-6">
              Estamos para ayudarte
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-md hover:bg-emerald-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="w-6 h-6 text-emerald-500" />
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0081655273957!2d-65.22501792544301!3d-26.83969259015518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c711133dcc1%3A0x12a85f5cde62ad64!2sMiguel%20Lillo%20858%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1741709949824!5m2!1ses-419!2sar"
                className="w-full h-48 rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                title="Ubicación de Pelo & Pata"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
