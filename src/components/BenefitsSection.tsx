export default function BenefitsSection() {
    const benefits = [
        {
            icon: "📚",
            title: "Umfassende Vorbereitung",
            description: "Alle prüfungsrelevanten Themen strukturiert und verständlich aufbereitet"
        },
        {
            icon: "🎯",
            title: "90% Bestehensquote",
            description: "Unsere Teilnehmer haben eine überdurchschnittliche Erfolgsquote"
        },
        {
            icon: "⏰",
            title: "Flexibles Lernen",
            description: "Lernen Sie in Ihrem eigenen Tempo, wann und wo Sie wollen"
        },
        {
            icon: "🏆",
            title: "Praxisnahe Inhalte",
            description: "Realistische Prüfungssituationen und typische Fallbeispiele"
        },
        {
            icon: "💡",
            title: "Schwierige Themen erklärt",
            description: "Komplexe Rechtsgrundlagen werden verständlich vermittelt"
        },
        {
            icon: "🔄",
            title: "Lebenslanger Zugang",
            description: "Nach dem Kauf haben Sie unbegrenzten Zugang zu allen Inhalten"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Warum unser Kurs?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Die IHK-Sachkundeprüfung hat eine hohe Durchfallquote. Bereiten Sie sich 
                        optimal vor und gehören Sie zu den erfolgreichen Absolventen.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 