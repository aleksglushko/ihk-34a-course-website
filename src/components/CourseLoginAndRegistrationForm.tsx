import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../hooks/useAuth'

interface CourseLoginAndRegistrationFormProps {
    onClose: () => void
    onSuccess?: () => void
}

export default function CourseLoginAndRegistrationForm({ onClose, onSuccess }: CourseLoginAndRegistrationFormProps) {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
    const [isLoading, setIsLoading] = useState(false)
    
    // Auth functions
    const { login, register } = useAuth()
    
    // Refs for slider animation
    const tabContainerRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const loginTabRef = useRef<HTMLButtonElement>(null)
    const registerTabRef = useRef<HTMLButtonElement>(null)
    
    // Login form state
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    
    // Registration form state
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        surname: '',
        phone: '',
        address: '',
        promoCode: ''
    })

    // Price calculation based on promo code
    const calculatePrice = () => {
        const basePrice = 89.99
        if (registerData.promoCode.toUpperCase() === 'KOCH100') {
            return 0
        }
        return basePrice
    }

    const finalPrice = calculatePrice()
    const isFree = finalPrice === 0

    // Slider positioning effect
    useEffect(() => {
        const updateSliderPosition = () => {
            if (!sliderRef.current || !tabContainerRef.current) return
            
            const activeTabRef = activeTab === 'login' ? loginTabRef.current : registerTabRef.current
            if (!activeTabRef) return
            
            const containerRect = tabContainerRef.current.getBoundingClientRect()
            const tabRect = activeTabRef.getBoundingClientRect()
            
            const left = tabRect.left - containerRect.left
            const width = tabRect.width
            
            sliderRef.current.style.left = `${left}px`
            sliderRef.current.style.width = `${width}px`
        }
        
        // Initial positioning
        updateSliderPosition()
        
        // Update on resize
        window.addEventListener('resize', updateSliderPosition)
        return () => window.removeEventListener('resize', updateSliderPosition)
    }, [activeTab])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            const result = await login(loginData.email, loginData.password)
            
            alert(`Willkommen zurück, ${result.user.name}!`)
            onClose() // Close the modal
            onSuccess?.() // Navigate to course page
            
        } catch (error) {
            console.error('Login error:', error)
            alert('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleRegistration = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (registerData.password !== registerData.confirmPassword) {
            alert('Die Passwörter stimmen nicht überein!')
            return
        }
        
        setIsLoading(true)
        
        try {
            const result = await register({
                email: registerData.email,
                password: registerData.password,
                name: registerData.name,
                surname: registerData.surname,
                phone: registerData.phone,
                address: registerData.address,
                promoCode: registerData.promoCode,
            })
            
            if (isFree) {
                alert(`Kostenlose Registrierung erfolgreich! Willkommen ${result.user.name}, Sie haben sofortigen Zugang zum Kurs.`)
            } else {
                alert(`Registrierung erfolgreich! Willkommen ${result.user.name}. Ihr Kauf wird verarbeitet.`)
            }
            
            onClose() // Close the modal
            onSuccess?.() // Navigate to course page
            
        } catch (error) {
            console.error('Registration error:', error)
            const errorMessage = error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten'
            if (errorMessage.includes('already exists')) {
                alert('Ein Benutzer mit dieser E-Mail-Adresse existiert bereits. Bitte melden Sie sich an.')
            } else {
                alert('Registrierung fehlgeschlagen: ' + errorMessage)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-900">Kurs starten</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Tab Container */}
                <div ref={tabContainerRef} className="relative flex justify-center bg-white shadow-sm mb-6">
                    {/* Animated Slider */}
                    <div
                        ref={sliderRef}
                        className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out"
                        style={{ 
                            transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' 
                        }}
                    />
                    
                    {/* Tab Buttons */}
                    <button
                        ref={loginTabRef}
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 py-3 px-4 text-center font-medium transition-all duration-200 mr-0.5 ${
                            activeTab === 'login'
                                ? 'text-blue-600 bg-white shadow-sm'
                                : 'text-gray-700 hover:bg-gray-50 bg-white shadow-sm'
                        }`}
                    >
                        Anmelden
                    </button>
                    <button
                        ref={registerTabRef}
                        onClick={() => setActiveTab('register')}
                        className={`flex-1 py-3 px-4 text-center font-medium transition-all duration-200 ${
                            activeTab === 'register'
                                ? 'text-blue-600 bg-white shadow-sm'
                                : 'text-gray-700 hover:bg-gray-50 bg-white shadow-sm'
                        }`}
                    >
                        Kurs kaufen
                    </button>
                </div>

                {/* Forms */}
                <div className="px-6 pb-6">
                    {/* Login Form */}
                    <div className={`transition-all duration-300 ${activeTab === 'login' ? 'block' : 'hidden'}`}>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                                    E-Mail-Adresse
                                </label>
                                <input
                                    type="email"
                                    id="login-email"
                                    value={loginData.email}
                                    onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="max@beispiel.de"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Passwort
                                </label>
                                <input
                                    type="password"
                                    id="login-password"
                                    value={loginData.password}
                                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ihr Passwort"
                                    required
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? 'Anmeldung...' : 'Anmelden'}
                            </button>
                        </form>
                    </div>

                    {/* Registration Form */}
                    <div className={`transition-all duration-300 ${activeTab === 'register' ? 'block' : 'hidden'}`}>
                        <form onSubmit={handleRegistration} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Vorname
                                    </label>
                                    <input
                                        type="text"
                                        id="register-name"
                                        value={registerData.name}
                                        onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Max"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="register-surname" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nachname
                                    </label>
                                    <input
                                        type="text"
                                        id="register-surname"
                                        value={registerData.surname}
                                        onChange={(e) => setRegisterData(prev => ({ ...prev, surname: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Mustermann"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">
                                    E-Mail-Adresse
                                </label>
                                <input
                                    type="email"
                                    id="register-email"
                                    value={registerData.email}
                                    onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="max@beispiel.de"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="register-phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Telefonnummer
                                </label>
                                <input
                                    type="tel"
                                    id="register-phone"
                                    value={registerData.phone}
                                    onChange={(e) => setRegisterData(prev => ({ ...prev, phone: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="+49 123 456789"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="register-address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Adresse (optional)
                                </label>
                                <input
                                    type="text"
                                    id="register-address"
                                    value={registerData.address}
                                    onChange={(e) => setRegisterData(prev => ({ ...prev, address: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ihre Adresse"
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Passwort
                                    </label>
                                    <input
                                        type="password"
                                        id="register-password"
                                        value={registerData.password}
                                        onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Passwort"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Passwort bestätigen
                                    </label>
                                    <input
                                        type="password"
                                        id="register-confirm-password"
                                        value={registerData.confirmPassword}
                                        onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Passwort bestätigen"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="register-promo" className="block text-sm font-medium text-gray-700 mb-2">
                                    Promo Code (optional)
                                </label>
                                <input
                                    type="text"
                                    id="register-promo"
                                    value={registerData.promoCode}
                                    onChange={(e) => setRegisterData(prev => ({ ...prev, promoCode: e.target.value }))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="KOCH100 für kostenlosen Zugang"
                                />
                            </div>
                            
                            {/* Promo Code Success Banner */}
                            {registerData.promoCode.toUpperCase() === 'KOCH100' && (
                                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-green-800 font-medium">Promo Code angewendet!</span>
                                    </div>
                                    <p className="text-green-700 text-sm mt-1">
                                        Sie erhalten kostenlosen Zugang zum kompletten Kurs.
                                    </p>
                                </div>
                            )}
                            
                            {/* Price Display */}
                            <div className="bg-gray-50 rounded-md p-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Kurspreis:</span>
                                    <div className="text-right">
                                        {isFree ? (
                                            <div>
                                                <span className="text-gray-500 line-through text-sm">€89,99</span>
                                                <span className="text-green-600 font-bold text-lg ml-2">Kostenlos!</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-900 font-bold text-lg">€{finalPrice}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full text-white py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                                    isFree 
                                        ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' 
                                        : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                                }`}
                            >
                                {isLoading 
                                    ? 'Verarbeitung...' 
                                    : isFree 
                                        ? 'Kostenlos registrieren' 
                                        : 'Jetzt kaufen'
                                }
                            </button>
                            
                            <div className='mb-4'>
                                <p className="text-xs text-gray-500 text-center">
                                    Nach dem Kauf erhalten Sie sofortigen Zugang zum Kurs.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 