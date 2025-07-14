import { useState } from 'react'

interface QAItem {
  id: string
  question: string
  answer: string
  emoji: string
}

const qaData: QAItem[] = [
  {
    id: "was-ist-sachkunde",
    question: "Was ist die Sachkundeprüfung nach §34a GewO?",
    answer: "Die Sachkundeprüfung ist eine gesetzlich vorgeschriebene Prüfung für Personen, die im Bewachungsgewerbe tätig sein wollen – z. B. als Türsteher, Kaufhausdetektiv oder im Objektschutz.",
    emoji: "✅"
  },
  {
    id: "wer-muss-pruefung",
    question: "Wer muss die Sachkundeprüfung ablegen?",
    answer: "Die Prüfung ist Pflicht für alle, die alleinverantwortlich tätig sein möchten, insbesondere:\n• Türsteher\n• Citystreifen / Revierfahrer\n• Kaufhausdetektive\n• Personen mit Kontrollgängen im öffentlichen Raum",
    emoji: "📍"
  },
  {
    id: "wie-laeuft-pruefung",
    question: "Wie läuft die Prüfung ab?",
    answer: "Die Prüfung besteht aus:\n• 60 Minuten schriftlich (MC-Fragen)\n• 15 Minuten mündlich (Fachgespräch)",
    emoji: "📝"
  },
  {
    id: "inhalte-pruefung",
    question: "Was sind die Inhalte der §34a-Prüfung?",
    answer: "• Recht der öffentlichen Sicherheit und Ordnung\n• Gewerberecht\n• Datenschutz\n• Bürgerliches Recht\n• Straf- und Waffenrecht\n• Umgang mit Menschen\n• Verhalten in Gefahrensituationen",
    emoji: "📚"
  },
  {
    id: "kosten-pruefung",
    question: "Was kostet die Prüfung?",
    answer: "Die Gebühren variieren je nach IHK, liegen aber meist zwischen 150 € und 200 €. Vorbereitungskurse kosten extra.",
    emoji: "🧾"
  },
  {
    id: "dauer-vorbereitung",
    question: "Wie lange dauert die Vorbereitung?",
    answer: "Mit einem guten Onlinekurs oder Lehrbuch reichen oft 2–4 Wochen Vorbereitung. Das hängt aber stark vom Vorwissen ab.",
    emoji: "⌛"
  },
  {
    id: "wo-pruefung-ablegen",
    question: "Wo kann ich die Prüfung ablegen?",
    answer: "Bei jeder Industrie- und Handelskammer (IHK) in Deutschland. Eine Anmeldung ist über deren Website erforderlich.",
    emoji: "🏢"
  },
  {
    id: "zeugnis-nach-bestehen",
    question: "Was bekommt man nach Bestehen?",
    answer: "Ein offizielles Sachkunde-Zeugnis nach §34a GewO, das bundesweit gültig ist und bei Arbeitgebern vorgelegt wird.",
    emoji: "📜"
  },
  {
    id: "bei-nichtbestehen",
    question: "Was passiert bei Nichtbestehen?",
    answer: "Du kannst die Prüfung beliebig oft wiederholen, musst aber die Gebühr erneut zahlen. Eine gute Vorbereitung ist daher sinnvoll.",
    emoji: "❌"
  },
  {
    id: "ausnahmen-pflicht",
    question: "Gibt es Ausnahmen von der Pflicht zur Sachkundeprüfung?",
    answer: "Ja – z. B. für Personen mit bestimmten Ausbildungen (Polizei, Bundeswehr, Justizvollzug) oder bei ausschließlich untergeordneter Tätigkeit im Sicherheitsdienst genügt oft eine Unterrichtung nach §34a.",
    emoji: "💡"
  }
]

export default function QAPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ❓ Häufige Fragen zur Sachkundeprüfung nach §34a GewO
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen zur IHK-Sachkundeprüfung 
            nach §34a GewO. Bereiten Sie sich optimal auf Ihre Prüfung vor!
          </p>
        </div>

        {/* Q&A Items */}
        <div className="space-y-4">
          {qaData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl" role="img" aria-label="icon">
                      {item.emoji}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {expandedItems.has(item.id) && (
                <div className="px-6 pb-4">
                  <div className="text-gray-700 leading-relaxed">
                    {item.answer.split('\n').map((line, index) => (
                      <div key={index} className={index > 0 ? 'mt-2' : ''}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Bereit für Ihre Sachkundeprüfung?
          </h2>
          <p className="text-lg mb-6">
            Starten Sie jetzt mit unserem umfassenden Online-Kurs und bereiten Sie sich 
            optimal auf die IHK-Prüfung vor!
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Jetzt Kurs starten
          </button>
        </div>

        {/* SEO Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            IHK Sachkundeprüfung §34a GewO | Bewachungsgewerbe | Türsteher Prüfung | 
            Kaufhausdetektiv Ausbildung | Objektschutz Qualifikation
          </p>
        </div>
      </div>
    </div>
  )
} 