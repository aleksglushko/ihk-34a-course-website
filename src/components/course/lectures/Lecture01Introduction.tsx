import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture01Introduction({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🎯',
      title: 'Ziel der Schulung',
      items: [
        'Vorbereitung auf die Sachkundeprüfung nach § 34a GewO',
        'Vermittlung aller rechtlichen, sicherheitsrelevanten und praktischen Grundlagen',
        'Schulung mit Fokus auf IHK-Prüfungsanforderungen und Zertifizierung'
      ],
      type: 'info' as const
    },
    {
      icon: '📋',
      title: 'Was erwartet dich in dieser Schulung?',
      items: [
        'Grundlagen & Pflichten im Sicherheitsgewerbe',
        'Gesetzliche Vorschriften & Verhaltensregeln',
        'Verhalten in Konfliktsituationen & Erste Hilfe',
        'Prüfungsablauf & Zertifizierungsinformationen'
      ],
      type: 'default' as const
    },
    {
      icon: '📜',
      title: 'Nach erfolgreicher Vorbereitung:',
      items: [
        'Nach Durcharbeiten des Dokuments und Bestehen der Prüfungssimulation bist du optimal auf die IHK-Sachkundeprüfung vorbereitet'
      ],
      type: 'success' as const
    }
  ]

      return (
      <LectureTemplate
        chapterNumber="Kapitel"
        chapterTitle="Vorbereitung Sachkundeprüfung § 34a GewO (IHK)"
        description="Diese Schulung vermittelt das notwendige Wissen und die praktischen Fähigkeiten, um die Sachkundeprüfung gemäß § 34a GewO erfolgreich zu bestehen."
        content={content}
        currentPage={1}
        totalPages={16}
        onNext={onNext}
        onPrevious={onPrevious}
        onNavigate={onNavigate}
      />
    )
} 