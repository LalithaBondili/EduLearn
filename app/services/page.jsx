"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, Users, Briefcase, Zap, Award, MessageSquare } from "lucide-react"
import EnrollModal from "@/components/modals/enroll-modal"

const services = [
  {
    icon: BookOpen,
    title: "Online Training",
    description: "Comprehensive online courses designed by industry experts with lifetime access to course materials.",
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Customized training programs for organizations to upskill their workforce and boost productivity.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "One-on-one mentoring sessions with professionals to guide your career path and growth.",
  },
  {
    icon: Zap,
    title: "Workshops",
    description: "Interactive workshops on trending topics and emerging technologies in your field.",
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Industry-recognized certification programs to validate your skills and expertise.",
  },
  {
    icon: MessageSquare,
    title: "Community Support",
    description: "Active community forums and peer support to enhance your learning experience.",
  },
]

export default function ServicesPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onEnrollClick={() => setIsEnrollOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border premium-shadow hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </main>

      <Footer />
      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  )
}
