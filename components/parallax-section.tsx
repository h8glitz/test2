"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  return (
    <section ref={containerRef} className="relative h-[80vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Parallax elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[80px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div style={{ opacity }} className="max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Превращаем идеи в цифровую реальность
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-600">
            Мы не просто создаем продукты — мы создаем цифровые решения, которые меняют мир к лучшему
          </p>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-[length:50px_50px] opacity-5" />
    </section>
  )
}
