export default function CurriculumSection() {
    const modules = [
        {
            title: "Recht der öffentlichen Sicherheit und Ordnung",
            topics: [
                "Grundlagen des Ordnungs- und Sicherheitsrechts",
                "Gewerbeordnung und Bewachungsverordnung",
                "Datenschutzrecht und Persönlichkeitsrechte",
                "Hausrecht und Eigentumsschutz"
            ],
            duration: "8 Stunden"
        },
        {
            title: "Bürgerliches Gesetzbuch",
            topics: [
                "Grundlagen des BGB",
                "Vertragsrecht und Schadensersatz",
                "Eigentum und Besitz",
                "Rechtfertigungsgründe"
            ],
            duration: "6 Stunden"
        },
        {
            title: "Strafrecht",
            topics: [
                "Strafgesetzbuch - Grundlagen",
                "Notwehr und Nothilfe",
                "Jedermannsrechte",
                "Straftaten gegen die Person"
            ],
            duration: "7 Stunden"
        },
        {
            title: "Umgang mit Menschen",
            topics: [
                "Deeskalationstechniken",
                "Kommunikation und Konfliktlösung",
                "Umgang mit besonderen Personengruppen",
                "Interkulturelle Kompetenz"
            ],
            duration: "5 Stunden"
        },
        {
            title: "Grundzüge der Sicherheitstechnik",
            topics: [
                "Mechanische Sicherungseinrichtungen",
                "Elektronische Sicherheitstechnik",
                "Brandschutz und Arbeitsschutz",
                "Erste Hilfe Grundlagen"
            ],
            duration: "4 Stunden"
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Kurs-Curriculum
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Alle prüfungsrelevanten Themen systematisch aufbereitet. 
                        Insgesamt 30 Stunden strukturiertes Lernmaterial.
                    </p>
                </div>
                
                <div className="space-y-6">
                    {modules.map((module, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                                    {index + 1}. {module.title}
                                </h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                    {module.duration}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {module.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="flex items-center">
                                        <span className="text-blue-500 mr-2">✓</span>
                                        <span className="text-gray-700">{topic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center px-6 py-3 rounded-lg bg-green-100 text-green-800">
                        <span className="font-medium">Bonus: </span>
                        <span className="ml-2">200+ Übungsfragen mit ausführlichen Erklärungen</span>
                    </div>
                </div>
            </div>
        </section>
    )
} 