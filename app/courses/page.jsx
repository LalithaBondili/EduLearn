"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Filter } from "lucide-react"
import EnrollModal from "@/components/modals/enroll-modal"

const allCourses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    instructor: "Sarah Johnson",
    duration: "40 hours",
    students: 2500,
    rating: 4.9,
    price: 4999,
    category: "Development",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Mike Chen",
    duration: "35 hours",
    students: 1800,
    rating: 4.8,
    price: 4499,
    category: "Design",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Dr. Emily Watson",
    duration: "50 hours",
    students: 3200,
    rating: 4.9,
    price: 6499,
    category: "Data Science",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "Alex Rodriguez",
    duration: "30 hours",
    students: 1500,
    rating: 4.7,
    price: 3999,
    category: "Marketing",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    instructor: "Tom Wilson",
    duration: "45 hours",
    students: 2100,
    rating: 4.8,
    price: 5499,
    category: "Development",
    level: "Advanced",
  },
  {
    id: 6,
    title: "Mobile App Development",
    instructor: "Lisa Park",
    duration: "55 hours",
    students: 1900,
    rating: 4.9,
    price: 6999,
    category: "Development",
    level: "Intermediate",
  },
]

export default function CoursesPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [priceRange, setPriceRange] = useState(10000)

  const categories = ["All", "Development", "Design", "Data Science", "Marketing"]
  const levels = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
    const matchesPrice = course.price <= priceRange
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice
  })

  return (
    <div className="min-h-screen bg-background">
      <Header onEnrollClick={() => setIsEnrollOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Courses</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our comprehensive collection of professional courses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Filter size={18} />
                  Filters
                </h3>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Level</label>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedLevel === level
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Max Price: ₹{priceRange}</label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card rounded-xl border border-border overflow-hidden premium-shadow hover:border-primary/50 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground line-clamp-2">{course.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap ml-2">
                          {course.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{course.duration}</span>
                      <span>{course.students.toLocaleString()} students</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-bold text-primary">₹{course.price}</span>
                      <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No courses found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  )
}
