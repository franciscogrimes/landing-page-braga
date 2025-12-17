"use client";

import { motion } from "motion/react";
import iesa from "../../../public/IESA.png";
import dimas from "../../../public/DIMAS.png";
import renault from "../../../public/RENAULT.png";

export function Partners() {
  return (
    <section className="bg-black py-30 text-[#ffcb04] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center">
            <h2 className="font-bold text-4xl mb-6  md:px-3 ">
              Parceria é a chave do sucesso!
            </h2>
            <p className="text-white text-2xl leading-relaxed text-justify mx-auto px-3 md:mx-6">
              A Estuqui Instalações Automotivas tem orgulho de contar com
              grandes parceiros como o Grupo IESA e a Automega Renault. Essas
              alianças fortalecem nosso compromisso com a qualidade e nos
              permitem oferecer soluções ainda mais completas e confiáveis aos
              nossos clientes. Juntos, elevamos o padrão do setor automotivo.
            </p>
          </div>

          <div className="flex gap-3 items-center justify-center space-y-8 md:flex">
            <a href="https://www.grupoiesa.com.br/" target="_blank">
              <motion.img
                src={iesa.src}
                alt="Grupo IESA"
                className="w-52 h-52"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </a>

            <a href="https://www.automegarenault.com.br/" target="_blank">
              <motion.img
                src={renault.src}
                alt="Grupo DIMAS"
                className="w-52 h-52"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
