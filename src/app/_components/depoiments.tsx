"use client"

import { useEffect, useRef, useState } from "react"

const depoimentos = [
  {
    numero: "01",
    quote:
      "Sempre achei que terapia era só conversa. O processo com Lucas tem estrutura, cada sessão faz sentido e eu saio com algo concreto.",
    perfil: "Paciente, 29 anos",
    tempo: "processo de 6 meses",
  },
  {
    numero: "02",
    quote:
      "Depois de meses reagindo de formas que eu não entendia, finalmente consigo fazer uma pausa antes de explodir.",
    perfil: "Paciente, 34 anos",
    tempo: "processo de 8 meses",
  },
  {
    numero: "03",
    quote:
      "Fiz terapia antes e sempre saía mais confusa. Aqui ficou claro o que estava me travando. Foi a primeira vez que o processo fez sentido para mim.",
    perfil: "Paciente, 27 anos",
    tempo: "processo de 5 meses",
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof depoimentos)[0]
  index: number
}) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 150}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
      className="group relative flex gap-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
    >
      {/* Número lateral */}
      <div className="flex-shrink-0 w-20 md:w-24 bg-[#d7b189] flex flex-col items-center justify-center py-8 px-2 gap-1 relative">
        <span
          className="text-[#3f1b2d] font-black text-3xl md:text-4xl leading-none tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {item.numero}
        </span>
        {/* vertical line */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-10 bg-[#3f1b2d]/20" />
      </div>

      {/* Conteúdo */}
      <div className="bg-[#f9f4ef] flex-1 px-6 md:px-8 py-7 flex flex-col justify-between gap-4 group-hover:bg-[#f5ede3] transition-colors duration-500">
        {/* aspas decorativas */}
        <span
          className="text-[#d7b189] text-6xl leading-none select-none -mb-4 -mt-1"
          style={{ fontFamily: "'Georgia', serif" }}
          aria-hidden
        >
          "
        </span>

        <p
          className="text-[#3f1b2d] text-base md:text-lg leading-relaxed font-medium"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {item.quote}
        </p>

        <div className="flex items-center gap-3 mt-1">
          {/* dot */}
          <span className="w-2 h-2 rounded-full bg-[#d7b189] flex-shrink-0" />
          <p className="text-sm text-[#5a3040] italic">
            {item.perfil}
            <span className="mx-2 text-[#d7b189]">·</span>
            {item.tempo}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Depoiments() {
  const { ref: headRef, inView: headInView } = useInView(0.2)

  return (
    <section
      id="depoimentos"
      className="w-screen bg-[#3f1b2d] py-20 px-4 md:px-12 relative overflow-hidden"
    >
      {/* Background texture blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-[#d7b189]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#d7b189]/8 blur-3xl" />

      {/* Heading */}
      <div
        ref={headRef}
        style={{
          opacity: headInView ? 1 : 0,
          transform: headInView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-[#d7b189] uppercase tracking-widest text-xs font-semibold mb-3">
          O que dizem os pacientes
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f9f9f9] leading-snug"
        >
          Palavras de quem viveu o processo
        </h2>
        <p className="text-[#f9f9f9]/60 mt-4 text-base md:text-lg leading-relaxed">
          Cada trajetória é única. Esses relatos são de pessoas que decidiram se conhecer melhor.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {depoimentos.map((item, index) => (
          <TestimonialCard key={item.numero} item={item} index={index} />
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-[#f9f9f9]/30 text-xs mt-12 tracking-wide">
        Identidades preservadas. Depoimentos reais com autorização.
      </p>
    </section>
  )
}