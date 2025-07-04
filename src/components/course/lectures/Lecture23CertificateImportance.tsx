import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture23CertificateImportance({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Warum ist das Zertifikat so wichtig?',
      items: [
        'Gesetzlich vorgeschrieben für bestimmte Tätigkeiten im Sicherheitsdienst',
        'Ohne Nachweis der bestandenen IHK-Prüfung → keine Einstellung möglich',
        'Arbeitgeber dürfen dich nur mit Nachweis für § 34a-Tätigkeiten einsetzen',
        'Kontrollen durch Ordnungsamt oder Polizei jederzeit möglich'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Was du mit dem Zertifikat machen kannst',
      items: [
        'Arbeiten im Objektschutz, Veranstaltungsschutz, Revierdienst',
        'Einsatz in Diskotheken, Stadien, Einkaufszentren, Bahnhöfen',
        'Möglichkeit zur Waffensachkunde-Schulung (Aufbaukurs)',
        'Grundlage für weitere Aufstiegsfortbildungen (z. B. GSSK – geprüfte Schutz- & Sicherheitskraft)'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Ohne Zertifikat hast du keine Perspektive',
      items: [
        'Kein Zugang zu den gut bezahlten Jobs im Sicherheitsgewerbe',
        'Kein Versicherungsschutz im Einsatz ohne gesetzliche Grundlage',
        'Bewerbungschancen = 0, wenn das Zertifikat fehlt'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="8A"
      chapterTitle="Bedeutung des § 34a-Zertifikats im Beruf"
      subtitle="Abschluss & Zertifikat"
      description="Das Zertifikat ist dein offizieller Nachweis – ohne es geht nichts im Sicherheitsgewerbe."
      content={content}
      currentPage={23}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 