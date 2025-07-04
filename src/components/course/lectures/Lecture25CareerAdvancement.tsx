import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture25CareerAdvancement({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was kommt nach dem § 34a-Zertifikat?',
      items: [
        'Waffensachkundeprüfung (§ 7 WaffG) → Einsatz mit Schusswaffe im Sicherheitsdienst',
        'Brandschutzhelfer → Spezialisierung für Brandschutz & Evakuierung',
        'Erste-Hilfe-Ausbildung → häufig Voraussetzung für Sondertätigkeiten',
        'Führerschein Klasse B → wichtig für Revierdienst & mobile Einsätze'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Karrierewege im Sicherheitsdienst',
      items: [
        'Teamleiter / Objektleiter – Verantwortung für Personal & Einsätze',
        'Geprüfte Schutz- und Sicherheitskraft (GSSK) → IHK-Aufstiegsfortbildung',
        'Fachkraft für Schutz & Sicherheit (3-jährige Ausbildung)',
        'Meister für Schutz & Sicherheit → höchste Qualifikation der Branche'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was du dafür brauchst',
      items: [
        'Praxis & Erfahrung → Einstieg durch einfache Tätigkeiten',
        'Zuverlässigkeit, Auftreten & Lernbereitschaft',
        'Teilweise zusätzliche Prüfungen (z. B. bei GSSK oder Waffensachkunde)',
        'Weiterbildung kann oft berufsbegleitend oder online erfolgen'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="8C"
      chapterTitle="Weiterführende Qualifikationen & Aufstiegschancen"
      subtitle="Abschluss & Zertifikat"
      description="Mit dem § 34a-Zertifikat legst du den Grundstein – wer will, kann sich weiterentwickeln und Karriere im Sicherheitsgewerbe machen."
      content={content}
      currentPage={25}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 