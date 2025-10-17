"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Users, Clock } from "lucide-react"
import EnrollModal from "@/components/modals/enroll-modal"

const trainingPrograms = [
  {
    id: 1,
    title: "Full Stack Development Bootcamp",
    description: "Intensive 12-week program covering frontend, backend, and deployment.",
    schedule: "Mon-Fri, 9 AM - 5 PM",
    startDate: "January 15, 2024",
    duration: "12 weeks",
    capacity: 30,
    enrolled: 28,
    price: 149999,
  },
  {
    id: 2,
    title: "Data Science Intensive",
    description: "Deep dive into machine learning, statistics, and data visualization.",
    schedule: "Tue-Thu, 6 PM - 9 PM",
    startDate: "January 20, 2024",
    duration: "10 weeks",
    capacity: 25,
    enrolled: 22,
    price: 124999,
  },
  {
    id: 3,
    title: "UX/UI Design Bootcamp",
    description: "Learn design principles, tools, and create a professional portfolio.",
    schedule: "Mon-Wed, 10 AM - 1 PM",
    startDate: "January 22, 2024",
    duration: "8 weeks",
    capacity: 20,
    enrolled: 18,
    price: 99999,
  },
]

export default function TrainingPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onEnrollClick={() => setIsEnrollOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Training Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intensive bootcamps and training programs for accelerated learning
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-6">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-card rounded-xl border border-border p-8 premium-shadow hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Start Date</p>
                        <p className="font-semibold text-foreground">{program.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-semibold text-foreground">{program.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Enrolled</p>
                        <p className="font-semibold text-foreground">
                          {program.enrolled}/{program.capacity}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground pt-2">
                    <span className="font-semibold">Schedule:</span> {program.schedule}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Investment</p>
                    <p className="text-3xl font-bold text-primary">₹{program.price}</p>
                  </div>
                  <button
                    onClick={() => setIsEnrollOpen(true)}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  )
}
