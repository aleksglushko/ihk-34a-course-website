export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Weber",
      role: "Sicherheitsmitarbeiter",
      content: "Dank diesem Kurs habe ich die Prüfung beim ersten Versuch bestanden. Die Erklärungen waren sehr verständlich und praxisnah.",
      rating: 5
    },
    {
      name: "Sarah Müller",
      role: "Quereinsteigerin",
      content: "Als Quereinsteigerin war ich unsicher, aber der Kurs hat mich perfekt vorbereitet. Besonders die Übungsfragen haben geholfen.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Sicherheitsfachkraft",
      content: "Flexibel neben dem Job lernen zu können war perfekt. Die Inhalte sind aktuell und relevant für die Praxis.",
      rating: 5
    }
  ]

  const stats = [
    { value: "90%", label: "Bestehensquote" },
    { value: "2,500+", label: "Erfolgreiche Absolventen" },

    { value: "100+", label: "Übungsfragen" }
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Absolventen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 2,500 erfolgreiche Teilnehmer vertrauen auf unseren Kurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <div className="font-medium text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für Ihren Erfolg?
            </h3>
            <p className="text-gray-600 mb-6">
              Schließen Sie sich über 2,500 erfolgreichen Absolventen an und 
              bestehen Sie die IHK-Sachkundeprüfung § 34a beim ersten Versuch.
            </p>
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-600">€47</span>
              <span className="text-gray-500 line-through ml-2">149</span>
              <div className="text-sm text-gray-500 mt-1">
                Einmalzahlung • Lebenslanger Zugang
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 