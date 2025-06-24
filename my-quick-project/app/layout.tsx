// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer'; // Asegúrate de tener este componente

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WoodArt - Artesanía en Madera',
  description: 'Creamos piezas artesanales únicas en madera',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}