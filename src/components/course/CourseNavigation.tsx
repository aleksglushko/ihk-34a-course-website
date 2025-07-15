import { useState, useEffect, useCallback } from 'react'
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
import CourseLoginAndRegistrationForm from '../CourseLoginAndRegistrationForm'

interface CourseNavigationProps {
    onClose?: () => void
    isDemo?: boolean
}

export default function CourseNavigation({ onClose, isDemo = false }: CourseNavigationProps) {
    const [currentLecture, setCurrentLecture] = useState(1)
    const [showExam, setShowExam] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [viewedPages, setViewedPages] = useState<Set<number>>(() => {
        const saved = localStorage.getItem('viewedPages')
        return saved ? new Set(JSON.parse(saved)) : new Set()
    })
    const { isAuthenticated } = useAuth()
    
    // Mark current page as viewed and save to localStorage
    const markPageAsViewed = useCallback((pageId: number) => {
        setViewedPages(prev => {
          const next = new Set(prev)
          next.add(pageId)
          localStorage.setItem('viewedPages', JSON.stringify([...next]))
          return next
        })
      }, []) 
      

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

    // Mark current page as viewed when it changes
    useEffect(() => {
        markPageAsViewed(currentLecture)
    }, [currentLecture, markPageAsViewed])

    const handleNext = () => {
        const maxLecture = (isDemo && !isAuthenticated) ? 2 : lectures.length
        if (currentLecture < maxLecture) {
            setCurrentLecture(currentLecture + 1)
        } 
        else if (isDemo && !isAuthenticated && currentLecture >= 2) {
            // User trying to go beyond demo content - show login form
            setShowLoginForm(true)
        }
    }

    const handlePrevious = () => {
        if (currentLecture > 1) {
            setCurrentLecture(currentLecture - 1)
        }
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
            <PaymentSection onClose={() => setShowPayment(false)} />
        )
    }

    if (showLoginForm) {
        return <CourseLoginAndRegistrationForm onClose={() => setShowLoginForm(false)} />
    }

    const currentLectureData = lectures.find(lecture => lecture.id === currentLecture)
    const CurrentLectureComponent = currentLectureData?.component

    if (!CurrentLectureComponent) { return <div>Lecture not found</div>}

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            {/* Mobile Header */}
            <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
                <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="p-2 rounded-md hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h3 className="text-lg font-bold text-gray-800">Kurs Navigation</h3>
                {!isAuthenticated ? (
                    <button
                        onClick={() => setShowLoginForm(true)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                        Anmelden
                    </button>
                ) : (
                    <button
                        onClick={() => setShowExam(true)}
                        className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                        Prüfung
                    </button>
                )}
            </div>

            <div className="flex flex-1 min-h-0 overflow-hidden">
                {/* Mobile Overlay */}
                {showMobileMenu && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                        onClick={() => setShowMobileMenu(false)}
                    />
                )}
                
                {/* Left Sidebar Navigation */}
                {/* <div className={`${showMobileMenu ? 'block' : 'hidden'} md:block w-full md:w-80 bg-white border-r border-gray-200 flex-shrink-0 absolute md:relative z-40 h-full`}> */}
                <div className={`${showMobileMenu ? 'block' : 'hidden'} 
                        md:block 
                        w-full md:w-80 
                        bg-white border-r border-gray-200 
                        absolute md:relative z-40 
                        h-full 
                        flex-shrink-0 
                        flex flex-col min-h-0 overflow-hidden`}>
                    {/* Sidebar Header - Fixed - Hidden on mobile */}
                    <div className="hidden md:block border-b border-gray-200 px-8 py-4 h-16">
                        <div className="flex justify-between items-center">
                            <h3 className="text-l font-bold text-gray-800">Kurs Navigation</h3>
                            
                            {/* Action Button - Aligned with navigation title */}
                            {!isAuthenticated ? (
                                <button
                                    onClick={() => setShowLoginForm(true)}
                                    className="w-28 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg ml-1"
                                >
                                    <span>Anmelden</span>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowExam(true)}
                                    className="w-28 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-lg ml-1"
                                >
                                    <span>Prüfung</span>
                                </button>
                            )}
                        </div>
                    </div>
                
                    {/* Mobile Close Button */}
                    <div className="md:hidden flex justify-end p-4 h-16">
                        <button
                            onClick={() => setShowMobileMenu(false)}
                            className="p-2 rounded-full hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                
                    {/* Navigation Content - Scrollable */}
                    <div className="absolute top-16 bottom-0 left-0 right-0 overflow-y-auto p-4 space-y-1">
                        {lectures.map((lecture) => {
                            const isRestricted = isDemo && !isAuthenticated && lecture.id > 2
                            const isActive = currentLecture === lecture.id
                            const isViewed = viewedPages.has(lecture.id)
                            
                            return (
                                <button
                                    key={lecture.id}
                                    onClick={() => {
                                        if (isRestricted) {
                                            setShowLoginForm(true)
                                            return
                                        }
                                        setCurrentLecture(lecture.id)
                                        setShowMobileMenu(false)
                                    }}
                                    disabled={isRestricted}
                                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                                        isRestricted
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : isActive
                                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="relative">
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                                                isActive
                                                    ? 'bg-blue-500 text-white'
                                                    : isViewed
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-400 text-white'
                                            }`}>
                                                {lecture.id}
                                            </span>
                                            {/* Blue dot for unread pages */}
                                            {!isViewed && (
                                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></span>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">{lecture.title}</div>
                                            <div className="text-xs opacity-75">{lecture.shortDesc}</div>
                                        </div>
                                        {isRestricted && (
                                            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 relative flex flex-col min-h-0 overflow-hidden">
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

                    {/* Current Lecture - Scrollable container */}
                    <div className="flex-1 overflow-y-auto min-h-0">
                        <CurrentLectureComponent 
                            onNext={handleNext}
                            onPrevious={handlePrevious}
                        />
                    </div>
                </div>
            </div>

            {/* Footer - Fixed at bottom */}
            <div className="bg-gray-100 border-t border-gray-200 px-4 md:px-8 py-3 md:py-4 flex-shrink-0">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-xs text-gray-500 space-y-2 md:space-y-0">
                    <span className="text-center md:text-left">
                        Lektion {currentLecture} | 2025 Wettbergsmayr GbR | 
                        <span className="hidden md:inline"> Theresienstr. 128, 80333 München | support@standaufsicht-zertifikat.de</span>
                    </span>
                    <span className="text-center md:text-right">Vorbereitung Sachkundeprüfung § 34a GewO (IHK)</span>
                </div>
            </div>
        </div>
    )
} 