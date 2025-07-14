import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture14PatrolServices({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Was gehört zu Kontrollgängen?',
      items: [
        'Rundgänge durch Objekte, Gelände oder Gebäude nach Plan',
        'Sichtprüfung auf Unregelmäßigkeiten (offene Türen, Schäden, unbefugte Personen)',
        'Überwachung sicherheitsrelevanter Einrichtungen (z. B. Fenster, Brandmelder)',
        'Dokumentation über Kontrollzeitpunkte & Auffälligkeiten'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Was sind Schließdienste?',
      items: [
        'Verschließen & Öffnen von Gebäuden oder Bereichen zu festen Zeiten',
        'Kontrolle, ob alle Personen das Objekt verlassen haben',
        'Aktivierung oder Deaktivierung von Alarmanlagen',
        'Übergabeprotokolle führen bei Schichtwechsel oder Sonderlagen'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Typische Fehler & Risiken',
      items: [
        'Unvollständige Kontrolle → Sicherheitslücken & Haftung',
        'Nicht dokumentierte Feststellungen → keine Nachvollziehbarkeit',
        'Fehlbedienung von Alarmanlagen → Falschalarm & Kosten',
        'Missverständnisse bei Schlüsselübergabe → Verlust oder Missbrauch'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="5A"
      chapterTitle="Kontrollgänge & Schließdienste"
      subtitle="Objekt- & Veranstaltungsschutz"
      description="Kontroll- und Schließdienste gehören zu den Kernaufgaben im Sicherheitsdienst – hier ist Sorgfalt und Zuverlässigkeit gefragt."
      content={content}
      currentPage={14}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 