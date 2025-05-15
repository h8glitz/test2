"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Финтех платформа",
    description: "Разработка современной финансовой платформы с интеграцией ИИ для анализа данных и прогнозирования",
    category: "Финансы",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-orange-600 to-amber-400",
  },
  {
    id: 2,
    title: "Маркетплейс услуг",
    description: "Создание маркетплейса для поиска и заказа услуг специалистов с системой рейтингов и отзывов",
    category: "Электронная коммерция",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-amber-600 to-orange-500",
  },
  {
    id: 3,
    title: "Медицинское приложение",
    description: "Разработка приложения для телемедицины и мониторинга здоровья с интеграцией медицинских устройств",
    category: "Здравоохранение",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-yellow-500 to-amber-400",
  },
  {
    id: 4,
    title: "Образовательная платформа",
    description: "Создание интерактивной платформы для онлайн-обучения с персонализированными курсами",
    category: "Образование",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    title: "Умный дом",
    description: "Разработка системы управления умным домом с интеграцией IoT устройств и голосовым управлением",
    category: "IoT",
    image: "/placeholder.svg?height=600&width=800",
    gradient: "from-cyan-500 to-blue-600",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  // Calculate visible projects based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 640) return 2
    }
    return 1
  }

  const visibleCount = getVisibleCount()
  const slideWidth = 100 / visibleCount

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex"
          animate={{ x: `-${currentIndex * slideWidth}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-0 flex-shrink-0 px-4" style={{ width: `${slideWidth}%` }}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </div>
                <div className="relative p-6">
                  <div
                    className={`mb-3 inline-block rounded-full bg-gradient-to-r ${project.gradient} bg-clip-text px-3 py-1 text-xs font-medium text-transparent`}
                  >
                    {project.category}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-zinc-50 focus:outline-none md:-left-5 md:h-12 md:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-zinc-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-zinc-50 focus:outline-none md:-right-5 md:h-12 md:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-zinc-700" />
      </button>

      {/* Dots indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-orange-600 w-6" : "bg-zinc-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
