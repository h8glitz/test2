"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[-30%] translate-y-[30%] rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-[length:50px_50px] opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Готовы начать свой{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent inline-block">
              цифровой проект
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 text-xl text-zinc-400"
          >
            Свяжитесь с нами сегодня, чтобы обсудить ваши идеи и узнать, как мы можем помочь вам достичь ваших целей
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button size="lg" className="group bg-white text-black hover:bg-zinc-200">
              Обсудить проект
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
              Узнать больше
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
