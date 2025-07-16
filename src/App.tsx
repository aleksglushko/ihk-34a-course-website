import { useState } from 'react'
import { AuthProvider } from './contexts/AuthProvider'
import { useAuth } from './hooks/useAuth'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CourseDemo from './components/CourseDemo'
import CourseLoginAndRegistrationForm from './components/CourseLoginAndRegistrationForm'
import { CourseNavigation } from './components/course'
import QAPage from './components/QAPage'
import BenefitsSection from './components/BenefitsSection'
import CurriculumSection from './components/CurriculumSection'
import Footer from './components/Footer'

function AppContent() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false)
    const [showCourse, setShowCourse] = useState(false)
    const { user } = useAuth()

    const handleGetStarted = () => {
        // If user is logged in, show only the course page
        if (user) setShowCourse(true)

        // If user is not logged in, show only login form
        else setShowRegistrationForm(true)
    }

    return (
        <div>
            <Header onKursStarten={() => setShowCourse(true)} />
            <HeroSection onGetStarted={handleGetStarted} />
            <BenefitsSection />
            <CurriculumSection />
            <CourseDemo />
            <QAPage />

            {/* Show course page for logged-in users */}
            {showCourse && <CourseNavigation onClose={() => setShowCourse(false)} isDemo={false} /> }
            
            {/* Show registration/login form */}
            {showRegistrationForm && (
                <CourseLoginAndRegistrationForm 
                    onClose={() => setShowRegistrationForm(false)} 
                    onSuccess={() => setShowCourse(true)}
                />
            )}
            <Footer />
        </div>
    )
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    )
}

export default App