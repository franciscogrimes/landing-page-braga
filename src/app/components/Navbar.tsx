'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como posso ajudar', href: '#ajuda' },
    { label: 'Abordagem', href: '#abordagem' },
    { label: 'Para quem é', href: '#quem-e' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#3f1b2d]/90 backdrop-blur-md shadow-lg' 
            : 'bg-[#3f1b2d]/80 backdrop-blur-sm'
        }`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img src="/logo.png" alt="logo" />
              </div>
              <div className='flex flex-col'>
                <span className="text-[#f9f9f9] font-bold text-lg block leading-tight">Lucas Braga</span>
                <span className="text-[#d7b189] text-xs">Psicólogo Clínico</span>
                <span className="text-[#d7b189] text-xs">CRP 12/30679</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-[#f9f9f9] hover:bg-[#f9f9f9]/10 rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/554831978120"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#d7b189] text-[#3f1b2d] font-semibold rounded-lg hover:bg-[#c9a076] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Conversar com Lucas
              </a>
            </div>

            

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#f9f9f9] hover:bg-[#f9f9f9]/10 rounded-lg transition-all duration-300"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#d7b189]/30 to-transparent"></div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#3f1b2d]/95 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-20 left-0 right-0 bg-[#3f1b2d]/98 backdrop-blur-lg border-t border-[#d7b189]/20 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-[#f9f9f9] hover:bg-[#f9f9f9]/10 rounded-lg transition-all duration-300 font-medium"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="https://wa.me/554831978120"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-6 py-3 bg-[#d7b189] text-[#3f1b2d] font-semibold rounded-lg hover:bg-[#c9a076] transition-all duration-300 text-center shadow-lg"
            >
              Conversar com Lucas
            </a>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
}

export default Navbar;