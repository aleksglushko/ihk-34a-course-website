import { useState } from 'react'

interface LegalPagesProps {
  page: 'impressum' | 'datenschutz' | 'agb' | 'widerruf'
  onClose: () => void
}

export default function LegalPages({ page, onClose }: LegalPagesProps) {
  const [activeTab, setActiveTab] = useState(page)

  const getPageContent = () => {
    switch (activeTab) {
      case 'impressum':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Impressum</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Angaben gemäß § 5 TMG</h3>
                <div className="mt-2 text-gray-700">
                  <p>IHK § 34a Akademie</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Kontakt</h3>
                <div className="mt-2 text-gray-700">
                  <p>Telefon: +49 (0) 30 1234 5678</p>
                  <p>E-Mail: info@ihk-34a-akademie.de</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Umsatzsteuer-ID</h3>
                <div className="mt-2 text-gray-700">
                  <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                  <p>DE123456789</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <div className="mt-2 text-gray-700">
                  <p>Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'datenschutz':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Datenschutzerklärung</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">1. Datenschutz auf einen Blick</h3>
                <div className="mt-2 text-gray-700">
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">2. Allgemeine Hinweise und Pflichtinformationen</h3>
                <div className="mt-2 text-gray-700">
                  <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">3. Datenerfassung auf dieser Website</h3>
                <div className="mt-2 text-gray-700">
                  <p>Wir erheben und verwenden Ihre personenbezogenen Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">4. Zahlungsdienstleister</h3>
                <div className="mt-2 text-gray-700">
                  <p>Wir verwenden PayPal als Zahlungsdienstleister. Für die Zahlungsabwicklung gelten die Datenschutzbestimmungen von PayPal.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">5. Ihre Rechte</h3>
                <div className="mt-2 text-gray-700">
                  <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'agb':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">§ 1 Geltungsbereich</h3>
                <div className="mt-2 text-gray-700">
                  <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der IHK § 34a Akademie und ihren Kunden über die Bereitstellung von Online-Kursen.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">§ 2 Vertragsschluss</h3>
                <div className="mt-2 text-gray-700">
                  <p>Mit der Bestellung eines Kurses geben Sie ein verbindliches Angebot zum Abschluss eines Vertrages ab. Der Vertrag kommt mit der Bestätigung der Zahlung zustande.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">§ 3 Leistungsumfang</h3>
                <div className="mt-2 text-gray-700">
                  <p>Der Kurs umfasst alle in der Produktbeschreibung aufgeführten Inhalte und Leistungen. Sie erhalten lebenslangen Zugang zu den Kursinhalten.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">§ 4 Preise und Zahlungsbedingungen</h3>
                <div className="mt-2 text-gray-700">
                  <p>Die angegebenen Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer. Die Zahlung erfolgt über PayPal.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">§ 5 Widerrufsrecht</h3>
                <div className="mt-2 text-gray-700">
                  <p>Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Details finden Sie in der Widerrufsbelehrung.</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'widerruf':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Widerrufsbelehrung</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Widerrufsrecht</h3>
                <div className="mt-2 text-gray-700">
                  <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                  <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Ausübung des Widerrufsrechts</h3>
                <div className="mt-2 text-gray-700">
                  <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
                  <p>Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Folgen des Widerrufes</h3>
                <div className="mt-2 text-gray-700">
                  <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen zurückzuzahlen.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">Kontakt für Widerruf</h3>
                <div className="mt-2 text-gray-700">
                  <p>IHK § 34a Akademie</p>
                  <p>E-Mail: widerruf@ihk-34a-akademie.de</p>
                  <p>Telefon: +49 (0) 30 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('impressum')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'impressum'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Impressum
            </button>
            <button
              onClick={() => setActiveTab('datenschutz')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'datenschutz'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Datenschutz
            </button>
            <button
              onClick={() => setActiveTab('agb')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'agb'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              AGB
            </button>
            <button
              onClick={() => setActiveTab('widerruf')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'widerruf'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Widerruf
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Schließen</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          {getPageContent()}
        </div>
      </div>
    </div>
  )
} 