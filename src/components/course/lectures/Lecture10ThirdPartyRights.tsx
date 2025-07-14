import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture10ThirdPartyRights({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Das Hausrecht verstehen und anwenden',
      items: [
        'Der Inhaber des Hausrechts (z. B. Betreiber, Veranstalter) darf bestimmen, wer sich wo aufhält',
        'Als Sicherheitskraft handelst du im Auftrag des Hausrechts',
        'Du darfst Personen auffordern zu gehen, wenn sie gegen Regeln verstoßen',
        'Bei Weigerung: Polizei informieren, nicht selbst Gewalt anwenden'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Richtiges Verhalten im Umgang mit Dritten',
      items: [
        'Immer respektvoll & ruhig kommunizieren, auch bei Regelverstößen',
        'Erst ansprechen, dann handeln – keine Schnellschüsse',
        'Grenzen klar kommunizieren („Sie verstoßen gegen die Hausordnung…")',
        'Im Zweifel: Rücksprache mit Vorgesetzten oder Polizei'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was nicht erlaubt ist?',
      items: [
        'Durchsuchung von Taschen oder Personen → nur mit freiwilliger Zustimmung',
        'Androhung körperlicher Gewalt → verboten & strafbar',
        'Privatmeinung durchsetzen („Ich will nicht, dass Sie hier sind") → keine rechtliche Grundlage',
        'Diskriminierung oder Willkür → führt zu Anzeige & Jobverlust'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="3C"
      chapterTitle="Rechte & Pflichten im Umgang mit Dritten"
      subtitle="Umgang mit Menschen & Kommunikation"
      description="Als Sicherheitskraft repräsentierst du den Auftraggeber – deine rechtlichen Befugnisse sind begrenzt, aber klar geregelt."
      content={content}
      currentPage={10}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 