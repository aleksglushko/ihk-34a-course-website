import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture20ExamContent({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was wird geprüft?',
      items: [
        'Rechts- und aufgabenbezogenes Wissen',
        'Themen: Gewerberecht (§ 34a GewO, BewachV); Straf- und Verfahrensrecht (z. B. Notwehr, Jedermannsrecht); Bürgerliches Recht (z. B. Besitz, Hausrecht); Datenschutzrecht (DSGVO); Umgang mit Menschen, Deeskalation; Unfallverhütung & Sicherheitstechnik; Verhalten in Gefahrensituationen'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'So läuft die Prüfung ab',
      items: [
        'Schriftliche IHK-Prüfung:',
        '→ 72 Multiple-Choice-Fragen',
        '→ 60 Minuten Zeit',
        '→ Mindestens 50 % richtig, sonst nicht bestanden',
        'Geprüft wird in festgelegten IHK-Prüfzentren - Prüfungstermine öffentlich auf IHK-Webseiten einsehbar'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Wichtig für die Vorbereitung',
      items: [
        'Fragen nach Prüfungslogik aufgebaut – oft mit mehreren plausiblen Antworten',
        'Verständnis > Auswendiglernen: Viele Themen überschneiden sich – rechtliches Wissen ist vernetzt',
        'Häufige Fehler: zu wenig Wiederholung, keine Übungsfragen, Blackout durch Stress'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="7A"
      chapterTitle="Prüfungsinhalte & Ablauf bei der IHK"
      subtitle="Prüfung & Vorbereitung"
      description="Die IHK-Sachkundeprüfung ist die zentrale Hürde – wer sie versteht, kann sie bestehen."
      content={content}
      currentPage={20}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 