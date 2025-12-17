export function Hero() {

  return (
    <section className="min-h-screen w-screen md:h-40 flex items-center justify-center bg-gradient-to-r from-[#0F3B48] to-[#3E5F6D] overflow-hidden px-4 md:px-8 relative shadow-2xl ">
      <div className="flex flex-col gap-8 w-full relative z-10">
         <span className="inline-block px-4 py-2 bg-[#F7F5EF]/10 backdrop-blur-sm rounded-full text-[#F7F5EF] text-sm md:text-base font-medium mb-4  border border-[#F7F5EF]/20 max-w-4xl md:w-75 text-center">
            Psicoterapia Baseada em evidências
          </span>
        <div className="max-w-4xl">
          <h1 className="w-auto text-3xl md:text-5xl font-bold text-[#F7F5EF]">
            Regulação emocional, Autonomia psicológica e Relacionamentos mais estáveis
          </h1>
        </div>
        
        <div className="flex flex-col gap-5 max-w-3xl">          
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F7F5EF]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-lg md:text-xl lg:text-2xl text-[#F7F5EF]/90 leading-relaxed md:leading-relaxed font-medium">
              Transforme padrões emocionais e construa uma vida mais estável, consciente e autêntica.
            </p>
          </div>
        </div>
        
        <div className="mt-5 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6 max-w-2xl">
          <a className="px-8 py-4 border-2 border-[#F7F5EF] text-[#F7F5EF] font-semibold rounded-lg hover:bg-[#F7F5EF] hover:text-[#0F3B48] transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl backdrop-blur-sm cursor-pointer text-center" 
          href="https://wa.me/5548996648123"
          target="_blank"
          >
            Agendar Avaliação Inicial
          </a>
          <a 
            className="px-8 py-4 border-2 text-center border-[#F7F5EF] text-[#F7F5EF] font-semibold rounded-lg hover:bg-[#F7F5EF] hover:text-[#0F3B48] transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl backdrop-blur-sm cursor-pointer" href="#sobre"
          >
            Conhecer Mais
          </a>
        </div>
      </div>

      <div className="lg:hidden absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3B48]/95 via-[#0F3B48]/85 to-transparent z-10"></div>
        <img 
          src="/IMG_3181.JPEG"
          alt="Psicoterapia e bem-estar emocional"
          className="w-full h-full object-cover object-center"
          style={{
            maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)'
          }}
        />
      </div>

      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#0F3B48]/40 via-[#0F3B48]/20 to-transparent z-10"></div>
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
    </section>
  );
}