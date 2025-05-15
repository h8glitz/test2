"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

// Данные о стеках технологий для разных специалистов
interface TechStack {
  title: string;
  description: string;
  technologies: string[];
  rates: {
    junior: number;
    middle: number;
    senior: number;
    teamLead: number;
  };
}

const techStacks: TechStack[] = [
  {
    title: "Frontend-разработчики",
    description: "JavaScript/React",
    technologies: [
      "JavaScript", "React", "TypeScript", "Next.js", "Redux/RTK", 
      "RTK Query", "Axios", "Zod", "React-router-dom", "React-hook-form", 
      "Formik", "CSS", "SASS", "LESS", "Chart.js", "MUI", 
      "Ant Design", "Webpack", "Docker", "Node.js", "git/gitlab/github",
      "Jest/React Testing Library", "Storybook", "FSD"
    ],
    rates: {
      junior: 1600,
      middle: 1900,
      senior: 2600,
      teamLead: 3000
    }
  },
  {
    title: "Backend-разработчики",
    description: "Java/Spring",
    technologies: [
      "Java", "Spring", "Spring Boot", "Mapstruct", "Hibernate", 
      "Gradle", "Maven", "JUnit", "Mockito", "Саmunda BPM", 
      "Data JDBC", "JdbcTemplate", "Redis", "PostgresSQL", "MongoDB", 
      "MS SQL", "git/gitlab/github", "Swagger", "Postman", 
      "Docker/Kubernetes", "Kafka", "RabbitMQ"
    ],
    rates: {
      junior: 1600,
      middle: 1900,
      senior: 2600,
      teamLead: 3000
    }
  },
  {
    title: "Backend-разработчики",
    description: "C#/ASP.NET Core",
    technologies: [
      "C#", "ADO.NET/EF Core/Dapper", "MongoDB", "PostgresSQL", 
      "MS SQL", "Redis", "Memcached", "xUnit/nunit", 
      "RESTFull API/GRPС/SOAP", "Web Socket/SignalR", "GraphQL", 
      "Agile/Scrum", "Jira/Redmine/Trello", "Docker/Kubernetes", 
      "Keycloak", "Kafka", "OpenAPI", "RabbitMQ", "git/gitlab/github"
    ],
    rates: {
      junior: 1600,
      middle: 1900,
      senior: 2600,
      teamLead: 3000
    }
  },
  {
    title: "Mobile-разработчики",
    description: "Kotlin/Android",
    technologies: [
      "Kotlin", "Android SDK", "Room", "Java", "Jetpack Compose", 
      "Coroutines", "RESTFull API/GRPС/SOAP", "Web Socket", 
      "Retrofit", "Agile/Scrum", "Jira/Redmine/Trello", "Glide", 
      "Clean Architecture", "OpenAPI", "MVVM", "DI (Hilt)", 
      "git/gitlab/github", "Postman", "Gradle"
    ],
    rates: {
      junior: 1600,
      middle: 1900,
      senior: 2600,
      teamLead: 3000
    }
  },
  {
    title: "Mobile-разработчики",
    description: "Swift/IOS",
    technologies: [
      "iOS SDK", "Xcode", "Swift", "CocoaPods", "UIKit", 
      "SwiftUI", "RESTFull API/GRPС/SOAP", "Web Socket", 
      "Combine", "Agile/Scrum", "Jira/Redmine/Trello", "Alamofire", 
      "Clean Architecture", "OpenAPI", "Firebase", "Core Data/Swift Data", 
      "git/gitlab/github", "Postman", "RxSwift", "GCD", 
      "async/await", "Concurrency", "Design Patterns", "MVC", 
      "MVP", "MVVM", "VIPER", "Clean Swift", "Objective-C", 
      "KeychainAccess", "XCTest", "Apple Human Interface Guidelines"
    ],
    rates: {
      junior: 1600,
      middle: 1900,
      senior: 2600,
      teamLead: 3000
    }
  }
];

