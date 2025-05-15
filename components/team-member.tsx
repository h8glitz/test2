"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <div className="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
        <h3 className="text-xl font-bold text-zinc-900">{name}</h3>
        <p className="text-zinc-600">{role}</p>
      </div>
    </motion.div>
  )
}
