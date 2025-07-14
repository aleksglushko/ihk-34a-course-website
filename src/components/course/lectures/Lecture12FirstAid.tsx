import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture12FirstAid({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Wann Erste Hilfe notwendig wird',
      items: [
        'Bewusstlose Personen / Starke Blutungen oder Verletzungen',
        'Atemnot, Krampfanfälle, Herzstillstand, Alkohol-/Drogenintoxikation',
        'Kreislaufkollaps bei Hitze, Stress oder Überforderung'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Dein Verhalten im Notfall',
      items: [
        'Eigenschutz prüfen – keine Hilfeleistung, wenn du dich selbst gefährdest',
        'Unverzüglich Rettungsdienst rufen (112) – Ort, Lage, Zustand melden',
        'Maßnahmen einleiten, falls du geschult bist (z. B. stabile Seitenlage)',
        'Person betreuen & beruhigen, bis Hilfe eintrifft',
        'Dokumentation des Vorfalls – Zeitpunkt, Zustand, Reaktion'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was du vermeiden musst',
      items: [
        'Keine Hilfe leisten → Strafbar nach § 323c StGB (Unterlassene Hilfeleistung)',
        'Unüberlegte Handlungen ohne Ausbildung (z. B. Herzdruckmassage bei Bewusstsein)',
        'Wegsehen oder weiterarbeiten – du trägst Mitverantwortung',
        'Diskussionen mit Schaulustigen oder Betroffenen statt fokussiertem Handeln'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="4B"
      chapterTitle="Erste Hilfe & Verhalten bei medizinischen Notfällen"
      subtitle="Sicherheit & Gefahrenabwehr"
      description="Als Sicherheitskraft bist du zur Hilfeleistung verpflichtet – richtiges Verhalten rettet Leben."
      content={content}
      currentPage={12}
              totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 