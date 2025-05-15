"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const timelineEvents = [
  {
    year: "2005",
    title: "Основание компании",
    description:
      "Цифронит была основана группой энтузиастов с целью создания инновационных технологических решений для бизнеса.",
    icon: "🏢",
    gradient: "from-orange-400 to-orange-600",
    image: "/timeline/founding.jpg", // Будут использоваться условно
  },
  {
    year: "2008",
    title: "Первый крупный проект",
    description:
      "Успешная реализация первого масштабного проекта для крупного корпоративного клиента, что стало точкой роста для компании.",
    icon: "🚀",
    gradient: "from-orange-500 to-amber-600",
    image: "/timeline/project.jpg",
  },
  {
    year: "2012",
    title: "Международная экспансия",
    description:
      "Открытие первого международного офиса и начало работы с клиентами из Европы и США.",
    icon: "🌎",
    gradient: "from-amber-600 to-orange-500",
    image: "/timeline/international.jpg",
  },
  {
    year: "2015",
    title: "Технологическая трансформация",
    description:
      "Переход на новый стек технологий и запуск собственной платформы для разработки веб-приложений.",
    icon: "⚙️",
    gradient: "from-orange-600 to-amber-500",
    image: "/timeline/tech.jpg",
  },
  {
    year: "2018",
    title: "100+ успешных проектов",
    description: 
      "Преодоление отметки в 100 завершенных проектов и формирование команды из 50+ специалистов.",
    icon: "📈",
    gradient: "from-amber-500 to-orange-600",
    image: "/timeline/growth.jpg",
  },
  {
    year: "2021",
    title: "Запуск образовательной инициативы",
    description:
      "Открытие учебного центра и запуск программы стажировок для молодых специалистов.",
    icon: "🎓",
    gradient: "from-orange-600 to-amber-500",
    image: "/timeline/education.jpg",
  },
  {
    year: "2024",
    title: "Новые горизонты",
    description:
      "Активное развитие направления искусственного интеллекта и расширение линейки продуктов.",
    icon: "🔮",
    gradient: "from-amber-500 to-orange-500",
    image: "/timeline/future.jpg",
  },
]

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  // Создаем хук для отслеживания текущего активного элемента
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
    [0, 1, 2, 3, 4, 5, 6]
  )

  return (
    <section ref={containerRef} className="relative px-6 py-24 md:py-32 lg:px-8 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[80px]" />
      
      <div className="radial-mask absolute inset-0 bg-gradient-to-r from-zinc-100 via-white to-zinc-100 opacity-80" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="text-zinc-900">Цифронит</span>
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent"> История</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl text-zinc-600"
          >
            Ключевые моменты в развитии нашей компании, которые сформировали нас такими, какими мы являемся сегодня
          </motion.p>
        </div>

        {/* Горизонтальная шкала времени */}
        <div className="relative h-[2px] bg-zinc-200 mx-auto mb-12 max-w-5xl">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-amber-500"
            style={{ width: progress.get() * 100 + "%" }}
          />
          
          {/* Маркеры годов */}
          <div className="absolute top-0 left-0 w-full flex justify-between">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={`marker-${index}`}
                className="relative -top-[10px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`h-5 w-5 rounded-full bg-gradient-to-br ${event.gradient} border-2 border-white shadow-lg
                  transition-all duration-300 ease-in-out`}
                  style={{
                    scale: useTransform(activeIndex, i => (i === index ? 1.5 : 1))
                  }}
                />
                <div className="absolute -left-5 top-6 w-10 text-center">
                  <span className="text-xs font-medium text-zinc-600">{event.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-20">
          {/* Карточки событий */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 md:mb-32 lg:mb-40"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div 
                    className={`relative z-10 p-8 rounded-2xl overflow-hidden bg-white shadow-xl
                    border border-zinc-100 backdrop-blur-sm transition-all duration-300
                    hover:shadow-2xl hover:-translate-y-1 group`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${event.gradient} text-xl shadow-lg`}>
                        {event.icon}
                      </div>
                      <div className="flex-grow">
                        <div className={`text-sm font-semibold px-3 py-1 rounded-full inline-block bg-gradient-to-r ${event.gradient} text-white`}>
                          {event.year}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{event.title}</h3>
                    <p className="text-base md:text-lg text-zinc-600">{event.description}</p>
                    
                    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 flex items-center justify-center text-5xl">
                      {event.icon}
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 relative">
                  <motion.div 
                    className={`aspect-video rounded-2xl bg-zinc-200 overflow-hidden shadow-lg
                    ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${event.gradient} opacity-80`}>
                      <div className="w-full h-full flex items-center justify-center text-7xl">
                        {event.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Декоративные элементы */}
                  <div className={`absolute -z-10 ${index % 2 === 0 ? '-right-5' : '-left-5'} -bottom-5 w-20 h-20
                  rounded-full bg-gradient-to-br ${event.gradient} opacity-20 blur-md`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Индикатор "Scroll to Explore" */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-zinc-500 text-sm flex items-center justify-center gap-2">
            <span className="h-[1px] w-10 bg-zinc-300"></span>
            Листайте, чтобы исследовать историю
            <span className="h-[1px] w-10 bg-zinc-300"></span>
          </p>
        </motion.div>
      </div>
    </section>
  )
} 