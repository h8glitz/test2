"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Преимущества компании
const benefits = [
  {
    title: "Профессиональный рост и обучение",
    icon: "🚀",
    description: "Мы поддерживаем непрерывное развитие наших сотрудников через внутренние и внешние образовательные программы"
  },
  {
    title: "Участие в интересных проектах",
    icon: "🔍",
    description: "Работа над разноплановыми задачами в сфере финтеха, блокчейна, торговли и производства"
  },
  {
    title: "Конкурентная заработная плата",
    icon: "💰",
    description: "Мы ценим ваши навыки и опыт, предлагая достойное вознаграждение с возможностью роста"
  },
  {
    title: "Комфортные условия работы",
    icon: "🏢",
    description: "Современный офис с комфортными рабочими местами и гибким графиком"
  },
  {
    title: "Опытные менторы",
    icon: "👨‍🏫",
    description: "Наши лидеры всегда готовы поделиться знаниями и помочь в решении сложных задач"
  },
  {
    title: "Вкусные печеньки",
    icon: "🍪",
    description: "И другие приятные бонусы, которые делают рабочий процесс еще приятнее"
  }
];

// Вакансии по группам
const vacancies = [
  {
    title: "Разработчики JS",
    skills: ["React", "Next.js", "Angular", "Vue", "Git, Docker"]
  },
  {
    title: "Разработчики С#",
    skills: ["ASP.Net Core", "SQL, EF Core, Dapper", "PostgreSql, Redis, MongoDb", "REST, GRPC, SOAP", "Git, Docker"]
  },
  {
    title: "Разработчики JAVA",
    skills: ["Spring", "SQL, Hibernate", "PostgreSql, Redis, MongoDb", "REST, GRPC, SOAP", "Git, Docker"]
  },
  {
    title: "Тестировщики",
    skills: ["Основы Java, JS или Python", "Postman", "JUnit", "Selenide", "Git, Docker"]
  },
  {
    title: "Аналитики",
    skills: ["UML, BPMN, EPC", "Use Cases, User Story", "Основы Java, JS или C#", "Swagger, Rest, GRPC, SOAP", "SQL/NoSQL СУБД"]
  },
  {
    title: "Мобильные разработчики",
    skills: ["Android/Kotlin, Java", "IOS/Swift", "Rest/SOAP", "SQLite", "Git"]
  }
];

// Этапы найма
const hiringSteps = [
  {
    number: 1,
    title: "Отправка резюме",
    description: "Отправьте нам свое резюме через форму на сайте или на электронную почту",
    color: "bg-orange-600",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:bg-orange-100",
    gradient: "from-orange-600 to-orange-500"
  },
  {
    number: 2,
    title: "Первичное интервью",
    description: "Знакомство с компанией и обсуждение вашего опыта и ожиданий",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:bg-orange-100",
    gradient: "from-orange-500 to-orange-400"
  },
  {
    number: 3,
    title: "Техническое собеседование",
    description: "Оценка профессиональных навыков с нашими техническими специалистами",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:bg-orange-100",
    gradient: "from-orange-500 to-orange-400"
  },
  {
    number: 4,
    title: "Принятие решения и предложение о работе",
    description: "Обсуждение условий сотрудничества и оформление необходимых документов",
    color: "bg-orange-600",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:bg-orange-100",
    gradient: "from-orange-600 to-orange-500"
  }
];

