import { useState } from 'react'
import LegalPages from './LegalPages'

export default function Footer() {
    const [showLegalPage, setShowLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | 'widerruf' | null>(null)

    const handleLegalPageClick = (page: 'impressum' | 'datenschutz' | 'agb' | 'widerruf') => {
        setShowLegalPage(page)
    }

    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Company Info - Middle Left */}
                        <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">
                            IHK § 34a Akademie
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Ihre professionelle Vorbereitung auf die IHK-Sachkundeprüfung § 34a GewO. 
                            Mit über 2,500 erfolgreichen Absolventen und einer Bestehensquote von 90%.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            </a>
                        </div>
                        </div>

                        {/* Support - Right Side */}
                        <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                            <a href="#faq" className="text-gray-300 hover:text-white">
                                FAQ
                            </a>
                            </li>
                            <li>
                            <a href="#contact" className="text-gray-300 hover:text-white">
                                Kontakt
                            </a>
                            </li>
                            <li>
                            <a href="mailto:support@ihk-34a-akademie.de" className="text-gray-300 hover:text-white">
                                E-Mail Support
                            </a>
                            </li>
                            <li>
                            <span className="text-gray-300">
                                Tel: +49 (0) 30 1234 5678
                            </span>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="mt-8 pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                                <button
                                    onClick={() => handleLegalPageClick('impressum')}
                                    className="text-gray-900 hover:text-gray-700 text-sm bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
                                >
                                    Impressum
                                </button>
                                <button
                                    onClick={() => handleLegalPageClick('datenschutz')}
                                    className="text-gray-900 hover:text-gray-700 text-sm bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
                                >
                                    Datenschutzerklärung
                                </button>
                                <button
                                    onClick={() => handleLegalPageClick('agb')}
                                    className="text-gray-900 hover:text-gray-700 text-sm bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
                                >
                                    AGB
                                </button>
                                <button
                                    onClick={() => handleLegalPageClick('widerruf')}
                                    className="text-gray-900 hover:text-gray-700 text-sm bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
                                >
                                    Widerrufsrecht
                                </button>
                            </div>
                            <div className="text-sm text-gray-400">
                                © 2024 IHK § 34a Akademie. Alle Rechte vorbehalten.
                            </div>
                        </div>
                    </div>

                    {/* GDPR Notice */}
                    <div className="mt-4 text-xs text-gray-400">
                        <p>
                            Diese Website verwendet Cookies zur Verbesserung der Nutzererfahrung. 
                            Durch die weitere Nutzung stimmen Sie der Verwendung zu.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Legal Pages Modal */}
            {showLegalPage && (
                <LegalPages
                    page={showLegalPage}
                    onClose={() => setShowLegalPage(null)}
                />
            )}
        </>
    )
} 