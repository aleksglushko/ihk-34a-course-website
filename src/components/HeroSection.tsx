interface HeroSectionProps {
  onGetStarted: () => void
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IHK-Sachkundeprüfung § 34a GewO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Beste Vorbereitung auf die IHK-Sachkundeprüfung nach § 34a GewO
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Mit unserem umfassenden Online-Kurs bereiten Sie sich optimal auf die 
            Sachkundeprüfung vor. Strukturiert, praxisnah und mit 90% Bestehensquote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors"
            >
              Jetzt Kurs starten
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Kostenlose Probelektion
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 