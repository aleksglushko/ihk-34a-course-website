import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture27ExamDayTips({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '✅',
      title: "Do's – Das solltest du tun",
      items: [
        'Frühzeitig erscheinen – am besten 30 Minuten vor Prüfungsbeginn',
        'Ausweis & Einladung bereithalten',
        'Klarer Kopf – vorher gut schlafen, ausreichend essen',
        'Fragen ruhig durchlesen – versteckte Verneinungen beachten',
        'Keine Panik bei Unsicherheit – weitergehen, zurückkommen',
        'Sauber & korrekt markieren – keine Mehrfachkreuze bei Einzelantworten'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: "Don'ts – Das solltest du vermeiden",
      items: [
        'Zu spät kommen → kein Einlass, kein Nachholen',
        'Spicken, Handy, Notizen → führt zum sofortigen Ausschluss',
        'Hektik oder Stress – das führt zu Flüchtigkeitsfehlern',
        'Diskussion mit Aufsicht – bringt nichts, kann negativ bewertet werden',
        'Fragen überspringen & vergessen – keine Punkte trotz Wissen'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="9B"
      chapterTitle="Do's & Don'ts für den Prüfungstag"
      subtitle="Optional"
      description="Mit dem richtigen Verhalten und guter Vorbereitung meisterst du die Prüfung souverän."
      content={content}
      currentPage={27}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 