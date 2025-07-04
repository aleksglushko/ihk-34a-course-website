import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture22ExamBehavior({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'So verhältst du dich in der Prüfung richtig',
      items: [
        'Rechtzeitig erscheinen – Ausweis, Einladung & Schreibzeug mitbringen',
        'Ruhe bewahren, auch bei schwierigen Fragen',
        'Fragen überspringen, wenn du hängst – später zurückkehren',
        'Antworten vollständig und korrekt markieren – keine halben Kreuze',
        'Zeit einteilen: ca. 50 Sekunden pro Frage'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Wenn du nicht bestehst',
      items: [
        'Keine Sperrfrist – du kannst die Prüfung jederzeit wiederholen',
        'Wiederholung bei der gleichen oder einer anderen IHK möglich',
        'Gezielte Vorbereitung auf nicht bestandene Themenbereiche sinnvoll (z. B. Strafrecht, Deeskalation)',
        'Viele bestehen beim zweiten Versuch mit systematischem Üben'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was du vermeiden solltest',
      items: [
        'Unvorbereitet antreten – reine Hoffnung reicht nicht',
        'Diskussion mit Prüfern oder Aufsicht – führt zu Prüfungsabbruch',
        'Betrugsversuch (Handy, Spickzettel) → sofortige Sperre & Vermerk bei der IHK',
        'Keine Anmeldung bei der IHK → Kurs ≠ Prüfungsanmeldung!'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="7C"
      chapterTitle="Verhalten in der Prüfung & Wiederholungsmöglichkeiten"
      subtitle="Prüfung & Vorbereitung"
      description="Ein klarer Kopf, gute Vorbereitung und der richtige Umgang mit Stress sind entscheidend – auch wenn's nicht sofort klappt."
      content={content}
      currentPage={22}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 