"use client"
import { motion } from "motion/react";

export function SubHeadline(){
  return (
    <section className="py-16 md:py-24 md:px-10 bg-[#3f1b2d] overflow-hidden shadow-2xl">
                <motion.div
            className="text-[#f9f9f9]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="font-bold  text-2xl md:text-5xl p-5 text-justify">
                "Você não precisa viver preso nos mesmos ciclos. Existe um processo claro, técnico e profundo para transformar sua relação com suas emoções — e com você mesmo."
            </h2>

          </motion.div>

    </section>
  );
};

export default SubHeadline;