// Этапы работы
const workSteps = [
  {
    title: "Оценка требований",
    description: "Мы вместе с вами определяем задачи и необходимые навыки для успешного выполнения проекта. Вы получаете точное понимание того, каких специалистов нужно привлечь.",
    icon: "📋",
    gradient: "from-orange-600 to-amber-400"
  },
  {
    title: "Подбор специалистов",
    description: "Мы предлагаем вам лучших кандидатов с нужной квалификацией и опытом, полностью соответствующих требованиям вашего проекта. Вы выбираете тех, кто вам подходит.",
    icon: "👥",
    gradient: "from-amber-500 to-yellow-400"
  },
  {
    title: "Собеседование и утверждение",
    description: "После согласования кандидатов мы проводим интервью с вашей командой, чтобы убедиться, что все стороны довольны выбором. Каждый специалист готов к выполнению задач с первого дня.",
    icon: "🤝",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Интеграция в команду",
    description: "Наши специалисты быстро встраиваются в рабочие процессы вашей компании. Мы обеспечиваем их плавное и безболезненное подключение к проекту.",
    icon: "🔄",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    title: "Поддержка и сопровождение",
    description: "В течение всего периода сотрудничества мы остаемся на связи для решения любых возникающих вопросов и обеспечения эффективной работы команды.",
    icon: "🛠️",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    title: "Прозрачная оплата",
    description: "Вы платите только за отработанное время и выполненные задачи, без скрытых платежей. Полная прозрачность на каждом этапе сотрудничества.",
    icon: "💰",
    gradient: "from-amber-600 to-yellow-500"
  },
];

export function OutstaffSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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

      {/* Header */}
      <div className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Аутстафф <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block">специалистов</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-600">
              для компаний в сфере финтеха, блокчейна, торговли, производства и услуг
            </p>
          </motion.div>
        </div>
      </div>

      {/* Specialists Section */}
      <section className="relative z-10 bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Наши <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">специалисты</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Профессионалы с опытом работы в различных технологических стеках
            </p>
          </motion.div>

          <Tab.Group>
            <div className="relative mb-16 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[100px]" />
              <div className="absolute -bottom-10 -left-10 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
              
              <Tab.List className="relative z-10 flex gap-2 overflow-x-auto pb-4 scrollbar-hide flex-nowrap md:flex-wrap md:justify-center">
                {techStacks.map((stack, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      cn(
                        "flex-shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-in-out",
                        "focus:outline-none",
                        selected
                          ? "bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white shadow-lg shadow-orange-500/20 scale-105 hover:shadow-orange-500/30"
                          : "bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm border border-zinc-200 hover:shadow-md hover:border-zinc-300"
                      )
                    }
                  >
                    <div className="whitespace-nowrap">
                      <span className="hidden md:inline">{stack.title}</span>
                      <span className="md:hidden lg:inline">{" " + stack.description}</span>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels>
              {techStacks.map((stack, idx) => (
                <Tab.Panel
                  key={idx}
                  className="animate-fade-in"
                >
                  <div className="grid gap-8 md:grid-cols-2">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-100 p-8 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-6 inline-flex items-center">
                        <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
                            <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
                            <path d="M4 15V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10"></path>
                            <path d="M16 15V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10"></path>
                          </svg>
                        </span>
                        Наши расценки
                      </h3>
                      <div className="space-y-6 mt-6">
                        {[
                          { label: "Junior", price: stack.rates.junior, icon: "👨‍💻" },
                          { label: "Middle", price: stack.rates.middle, icon: "👩‍💻" },
                          { label: "Senior", price: stack.rates.senior, icon: "🧑‍💻" },
                          { label: "Team-lead", price: stack.rates.teamLead, icon: "👨‍🔧" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between transition-all hover:translate-x-1 duration-200 ease-in-out">
                            <div className="flex items-center">
                              <div className="mr-3 text-lg">{item.icon}</div>
                              <span className="font-medium">{item.label}</span>
                            </div>
                            <div className="text-lg font-bold text-orange-600">от {item.price} ₽/час</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-100 p-8 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-6 inline-flex items-center">
                        <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m18 16 4-4-4-4"></path>
                            <path d="m6 8-4 4 4 4"></path>
                            <path d="m14.5 4-5 16"></path>
                          </svg>
                        </span>
                        Стек технологий
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {stack.technologies.map((tech, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.02 }}
                            className="inline-flex rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:border-orange-200 hover:shadow-sm transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Work Process - New Modern Design */}
      <section className="relative z-10 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50/50"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Как мы <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">работаем</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Простой и эффективный процесс сотрудничества
            </p>
          </motion.div>

          <div className="grid gap-6">
            {workSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-orange-600 via-amber-600 to-yellow-600 opacity-80"></div>
                  
                  <div className="p-6 sm:p-8 pl-8 sm:pl-10">
                    <div className="flex flex-col md:flex-row md:items-center">
                      {/* Number and Icon */}
                      <div className="flex items-center mb-4 md:mb-0 md:mr-8">
                        <div className="flex-shrink-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold shadow-md">
                          {index + 1}
                        </div>
                        <div className="ml-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="text-zinc-600">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Arrow icon (only visible on hover/mobile) */}
                      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-block rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-8 py-4 font-medium text-white shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            >
              Начать сотрудничество
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[30%] rounded-full bg-amber-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Готовы обсудить ваш проект?
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="rounded-md bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 