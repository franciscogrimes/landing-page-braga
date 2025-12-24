'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Mail, Phone } from 'lucide-react';

export default function CTAFinal() {
  const formasContato = [
    { icon: MessageCircle, texto: 'WhatsApp', link:"https://wa.me/5548996648123" },
    { icon: Mail, texto: 'Email', link:"" },
    { icon: Phone, texto: 'Telefone', link: "tel:48996648123"}
  ];

  return (
    <section id='contato' className="relative py-24 bg-gradient-to-br from-[#3f1b2d] via-[#4d2438] to-[#5a2a40] overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
          <path d="M0,0 Q600,60 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#d7b189] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-8"
            >
              <div className="bg-[#d7b189] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase shadow-lg">
                Dê o primeiro passo
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Se você busca um processo psicológico{' '}
              <span className="text-[#d7b189]">sério, profundo</span>
              <br />
              e baseado em evidências
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Estou aqui para caminhar com você nessa jornada de transformação
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-16"
            >
              <a
                href="https://wa.me/5548996648123"
                target='blank'
                className="group inline-flex items-center gap-3 bg-[#d7b189] hover:bg-[#c9a378] text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-[#d7b189]/50 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Agende sua sessão inicial
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-center text-white/80 mb-8 text-lg">
              Ou entre em contato diretamente por:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {formasContato.map((forma, index) => {
                const Icon = forma.icon;
                return (
                  <motion.a
                    key={index}
                    href={forma.link}
                    target='blank'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="group flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-6 rounded-2xl transition-all duration-300 border border-white/20 hover:border-[#d7b189]"
                  >
                    <div className="w-14 h-14 bg-[#d7b189] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {forma.texto}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                A primeira sessão é um momento de acolhimento, onde conversaremos sobre suas necessidades, expectativas e construiremos juntos o melhor caminho para você.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 Q300,60 600,30 T1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-white" />
        </svg>
      </div>
    </section>
  );
}