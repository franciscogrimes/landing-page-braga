"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export function Approach() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const dados = [
    {
      titulo: "TCC — Terapia Cognitivo-Comportamental",
      descricao:
        "Clareza, estrutura e mudança de padrões de pensamento e comportamento.",
    },
    {
      titulo: "ACT — Terapia de Aceitação e Compromisso",
      descricao:
        "Flexibilidade psicológica e ações alinhadas aos próprios valores.",
    },
    {
      titulo: "DBT — Terapia Comportamental Dialética",
      descricao:
        "Regulação emocional e desenvolvimento de habilidades para a vida.",
    },
    {
      titulo: "Modelos Baseados em Processos",
      descricao:
        "Foco nos processos que realmente geram mudança terapêutica.",
    },
  ]

  const casos = [
    "Ansiedade e preocupação excessiva",
    "Depressão e desânimo",
    "Dificuldades nos relacionamentos",
  ]

  const casos_dois = [
    "Baixa autoestima e autocrítica",
    "Trauma e eventos do passado",
    "Transições de vida",
  ]

  const casos_tres = [
    "Desregulação emocional",
    "Perda de propósito",
    "Conflitos internos",
  ]

  return (
    <section id="abordagem" className="relative bg-[#f9f9f9] px-4 md:px-8 overflow-hidden py-16">
      <div className="grid gap-3 text-center max-w-5xl mx-auto mb-12">
        <h2 className="text-5xl lg:text-5xl text-center font-bold text-[#3f1b2d]">
          Minha abordagem
        </h2>
        <div className="w-24 h-1 bg-[#d7b189] mx-auto mb-6" />

        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          Um processo técnico, profundo e prático, sustentado pela ciência.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto md:mb-10">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="md:hidden absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-[#d7b189] opacity-80 p-2 rounded-full disabled:opacity-30 text-[#f9f9f9] transition-all duration-300 hover:opacity-100"
        >
          <ChevronLeft />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex md:grid md:grid-cols-2 gap-6">
            {dados.map((item, index) => (
              <div
                key={item.titulo}
                className="
                
                  min-w-full md:min-w-0
                  bg-[#3f1b2d]
                  text-[#f9f9f9]
                  text-xl
                  p-8
                  flex flex-col gap-4
                  rounded-3xl
                  shadow-lg 
                  hover:shadow-xl                  
                  transition-all
                  hover:-translate-y-1
                "
              >
                <h3 className="text-2xl font-bold text-center">
                  {item.titulo}
                </h3>
                <p className="text-center leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="md:hidden absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-[#d7b189] opacity-80 p-2 rounded-full disabled:opacity-30 text-[#f9f9f9] transition-all duration-300 hover:opacity-100"
        >
          <ChevronRight />
        </button>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${selectedIndex === index 
                  ? 'bg-[#d7b189] w-8' 
                  : 'bg-[#d7b189]/30 hover:bg-[#d7b189]/50'
                }
              `}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

     
    </section>
  )
}

export default Approach;