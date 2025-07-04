import LectureTemplate from './LectureTemplate'

interface LectureProps {
  onNext?: () => void
  onPrevious?: () => void
  onNavigate?: (page: number) => void
}

export default function Lecture18SupervisorsColleagues({ onNext, onPrevious, onNavigate }: LectureProps) {
  const content = [
    {
      icon: '🚨',
      title: 'Grundsätze im Umgang mit Vorgesetzten',
      items: [
        'Respektvoller, sachlicher Ton – auch bei Kritik oder Meinungsverschiedenheit',
        'Dienstweg einhalten – keine Eigenentscheidungen bei Konflikten',
        'Meldung von Vorfällen oder Auffälligkeiten immer zuerst an Vorgesetzte',
        'Rückfragen & Unsicherheiten immer klären, nicht ignorieren'
      ],
      type: 'info' as const
    },
    {
      icon: '✅',
      title: 'Gutes Verhalten unter Kolleg:innen',
      items: [
        'Verlässlichkeit & Teamgeist – Aufgaben gemeinsam absichern',
        'Hilfe anbieten bei Überforderung, Konflikten oder Unsicherheiten',
        'Professionelle Kommunikation auch bei Stress',
        'Keine Lästereien, Diskriminierung oder Cliquenbildung'
      ],
      type: 'success' as const
    },
    {
      icon: '⚠️',
      title: 'Was du vermeiden solltest',
      items: [
        'Vorgesetzte untergehen oder Anweisungen ignorieren',
        'Kollegen bloßstellen oder behindern',
        'Konflikte mit ins Team tragen – immer lösungsorientiert bleiben',
        'Emotionale Ausbrüche – Sachlichkeit geht vor'
      ],
      type: 'warning' as const
    }
  ]

  return (
    <LectureTemplate
      chapterNumber="6B"
      chapterTitle="Umgang mit Vorgesetzten & Kollegen"
      subtitle="Arbeitsrecht & Bewachungsrecht"
      description="Ein professionelles Miteinander sorgt für reibungslose Abläufe und sicheres Arbeiten – Teamarbeit ist Pflicht, nicht Kür."
      content={content}
      currentPage={18}
      totalPages={28}
      onNext={onNext}
      onPrevious={onPrevious}
      onNavigate={onNavigate}
    />
  )
} 