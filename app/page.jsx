"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import WhyChooseUs from "@/components/sections/why-choose-us"
import PopularCourses from "@/components/sections/popular-courses"
import Testimonials from "@/components/sections/testimonials"
import JoinCTA from "@/components/sections/join-cta"
import EnrollModal from "@/components/modals/enroll-modal"

export default function Home() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onEnrollClick={() => setIsEnrollOpen(true)} />
      <main>
        <Hero onGetStarted={() => setIsEnrollOpen(true)} />
        <WhyChooseUs />
        <PopularCourses onEnroll={() => setIsEnrollOpen(true)} />
        <Testimonials />
        <JoinCTA onJoinNow={() => setIsEnrollOpen(true)} />
      </main>
      <Footer />
      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  )
}
