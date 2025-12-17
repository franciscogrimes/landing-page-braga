"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bancos from "../../../public/BANCOS.jpg";
import estetica from "../../../public/ESTETICA.jpg";
import pelicula from "../../../public/PELICULA.jpeg";
import vinil from "../../../public/PPF.jpg";
import ppf from "../../../public/VINIL.jpg";
import acessorios from "../../../public/ACESSORIO.png";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 3,
      },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const services = [
    {
      title: "Colocação de PPF",
      description:
        "O PPF (Paint Protection Film) oferece diversos benefícios, principalmente na proteção da pintura do veículo. Ele atua como uma barreira invisível, protegendo contra arranhões, impactos de pedras e detritos, raios UV, manchas e substâncias químicas, além de manter o brilho original da pintura.",
      image: vinil,
    },
    {
      title: "Estética Automotiva",
      description:
        "Muito além da beleza! Nossa estética automotiva cuida de cada detalhe: da hidratação do couro à vitrificação da pintura, da higienização interna à cristalização dos vidros. Brilho duradouro, proteção de verdade e aquele toque de excelência que valoriza seu carro por dentro e por fora.",
      image: estetica,
    },
    {
      title: "Envelopamento com vinil",
      description:
        "O envelopamento oferece diversas vantagens, tanto estéticas quanto práticas, ao proteger a pintura original do veículo e permitir uma personalização visual com diversas opções de cores e texturas. Além disso, o envelopamento é mais acessível financeiramente e mais rápido de instalar do que uma pintura completa, e pode ser facilmente removido sem danificar a pintura original.",
      image: ppf,
    },
    {
      title: "Instalação de bancos de couro",
      description:
        "Bancos revestidos em couro sintético nos automóveis apresenta uma série de benefícios que aliam sofisticação e funcionalidade. Trata-se de um material de alta durabilidade, resistente ao desgaste cotidiano e de fácil higienização, proporcionando maior praticidade na rotina dos usuários. Além disso, confere ao interior do veículo um acabamento mais elegante e valorizado, reforçando a percepção de qualidade e conforto.",
      image: bancos,
    },
    {
      title: "Instalação de película",
      description:
        "Proteção, conforto e estilo! Nossas películas automotivas garantem bloqueio de até 99,9% dos raios solares, controle térmico e mais privacidade. Com opções que vão do básico ao Cerâmica ULTRA HD, você escolhe a proteção ideal para seu carro — inclusive para o para-brisa, com transparência e segurança.",
      image: pelicula,
    },
    {
      title: "Instalação de acessórios",
      description:
        "Cada detalhe instalado para valorizar o seu veículo. Instalamos centrais multimídia, sensores, câmeras, alarmes e iluminação com total cuidado e responsabilidade. Cada acessório é integrado ao seu veículo para oferecer mais praticidade, segurança e aquele toque de modernidade que faz diferença no dia a dia.",
      image: acessorios,
    },
  ];

  return (
    <section className="bg-[#ffcb04] py-16 text-black">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl mb-12 text-center">
          Conheça os nossos serviços
        </h2>

        <div className="relative">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-black text-yellow-400 p-2 rounded-full shadow-md disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-3 md:flex-[0_0_33.3333%]"
                >
                  <article className="bg-black text-[#ffcb04] rounded-2xl p-6 space-y-6 h-full flex flex-col">
                    <div className="relative w-full aspect-[4/4] md:aspect-[4/4] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <h3 className="font-bold text-xl md:text-xl text-center">
                      {item.title}
                    </h3>
                    <p className="flex-grow text-white text-base text-justify md:text-lg leading-relaxed overflow-y-auto max-h-32 md:max-h-none">
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-black text-yellow-400 p-2 rounded-full shadow-md disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
