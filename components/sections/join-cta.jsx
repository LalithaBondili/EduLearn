"use client"

export default function JoinCTA({ onJoinNow }) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of students and take the first step towards your dream career today.
        </p>
        <button
          onClick={onJoinNow}
          className="px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold text-lg"
        >
          Join Now
        </button>
      </div>
    </section>
  )
}
