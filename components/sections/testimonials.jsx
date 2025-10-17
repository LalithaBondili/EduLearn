import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jessica Lee",
    role: "Product Manager",
    content:
      "EduLearn transformed my career. The courses are comprehensive and the instructors are incredibly knowledgeable.",
    rating: 5,
    image: "/professional-woman-diverse.png",
  },
  {
    name: "David Martinez",
    role: "Freelance Developer",
    content:
      "The web development course was exactly what I needed. I landed a new job within 3 months of completing it.",
    rating: 5,
    image: "/professional-man.jpg",
  },
  {
    name: "Sarah Thompson",
    role: "UX Designer",
    content: "Outstanding quality content and supportive community. Highly recommend to anyone looking to upskill.",
    rating: 5,
    image: "/professional-woman-designer.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied learners who have transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border premium-shadow hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