export function CareerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Добавляем состояние для активного шага
  const [activeStep, setActiveStep] = useState(0);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[30%] rounded-full bg-amber-500/10 blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Присоединяйтесь к нашей{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block">
                команде профессионалов
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-zinc-600"
            >
              Создавайте инновационные IT-решения и развивайтесь вместе с нами
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-8 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
              >
                Отправить резюме
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Наши <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">преимущества</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Почему стоит выбрать карьеру в нашей компании
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-100 overflow-hidden"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-[50px]" />
                
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-sm">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-zinc-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Info */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-zinc-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[100px]" />
          <div className="absolute right-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-2xl bg-white overflow-hidden border border-zinc-100">
              <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Информация об аккредитации</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-zinc-700">
                        Наша организация является получателем налоговых льгот, что позволяет нашим работникам воспользоваться возможностью получения льготной ипотеки для IT-специалистов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-zinc-700">
                        Мы являемся аккредитованной организацией с 2019 года
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Вакансии</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Присоединяйтесь к нашей команде профессионалов
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vacancies.map((vacancy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md border border-zinc-100 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{vacancy.title}</h3>
                <ul className="space-y-2">
                  {vacancy.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-orange-600">•</span>
                      <span className="text-zinc-700">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mt-12"
          >
            <p className="text-lg font-medium text-zinc-800">
              Если ты хочешь быть частью нашей команды, присылай резюме на{" "}
              <a href="mailto:hr@company.com" className="text-orange-600 hover:text-orange-700">
                didenko@axsoft.ru
              </a>{" "}
              или свяжись с нами в Telegram:{" "}
              <a href="https://t.me/LenaAxsoft" className="text-orange-600 hover:text-orange-700">
                @LenaAxsoft
              </a>
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://hh.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-zinc-800 shadow-sm border border-zinc-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                Наша страница на hh.ru
              </a>
              <a
                href="https://career.habr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-zinc-800 shadow-sm border border-zinc-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                Хабр карьера
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="relative z-10 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Декоративные блики */}
          <motion.div
            style={{ y: y1 }}
            className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-[120px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[30%] rounded-full bg-orange-500/10 blur-[120px]"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Процесс найма <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">прост и понятен</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Всего несколько шагов отделяют вас от работы в нашей команде
            </p>
          </motion.div>

          <div className="relative">
            {/* Карточки процесса найма */}
            <div className="grid md:grid-cols-4 gap-6">
              {hiringSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={cn(
                    "relative bg-white rounded-3xl shadow-md p-8",
                    "flex flex-col h-full transition-all duration-300",
                    activeStep === index ? `shadow-lg scale-[1.02] border-2 ${step.borderColor}` : `hover:shadow-lg hover:scale-[1.01] ${step.hoverColor}`
                  )}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Цветной квадратный маркер с числом */}
                    <div className={cn(
                      "flex items-center justify-center w-16 h-16 rounded-2xl text-white text-2xl font-bold shadow-md",
                      "bg-gradient-to-b",
                      step.gradient
                    )}>
                      {step.number}
                    </div>
                    
                    {/* Белый круг для визуального эффекта */}
                    <div className="w-14 h-14 bg-white rounded-full absolute right-6 top-6 border-4 border-orange-50"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 mt-4 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-600 flex-grow">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Пагинация и переключение шагов */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12 space-x-4"
            >
              {hiringSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300",
                    activeStep === index 
                      ? `bg-gradient-to-r ${step.gradient} text-white font-medium shadow-md`
                      : `${step.lightColor} text-orange-700 ${step.hoverColor}`
                  )}
                >
                  Шаг {step.number}
                </button>
              ))}
            </motion.div>
            
            {/* Информация о сроках */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-orange-50 to-white rounded-3xl p-8 shadow-md border border-orange-100"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    Сроки рассмотрения заявок
                  </h3>
                  <p className="text-zinc-700">
                    Мы стремимся оперативно обрабатывать все заявки. Обычно первый ответ вы получите в течение 
                    <span className="font-semibold text-orange-600"> 3 рабочих дней</span> после отправки резюме. 
                    Весь процесс найма занимает в среднем <span className="font-semibold text-orange-600">1-2 недели</span>.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Отправить резюме
                    <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form - Improved Resume Submission */}
      <section className="relative z-10 py-20 md:py-28" id="contact">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Отправить <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">резюме</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Присоединяйтесь к команде профессионалов и создавайте будущее вместе с нами
            </p>
          </motion.div>

          <div className="relative grid gap-10 md:grid-cols-5 items-start">
            {/* Left side info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-gradient-to-br from-white to-zinc-50 rounded-2xl p-6 md:p-8 shadow-sm border border-zinc-100"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Как с нами связаться
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-zinc-700">Телефон</p>
                    <p className="mt-1 text-zinc-600">+7 (4712) 238-250</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-zinc-700">Email</p>
                    <a href="mailto:didenko@axsoft.ru" className="mt-1 text-orange-600 hover:text-orange-800 transition-colors">
                      didenko@axsoft.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-zinc-700">Telegram</p>
                    <a href="https://t.me/LenaAxsoft" className="mt-1 text-orange-600 hover:text-orange-800 transition-colors">
                      @LenaAxsoft
                    </a>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-zinc-200" />
              
              <div className="flex flex-col gap-4">
                <a
                  href="https://hh.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 font-medium shadow-sm border border-zinc-200 hover:shadow-md hover:border-orange-200 transition-all duration-300"
                >
                  <svg className="h-6 w-6 text-red-500" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4 13H7V35H13.4V13Z" fill="currentColor"/>
                    <path d="M35.4 13H29V35H35.4V13Z" fill="currentColor"/>
                    <path d="M41 13H35.4V35H41V13Z" fill="currentColor"/>
                    <path d="M19.2 22.2H13.4V35H19.2V22.2Z" fill="currentColor"/>
                    <path d="M29 22.2H19.2V28H29V22.2Z" fill="currentColor"/>
                  </svg>
                  <span>Наша страница на hh.ru</span>
                </a>
                
                <a
                  href="https://career.habr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 font-medium shadow-sm border border-zinc-200 hover:shadow-md hover:border-orange-200 transition-all duration-300"
                >
                  <svg className="h-6 w-6 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.125 0H4.875C2.1875 0 0 2.1875 0 4.875V19.125C0 21.8125 2.1875 24 4.875 24H19.125C21.8125 24 24 21.8125 24 19.125V4.875C24 2.1875 21.8125 0 19.125 0Z"/>
                    <path d="M7.875 6H5.625V18H7.875V6Z" fill="white"/>
                    <path d="M12.75 6H10.5V18H12.75V6Z" fill="white"/>
                    <path d="M15 6H12.75V18H15V6Z" fill="white"/>
                    <path d="M18.375 6H15V18H18.375V6Z" fill="white"/>
                  </svg>
                  <span>Хабр карьера</span>
                </a>
              </div>
            </motion.div>
            
            {/* Right side form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-6 py-5">
                <h3 className="text-xl md:text-2xl font-bold text-white">Расскажите о себе</h3>
              </div>
              
              <form className="p-6 md:p-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-zinc-700">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="mt-1 block w-full rounded-md border border-zinc-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                      placeholder="Иван"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-zinc-700">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="mt-1 block w-full rounded-md border border-zinc-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                      placeholder="Иванов"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-zinc-700">
                    Интересующая позиция
                  </label>
                  <select
                    id="position"
                    name="position"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-4 py-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                  >
                    <option value="" disabled selected>Выберите позицию</option>
                    <option value="frontend">Frontend-разработчик</option>
                    <option value="backend-java">Backend-разработчик (Java)</option>
                    <option value="backend-csharp">Backend-разработчик (C#)</option>
                    <option value="mobile-android">Mobile-разработчик (Android)</option>
                    <option value="mobile-ios">Mobile-разработчик (iOS)</option>
                    <option value="qa">Тестировщик</option>
                    <option value="analyst">Аналитик</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-zinc-700">
                    Резюме (PDF, DOC, DOCX)
                  </label>
                  <div className="mt-1">
                    <label
                      htmlFor="resume"
                      className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 px-4 py-6 transition hover:bg-zinc-100"
                    >
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="mt-2 text-sm font-medium text-zinc-700">Перетащите файл или нажмите для выбора</span>
                        <span className="mt-1 text-xs text-zinc-500">Максимальный размер: 10MB</span>
                      </div>
                      <input id="resume" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-5 w-5 rounded border-zinc-300 text-orange-600 focus:ring-orange-500 mt-1"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-zinc-700">
                    Подтверждаю свое ознакомление с политикой конфиденциальности и обработки персональных данных
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-4 py-3 text-base font-medium text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300"
                  >
                    Отправить резюме
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 