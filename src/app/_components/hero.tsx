'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#3f1b2d] shadow-2xl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#d7b189]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d7b189]/3 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#d7b189]/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#d7b189]/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full px-6 py-16 relative z-10 min-h-screen">
        {/* Background with decorative curves */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-[#d7b189]/10 to-transparent rounded-b-[100%]"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#d7b189]/5 to-transparent rounded-t-[80%]"></div>
        </div>

        <div 
          className={`relative mb-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="relative w-72 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d7b189]/20 via-[#d7b189]/10 to-transparent rounded-[40%_60%_70%_30%/60%_30%_70%_40%] animate-pulse"></div>
            
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src="/IMG_3181.JPEG"
                alt="Lucas Braga - Psicólogo"
                className="w-full h-full rounded-full shadow-2xl object-center object-cover"
                
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#3f1b2d] via-transparent to-transparent opacity-40 rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"></div>
          </div>
          
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f9f9f9]/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-[#d7b189]/20 min-w-[200px]">
            <h3 className="text-lg font-bold text-[#3f1b2d] text-center">Lucas Braga</h3>
            <p className="text-[#d7b189] text-sm text-center font-medium">CRP XX/XXXXX</p>
          </div>
        </div>

        <div 
          className={`text-center space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col gap-6 w-full max-w-lg text-center mt-8">
            <div className="relative">
              <p className="text-base text-[#f9f9f9]/90 leading-relaxed font-medium">
                Transforme padrões emocionais e construa uma vida mais estável, consciente e autêntica.
              </p>
            </div>
          </div>
        </div>

        <div 
          className={`mt-8 flex flex-col gap-4 w-full max-w-sm transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="https://wa.me/5548996648123"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#d7b189] text-[#3f1b2d] font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-base text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Agendar Avaliação Inicial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d7b189] to-[#c9a076] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>

       
      </div>

      <div className="hidden lg:flex  flex-col gap-8 w-full relative z-10 px-12">
        <div 
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h1 className="w-auto text-3xl md:text-5xl font-bold text-[#f9f9f9]">
            Regulação emocional, Autonomia psicológica e Relacionamentos mais estáveis
          </h1>
        </div>
        
        <div 
          className={`flex flex-col gap-5 max-w-3xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >          
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#f9f9f9]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-lg md:text-xl lg:text-2xl text-[#f9f9f9]/90 leading-relaxed md:leading-relaxed font-medium">
              Transforme padrões emocionais e construa uma vida mais estável, consciente e autêntica.
            </p>
          </div>
        </div>
        
        <div 
          className={`mt-5 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6 max-w-2xl transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <a 
            href="https://wa.me/5548996648123"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#d7b189] text-[#3f1b2d] font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Agendar Avaliação Inicial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d7b189] to-[#c9a076] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a 
            href="#sobre"
            className="px-8 py-4 border-2 text-center border-[#d7b189]/50 text-[#d7b189] font-semibold rounded-lg hover:bg-[#d7b189]/10 hover:border-[#d7b189] transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl backdrop-blur-sm"
          >
            Conhecer Mais
          </a>
        </div>
      </div>

      {/* Right Image - Desktop */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#3f1b2d]/40 via-[#3f1b2d]/20 to-transparent z-10"></div>
        <img 
          src="/IMG_3181.JPEG"
          alt="Psicoterapia e bem-estar emocional"
          className="w-full h-full object-cover object-left"
          style={{
            maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;