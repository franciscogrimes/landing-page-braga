'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Users, Eye } from 'lucide-react';

export default function Results() {
  const resultados = [
    {
      icon: Shield,
      titulo: 'Estabilidade emocional',
      descricao: 'Desenvolva equilíbrio interno e maior controle sobre suas reações',
      cor: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sparkles,
      titulo: 'Identidade fortalecida',
      descricao: 'Fortaleça sua essência e faça escolhas mais alinhadas com quem você é',
      cor: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      titulo: 'Menos ansiedade e culpa',
      descricao: 'Reduza ansiedade, culpa e autocrítica para viver com mais leveza',
      cor: 'from-rose-500 to-rose-600'
    },
    {
      icon: Users,
      titulo: 'Relacionamentos seguros',
      descricao: 'Construa vínculos mais saudáveis, maduros e autênticos',
      cor: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Eye,
      titulo: 'Presença e clareza',
      descricao: 'Viva com mais presença, consciência e autonomia em suas decisões',
      cor: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id='resultados' className="relative py-24 bg-gradient-to-b from-[#f9f9f9] to-white overflow-hidden">
      {/* Divider SVG superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path d="M0,0 Q600,60 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Background animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d7b189]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3f1b2d]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3f1b2d] mb-4">
            Resultados do processo
          </h2>
          <div className="w-24 h-1 bg-[#d7b189] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ao longo da psicoterapia, você poderá experimentar transformações profundas e duradouras
          </p>
        </motion.div>

        {/* Grid de resultados */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultados.map((resultado, index) => {
              const Icon = resultado.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d7b189]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d7b189]/30 h-full">
                    {/* Ícone com gradiente */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${resultado.cor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#3f1b2d] mb-4">
                      {resultado.titulo}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {resultado.descricao}
                    </p>

                    {/* Decoração */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#d7b189]/10 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Destaque final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#3f1b2d] via-[#4d2438] to-[#5a2a40] p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Padrão decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d7b189]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Uma jornada de autoconhecimento
              </h3>
              <p className="text-white/90 text-xl leading-relaxed">
                Cada conquista é construída no seu ritmo, com respeito ao seu tempo e às suas necessidades. O processo terapêutico é um caminho de descobertas que transforma não apenas sintomas, mas a forma como você se relaciona consigo mesmo e com o mundo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}