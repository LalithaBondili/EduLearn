"use client"

import { Star, Users, Clock } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    instructor: "Sarah Johnson",
    duration: "40 hours",
    students: 2500,
    rating: 4.9,
    price: 4999,
    image: "/web-development-course.png",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Mike Chen",
    duration: "35 hours",
    students: 1800,
    rating: 4.8,
    price: 4499,
    image: "/ui-ux-design-course.png",
    category: "Design",
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Dr. Emily Watson",
    duration: "50 hours",
    students: 3200,
    rating: 4.9,
    price: 6499,
    image: "/data-science-python-course.png",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "Alex Rodriguez",
    duration: "30 hours",
    students: 1500,
    rating: 4.7,
    price: 3999,
    image: "/digital-marketing-course.png",
    category: "Marketing",
  },
]

export default function PopularCourses({ onEnroll }) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Popular Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular and highly-rated courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 premium-shadow group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {course.category}
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-muted-foreground">{course.instructor}</p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{course.rating}</span>
                </div>

                {/* Meta */}
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-bold text-primary">₹{course.price}</span>
                  <button
                    onClick={onEnroll}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
