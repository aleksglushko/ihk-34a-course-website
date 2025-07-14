import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture16EventSecurity({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Typische Einsatzorte im Veranstaltungsschutz',
      items: [
        'Diskotheken, Clubs, Festivals, Konzerte, Sportveranstaltungen (z. B. Stadien, Hallen)',
        'Messen, Stadtfeste, politische oder religiöse Veranstaltungen',
        'Private Events mit erhöhtem Schutzbedarf (z. B. VIP-Feiern)'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Deine Aufgaben vor Ort',
      items: [
        'Zugangskontrollen durchführen (inkl. Ticket- und Personenprüfung)',
        'Lage beobachten & auffällige Personen melden',
        'Sofortige Reaktion bei Streit, Alkoholeinfluss oder Gewaltausbruch',
        'Zusammenarbeit mit Polizei, Sanitätern und Veranstalter',
        'Sicherstellen von Fluchtwegen & Einhaltung gesetzlicher Vorschriften'
      ],
      type: 'success' as const
    },
    {
      icon: '🔒',
      title: 'Besondere Vorschriften für Schützen',
      items: [
        'Einhaltung der festgelegten Schießzeiten & Sicherheitsvorgaben',
        'Keine Manipulationen an der Waffe außerhalb zugelassener Bereiche',
        'Nutzung nur von erlaubten Zielscheiben gemäß Standordnung',
        'Keine eigenmächtige Nutzung von Zubehör ohne Genehmigung'
      ],
      type: 'info' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="5C"
      chapterTitle="Einsatz im Veranstaltungsschutz (z. B. Diskothek, Stadion)"
      subtitle="Objekt- & Veranstaltungsschutz"
      description="Großveranstaltungen stellen besondere Anforderungen an Sicherheitskräfte – Überblick, Kommunikation und Stressresistenz sind entscheidend."
      content={content}
      currentPage={16}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 