import { useState } from 'react'

interface ContentSection {
  icon: string
  title: string
  items: string[]
  type?: 'default' | 'success' | 'warning' | 'info'
}

interface LectureTemplateProps {
  chapterNumber: string
  chapterTitle: string
  subtitle?: string
  description?: string
  content: ContentSection[]
  currentPage: number
  totalPages: number
  onNext?: () => void
  onPrevious?: () => void
}

export default function LectureTemplate({
  chapterNumber,
  chapterTitle,
  subtitle,
  description,
  content,
  currentPage,
  totalPages,
  onNext = () => {},
  onPrevious = () => {}
}: LectureTemplateProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  const getSectionClasses = (type: string = 'default') => {
    const baseClasses = "mb-6 p-4 rounded-lg border-l-4"
    switch (type) {
      case 'success':
        return `${baseClasses} bg-green-50 border-green-500`
      case 'warning':
        return `${baseClasses} bg-yellow-50 border-yellow-500`
      case 'info':
        return `${baseClasses} bg-blue-50 border-blue-500`
      default:
        return `${baseClasses} bg-gray-50 border-gray-400`
    }
  }

  const getIconClasses = (type: string = 'default') => {
    switch (type) {
      case 'success':
        return 'text-green-600'
      case 'warning':
        return 'text-yellow-600'
      case 'info':
        return 'text-blue-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex-shrink-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-green-700">Wettbergsmayr</h1>
          
          {/* Only show subtitle, removed chapter navigation */}
          {subtitle && (
            <span className="text-sm text-gray-500">{subtitle}</span>
          )}
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8 py-8">
          {/* Chapter Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {chapterNumber} | {chapterTitle}
            </h2>
            {description && (
              <p className="text-base text-gray-600 leading-relaxed max-w-4xl">
                {description}
              </p>
            )}
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {content.map((section, index) => (
              <div
                key={index}
                className={getSectionClasses(section.type)}
                onClick={() => setActiveSection(activeSection === index ? null : index)}
              >
                <div className="flex items-start space-x-4 cursor-pointer">
                  <span className={`text-xl ${getIconClasses(section.type)}`}>
                    {section.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-gray-600 mt-1 text-sm">❖</span>
                          <span className="text-gray-700 leading-relaxed text-sm">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
            <button
              onClick={onPrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              ← Zurück
            </button>
            
            <span className="text-gray-500 text-sm">
              Seite {currentPage} von {totalPages}
            </span>
            
            <button
              onClick={onNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 