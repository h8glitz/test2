"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Lightbulb,
  type LucideIcon,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  features: string[]
}

const services: Service[] = [
  {
    id: "web",
    title: "Веб-разработка",
    description: "Создаем современные веб-приложения с использованием передовых технологий и фреймворков",
    icon: Globe,
    color: "from-orange-500 to-amber-400",
    features: ["SPA приложения", "Корпоративные порталы", "Интернет-магазины", "Высоконагруженные системы"],
  },
  {
    id: "mobile",
    title: "Мобильные приложения",
    description: "Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android",
    icon: Smartphone,
    color: "from-purple-500 to-blue-500",
    features: ["iOS разработка", "Android разработка", "React Native", "Flutter"],
  },
  {
    id: "design",
    title: "UI/UX Дизайн",
    description: "Проектируем интуитивно понятные и эстетичные пользовательские интерфейсы с фокусом на пользователя",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    features: ["Прототипирование", "Дизайн-системы", "Пользовательские исследования", "Анимации и микровзаимодействия"],
  },
  {
    id: "ai",
    title: "Искусственный интеллект",
    description: "Внедряем решения на базе ИИ для автоматизации и оптимизации бизнес-процессов",
    icon: Brain,
    color: "from-green-400 to-cyan-500",
    features: ["Машинное обучение", "Компьютерное зрение", "Обработка естественного языка", "Чат-боты"],
  },
  {
    id: "cloud",
    title: "Облачные решения",
    description: "Разрабатываем и внедряем масштабируемые облачные инфраструктуры для вашего бизнеса",
    icon: Cloud,
    color: "from-amber-500 to-orange-500",
    features: ["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes"],
  },
  {
    id: "consulting",
    title: "Консалтинг",
    description: "Помогаем бизнесу выбрать оптимальные технологические решения для достижения целей",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-500",
    features: ["Технический аудит", "Оптимизация процессов", "Стратегическое планирование", "Обучение команд"],
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Наши услуги</h2>
              <p className="mt-6 max-w-2xl text-xl text-zinc-600">
                Полный спектр услуг по разработке цифровых продуктов, от идеи до запуска и поддержки
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#contact" className="group inline-flex items-center text-lg font-medium text-black">
                Все услуги
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Card front */}
              <div className="relative z-10 p-8">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white transition-transform duration-500 group-hover:scale-110`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-zinc-900">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>

                {/* Features list */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-600">
                      <ChevronRight className="mr-2 h-4 w-4 text-zinc-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="group border-zinc-200 bg-white text-zinc-900 hover:border-zinc-900 hover:bg-white"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* Animated background gradient */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-gradient-to-r ${service.color} transition-transform duration-500 group-hover:scale-x-100`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
