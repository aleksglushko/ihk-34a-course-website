import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture26FAQ({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Wie melde ich mich zur Prüfung an?',
      items: [
        'Direkt bei der zuständigen IHK – online oder telefonisch',
        'Unterlagen: Personalausweis, ggf. Ausbildungsnachweis',
        'Termine & Fristen auf der jeweiligen IHK-Website'
      ],
      type: 'info' as const
    },
    {
      icon: '🚨',
      title: 'Wie oft kann ich die Prüfung wiederholen?',
      items: [
        'So oft wie nötig – es gibt keine Begrenzung',
        'Empfohlen: gezielte Vorbereitung auf nicht bestandene Themenbereiche'
      ],
      type: 'info' as const
    },
    {
      icon: '🚨',
      title: 'Ist die Prüfung bundesweit gleich?',
      items: [
        'Ja, die Inhalte und das Prüfungsformat sind standardisiert',
        'Durchführung durch alle IHKs in Deutschland – an unterschiedlichen Orten und Terminen',
        'In der Regel kostet die Prüfung zwischen 130–170 €, je nach IHK (der Preis gilt pro Versuch)'
      ],
      type: 'info' as const
    },
    {
      icon: '🚨',
      title: 'Wie lange ist das Zertifikat gültig?',
      items: [
        'Das § 34a-Zertifikat ist zeitlich unbegrenzt gültig',
        'Kein Verfallsdatum – wird bei jedem neuen Arbeitgeber erneut verlangt'
      ],
      type: 'info' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="9A"
      chapterTitle="FAQ zur Sachkundeprüfung"
      subtitle="Optional"
      description="Hier findest du Antworten auf die häufigsten Fragen rund um Prüfung, Vorbereitung und Zertifikat."
      content={content}
      currentPage={26}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 