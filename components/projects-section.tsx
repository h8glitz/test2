"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Финтех платформа",
    description: "Разработка современной финансовой платформы с интеграцией ИИ для анализа данных и прогнозирования",
    category: "Финансы",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-orange-600 to-amber-400",
    link: "#",
  },
  {
    id: 2,
    title: "Маркетплейс услуг",
    description: "Создание маркетплейса для поиска и заказа услуг специалистов с системой рейтингов и отзывов",
    category: "Электронная коммерция",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-amber-600 to-orange-500",
    link: "#",
  },
  {
    id: 3,
    title: "Медицинское приложение",
    description: "Разработка приложения для телемедицины и мониторинга здоровья с интеграцией медицинских устройств",
    category: "Здравоохранение",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-yellow-500 to-amber-400",
    link: "#",
  },
  {
    id: 4,
    title: "Образовательная платформа",
    description: "Создание интерактивной платформы для онлайн-обучения с персонализированными курсами",
    category: "Образование",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-amber-500 to-orange-600",
    link: "#",
  },
  {
    id: 5,
    title: "Умный дом",
    description: "Разработка системы управления умным домом с интеграцией IoT устройств и голосовым управлением",
    category: "IoT",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-cyan-500 to-blue-600",
    link: "#",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    if (isAnimating) return
    setDirection(1)
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    if (isAnimating) return
    setDirection(-1)
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const currentProject = projects[currentIndex]
  const nextProjectIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
  const prevProjectIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
  const nextProjectData = projects[nextProjectIndex]
  const prevProjectData = projects[prevProjectIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[30%] rounded-full bg-amber-500/20 blur-[120px]" />
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
            Наши{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block">
              проекты
            </span>
          </h2>
          <p className="mt-6 text-xl text-zinc-400">
            Ознакомьтесь с нашими последними работами, которые демонстрируют наш подход и экспертизу
          </p>
        </motion.div>

        <div className="mt-20" ref={containerRef}>
          <div className="relative mx-auto max-w-5xl">
            {/* Main project display */}
            <AnimatePresence initial={false} custom={direction} onExitComplete={handleAnimationComplete} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-20`}></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div
                      className={`mb-4 inline-block w-fit rounded-full bg-gradient-to-r ${currentProject.gradient} px-4 py-1 text-sm font-medium text-white`}
                    >
                      {currentProject.category}
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-white">{currentProject.title}</h3>
                    <p className="mb-6 text-zinc-400">{currentProject.description}</p>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        className="group border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                      >
                        Подробнее
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-12 flex items-center justify-between">
              <button
                onClick={prevProject}
                className="group flex items-center space-x-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-zinc-800"
                disabled={isAnimating}
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Предыдущий</span>
              </button>

              <div className="flex space-x-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (isAnimating) return
                      setDirection(idx > currentIndex ? 1 : -1)
                      setIsAnimating(true)
                      setCurrentIndex(idx)
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-white w-6" : "bg-zinc-600"
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="group flex items-center space-x-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-zinc-800"
                disabled={isAnimating}
              >
                <span>Следующий</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Preview of next/prev projects */}
          <div className="mt-16 hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              <div className="group cursor-pointer" onClick={prevProject}>
                <div className="relative aspect-video overflow-hidden rounded-lg opacity-50 transition-opacity group-hover:opacity-70">
                  <Image
                    src={prevProjectData.image || "/placeholder.svg"}
                    alt={prevProjectData.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${prevProjectData.gradient} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowLeft className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-zinc-500">{prevProjectData.title}</p>
              </div>

              <div className="group cursor-pointer" onClick={nextProject}>
                <div className="relative aspect-video overflow-hidden rounded-lg opacity-50 transition-opacity group-hover:opacity-70">
                  <Image
                    src={nextProjectData.image || "/placeholder.svg"}
                    alt={nextProjectData.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${nextProjectData.gradient} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-zinc-500">{nextProjectData.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
