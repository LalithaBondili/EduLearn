"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import EnrollModal from "@/components/modals/enroll-modal"
import { useState } from "react"

const team = [
  {
    name: "Lalitha Bai Bondili",
    role: "Founder & CEO",
    bio: "Former tech lead with 15+ years of experience in education technology.",
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Mike Chen",
    role: "Head of Curriculum",
    bio: "Expert in course design with a passion for making education accessible.",
    image: "/professional-man-curriculum.jpg",
  },
  {
    name: "Emily Watson",
    role: "Lead Instructor",
    bio: "PhD in Computer Science and award-winning educator.",
    image: "/professional-woman-instructor.jpg",
  },
  {
    name: "Alex Rodriguez",
    role: "Community Manager",
    bio: "Dedicated to building and nurturing our global learning community.",
    image: "/professional-man-community.jpg",
  },
]

export default function AboutPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onEnrollClick={() => setIsEnrollOpen(true)} />
      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground">About EduLearn</h1>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize education by providing world-class learning experiences that empower individuals to
                achieve their career goals and transform their lives.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a global community of lifelong learners where knowledge is accessible, affordable, and
                transformative for everyone.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-96"></div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden premium-shadow hover:border-primary/50 transition-all duration-300"
              >
                <div className="h-48 bg-muted overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
