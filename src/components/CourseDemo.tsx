import { useState } from 'react'
import { CourseNavigation } from './course'

export default function CourseDemo() {
  const [showCourse, setShowCourse] = useState(false)

  if (showCourse) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <CourseNavigation onClose={() => setShowCourse(false)} />
      </div>
    )
  }

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Kurs-Inhalte Vorschau
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Erlebe unsere professionelle Kursstruktur mit interaktiven Lektionen, 
          die dich optimal auf die IHK § 34a Prüfung vorbereiten.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-green-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strukturierte Lektionen</h3>
            <p className="text-gray-600">
              Präsentationsstil mit klarer Navigation, Icons und übersichtlichen Inhalten
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Praxisnahe Inhalte</h3>
            <p className="text-gray-600">
              Alle prüfungsrelevanten Themen mit Beispielen und Erklärungen
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Kurs-Übersicht (28 Lektionen)</h3>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 mb-3">Grundlagen</h4>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">1</span>
                <span className="text-gray-700 text-sm">Einführung</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">2</span>
                <span className="text-gray-700 text-sm">Warum eine Schulung?</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">3</span>
                <span className="text-gray-700 text-sm">Sicherheitsgewerbe</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">4</span>
                <span className="text-gray-700 text-sm">Prüfungsüberblick</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">5</span>
                <span className="text-gray-700 text-sm">Rechtliche Grundlagen</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">6</span>
                <span className="text-gray-700 text-sm">Rechtliche Pflichten</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 mb-3">Verhalten & Kommunikation</h4>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">7</span>
                <span className="text-gray-700 text-sm">Datenschutz & Notwehr</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">8</span>
                <span className="text-gray-700 text-sm">Deeskalation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">9</span>
                <span className="text-gray-700 text-sm">Notfälle & Bedrohung</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">10</span>
                <span className="text-gray-700 text-sm">Umgang mit Dritten</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">11</span>
                <span className="text-gray-700 text-sm">Gefahrensituationen</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">12</span>
                <span className="text-gray-700 text-sm">Erste Hilfe</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 mb-3">Praxis & Einsatz</h4>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">13</span>
                <span className="text-gray-700 text-sm">Bombendrohung</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">14</span>
                <span className="text-gray-700 text-sm">Kontrollgänge</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">15</span>
                <span className="text-gray-700 text-sm">Zugangskontrolle</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">16</span>
                <span className="text-gray-700 text-sm">Veranstaltungsschutz</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">17</span>
                <span className="text-gray-700 text-sm">Rechte & Pflichten</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">18</span>
                <span className="text-gray-700 text-sm">Vorgesetzte</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">19</span>
                <span className="text-gray-700 text-sm">Mitarbeiter Rechte</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 mb-3">Prüfung & Karriere</h4>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">20</span>
                <span className="text-gray-700 text-sm">Prüfung IHK</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">21</span>
                <span className="text-gray-700 text-sm">Prüfungsfragen</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">22</span>
                <span className="text-gray-700 text-sm">Prüfungsverhalten</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">23</span>
                <span className="text-gray-700 text-sm">Zertifikat</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">24</span>
                <span className="text-gray-700 text-sm">Jobchancen</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">25</span>
                <span className="text-gray-700 text-sm">Aufstieg</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">26</span>
                <span className="text-gray-700 text-sm">FAQ</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">27</span>
                <span className="text-gray-700 text-sm">Prüfungstipps</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">28</span>
                <span className="text-gray-700 text-sm">Motivation</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowCourse(true)}
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
        >
          Kurs-Vorschau starten
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          Klicke hier, um die ersten Lektionen zu erkunden
        </p>
      </div>
    </div>
  )
} 