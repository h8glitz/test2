"use client"

import { motion } from "framer-motion"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { CareerSection } from "../../components/career-section.tsx"

export default function CareerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CareerSection />
      </main>
      <Footer />
    </div>
  )
} 