// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Importar los componentes Header, Footer y Carrusel
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Carrusel from "@/components/layout/Carrusel"; // Asegúrate de que la ruta sea correcta


export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* Llama al componente Header */}

      <main>
        {/* Carrusel de imágenes */}
        <Carrusel />

        {/* Hero Section (puedes decidir si quieres mantener esta sección además del Carrusel o reemplazarla) */}
        {/* Si quieres mantenerla, asegúrate de que los estilos no interfieran */}
        {/*
        <section className="relative bg-stone-100 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative">
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md">
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md">
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
              <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/wooden-animals.png"
                  alt="Figuras de animales de madera artesanales - panda, ciervo, conejo, oso y otros"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        */}

        <div className="bg-white py-12">
          {/* About Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">Sobre Nosotros: WoodArt</h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              En WoodArt, transformamos la nobleza de la madera en piezas artesanales únicas, objetos de decoración y
              accesorios hace varios años. Nuestra misión es simple: ofrecer la más alta calidad y diseño, llevando la
              calidez y el arte de la madera a hogares y negocios alrededor del mundo. La satisfacción y confianza de
              nuestros clientes es el motor que nos impulsa.
            </p>
          </section>

          {/* Services Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Qué ofrecemos en WoodArt?</h3>
            <p className="text-gray-800 leading-relaxed text-justify">
              Más que productos, en WoodArt ofrecemos soluciones artesanales que combinan arte, calidad, originalidad
              y distinción. Cada pieza es fruto de la pasión y el cuidado, diseñada para agregar un toque especial, ya
              sea en tu hogar, oficina o como el regalo perfecto. Y lo mejor, con la comodidad de recibirlo en tu
              puerta.
            </p>
          </section>

          {/* Target Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Para quiénes creamos en WoodArt?</h3>
            <div className="space-y-3 text-gray-800 leading-relaxed text-justify">
              <p>
                <strong>Particulares:</strong> Encuentra esa pieza única que buscas para decorar o regalar.
              </p>
              <p>
                <strong>Revendedores:</strong> Accede a nuestra variedad de productos al por mayor, con precios
                competitivos y logística eficiente para tu negocio.
              </p>
              <p>
                <strong>Empresas y Organizaciones:</strong> Ofrecemos opciones personalizadas en madera para regalos
                corporativos y merchandising, que realmente destacan.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contáctate con nosotros</h3>
            <p className="text-gray-800 leading-relaxed text-justify">
              Por más información sobre nuestra empresa y productos, dudas o consultas, no dejes de contactarte con
              nosotros enviándonos un mail a{" "}
              <Link href="mailto:woodart.ar@gmail.com" className="text-gray-900 underline hover:text-amber-700">
                woodart.ar@gmail.com
              </Link>
            </p>
          </section>
        </div>
      </main>

      <Footer /> {/* Llama al componente Footer */}
    </div>
  );
}