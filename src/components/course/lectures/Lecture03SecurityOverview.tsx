import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture03SecurityOverview({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was regelt § 34a GewO?',
      items: [
        'Gesetzliche Grundlage für Bewachungstätigkeiten (z. B. Türsteher, Objektschutz, Revierfahrer)',
        'IHK-Sachkundeprüfung zwingend vorgeschrieben für bestimmte Aufgaben',
        'Ziel: Schutz von Personen, Objekten und öffentlicher Sicherheit – rechtssicher & professionell'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Wo kommt § 34a zur Anwendung?',
      items: [
        'Einlasskontrolle bei Diskotheken & Veranstaltungen',
        'Objektschutz bei öffentlichen & privaten Gebäuden',
        'Revier- & Streifendienste, Empfangsdienste, Baustellenbewachung',
        'Begleitung von Personen mit besonderen Schutzbedürfnissen'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Ohne Sachkundeprüfung nicht erlaubt:',
      items: [
        'Alleinbewachung öffentlicher Bereiche (z. B. City-Streifen, U-Bahn, Bahnhöfe)',
        'Bewachung mit Waffen oder Hunden',
        'Kontrollgänge im öffentlichen Raum ohne Begleitung',
        'Sicherheitsdienste bei Großveranstaltungen (z. B. Festivals, Sportevents)'
      ],
      type: 'warning' as const
    }
  ]

      return (
      <LectureTemplate
        chapterNumber="1B"
        chapterTitle="Überblick: Sicherheitsgewerbe & § 34a GewO"
        subtitle="Einführung"
        description="Das Sicherheitsgewerbe ist ein verantwortungsvoller Beruf mit klaren gesetzlichen Anforderungen – die Sachkundeprüfung ist der Einstieg."
        content={content}
        currentPage={3}
        totalPages={28}
        onNext={onNext}
        onPrevious={onPrevious}
        onNavigate={onNavigate}
      />
    )
} 