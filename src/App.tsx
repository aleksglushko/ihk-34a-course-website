import { useState } from 'react'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import CurriculumSection from './components/CurriculumSection'
import CourseDemo from './components/CourseDemo'
import TestimonialsSection from './components/TestimonialsSection'
import DemoQuiz from './components/DemoQuiz'
import PaymentSection from './components/PaymentSection'
import Footer from './components/Footer'

function App() {
    const [showPayment, setShowPayment] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection onGetStarted={() => setShowPayment(true)} />
            <BenefitsSection />
            <CurriculumSection />
            <CourseDemo />
            
            {/* Demo Quiz Section */}
            <section id="demo" className="py-20 bg-white">
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
            
            <TestimonialsSection />
                {showPayment && <PaymentSection onClose={() => setShowPayment(false)} />}
            <Footer />
        </div>
    )
}

export default App
