import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
}

export default function Lecture02WhyTraining({ onNext, onPrevious }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Warum ist die Schulung wichtig?',
      items: [
        'Zugang zum Sicherheitsgewerbe – Ohne § 34a-Prüfung keine Tätigkeit im Objektschutz, Veranstaltungsschutz etc.',
        'Gesetzlich vorgeschrieben – IHK-Sachkundeprüfung nach § 34a GewO ist verpflichtend',
        'Prüfung ist herausfordernd – Ohne Vorbereitung bestehen viele beim ersten Versuch nicht'
      ],
      type: 'warning' as const
    },
    {
      icon: '✅',
      title: 'Deine Chance mit Vorbereitung',
      items: [
        'Sicheres Bestehen der IHK-Prüfung – Effektives Lernen mit echten Prüfungsinhalten',
        'Einstieg in ein wachsendes Berufsfeld – Security wird in vielen Bereichen gebraucht',
        'Arbeitgeber bevorzugen geschulte Bewerber – Vorbereitung zeigt Motivation & Zuverlässigkeit'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was passiert ohne Vorbereitung?',
      items: [
        'Hohes Durchfallrisiko – Prüfung umfasst Recht, Deeskalation, Verhalten in Notfällen etc.',
        'Kein Zugang zum Job – Ohne Zertifikat keine Beschäftigung bei Sicherheitsfirmen',
        'Verpasste Chancen – Viele scheitern an Fachbegriffen, Gesetzen oder typischen Fallfragen'
      ],
      type: 'warning' as const
    }
  ]

      return (
      <LectureTemplate
        chapterNumber="1A"
        chapterTitle="Warum eine Schulung zur Sachkundeprüfung?"
        subtitle="Einführung"
        description="Diese Schulung bereitet dich optimal auf die Sachkundeprüfung vor und verschafft dir den Einstieg ins Sicherheitsgewerbe."
        content={content}
        currentPage={2}
        totalPages={28}
              onNext={onNext}
      onPrevious={onPrevious}
      />
    )
} 