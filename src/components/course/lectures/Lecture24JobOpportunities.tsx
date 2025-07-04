import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture24JobOpportunities({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Typische Einsatzorte & Tätigkeiten',
      items: [
        'Objektschutz – z. B. Firmengelände, Behörden, Logistikzentren',
        'Revierdienst & Streifendienst – mobile Kontrolle mehrerer Objekte',
        'Veranstaltungsschutz – Konzerte, Sportevents, Messen',
        'Empfangsdienste – Kontrolle, Begrüßung, Zugangssteuerung',
        'City-Streifen & öffentlicher Raum – oft im Auftrag von Kommunen'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Vorteile im Job mit § 34a-Nachweis',
      items: [
        'Bessere Verdienstmöglichkeiten (z. B. Nacht- & Gefahrenzulagen)',
        'Rechtssicheres Arbeiten → Schutz vor Abmahnung & Strafe',
        'Stabiler Arbeitsmarkt – hohe Nachfrage nach qualifiziertem Personal',
        'Vielfältige Einsatzbereiche, je nach Interessen und Stärken'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Wichtig zu wissen',
      items: [
        'Tätigkeiten mit erhöhter Verantwortung (z. B. alleiniger Einsatz im öffentlichen Raum) nur mit Sachkundeprüfung erlaubt',
        'Arbeitgeber prüfen den Nachweis vor Einstellung',
        'Das Zertifikat ist unbegrenzt gültig, aber bei Arbeitgeberwechsel erneut vorzulegen'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="8B"
      chapterTitle="Einsatzmöglichkeiten nach erfolgreicher Prüfung"
      subtitle="Abschluss & Zertifikat"
      description="Mit dem § 34a-Zertifikat eröffnen sich vielfältige Einsatzfelder – in ganz Deutschland und in unterschiedlichsten Bereichen."
      content={content}
      currentPage={24}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 