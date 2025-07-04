import { useState } from 'react'
import {
  Lecture01Introduction,
  Lecture02WhyTraining,
  Lecture03SecurityOverview,
  Lecture04ExamOverview,
  Lecture05LegalFoundations,
  Lecture06LegalDuties,
  Lecture07DataProtection,
  Lecture08Deescalation,
  Lecture09EmergencyBehavior,
  Lecture10ThirdPartyRights,
  Lecture11DangerSituations,
  Lecture12FirstAid,
  Lecture13BombThreat,
  Lecture14PatrolServices,
  Lecture15AccessControl,
  Lecture16EventSecurity,
  Lecture17EmploymentRights,
  Lecture18SupervisorsColleagues,
  Lecture19SecurityStaffRights,
  Lecture20ExamContent,
  Lecture21ExamQuestions,
  Lecture22ExamBehavior,
  Lecture23CertificateImportance,
  Lecture24JobOpportunities,
  Lecture25CareerAdvancement,
  Lecture26FAQ,
  Lecture27ExamDayTips,
  Lecture28MotivationTips
} from './lectures'

interface CourseNavigationProps {
  onClose?: () => void
}

export default function CourseNavigation({ onClose }: CourseNavigationProps) {
  const [currentLecture, setCurrentLecture] = useState(1)

  const lectures = [
    { id: 1, component: Lecture01Introduction, title: 'Einführung', shortDesc: 'Kurs Start' },
    { id: 2, component: Lecture02WhyTraining, title: 'Warum eine Schulung?', shortDesc: 'Warum Schulung' },
    { id: 3, component: Lecture03SecurityOverview, title: 'Sicherheitsgewerbe Überblick', shortDesc: 'Sicherheit Überblick' },
    { id: 4, component: Lecture04ExamOverview, title: 'Prüfungsüberblick', shortDesc: 'Prüfung Überblick' },
    { id: 5, component: Lecture05LegalFoundations, title: 'Rechtliche Grundlagen', shortDesc: 'Recht Grundlagen' },
    { id: 6, component: Lecture06LegalDuties, title: 'Rechtliche Pflichten', shortDesc: 'Recht Pflichten' },
    { id: 7, component: Lecture07DataProtection, title: 'Datenschutz & Notwehr', shortDesc: 'Datenschutz Notwehr' },
    { id: 8, component: Lecture08Deescalation, title: 'Deeskalation', shortDesc: 'Deeskalation' },
    { id: 9, component: Lecture09EmergencyBehavior, title: 'Notfälle & Bedrohung', shortDesc: 'Notfälle Bedrohung' },
    { id: 10, component: Lecture10ThirdPartyRights, title: 'Umgang mit Dritten', shortDesc: 'Umgang Dritten' },
    { id: 11, component: Lecture11DangerSituations, title: 'Gefahrensituationen', shortDesc: 'Gefahrensituationen' },
    { id: 12, component: Lecture12FirstAid, title: 'Erste Hilfe', shortDesc: 'Erste Hilfe' },
    { id: 13, component: Lecture13BombThreat, title: 'Bombendrohung & Evakuierung', shortDesc: 'Bombendrohung' },
    { id: 14, component: Lecture14PatrolServices, title: 'Kontrollgänge', shortDesc: 'Kontrollgänge' },
    { id: 15, component: Lecture15AccessControl, title: 'Zugangskontrolle', shortDesc: 'Zugangskontrolle' },
    { id: 16, component: Lecture16EventSecurity, title: 'Veranstaltungsschutz', shortDesc: 'Veranstaltungsschutz' },
    { id: 17, component: Lecture17EmploymentRights, title: 'Rechte & Pflichten', shortDesc: 'Rechte Pflichten' },
    { id: 18, component: Lecture18SupervisorsColleagues, title: 'Umgang mit Vorgesetzten', shortDesc: 'Umgang Vorgesetzte' },
    { id: 19, component: Lecture19SecurityStaffRights, title: 'Sicherheitsmitarbeiter Rechte', shortDesc: 'Mitarbeiter Rechte' },
    { id: 20, component: Lecture20ExamContent, title: 'Prüfungsinhalte IHK', shortDesc: 'Prüfung IHK' },
    { id: 21, component: Lecture21ExamQuestions, title: 'Prüfungsfragen', shortDesc: 'Prüfungsfragen' },
    { id: 22, component: Lecture22ExamBehavior, title: 'Prüfungsverhalten', shortDesc: 'Prüfungsverhalten' },
    { id: 23, component: Lecture23CertificateImportance, title: 'Zertifikat Bedeutung', shortDesc: 'Zertifikat Bedeutung' },
    { id: 24, component: Lecture24JobOpportunities, title: 'Einsatzmöglichkeiten', shortDesc: 'Einsatzmöglichkeiten' },
    { id: 25, component: Lecture25CareerAdvancement, title: 'Aufstiegschancen', shortDesc: 'Aufstiegschancen' },
    { id: 26, component: Lecture26FAQ, title: 'FAQ', shortDesc: 'FAQ' },
    { id: 27, component: Lecture27ExamDayTips, title: 'Prüfungstag Tipps', shortDesc: 'Prüfungstag Tipps' },
    { id: 28, component: Lecture28MotivationTips, title: 'Motivation', shortDesc: 'Motivation' }
  ]

  // Main navigation sections (A-parts only)
  const mainSections = [
    { id: 1, label: '1A', title: 'Einführung', lectures: [1] },
    { id: 2, label: '2A', title: 'Warum Schulung', lectures: [2] },
    { id: 3, label: '3A', title: 'Sicherheitsgewerbe', lectures: [3] },
    { id: 4, label: '4A', title: 'Prüfungsüberblick', lectures: [4] },
    { id: 5, label: '5A', title: 'Recht Grundlagen', lectures: [5, 6] },
    { id: 6, label: '6A', title: 'Datenschutz Notwehr', lectures: [7, 8] },
    { id: 7, label: '7A', title: 'Notfälle Verhalten', lectures: [9, 10, 11, 12] },
    { id: 8, label: '8A', title: 'Praxis Einsatz', lectures: [13, 14, 15, 16] },
    { id: 9, label: '9A', title: 'Arbeitsrecht', lectures: [17, 18, 19] },
    { id: 10, label: '10A', title: 'Prüfung IHK', lectures: [20, 21, 22] },
    { id: 11, label: '11A', title: 'Zertifikat Karriere', lectures: [23, 24, 25] },
    { id: 12, label: '12A', title: 'FAQ Tipps', lectures: [26, 27, 28] }
  ]

  const handleNext = () => {
    if (currentLecture < lectures.length) {
      setCurrentLecture(currentLecture + 1)
    }
  }

  const handlePrevious = () => {
    if (currentLecture > 1) {
      setCurrentLecture(currentLecture - 1)
    }
  }

  const handleSectionNavigate = (sectionId: number) => {
    const section = mainSections.find(s => s.id === sectionId)
    if (section && section.lectures.length > 0) {
      setCurrentLecture(section.lectures[0])
    }
  }

  const currentLectureData = lectures.find(lecture => lecture.id === currentLecture)
  const CurrentLectureComponent = currentLectureData?.component

  if (!CurrentLectureComponent) {
    return <div>Lecture not found</div>
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Left Sidebar Navigation */}
        <div className="w-80 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
          {/* Sidebar Header - aligned with main header */}
          <div className="border-b border-gray-200 px-4 py-4">
            <h3 className="text-2xl font-bold text-gray-800">Kurs Navigation</h3>
          </div>
          
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {mainSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionNavigate(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    section.lectures.includes(currentLecture)
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {section.label}
                    </span>
                    <div>
                      <div className="font-medium text-sm">{section.title}</div>
                      <div className="text-xs opacity-75">
                        {section.lectures.length} Lektion{section.lectures.length > 1 ? 'en' : ''}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Close button for course overlay */}
          {onClose && (
            <button
              onClick={onClose}
              className="fixed top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Current Lecture */}
          <CurrentLectureComponent 
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>

      {/* Footer - Full Width */}
      <div className="bg-gray-100 border-t border-gray-200 px-8 py-4 flex-shrink-0">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{currentLecture} | 2025 Wettbergsmayr GbR | Theresienstr. 128, 80333 München | support@standaufsicht-zertifikat.de</span>
          <span>Vorbereitung Sachkundeprüfung § 34a GewO (IHK)</span>
        </div>
      </div>
    </div>
  )
} 