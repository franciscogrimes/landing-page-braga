"use client"

import { Check } from 'lucide-react';
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HelpYou() {
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

  const casos = [
    "Romper ciclos emocionais repetitivos",
    "Reduzir ansiedade emocional e reatividade",
    "Construir autoestima profunda e sustentável",
  ]
  
  const casos_dois = [
    "Criar uma vida mais estável e consciente",
    "Lidar com emoções e escolhas com maturidade",
    "Desenvolver autocontrole emocional",
  ]
  
  const casos_tres = [
    "Entender e reorganizar padrões afetivos",
    "Melhorar comunicação e expressão emocional",
    "Sair da autossabotagem e procrastinação emocional",
  ]

  const WaveDivider = ({ position = "top" }: { position?: "top" | "bottom" }) => {
  return (
    <div className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden`}>
      <svg
        className="relative block w-full h-16 md:h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="#3f1b2d"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,119.13-6.29,22.54-7.59,43.76-18.27,64.58-31.24C1007.56,14,1063.8,0.13,1115.23,0,1148.16-0.11,1180.61,5.29,1200,20V0Z"
          opacity=".5"
          fill="#3f1b2d"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="#3f1b2d"
        />
      </svg>
    </div>
  );
};

  return (
    <section id='ajuda' className="h-180 md:min-h-screen w-screen bg-[#3f1b2d] px-4 md:px-8 relative overflow-hidden">
      
      <div className="text-center py-10">
        <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-[#f9f9f9]">
          Como posso te ajudar?
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="md:hidden absolute z-10 left-2 top-1/2 -translate-y-1/2 bg-[#d7b189] p-2 rounded-full disabled:opacity-30 text-[#F7F5EF]"
        >
          <ChevronLeft />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex md:grid md:grid-cols-3 gap-5">
            <div className="min-w-full md:min-w-0">
              {casos.map((item) => (
                <div
                  key={item}
                  className="h-30 bg-[#f9f9f9]  text-[#3f1b2d] text-2xl mb-10 p-5 flex gap-3 items-center rounded-2xl shadow-lg hover:shadow-xl leading-relaxed hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                <div className="flex-shrink-0 w-8 h-8 bg-[#d7b189] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="min-w-full md:min-w-0">
              {casos_dois.map((item) => (
                <div
                  key={item}
                  className="h-30 bg-[#f9f9f9] text-[#3f1b2d] text-2xl mb-10 p-5 flex gap-3 items-center rounded-2xl shadow-lg hover:shadow-xl leading-relaxed hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                <div className="flex-shrink-0 w-8 h-8 bg-[#d7b189] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="min-w-full md:min-w-0">
              {casos_tres.map((item) => (
                <div
                  key={item}
                  className="h-30 bg-[#f9f9f9] text-[#3f1b2d] text-2xl mb-10 p-5 flex gap-3 items-center rounded-2xl shadow-lg hover:shadow-xl leading-relaxed hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                <div className="flex-shrink-0 w-8 h-8 bg-[#d7b189] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="md:hidden absolute z-10 right-2 top-1/2 -translate-y-1/2 bg-[#d7b189] text-[#F7F5EF] p-2 rounded-full disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6 mb-4 md:hidden">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-[#F7F5EF]"
                : "bg-[#F7F5EF]/40"
            }`}
          />
        ))}
      </div>

    </section>
  )
}
