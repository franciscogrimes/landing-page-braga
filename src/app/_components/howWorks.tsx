'use client';

import { motion } from 'framer-motion';
import { Calendar, Monitor, Target, FileCheck, TrendingUp } from 'lucide-react';

export default function HowWorks() {
  const etapas = [
    {
      icon: Calendar,
      titulo: 'Sessões individuais',
      descricao: '50 minutos dedicados exclusivamente a você',
      detalhe: 'online ou presenciais'
    },
    {
      icon: TrendingUp,
      titulo: 'Frequência regular',
      descricao: 'Encontros semanais ou quinzenais',
      detalhe: 'conforme sua necessidade'
    },
    {
      icon: Target,
      titulo: 'Plano personalizado',
      descricao: 'Objetivos claros e adaptados ao seu momento',
      detalhe: 'construído em conjunto'
    },
    {
      icon: FileCheck,
      titulo: 'Ferramentas validadas',
      descricao: 'Técnicas baseadas em evidências científicas',
      detalhe: 'comprovadamente eficazes'
    },
    {
      icon: Monitor,
      titulo: 'Acompanhamento contínuo',
      descricao: 'Evolução monitorada ao longo do processo',
      detalhe: 'com feedbacks regulares'
    }
  ];

  return (
    <section id="como-funciona" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border-2 border-[#d7b189] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#3f1b2d] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3f1b2d] mb-4">
            Como funciona
          </h2>
          <div className="w-24 h-1 bg-[#d7b189] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo estruturado e humanizado para sua transformação
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-[#f9f9f9] to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d7b189] h-full">
                    {/* Número */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#3f1b2d] to-[#5a2a40] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>

                    {/* Ícone */}
                    <div className="mb-6 mt-4">
                      <div className="w-16 h-16 bg-[#d7b189]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d7b189]/20 transition-all duration-300">
                        <Icon className="w-8 h-8 text-[#3f1b2d]" />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <h3 className="text-2xl font-bold text-[#3f1b2d] mb-3">
                      {etapa.titulo}
                    </h3>
                    <p className="text-gray-700 text-lg mb-2 leading-relaxed">
                      {etapa.descricao}
                    </p>
                    <p className="text-[#d7b189] font-medium italic">
                      {etapa.detalhe}
                    </p>

                    {/* Linha decorativa */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#d7b189] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Cada detalhe é pensado para que você se sinta acolhido e apoiado
          </p>
          <div className="inline-block w-32 h-1 bg-gradient-to-r from-[#3f1b2d] via-[#d7b189] to-[#3f1b2d]" />
        </motion.div>
      </div>

      {/* Divider SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0 Q600,60 1200,0 L1200,120 L0,120 Z" fill="#f9f9f9"></path>
        </svg>
      </div>
    </section>
  );
}