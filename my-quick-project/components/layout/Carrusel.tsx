// components/Carrusel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carrusel() {
  const imagenes = [
    "/images/maderas1.jpg",
    "/images/maderas2.jpg",
    "/images/maedras3.jpg",
  ];

  const [imagenActual, setImagenActual] = useState(0);

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden"> {/* Eliminado max-w-4xl mx-auto rounded-lg shadow-lg */}
      {/* Contenedor del carrusel - ahora más alto para mejor impacto visual */}
      <div className="relative h-[70vh] min-h-[400px]"> {/* Ajusta la altura según necesites */}
        {imagenes.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${ // Transición más suave
              index === imagenActual ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={img}
              alt={`Imagen ${index + 1} del carrusel`}
              fill
              className="object-cover w-full h-full" // Asegura que ocupe todo el espacio
              priority={index === 0}
              sizes="100vw" // Optimización para pantallas grandes
            />
          </div>
        ))}
      </div>

      {/* Flechas de navegación - más grandes y visibles */}
      <button
        onClick={anteriorImagen}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-8 h-8 text-gray-800" /> {/* Flechas más grandes */}
      </button>
      <button
        onClick={siguienteImagen}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-8 h-8 text-gray-800" /> {/* Flechas más grandes */}
      </button>

      {/* Indicadores de posición - más visibles */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setImagenActual(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === imagenActual ? "bg-white shadow-md" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}