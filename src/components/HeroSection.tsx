import heroBackground from '/heroBackground.png'

interface HeroSectionProps {
    onGetStarted: () => void
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
    // Debug: log the image path to console
    console.log('Hero background image path:', heroBackground)
    
    return (
        <section 
            className="relative text-white hero-section"
            style={{ 
                backgroundImage: `url(/heroBackground.png)`, 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#2e3033' // fallback color
            }}
        >
            {/* Light overlay to darken the background image */}
            <div className="absolute inset-0"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        IHK-Sachkundeprüfung § 34a GewO
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        Beste Vorbereitung auf die IHK-Sachkundeprüfung nach § 34a GewO
                    </p>
                    <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
                        Mit unserem umfassenden Online-Kurs bereiten Sie sich optimal auf die 
                        Sachkundeprüfung vor. Strukturiert, praxisnah und mit 90% Bestehensquote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onGetStarted}
                            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
                        >
                            Jetzt Kurs starten
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
} 