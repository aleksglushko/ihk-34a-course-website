import logoImage from '/wettKampfLogo.png'

interface HeaderProps {
    onKursStarten: () => void
}

export default function Header({ onKursStarten }: HeaderProps) {
    const scrollToFAQ = () => {
        const faqSection = document.getElementById('faq-section')
        if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToFooter = () => {
        const footerSection = document.getElementById('footer-section')
        if (footerSection) footerSection.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex items-left mt-2">
                        <img
                            src={logoImage}
                            alt="WettKampf Logo"
                            className="h-18 w-auto"
                        />
                    </div>

                    {/* Navigation Buttons - moved to right corner */}
                    <nav className="flex items-center space-x-2">
                        <button
                            onClick={onKursStarten}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Kurs-Vorschau starten
                        </button>

                        <span className="text-gray-400">|</span>
                        <button 
                            onClick={scrollToFAQ}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            FAQ
                        </button>

                        <span className="text-gray-400">|</span>
                        <button 
                            onClick={scrollToFooter}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Kontakt
                        </button>
                    </nav>
                </div>
        </div>
        
        {/* Horizontal separator line */}
        <div className="border-b border-gray-200"></div>
        </header>
    )
} 