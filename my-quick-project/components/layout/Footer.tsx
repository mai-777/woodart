// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-[#F9EBD4] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Contacto</h3>
            <div className="space-y-2 text-gray-700">
              <p className="hover:text-amber-800 transition-colors">
                <a href="mailto:woodart.ar@gmail.com">woodart.ar@gmail.com</a>
              </p>
              <p className="hover:text-amber-800 transition-colors">
                <a href="tel:+5491128562118">+54 9 11 2856 2118</a>
              </p>
              <p className="hover:text-amber-800 transition-colors">
                <Link href="https://www.woodart.com">www.WoodArt.com</Link>
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Redes Sociales</h3>
            <div className="flex flex-col space-y-3 items-center md:items-start">
              {[
                { icon: Instagram, url: "https://instagram.com/woodart.ar", label: "woodart.ar" },
                { icon: Twitter, url: "https://twitter.com/woodart_ar", label: "woodart_ar" },
                { icon: Facebook, url: "https://facebook.com/woodart.ar", label: "woodart.ar" }
              ].map((social) => (
                <Link
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-800 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} WoodArt. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}