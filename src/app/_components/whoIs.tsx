'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function WhoIs() {
  const beneficios = [
    'profundidade e método',
    'compreensão madura dos próprios padrões',
    'autonomia emocional',
    'relações mais estáveis e conscientes'
  ];

  return (
    <section id='quem-e' className="relative py-24 bg-[#f9f9f9] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d7b189]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3f1b2d]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-[#3f1b2d] mb-4 text-center">
            Para quem é
          </h2>
          <div className="w-24 h-1 bg-[#d7b189] mx-auto mb-12" />

          <p className="text-xl text-gray-700 mb-12 text-center">
            Este atendimento é para <span className="font-semibold text-[#3f1b2d]">adultos</span> que buscam:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#d7b189] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-[#3f1b2d] to-[#5a2a40] p-8 rounded-3xl shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#d7b189] font-semibold text-xl mb-2">
                  Não é para você se:
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Procura soluções rápidas ou sem envolvimento no processo.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
          <path d="M0,0 C150,60 350,0 600,40 C850,80 1050,20 1200,60 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}