"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const processSteps = [
  {
    title: "Исследование",
    description:
      "Глубокий анализ потребностей пользователей, рынка и конкурентов для создания продукта, который действительно решает проблемы.",
    icon: "🔍",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "Проектирование",
    description:
      "Разработка архитектуры, прототипирование и создание дизайн-системы, которая обеспечит единый визуальный язык продукта.",
    icon: "✏️",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    title: "Разработка",
    description:
      "Написание чистого, масштабируемого кода с использованием современных технологий и методологий разработки.",
    icon: "💻",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    title: "Тестирование",
    description:
      "Комплексное тестирование для обеспечения высокого качества, производительности и безопасности продукта.",
    icon: "🧪",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Запуск",
    description: "Плавный запуск продукта с последующим мониторингом и оперативным реагированием на обратную связь.",
    icon: "🚀",
    gradient: "from-orange-500 to-yellow-500",
  },
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <section ref={containerRef} className="relative px-6 py-24 md:py-32 lg:px-8">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
            Наш процесс
          </h2>
          <p className="mt-6 text-xl text-zinc-600">
            Мы следуем проверенному процессу разработки, который обеспечивает высокое качество и эффективность
          </p>
        </div>

        <div className="relative mt-20">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-zinc-200" />
          <motion.div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-500 to-amber-500 origin-top"
            style={{ scaleY: progress }}
          />

          <div className="relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`mb-20 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="mb-4 text-3xl font-bold text-zinc-900">{step.title}</h3>
                  <p className="text-lg text-zinc-600">{step.description}</p>
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div
                    className={`absolute h-16 w-16 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 blur-md`}
                  />
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-xl`}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
