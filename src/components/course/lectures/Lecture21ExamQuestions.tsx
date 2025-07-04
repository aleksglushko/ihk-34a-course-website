import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture21ExamQuestions({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Beispielhafte Prüfungsfragen (Multiple Choice)',
      items: [
        'Was bedeutet Notwehr gemäß § 32 StGB?',
        'A. Selbstschutz gegen eine gegenwärtige, rechtswidrige Handlung',
        'B. Verfolgung eines Täters bis zur Festnahme',
        'C. Verteidigung gegen Kritik im Dienst',
        '→ Richtige Antwort: A'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Lösungsmuster & Strategien',
      items: [
        'Fragen genau lesen – oft steckt der entscheidende Hinweis im letzten Halbsatz',
        'Ausschlussprinzip nutzen – was definitiv falsch ist, sofort streichen',
        'Begriffe verstehen, nicht raten – z. B. Unterschied zwischen „Besitz" & „Eigentum"',
        'Rechtsgrundlagen im Hinterkopf behalten – viele Fragen basieren direkt auf Gesetzestexten'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Typische Fehler in der Prüfung',
      items: [
        'Überlesen von Verneinungen („welche Aussage ist nicht richtig?")',
        'Auf Zeitdruck reagieren – ruhig bleiben, weitergehen, zurückkommen',
        'Keine Übung mit echten Prüfungsfragen → keine Routine'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="7B"
      chapterTitle="Typische Prüfungsfragen & Lösungsmuster"
      subtitle="Prüfung & Vorbereitung"
      description="Wer die Logik der Prüfungsfragen kennt, kann sicher und schnell die richtigen Antworten finden."
      content={content}
      currentPage={21}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 