import { useState } from 'react'
import LegalPages from './LegalPages'

export default function Footer() {
    const [showLegalPage, setShowLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | 'widerruf' | null>(null)

    const handleLegalPageClick = (page: 'impressum' | 'datenschutz' | 'agb' | 'widerruf') => {
        setShowLegalPage(page)
    }

    return (
        <>
            <footer id="footer-section" className="bg-gray-900 text-white py-12">
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
                        </div>

                        {/* Support - Right Side */}
                        <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                            <a href="#contact" className="text-gray-300 hover:text-white">
                                Kontakt
                            </a>
                            </li>
                            <li>
                            <a href="mailto:support@standaufsicht-zertifikat.de" className="text-gray-300 hover:text-white">
                                support@standaufsicht-zertifikat.de
                            </a>
                            </li>
                            <li>
                            <div className="text-gray-300">
                                <div className="font-semibold mb-1">Wettbergsmayr GbR</div>
                                <div>Theresienstr. 128</div>
                                <div>D-80333 München</div>
                                <div>Tel: +49157-75441055</div>
                            </div>
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
                                © 2025 IHK § 34a Akademie. Alle Rechte vorbehalten.
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