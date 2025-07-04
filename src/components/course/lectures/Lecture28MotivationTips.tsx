import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture28MotivationTips({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '✅',
      title: 'So bleibst du motiviert',
      items: [
        'Ziel vor Augen halten – die Prüfung ist dein Einstieg ins Berufsleben',
        'Denke an die Chancen: Job, Sicherheit, Aufstiegsmöglichkeiten',
        'Fehler sind Teil des Lernens – jeder Durchgang bringt dich weiter',
        'Vergleiche dich nicht mit anderen, sondern verlass dich auf dein Training'
      ],
      type: 'success' as const
    },
    {
      icon: '📋',
      title: 'Tipps für deinen Lernalltag',
      items: [
        'Täglich 20–30 Minuten wiederholen – lieber regelmäßig als einmal viel',
        'Mit echten Prüfungsfragen üben – so trainierst du unter realen Bedingungen',
        'Wiederholungen einplanen – z. B. Wochenrückblick & Quiz',
        'Themen in kleine Portionen aufteilen – z. B. "Heute nur Notwehr & Hausrecht"'
      ],
      type: 'info' as const
    },
    {
      icon: '🎯',
      title: 'Dein Mindset für die Prüfung',
      items: [
        'Du musst kein Jurist sein – du brauchst nur das, was in der Prüfung zählt',
        'Vertrauen in deine Vorbereitung – du weißt mehr, als du denkst',
        'Konzentrier dich auf Klarheit, nicht auf Perfektion'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="9C"
      chapterTitle="Motivation & Tipps zur Vorbereitung"
      subtitle="Optional"
      description="Mit der richtigen Einstellung, klarer Struktur und etwas Disziplin schaffst du die Prüfung sicher."
      content={content}
      currentPage={28}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 