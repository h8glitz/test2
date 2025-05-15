"use client"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

interface TechCategory {
  name: string
  technologies: Technology[]
}

interface Technology {
  name: string
  icon: string
  description: string
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "R",
        description: "Библиотека для создания пользовательских интерфейсов",
      },
      {
        name: "Next.js",
        icon: "N",
        description: "React-фреймворк для создания веб-приложений",
      },
      {
        name: "TypeScript",
        icon: "TS",
        description: "Типизированный JavaScript для масштабируемых приложений",
      },
      {
        name: "Tailwind CSS",
        icon: "T",
        description: "Utility-first CSS фреймворк для быстрой разработки",
      },
      {
        name: "Vue.js",
        icon: "V",
        description: "Прогрессивный JavaScript-фреймворк",
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      {
        name: "C#",
        icon: "C#",
        description: "Мощный объектно-ориентированный язык программирования от Microsoft",
      },
      {
        name: "Python",
        icon: "P",
        description: "Универсальный язык программирования",
      },
      {
        name: "Go",
        icon: "G",
        description: "Язык программирования для высоконагруженных систем",
      },
      {
        name: "Java",
        icon: "J",
        description: "Объектно-ориентированный язык программирования",
      },
      {
        name: "PHP",
        icon: "P",
        description: "Скриптовый язык для веб-разработки",
      },
    ],
  },
  {
    name: "Mobile",
    technologies: [
      {
        name: "React Native",
        icon: "RN",
        description: "Фреймворк для кроссплатформенной мобильной разработки",
      },
      {
        name: "Swift",
        icon: "S",
        description: "Язык программирования для iOS-разработки",
      },
      {
        name: "Kotlin",
        icon: "K",
        description: "Современный язык программирования для Android",
      },
      {
        name: "Flutter",
        icon: "F",
        description: "SDK для создания кроссплатформенных приложений",
      },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      {
        name: "Docker",
        icon: "D",
        description: "Платформа для контейнеризации приложений",
      },
      {
        name: "Kubernetes",
        icon: "K",
        description: "Система оркестрации контейнеров",
      },
      {
        name: "AWS",
        icon: "A",
        description: "Облачная платформа Amazon Web Services",
      },
      {
        name: "CI/CD",
        icon: "CI",
        description: "Непрерывная интеграция и доставка",
      },
    ],
  },
  {
    name: "Databases",
    technologies: [
      {
        name: "PostgreSQL",
        icon: "PG",
        description: "Объектно-реляционная система управления базами данных",
      },
      {
        name: "MongoDB",
        icon: "M",
        description: "NoSQL база данных, ориентированная на документы",
      },
      {
        name: "Redis",
        icon: "R",
        description: "In-memory хранилище данных",
      },
      {
        name: "MySQL",
        icon: "M",
        description: "Реляционная система управления базами данных",
      },
    ],
  },
]

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[30%] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-[length:50px_50px] opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Технологии, которые мы{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              используем
            </span>
          </h2>
          <p className="mt-6 text-xl text-zinc-600">
            Мы работаем с передовыми технологиями, чтобы создавать современные и эффективные решения
          </p>
        </motion.div>

        <div className="mt-20">
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-center space-x-1 rounded-xl border border-zinc-200 bg-white p-1 shadow-sm">
              {techCategories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    cn(
                      "w-full rounded-lg px-4 py-2.5 text-sm font-medium leading-5 sm:w-auto",
                      "ring-orange-500 ring-offset-2 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
                    )
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-8">
              {techCategories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className={cn(
                    "rounded-xl border border-zinc-100 bg-white p-6 shadow-sm",
                    "ring-orange-500 ring-offset-2 focus:outline-none focus:ring-2",
                  )}
                >
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group flex flex-col items-center rounded-lg border border-zinc-100 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-md"
                      >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-xl font-bold text-white">
                          {tech.icon}
                        </div>
                        <h3 className="mb-2 text-center text-lg font-medium text-zinc-900">{tech.name}</h3>
                        <p className="text-center text-sm text-zinc-600">{tech.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  )
}
