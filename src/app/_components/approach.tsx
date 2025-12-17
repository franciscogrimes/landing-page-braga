"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

  return (
    <section className="relative bg-[#F7F5EF] px-4 md:px-8 overflow-hidden">
      <div className="grid gap-3 text-center py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#3E5F6D]">
          Minha abordagem
        </h2>
        <p className="text-xl md:text-2xl text-[#3E5F6D] font-medium">
          Um processo técnico, profundo e prático, sustentado pela ciência.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="md:hidden absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-[#0F3B48] p-2 rounded-full disabled:opacity-30 text-[#F7F5EF]"
        >
          <ChevronLeft />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex md:grid md:grid-cols-2 gap-6">
            {dados.map((item) => (
              <div
                key={item.titulo}
                className="
                  min-w-full md:min-w-0
                  bg-[#3E5F6D]
                  text-[#F7F5EF]
                  text-xl
                  p-8
                  flex flex-col gap-4
                  rounded-3xl
                  shadow-2xl
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
          className="md:hidden absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-[#0F3B48] p-2 rounded-full disabled:opacity-30 text-[#F7F5EF]"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8 mb-6 md:hidden">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-[#3E5F6D]"
                : "bg-[#3E5F6D]/40"
            }`}
          />
        ))}
      </div>

      
    </section>
  )
}
