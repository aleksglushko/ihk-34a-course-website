import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture04ExamOverview({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🎯',
      title: 'Was du in der Schulung lernst',
      items: [
        'Alle prüfungsrelevanten Inhalte: Recht, Sicherheit, Verhalten, Deeskalation',
        'Praxisnahe Erklärungen & Wiederholungen statt trockener Gesetzestexte',
        'Effektive Vorbereitung auf die typische Prüfungslogik der IHK'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Ziel: IHK-Prüfung bestehen – sicher & ohne Stress',
      items: [
        'Du verstehst die Themen, nicht nur auswendig lernen',
        'Du erkennst typische Fallstricke & Musterfragen',
        'Du bekommst Struktur & Klarheit für die schriftliche Prüfung'
      ],
      type: 'success' as const
    },
    {
      icon: '📋',
      title: 'So läuft die Prüfung ab',
      items: [
        'Schriftliche IHK-Prüfung mit 72 Multiple-Choice-Fragen',
        'Bestehen mit mindestens 50 % (mind. 36 Fragen richtig)',
        'Themenbereiche: Recht, Gewerbeordnung, Verhalten, Sicherheit, Umgang mit Menschen',
        'Dauer: ca. 120 Minuten – schriftlich, vor Ort bei der IHK'
      ],
      type: 'default' as const
    }
  ]

      return (
      <LectureTemplate
        chapterNumber="1C"
        chapterTitle="Ziel der Schulung & Prüfungsüberblick (IHK, Ablauf, Bestehen)"
        subtitle="Einführung"
        description="Diese Schulung bereitet dich gezielt und verständlich auf die IHK-Sachkundeprüfung nach § 34a GewO vor – mit dem Ziel: bestehen."
        content={content}
        currentPage={4}
        totalPages={28}
        onNext={onNext}
        onPrevious={onPrevious}
        onNavigate={onNavigate}
      />
    )
} 