"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const cards = [
  {
    emoji: "🔁",
    title: "Ciclos que se repetem",
    text: "Relacionamentos que terminam do mesmo jeito. Reações que você não consegue controlar. Autossabotagem na hora que mais importa.",
    variant: "light",
  },
  {
    emoji: "😔",
    title: "Viver no automático",
    text: "Ansiedade de fundo constante. Sensação de que algo está errado, mas você não sabe o quê. Distância de si mesmo.",
    variant: "light",
  },
  {
    emoji: "🧩",
    title: "Dificuldades com quem você ama",
    text: "Conflitos frequentes. Dificuldade de confiar, de comunicar o que sente ou de estabelecer limites sem culpa.",
    variant: "light",
  },
]

const variantStyles: Record<string, { card: string; title: string; text: string; divider: string }> = {
  light: {
    card: "bg-[#f9f4ef]",
    title: "text-[#3f1b2d]",
    text: "text-[#5a3040]",
    divider: "bg-[#d7b189]",
  }
}

export function HelpYou() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section
      id="ajuda"
      className="h-150 w-screen bg-[#3f1b2d] flex flex-col justify-center px-4 md:px-12 py-16 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-10 left-1/4 w-80 h-80 rounded-full bg-[#d7b189]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#d7b189]/10 blur-3xl" />

      <div className="text-center mb-12 relative z-10">
        <p className="text-[#d7b189] uppercase tracking-widest text-xs font-semibold mb-3">
          Você se reconhece...
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f9f9f9] max-w-2xl mx-auto leading-snug">
          em alguns desses padrões?
        </h2>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full relative z-10">
        {cards.map((card) => {
          const s = variantStyles[card.variant]
          return (
            <div
              key={card.title}
              className={`${s.card} rounded-2xl p-7 flex flex-col gap-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl leading-none">{card.emoji}</span>
                <h3 className={`font-bold text-lg leading-tight ${s.title}`}>{card.title}</h3>
              </div>
              <div className={`w-10 h-0.5 rounded-full ${s.divider}`} />
              <p className={` leading-relaxed ${s.text}`}>{card.text}</p>
            </div>
          )
        })}
      </div>

      <div className="md:hidden relative z-10">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 px-6">
            {cards.map((card) => {
              const s = variantStyles[card.variant]
              return (
                <div
                  key={card.title}
                  className={`${s.card} rounded-2xl p-6 flex flex-col gap-4 shadow-lg flex-shrink-0 w-[80vw]`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{card.emoji}</span>
                    <h3 className={`font-bold text-lg leading-tight ${s.title}`}>{card.title}</h3>
                  </div>
                  <div className={`w-10 h-0.5 rounded-full ${s.divider}`} />
                  <p className={`text-base leading-relaxed ${s.text}`}>{card.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-[#d7b189] w-6 h-2.5"
                  : "bg-[#f9f9f9]/30 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}