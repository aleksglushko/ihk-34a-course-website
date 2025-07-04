import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture17EmploymentRights({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Deine Rechte als Sicherheitskraft',
      items: [
        'Vergütung nach Vertrag (inkl. evtl. Nacht-, Feiertags- und Schichtzuschläge)',
        'Recht auf Pausen & Ruhezeiten gemäß Arbeitszeitgesetz',
        'Schulung & Einarbeitungspflicht durch den Arbeitgeber',
        'Anspruch auf sicheren Arbeitsplatz & Schutzmaßnahmen'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Deine Pflichten im Dienstverhältnis',
      items: [
        'Pünktlichkeit, Zuverlässigkeit & Verschwiegenheit',
        'Tragen vorgeschriebener Dienstkleidung & Ausweis',
        'Dokumentation & Übergabe wichtiger Informationen (z. B. besondere Vorkommnisse)',
        'Befolgen von Anweisungen des Dienstherrn, solange rechtmäßig'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was zum Problem werden kann',
      items: [
        'Eigenmächtiges Handeln entgegen der Anweisung → Abmahnung oder Kündigung',
        'Verstoß gegen Schweigepflicht → Vertrauensbruch',
        'Mangelnde Dokumentation → Beweisprobleme bei Vorfällen',
        'Dienstpflichten verletzen (z. B. Alkohol im Dienst) → fristlose Kündigung'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="6A"
      chapterTitle="Rechte & Pflichten im Dienstverhältnis"
      subtitle="Arbeitsrecht & Bewachungsrecht"
      description="Wer im Sicherheitsdienst arbeitet, übernimmt Verantwortung – rechtlich und im täglichen Umgang mit dem Arbeitgeber."
      content={content}
      currentPage={17}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 