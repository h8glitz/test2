"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface WorkCardProps {
  title: string
  description: string
  category: string
  image: string
  gradient: string
}

export function WorkCard({ title, description, category, image, gradient }: WorkCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-zinc-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <Link href="#" className="absolute inset-0 z-10">
        <span className="sr-only">View project</span>
      </Link>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />

        <div
          className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`}
        />
      </div>
      <div className="relative p-6">
        <div
          className={`mb-3 inline-block rounded-full bg-gradient-to-r ${gradient} bg-clip-text px-3 py-1 text-xs font-medium text-transparent`}
        >
          {category}
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-zinc-400">{description}</p>
        <div className="mt-6 flex items-center text-sm font-medium text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Подробнее
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </motion.div>
  )
}
