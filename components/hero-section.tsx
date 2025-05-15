"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "@/components/type-animation"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-white text-zinc-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-x-[-30%] translate-y-[30%] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-[length:50px_50px] opacity-5" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-screen max-w-7xl flex-col justify-center px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm backdrop-blur-sm"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            Мы открыты для новых проектов
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Создаем{" "}
            <TypeAnimation
              sequence={[
                "цифровые продукты",
                2000,
                "мобильные приложения",
                2000,
                "веб-сервисы",
                2000,
                "инновационные решения",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-xl text-zinc-600"
          >
            Мы создаем цифровые прорывы для среднего и крупного бизнеса, превращая сложные идеи в инновационные решения
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button size="lg" className="group bg-black text-white hover:bg-zinc-800">
              Обсудить проект
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100">
              Наши услуги
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm text-zinc-500">Прокрутите вниз</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-500 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}
