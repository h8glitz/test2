import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TechStack } from "@/components/tech-stack"
import { ImpactSection } from "@/components/impact-section"
import { ProcessSection } from "@/components/process-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"
import { TimelineSection } from "@/components/timeline-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Clients Section */}
        <ClientsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Impact Section (Replacing the old Parallax Section) */}
        <ImpactSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Projects Section */}
        <ProjectsSection />


        {/* Timeline Section */}
        <TimelineSection />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
