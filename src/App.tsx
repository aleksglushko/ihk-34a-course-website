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
        if (user) {
            // If user is logged in, show only the course page
            setShowCourse(true)
        } else {
            // If user is not logged in, show only login form
            setShowRegistrationForm(true)
        }
    }

    return (
        <div className="h-screen bg-gray-50">
            <Header onKursStarten={handleGetStarted} />
            <HeroSection onGetStarted={handleGetStarted} />
            <BenefitsSection />
            <CurriculumSection />
            <CourseDemo />
            
            {/* Q&A Section */}
            <QAPage />
            
            {/* Demo Quiz Section */}
            {/* <section id="demo" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Testen Sie Ihr Wissen
                        </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Probieren Sie unser Demo-Quiz und erhalten Sie einen Eindruck von den Prüfungsfragen. 
                            Der Vollkurs enthält über 200 Fragen mit ausführlichen Erklärungen.
                        </p>
                    </div>
                    <DemoQuiz />
                </div>
            </section>
            
            <TestimonialsSection /> */}
            
            {/* Show course page for logged-in users */}
            {showCourse && (
                // <div className="fixed inset-0 bg-white z-40 overflow-hidden">
                <div className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-white">
                    <CourseNavigation onClose={() => setShowCourse(false)} isDemo={false} />
                </div>
            )}
            
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