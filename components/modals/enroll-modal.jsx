"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function EnrollModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "web-development",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enrollment submitted:", formData)
    setFormData({ name: "", email: "", course: "web-development" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-xl shadow-2xl max-w-md w-full mx-4 border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Enroll Now</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Select Course</label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              <option value="web-development">Web Development Masterclass</option>
              <option value="ui-ux">UI/UX Design Fundamentals</option>
              <option value="data-science">Data Science with Python</option>
              <option value="digital-marketing">Digital Marketing Strategy</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-6"
          >
            Complete Enrollment
          </button>
        </form>
      </div>
    </div>
  )
}
