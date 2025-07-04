import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture11DangerSituations({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Typische Gefahrensituationen im Sicherheitsdienst',
      items: [
        'Brandentwicklung in Gebäuden oder Veranstaltungsflächen',
        'Diebstahl – auf frischer Tat oder im Verdacht',
        'Körperverletzung oder Schlägerei unter Gästen oder Besuchern',
        'Technische Ausfälle mit Gefährdungspotenzial (z. B. Strom, Türsysteme)',
        'Massenpanik bei Fehlalarm, Gewalt oder Gerüchten'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Grundprinzipien im Ernstfall',
      items: [
        'Ruhe bewahren, Lage überblicken; Sofortige Alarmierung (Feuerwehr, Polizei, Notarzt) je nach Lage',
        'Personen absichern, Fluchtwege freihalten - Eigensutz geht vor – keine unnötige Eigengefährdung',
        'Dokumentation & spätere Meldung an Vorgesetzte'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Häufige Fehler in Gefahrensituationen',
      items: [
        'Keine Alarmierung bei Brandgeruch oder Rauch → Pflichtverletzung',
        'Selbstjustiz bei Diebstahl → Freiheitsberaubung/Körperverletzung',
        'Panikverhalten statt strukturierter Evakuierung → Gefährdung anderer',
        'Einsatz unerlaubter Ausrüstung (z. B. Pfefferspray, Schlagstock) ohne Erlaubnis → strafbar'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="4A"
      chapterTitle="Verhalten in Gefahrensituationen (Brand, Diebstahl, Körperverletzung)"
      subtitle="Sicherheit & Gefahrenabwehr"
      description="In Gefahrensituationen ist klares, ruhiges und verantwortungsvolles Handeln Pflicht – deine Reaktion kann entscheidend sein."
      content={content}
      currentPage={11}
      totalPages={16}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 