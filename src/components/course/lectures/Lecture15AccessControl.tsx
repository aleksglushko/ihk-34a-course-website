import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture15AccessControl({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was gehört zur Zugangskontrolle?',
      items: [
        'Prüfung von Eintrittsberechtigungen (Tickets, Ausweise, Gästelisten)',
        'Beobachtung des Zustands der Person (alkoholisiert, aggressiv, auffällig)',
        'Einschätzung potenzieller Gefahren (z. B. mitgeführte Gegenstände)',
        'Kontrolle technischer Zugangssysteme (Drehkreuze, Schranken, Scanner)'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Was ist erlaubt?',
      items: [
        'Sichtkontrollen von Taschen → nur bei freiwilliger Zustimmung',
        'Freundliche Ansprache bei Unsicherheiten',
        'Zutrittsverweigerung bei begründetem Verdacht (z. B. Alkohol, keine Berechtigung)',
        'Hinweis auf Hausrecht bei Diskussionen oder Konflikten'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was ist nicht erlaubt?',
      items: [
        'Durchsuchungen ohne Einwilligung → strafbar',
        'Körperkontakt ohne Notwehr oder ausdrückliche Zustimmung',
        'Diskriminierende oder willkürliche Ablehnungen',
        'Einschüchterung oder Drohung, um Zustimmung zu erzwingen'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="5B"
      chapterTitle="Zugangskontrolle, Personen- & Taschenkontrolle"
      subtitle="Objekt- & Veranstaltungsschutz"
      description="Die Zugangskontrolle ist eine zentrale Sicherheitsmaßnahme – rechtlich sauber und professionell durchgeführt, schützt sie Menschen und Objekte."
      content={content}
      currentPage={15}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 