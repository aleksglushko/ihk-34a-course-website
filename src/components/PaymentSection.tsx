import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

interface PaymentSectionProps {
  onClose: () => void
}

export default function PaymentSection({ onClose }: PaymentSectionProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [showPayPal, setShowPayPal] = useState(false)

  const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'sb' // Default to sandbox if not set
  const COURSE_PRICE = 97

  const handleStartPayment = () => {
    if (!userEmail || !userName) {
      alert('Bitte geben Sie Ihre E-Mail-Adresse und Ihren Namen ein.')
      return
    }
    setShowPayPal(true)
  }

  const handlePayPalSuccess = async (details: Record<string, unknown>) => {
    setIsProcessing(true)
    
    try {
      // Here you would normally:
      // 1. Create user in Convex
      // 2. Create payment record
      // 3. Send confirmation email
      // 4. Grant course access
      
      console.log('Payment successful:', details)
      
      // Simulate backend processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert(`Zahlung erfolgreich! Willkommen ${userName}! Sie erhalten eine E-Mail mit den Zugangsdaten an ${userEmail}.`)
      onClose()
    } catch (error) {
      console.error('Payment processing error:', error)
      alert('Es gab ein Problem bei der Zahlungsverarbeitung. Bitte kontaktieren Sie den Support.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePayPalError = (error: Record<string, unknown>) => {
    console.error('PayPal error:', error)
    alert('PayPal-Fehler: Bitte versuchen Sie es erneut.')
    setIsProcessing(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Kurs kaufen</h2>
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

        <div className="mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              IHK-Sachkundeprüfung § 34a GewO - Komplettkurs
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• 30 Stunden Lernmaterial</li>
              <li>• 200+ Übungsfragen</li>
              <li>• Lebenslanger Zugang</li>
              <li>• Prüfungssimulation</li>
              <li>• Zertifikat bei Abschluss</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Kurspreis:</span>
            <span className="text-gray-500 line-through">€149</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Rabatt:</span>
            <span className="text-green-600">-€52</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Gesamtpreis:</span>
              <span className="text-2xl font-bold text-blue-600">€{COURSE_PRICE}</span>
            </div>
          </div>
        </div>

        {!showPayPal ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Vollständiger Name
              </label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Max Mustermann"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse
              </label>
              <input
                type="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="max@beispiel.de"
                required
              />
            </div>

            <button
              onClick={handleStartPayment}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Weiter zur Zahlung
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Name:</strong> {userName}
              </p>
              <p className="text-sm text-gray-700">
                <strong>E-Mail:</strong> {userEmail}
              </p>
            </div>
            
            <PayPalScriptProvider
              options={{
                clientId: PAYPAL_CLIENT_ID,
                currency: 'EUR',
                intent: 'capture',
                locale: 'de_DE'
              }}
            >
              <PayPalButtons
                style={{ layout: 'vertical' }}
                disabled={isProcessing}
                createOrder={(_data, actions) => {
                  return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                      {
                        amount: {
                          currency_code: 'EUR',
                          value: COURSE_PRICE.toString()
                        },
                        description: 'IHK-Sachkundeprüfung § 34a GewO - Komplettkurs'
                      }
                    ]
                  })
                }}
                onApprove={(_data, actions) => {
                  return actions.order!.capture().then(handlePayPalSuccess)
                }}
                onError={handlePayPalError}
              />
            </PayPalScriptProvider>
            
            <button
              onClick={() => setShowPayPal(false)}
              className="w-full text-gray-600 hover:text-gray-800 text-sm"
            >
              ← Zurück zu den Angaben
            </button>
          </div>
        )}

        {isProcessing && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
              <span className="text-sm text-gray-600">Zahlung wird verarbeitet...</span>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>🔒 SSL-verschlüsselt</span>
            <span>💳 Sicher bezahlen</span>
            <span>📧 Sofortiger Zugang</span>
          </div>
        </div>
      </div>
    </div>
  )
} 