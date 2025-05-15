"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Исследование",
    description:
      "Глубокий анализ потребностей пользователей, рынка и конкурентов для создания продукта, который действительно решает проблемы.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    number: "02",
    title: "Проектирование",
    description:
      "Разработка архитектуры, прототипирование и создание дизайн-системы, которая обеспечит единый визуальный язык продукта.",
    gradient: "from-orange-600 to-amber-400",
  },
  {
    number: "03",
    title: "Разработка",
    description:
      "Написание чистого, масштабируемого кода с использованием современных технологий и методологий разработки.",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    number: "04",
    title: "Тестирование",
    description:
      "Комплексное тестирование для обеспечения высокого качества, производительности и безопасности продукта.",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    number: "05",
    title: "Запуск",
    description: "Плавный запуск продукта с последующим мониторингом и оперативным реагированием на обратную связь.",
    gradient: "from-orange-400 to-amber-500",
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <section ref={containerRef} id="process" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Наш процесс</h2>
          <p className="mt-6 text-xl text-zinc-600">
            Мы следуем проверенному процессу разработки, который обеспечивает высокое качество и эффективность
          </p>
        </motion.div>

        <div className="mt-20 space-y-20 md:mt-32 md:space-y-32">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div
                  className={`mb-6 inline-block rounded-lg bg-gradient-to-br ${step.gradient} px-4 py-2 text-sm font-medium text-white`}
                >
                  {step.number}
                </div>
                <h3 className="mb-4 text-3xl font-bold text-zinc-900">{step.title}</h3>
                <p className="text-lg text-zinc-600">{step.description}</p>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} text-3xl font-bold text-white`}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
