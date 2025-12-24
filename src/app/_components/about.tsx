"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { WaveDivider } from "../components/WaveDivider"


export function About() {
  return (
    <section id="sobre" className="min-h-screen w-screen flex items-center justify-center bg-[#f9f9f9] overflow-hidden px-4 md:px-8 relative">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-20">
        <motion.div
          className="relative w-full h-90 md:h-[500px] rounded-3xl md:rounded-br-[60px] overflow-hidden shadow-2xl order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/IMG_3182.JPEG"
            alt="Dr. Lucas Braga - Psicólogo Clínico"
            className="object-cover hover:scale-105 transition-transform duration-500"
            quality={90}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3f1b2d]/20 via-transparent to-transparent" />
        </motion.div>

        <motion.div 
          className="grid gap-6 md:gap-8 px-2 md:px-4 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-5xl md:text-4xl lg:text-5xl font-bold text-center mb-3 text-[#3f1b2d] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre mim
          <div className="w-24 h-1 bg-[#d7b189] mx-auto mb-6" />
          </motion.h1>

          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl lg:text-2xl text-/90 leading-relaxed md:leading-relaxed">
              Sou psicólogo clínico com atuação baseada em evidências, integrando 
              <span className="font-semibold text-"> TCC, ACT e DBT</span>.
            </p>
            
            <p className="text-xl lg:text-2xl text-/90 leading-relaxed md:leading-relaxed">
              Trabalho com 
              <span className="font-semibold text-"> regulação emocional, padrões afetivos, autoestima, 
              produtividade emocional e relacionamentos</span>, sempre com um olhar 
              humano, estruturado e orientado a mudanças sustentáveis.
            </p>
            
            <motion.div 
              className="relative group mt-6 md:mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3f1b2d]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="relative text-xl lg:text-2xl text- leading-relaxed md:leading-relaxed italic border-l-4 border-[#3f1b2d]/30 pl-4 py-2">
                Acredito em uma psicologia profunda e aplicável: 
                nem rasa, nem inacessível. Clara, ética e transformadora.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-[#3f1b2d]/10 backdrop-blur-sm rounded-full text-[#3f1b2d] text-sm font-medium border border-[#3f1b2d]/20">
                TCC
              </span>
              <span className="px-4 py-2 bg-[#3f1b2d]/10 backdrop-blur-sm rounded-full text-[#3f1b2d] text-sm font-medium border border-[#3f1b2d]/20">
                ACT
              </span>
              <span className="px-4 py-2 bg-[#3f1b2d]/10 backdrop-blur-sm rounded-full text-[#3f1b2d] text-sm font-medium border border-[#3f1b2d]/20">
                DBT
              </span>
              <span className="px-4 py-2 bg-[#3f1b2d]/10 backdrop-blur-sm rounded-full text-[#3f1b2d] text-sm font-medium border border-[#3f1b2d]/20">
                Baseado em Evidências
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-[#F7F5EF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#3f1b2d]/10 rounded-full blur-3xl"></div>

                
           <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg 
              className="relative block w-full h-16 md:h-24" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
            >
              <motion.path 
                d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" 
                fill="#3f1b2d"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path 
                d="M0,80 C300,60 600,100 900,80 C1050,70 1150,90 1200,80 L1200,120 L0,120 Z" 
                fill="#3f1b2d"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>
          
    </section>
  );
}