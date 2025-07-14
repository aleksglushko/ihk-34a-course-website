import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture13BombThreat({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was zählt zu außergewöhnlichen Bedrohungslagen?',
      items: [
        'Bombendrohung per Telefon, Zettel, Nachricht',
        'Amoklauf oder bewaffneter Angriff im Gebäude und Verdächtige Gegenstände ohne Besitzer',
        'Evakuierung großer Menschenmengen im Ernstfall'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Dein Handeln bei solchen Szenarien',
      items: [
        'Ruhe bewahren & niemanden in Panik versetzen',
        'Polizei alarmieren – keine Eigenrecherche oder Entschärfung',
        'Verdächtigen Bereich räumen, ohne Hektik oder Druck',
        'Fluchtwege und Notausgänge freihalten',
        'Keine Manipulation verdächtiger Objekte – Lebensgefahr!'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was du unterlassen musst',
      items: [
        'Keine eigene Entscheidung zur Räumung ohne Rücksprache',
        'Keine falschen Durchsagen oder Spekulationen',
        'Kein Filmen oder Teilen der Situation – Datenschutz & Panikgefahr',
        'Kein Anfassen oder Verschieben von Taschen, Rucksäcken etc.'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="4C"
      chapterTitle="Verhalten bei Bombendrohung, Amoklage & Evakuierung"
      subtitle="Sicherheit & Gefahrenabwehr"
      description="In extremen Gefahrensituationen ist besonnenes, regelkonformes Handeln überlebenswichtig."
      content={content}
      currentPage={13}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 