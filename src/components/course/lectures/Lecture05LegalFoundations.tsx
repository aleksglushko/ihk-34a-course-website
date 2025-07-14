import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture05LegalFoundations({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '⚖️',
      title: 'Wichtige Gesetze im Überblick',
      items: [
        '§ 34a Gewerbeordnung (GewO): Regelt die Erlaubnispflicht & Prüfungspflicht im Sicherheitsgewerbe',
        'Bewachungsverordnung (BewachV): Konkretisiert Aufgaben, Anforderungen & Pflichten im Sicherheitsdienst',
        'BGB & StGB: Regeln zu Notwehr, Besitzstörung, Hausrecht, Körperverletzung etc.',
        'Datenschutz-Grundverordnung (DSGVO): Umgang mit persönlichen Daten im Sicherheitsdienst'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Was Sicherheitskräfte rechtlich dürfen (und was nicht)',
      items: [
        'Durchsetzung des Hausrechts → im Auftrag des Besitzers',
        'Festhalten von Personen → nur im Rahmen des §127 StPO (Jedermannsrecht)',
        'Keine Polizeigewalt – kein Durchsuchungsrecht, keine Befugnis zur Strafverfolgung',
        'Eingreifen nur, wenn Gefahr besteht – immer verhältnismäßig & rechtskonform'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Häufige Fehler in der Praxis',
      items: [
        'Verwechslung von Hausrecht mit polizeilicher Befugnis',
        'Illegale Durchsuchungen oder Festhaltungen ohne Rechtsgrundlage',
        'Fehlender Nachweis der Sachkunde – arbeitsrechtliche & strafrechtliche Folgen'
      ],
      type: 'warning' as const
    }
  ]

      return (
      <LectureTemplate
        chapterNumber="2A"
        chapterTitle="Gewerbeordnung § 34a & Bewachungsverordnung (BewachV)"
        subtitle="Gesetzliche Grundlagen & Rechtliches"
        description="Rechtliche Grundlagen sind die Basis der Sachkundeprüfung – wer im Sicherheitsdienst arbeitet, muss das Gesetz kennen."
        content={content}
        currentPage={5}
        totalPages={28}
        onNext={onNext}
        onPrevious={onPrevious}
        onNavigate={onNavigate}
      />
    )
} 