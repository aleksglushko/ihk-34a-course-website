import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture09EmergencyBehavior({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Typische Notfall- und Bedrohungssituationen',
      items: [
        'Körperliche Auseinandersetzungen oder Bedrohung mit Waffen',
        'Bewusstlose oder verletzte Personen; Brand, Evakuierung, technische Störung',
        'Bedrohung durch Gruppen oder aggressive Personen; Bombendrohung, Amoklage, Diebstahl'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Richtiges Verhalten im Ernstfall',
      items: [
        'Ruhe bewahren & Überblick verschaffen',
        'Gefahr einschätzen & nach Maßgabe handeln (z. B. Fluchtweg sichern, Polizei rufen)',
        'Eigenschutz beachten – kein Heldentum!',
        'Dritte warnen & absichern (z. B. Kunden, Gäste, Mitarbeiter)',
        'Dokumentation & spätere Meldung an Vorgesetzte'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Fehler mit ernsten Folgen',
      items: [
        'Alleinige Gewaltanwendung ohne akute Gefahr → Körperverletzung',
        'Keine Alarmierung von Polizei/Rettung → Pflichtverletzung',
        'Chaos durch unüberlegte Anweisungen → Panikgefahr',
        'Keine Sicherung der Umgebung → Folgeunfälle'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="3B"
      chapterTitle="Verhalten in Notfällen, Bedrohung & Aggression"
      subtitle="Umgang mit Menschen & Kommunikation"
      description="Sicherheitskräfte müssen in Ausnahmesituationen schnell, überlegt und rechtssicher handeln – ohne sich oder andere zu gefährden."
      content={content}
      currentPage={9}
      totalPages={16}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 