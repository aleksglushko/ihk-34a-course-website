import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture07DataProtection({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Datenschutz im Sicherheitsdienst (DSGVO)',
      items: [
        'Personenbezogene Daten (Name, Bild, Video) dürfen nur bei berechtigtem Zweck verarbeitet werden',
        'Videoüberwachung nur mit Hinweisschild & legitimer Begründung',
        'Keine Weitergabe von Daten an Dritte (z. B. Namen an Gäste, Video an Bekannte)',
        'Dokumentationen müssen sicher gespeichert & geschützt sein'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Notwehr & Jedermannsrecht – was erlaubt ist',
      items: [
        '§ 32 StGB – Notwehr: Abwehr eines gegenwärtigen, rechtswidrigen Angriffs',
        '§ 34 StGB – rechtfertigender Notstand: Gefahr für Leib, Leben oder Eigentum abwehren',
        '§ 127 StPO – Jedermannsrecht: Festhalten einer Person bei frischer Tat → Polizei ist sofort zu rufen',
        'Gewalt nur verhältnismäßig & notwendig – kein Überschreiten der Grenzen!'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Typische Prüfungs- & Praxisfehler',
      items: [
        'Festhalten ohne frische Tat → Freiheitsberaubung',
        'Durchsuchen von Taschen → verboten, außer bei freiwilliger Zustimmung',
        'Überreaktion bei Beleidigung → keine Rechtfertigung für körperliches Eingreifen',
        'Videoaufnahmen posten oder teilen → Datenschutzverstoß!'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="2C"
      chapterTitle="Datenschutz, Notwehr & Jedermannsrechte"
      subtitle="Gesetzliche Grundlagen & Rechtliches"
      description="Sicherheitskräfte müssen rechtlich sicher handeln – gerade bei Konflikten und im Umgang mit Daten."
      content={content}
      currentPage={7}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 