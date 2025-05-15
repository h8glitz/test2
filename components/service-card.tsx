"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Palette, Brain, Cloud, Lightbulb, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  gradient: string
}

export function ServiceCard({ title, description, icon, gradient }: ServiceCardProps) {
  const icons: Record<string, LucideIcon> = {
    Globe,
    Smartphone,
    Palette,
    Brain,
    Cloud,
    Lightbulb,
  }

  const Icon = icons[icon] || Globe

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20"
        style={
          {
            backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
            "--tw-gradient-from": gradient.split(" ")[0].replace("from-", ""),
            "--tw-gradient-to": gradient.split(" ")[1].replace("to-", ""),
          } as any
        }
      />

      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white transition-transform duration-500 group-hover:scale-110`}
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-zinc-900">{title}</h3>
      <p className="text-zinc-600">{description}</p>

      <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-30" />
    </motion.div>
  )
}
