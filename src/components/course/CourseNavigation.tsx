import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
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
import ExamComponent from '../ExamComponent'
import PaymentSection from '../PaymentSection'

interface CourseNavigationProps {
  onClose?: () => void
  isDemo?: boolean
}

export default function CourseNavigation({ onClose, isDemo = false }: CourseNavigationProps) {
  const [currentLecture, setCurrentLecture] = useState(1)
  const [showExam, setShowExam] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const { hasAccess } = useAuth()

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
      const targetLecture = section.lectures[0]
      
      // Check if user is trying to access restricted content
      if (isDemo && !hasAccess && targetLecture > 2) {
        setShowPayment(true)
        return
      }
      
      setCurrentLecture(targetLecture)
    }
  }

  const handleExamAccess = () => {
    if (isDemo && !hasAccess) {
      setShowPayment(true)
    } else {
      setShowExam(true)
    }
  }

  const getNavigationItemClass = (section: { id: number; label: string; title: string; lectures: number[] }) => {
    const isRestricted = isDemo && !hasAccess && section.lectures.some((l: number) => l > 2)
    const isActive = section.lectures.includes(currentLecture)
    
    if (isRestricted) {
      return 'w-full text-left p-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed relative'
    }
    
    return `w-full text-left p-3 rounded-lg transition-colors ${
      isActive
        ? 'bg-gray-800 text-white'
        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
    }`
  }

  if (showExam) {
    return (
      <div className="fixed inset-0 bg-white z-50">
        <ExamComponent onClose={() => setShowExam(false)} />
      </div>
    )
  }

  if (showPayment) {
    return (
      <div>
        <PaymentSection onClose={() => setShowPayment(false)} />
      </div>
    )
  }

  const currentLectureData = lectures.find(lecture => lecture.id === currentLecture)
  const CurrentLectureComponent = currentLectureData?.component

  if (!CurrentLectureComponent) {
    return <div>Lecture not found</div>
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0">
        {/* Left Sidebar Navigation */}
        <div className="w-80 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
          {/* Sidebar Header - Fixed */}
          <div className="border-b border-gray-200 px-8 py-4 flex-shrink-0">
            <h3 className="text-xl font-bold text-gray-800">Kurs Navigation</h3>
          </div>
          
          {/* Navigation Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {mainSections.map((section) => {
                const isRestricted = isDemo && !hasAccess && section.lectures.some((l: number) => l > 2)
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionNavigate(section.id)}
                    disabled={isRestricted}
                    className={getNavigationItemClass(section)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        section.lectures.includes(currentLecture)
                          ? 'bg-gray-600 text-white'
                          : 'bg-gray-600 text-white'
                      }`}>
                        {section.label}
                      </span>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{section.title}</div>
                        <div className="text-xs opacity-75">
                          {section.lectures.length} Lektion{section.lectures.length > 1 ? 'en' : ''}
                        </div>
                      </div>
                      {isRestricted && (
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
            
            {/* Exam Button */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={handleExamAccess}
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Prüfung starten</span>
              </button>
            </div>
            
            {/* Buy Course Button for Demo */}
            {isDemo && !hasAccess && (
              <div className="mt-4">
                <button
                  onClick={() => setShowPayment(true)}
                  className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0l-2.5-5M17 18l2.5-5" />
                  </svg>
                  <span>Vollkurs kaufen</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative flex flex-col min-h-0">
          {/* Close button for course overlay */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Current Lecture - Non-scrollable container */}
          <div className="flex-1 flex flex-col min-h-0">
            <CurrentLectureComponent 
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <div className="bg-gray-100 border-t border-gray-200 px-8 py-4 flex-shrink-0">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{currentLecture} | 2025 Wettbergsmayr GbR | Theresienstr. 128, 80333 München | support@standaufsicht-zertifikat.de</span>
          <span>Vorbereitung Sachkundeprüfung § 34a GewO (IHK)</span>
        </div>
      </div>
    </div>
  )
} 