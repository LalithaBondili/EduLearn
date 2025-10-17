"use client"

import { ArrowRight } from "lucide-react"

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Learn from the <span className="text-primary">Best</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Master new skills with industry experts. Flexible, affordable, and designed for your success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-semibold">
                Explore Courses
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Expert Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            <img
              src="/online-learning-students.png"
              alt="Students learning"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
