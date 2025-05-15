"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Twitter, Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Алексей Смирнов",
    role: "CEO & Основатель",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Мария Иванова",
    role: "Ведущий дизайнер",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Дмитрий Козлов",
    role: "Технический директор",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Елена Петрова",
    role: "Руководитель проектов",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-zinc-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Наша команда</h2>
          <p className="mt-6 text-xl text-zinc-600">
            Талантливые специалисты, создающие инновационные продукты с фокусом на результат
          </p>
        </motion.div>

        <div className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="relative mx-auto mb-6 aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button className="rounded-full bg-white/80 p-2 text-zinc-700 backdrop-blur-sm transition-colors hover:bg-white">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </button>
                  <button className="rounded-full bg-white/80 p-2 text-zinc-700 backdrop-blur-sm transition-colors hover:bg-white">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </button>
                  <button className="rounded-full bg-white/80 p-2 text-zinc-700 backdrop-blur-sm transition-colors hover:bg-white">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-zinc-900">{member.name}</h3>
                <p className="text-zinc-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
