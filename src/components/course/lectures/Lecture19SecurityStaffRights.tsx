import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture19SecurityStaffRights({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was du gegenüber Dritten darfst',
      items: [
        'Ausübung des Hausrechts im Auftrag (z. B. Personen zum Verlassen auffordern)',
        'Ansprache & Information, wenn jemand gegen Regeln oder Gesetze verstößt',
        'Festhalten nach § 127 StPO bei frischer Tat → Polizei sofort rufen',
        'Zugang verweigern bei Gefahr oder fehlender Berechtigung'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Deine Rechte im Einsatz',
      items: [
        'Schutz vor Gewalt & Beleidigung – Anzeige möglich',
        'Notwehrrecht nach § 32 StGB',
        'Verweigerung unrechtmäßiger Anweisungen (z. B. illegale Durchsuchung)',
        'Unterstützung durch Polizei anfordern, wenn die Lage außer Kontrolle gerät'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Keine Sonderrechte gegenüber Dritten',
      items: [
        'Keine polizeilichen Befugnisse – keine Strafverfolgung, keine Durchsuchung',
        'Kein Zugriff auf persönliche Daten ohne Grund',
        'Keine körperliche Gewalt ohne akute Notwehrlage',
        'Keine Entscheidung über Schuld oder Strafe – du sicherst, die Polizei ermittelt'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="6C"
      chapterTitle="Rechte von Sicherheitsmitarbeitern gegenüber Dritten"
      subtitle="Arbeitsrecht & Bewachungsrecht"
      description="Als Sicherheitskraft hast du bestimmte Rechte – aber nur im klaren rechtlichen Rahmen und im Auftrag des Hausrechts."
      content={content}
      currentPage={19}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 