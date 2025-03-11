import { PawPrintIcon as Paw, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  handleNavClick: (sectionId: string) => void;
}

export default function Footer({ handleNavClick }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Paw className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">Pelo & Pata</span>
            </div>
            <p className="text-gray-400">Cuidado profesional y dedicado para tu mascota</p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/rischeuschn/?hl=es-" className="text-gray-400 hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              {["servicios", "nosotros", "testimonios", "contacto"].map((section) => (
                <li key={section}>
                  <button onClick={() => handleNavClick(section)} className="hover:text-emerald-400 transition-colors capitalize">{section}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ritagscheuschner@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +54 9 3812426005</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Miguel Lillo 858</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Miguel de Tucumán, Argentina</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pelo & Pata. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}