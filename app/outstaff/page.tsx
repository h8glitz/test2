"use client"

import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { OutstaffSection } from "../../components/outstaff_page"

export default function OutstaffPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <OutstaffSection />
      </main>
      <Footer />
    </div>
  )
} 