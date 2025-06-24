// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

type NavItem = {
  name: string;
  path?: string;
  action?: () => void;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { 
      name: 'Inicio', 
      path: '/',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) 
    },
    { name: 'Nosotros', path: '/about' },
    { 
      name: 'Productos', 
      action: () => {
        document.getElementById('productos-section')?.scrollIntoView({
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    },
    { 
      name: 'Contacto', 
      action: () => {
        document.getElementById('footer-contact')?.scrollIntoView({
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    }
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <header className="bg-white py-3 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        <Link href="/" className="md:absolute md:left-6 z-50">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-amber-800 transition-colors text-sm lg:text-base font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={item.action} // TypeScript ahora sabe que action existe aquí
                className="text-gray-700 hover:text-amber-800 transition-colors text-sm lg:text-base font-medium"
              >
                {item.name}
              </button>
            )
          ))}
        </nav>

        <button
          className="md:hidden text-gray-700 z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/80 z-40 pt-20">
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-2xl text-white hover:text-amber-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action?.(); // Uso del operador opcional
                      setIsMenuOpen(false);
                    }}
                    className="text-2xl text-white hover:text-amber-300"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}