import { CheckCircle, Users, Award, Zap } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Award,
    title: "Certified Courses",
    description: "Earn recognized certificates upon course completion",
  },
  {
    icon: Zap,
    title: "Flexible Learning",
    description: "Study at your own pace, anytime, anywhere",
  },
  {
    icon: CheckCircle,
    title: "Lifetime Access",
    description: "Access course materials forever after enrollment",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose EduLearn?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the best learning experience with comprehensive support and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 premium-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
