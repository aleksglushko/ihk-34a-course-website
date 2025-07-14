import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture08Deescalation({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was ist Deeskalation?',
      items: [
        'Maßnahmen zur Vermeidung oder Entschärfung von Konflikten',
        'Ziel: Eskalation verhindern, ohne Gewalt oder Zwang',
        'Beruhigen, nicht provozieren – auch unter Stress',
        'Zentrales Thema in der Sachkundeprüfung & Praxis'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Deeskalierende Verhaltensweisen',
      items: [
        'Ruhige, klare Sprache, keine Befehle',
        'Körpersprache offen und neutral halten',
        'Abstand halten – kein Bedrängen, keine Bedrohung',
        'Aktives Zuhören & Wiederholen („Ich verstehe, dass…")',
        'Klare Grenzen setzen – aber ohne Drohung'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was du vermeiden solltest',
      items: [
        'Laut werden, provozieren oder beschimpfen',
        'Unsachliche Aussagen („Was willst du überhaupt?") und Körperkontakt ohne Notwehrlage',
        '"Siezen – duzen – schreien" → Keine spontane Rollenwechsel!'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="3A"
      chapterTitle="Deeskalation & Konfliktverhalten"
      subtitle="Umgang mit Menschen & Kommunikation"
      description="Im Sicherheitsdienst zählt nicht die Stärke, sondern die Fähigkeit, Konflikte frühzeitig zu erkennen und zu entschärfen."
      content={content}
      currentPage={8}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 