export function Hero() {
  return (
    <section className="min-h-screen w-screen md:h-auto md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 relative shadow-2xl bg-[#3f1b2d]">
      <div className="absolute inset-0 z-0">
        <img 
          src="/IMG_3179.JPEG"
          alt="Background"
          className="md:hidden w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3f1b2d]/85 to-[#3f1b2d]/85"></div>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center w-full py-12 relative z-10">
        <div className="w-64 h-64 mb-8 relative">
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-[#F7F5EF]/20">
            <img 
              src="/IMG_3181.JPEG"
              alt="Psicoterapia e bem-estar emocional"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-[#F7F5EF]/10 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#F7F5EF] mb-1">Lucas Braga</h2>
          <p className="text-[#F7F5EF]/70 text-sm">CRP XX/XXXXX</p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-lg text-center">
          <h1 className="hidden text-2xl font-bold text-[#F7F5EF] leading-tight">
            Regulação emocional, Autonomia psicológica e Relacionamentos mais estáveis
          </h1>
          
          <div className="relative">
            <p className=" text-base text-[#F7F5EF]/90 leading-relaxed font-medium">
              Transforme padrões emocionais e construa uma vida mais estável, consciente e autêntica.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col gap-4 w-full max-w-sm">
          <a 
            className="px-8 py-4 border-2 border-[#F7F5EF] text-[#F7F5EF] font-semibold rounded-lg hover:bg-[#F7F5EF] hover:text-[#3f1b2d] transform hover:-translate-y-1 transition-all duration-300 text-base backdrop-blur-sm cursor-pointer text-center" 
            href="https://wa.me/5548996648123"
            target="_blank"
          >
            Agendar Avaliação Inicial
          </a>
          <a 
            className="hidden md:px-8 py-4 border-2 border-[#F7F5EF] text-[#F7F5EF] font-semibold rounded-lg hover:bg-[#F7F5EF] hover:text-[#3f1b2d] transform hover:-translate-y-1 transition-all duration-300 text-base backdrop-blur-sm cursor-pointer text-center" 
            href="#sobre"
          >
            Conhecer Mais
          </a>
        </div>
      </div>

      {/* Layout Desktop - Mantém como está */}
      <div className="hidden lg:flex flex-col gap-8 w-full relative z-10">
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
          <a 
            className="px-8 py-4 border-2 border-[#F7F5EF] text-[#F7F5EF] font-semibold rounded-lg hover:bg-[#F7F5EF] hover:text-[#0F3B48] transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl backdrop-blur-sm cursor-pointer text-center" 
            href="https://wa.me/5548996648123"
            target="_blank"
          >
            Agendar Avaliação Inicial
          </a>
          <a 
            className="px-8 py-4 border-2 text-center border-[#F7F5EF] text-[#F7F5EF] font-semibold rounded-lg hover:bg-[#F7F5EF] hover:text-[#0F3B48] transform hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl backdrop-blur-sm cursor-pointer" 
            href="#sobre"
          >
            Conhecer Mais
          </a>
        </div>
      </div>

      {/* Imagem Desktop - Mantém como está */}
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