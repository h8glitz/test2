"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ImpactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
      {/* Background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-[80px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-500/20 blur-[100px]"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-[length:50px_50px] opacity-5" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold w-[110%] tracking-tight sm:text-5xl md:text-6xl">
                Превращаем идеи в
       <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block">цифровую реальность</span>
              </h2>
              <p className="mt-6 text-xl text-zinc-400">
                Мы не просто создаем продукты — мы создаем цифровые решения, которые меняют мир к лучшему
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 space-y-8"
            >
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Инновационный подход</h3>
                <p className="text-zinc-400">
                  Мы используем передовые технологии и методологии для создания уникальных решений
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Ориентация на результат</h3>
                <p className="text-zinc-400">
                  Мы фокусируемся на достижении бизнес-целей и создании ценности для пользователей
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"
            >
              {/* Abstract visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[300px] w-[300px]">
                  <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700 opacity-30"></div>
                  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700 opacity-20"></div>
                  <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700 opacity-10"></div>

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="absolute h-4 w-4 rounded-full bg-orange-500 blur-sm"></div>
                    <div className="absolute bottom-0 h-4 w-4 rounded-full bg-amber-500 blur-sm"></div>
                    <div className="absolute right-0 h-4 w-4 rounded-full bg-yellow-500 blur-sm"></div>
                  </motion.div>

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="absolute h-3 w-3 rounded-full bg-cyan-500 blur-sm"></div>
                    <div className="absolute bottom-0 h-3 w-3 rounded-full bg-green-500 blur-sm"></div>
                    <div className="absolute right-0 h-3 w-3 rounded-full bg-yellow-500 blur-sm"></div>
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 opacity-80 blur-md"></div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 to-transparent p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-white">98%</p>
                    <p className="text-sm text-zinc-400">Довольных клиентов</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">150+</p>
                    <p className="text-sm text-zinc-400">Проектов</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">10+</p>
                    <p className="text-sm text-zinc-400">Лет опыта</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
