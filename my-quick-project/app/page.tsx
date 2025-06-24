// app/page.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Carrusel from "@/components/layout/Carrusel";

export default function WoodArtHomePage() {
  const products = [
    { id: 1, name: "Soporte Cinta", price: "$10.99", image: "/images/obj1.jpg" },
    { id: 2, name: "Destapador Botellas", price: "$10.99", image: "/images/obj2.jpg" },
    { id: 3, name: "Soporte Anteojos", price: "$10.99", image: "/images/obj3.jpg" },
    { id: 4, name: "Portallaves", price: "$10.99", image: "/images/obj4.jpg" },
    { id: 5, name: "Portavasos", price: "$10.99", image: "/images/obj5.jpg" },
    { id: 6, name: "Reloj", price: "$10.99", image: "/images/obj6.jpg" },
    { id: 7, name: "Cucharas", price: "$10.99", image: "/images/obj8.jpg" },
    { id: 8, name: "Soporte Celular", price: "$10.99", image: "/images/obj9.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Carrusel de imágenes */}
        <Carrusel />

        {/* Sección de bienvenida */}
        <div className="bg-stone-100 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-medium text-gray-800 mb-4">
              <span className="font-semibold">Bienvenidos</span> a WoodArt.
            </h1>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Creamos piezas artesanales, decoración y accesorios únicos, con pasión por el diseño y la calidad.
              <br />
              Dale a tu espacio un toque natural o encuentra el regalo perfecto con la autenticidad de WoodArt.
            </p>
          </div>
        </div>

        {/* Sección de Productos (con ID para el scroll desde el Header) */}
        <section id="productos-section" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-stone-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        priority={product.id <= 4} // Prioriza carga de primeras imágenes
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}