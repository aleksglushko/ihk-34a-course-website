import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture06LegalDuties({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Pflichten laut BewachV & GewO',
      items: [
        'Tragen eines sichtbaren Ausweises nach § 11 BewachV',
        'Nachweispflicht der Sachkundeprüfung (§ 34a GewO) bei bestimmten Tätigkeiten',
        'Unbedingte Zuverlässigkeit & persönliche Eignung → kein Vorstrafenregister, keine Drogen',
        'Pflicht zur Fortbildung & Schulung, insbesondere bei neuen Aufgaben oder Technik'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Pflichtbewusst handeln – das ist erlaubt',
      items: [
        'Kontrollgänge durchführen – aber nur im beauftragten Gebiet',
        'Ansprechen und informieren – aber keine Drohung oder Gewalt',
        'Beobachten & dokumentieren – aber kein Datenschutzverstoß',
        'Deeskalieren, nicht provozieren – Kommunikation ist Pflicht'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Rechtlich problematisch wird es bei...',
      items: [
        'Anwendung von Gewalt ohne akute Gefahr → Körperverletzung',
        'Ausübung von Aufgaben ohne Erlaubnis → Ordnungswidrigkeit nach GewO',
        'Weitergabe von Daten (z. B. Namen, Videoaufnahmen) ohne Berechtigung → DSGVO-Verstoß',
        'Tragen von Ausrüstung, die den Anschein staatlicher Gewalt erweckt → verboten!'
      ],
      type: 'warning' as const
    }
  ]

      return (
      <LectureTemplate
        chapterNumber="2B"
        chapterTitle="Rechtliche Pflichten im Sicherheitsgewerbe"
        subtitle="Gesetzliche Grundlagen & Rechtliches"
        description="Sicherheitskräfte haben klare rechtliche Pflichten – wer sie kennt und einhält, schützt sich und andere."
        content={content}
        currentPage={6}
        totalPages={16}
        onNext={onNext}
        onPrevious={onPrevious}
        onNavigate={onNavigate}
      />
    )
} 