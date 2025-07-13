import { useState, useEffect } from 'react'
import { questions, shuffleQuestions, type Question } from '../data/questions'

interface ExamComponentProps {
  onClose: () => void
}

interface ExamResult {
  correct: number
  total: number
  percentage: number
}

export default function ExamComponent({ onClose }: ExamComponentProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isExamComplete, setIsExamComplete] = useState(false)
  const [examResult, setExamResult] = useState<ExamResult | null>(null)

  useEffect(() => {
    const shuffled = shuffleQuestions(questions)
    setShuffledQuestions(shuffled)
  }, [])

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(false)
    setShowHint(false)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    setShowResult(true)
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1)
    } else {
      setShowHint(true)
    }
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      const result: ExamResult = {
        correct: correctAnswers,
        total: shuffledQuestions.length,
        percentage: Math.round((correctAnswers / shuffledQuestions.length) * 100)
      }
      setExamResult(result)
      setIsExamComplete(true)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer('')
      setShowResult(false)
      setShowHint(false)
    }
  }

  const handleRestartExam = () => {
    const shuffled = shuffleQuestions(questions)
    setShuffledQuestions(shuffled)
    setCurrentQuestionIndex(0)
    setSelectedAnswer('')
    setShowResult(false)
    setShowHint(false)
    setCorrectAnswers(0)
    setIsExamComplete(false)
    setExamResult(null)
  }

  const getAnswerOptionClass = (_option: string, index: number) => {
    const letter = String.fromCharCode(65 + index) // A, B, C, D
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:bg-gray-50"
    
    if (!showResult) {
      return selectedAnswer === letter 
        ? `${baseClass} border-blue-500 bg-blue-50`
        : `${baseClass} border-gray-200`
    }
    
    if (letter === currentQuestion.correctAnswer) {
      return `${baseClass} border-green-500 bg-green-50 text-green-800`
    }
    
    if (selectedAnswer === letter && letter !== currentQuestion.correctAnswer) {
      return `${baseClass} border-red-500 bg-red-50 text-red-800`
    }
    
    return `${baseClass} border-gray-200 opacity-50`
  }

  const getResultMessage = () => {
    if (!examResult) return ''
    
    if (examResult.percentage >= 80) {
      return 'Ausgezeichnet! Sie haben die Prüfung bestanden.'
    } else if (examResult.percentage >= 60) {
      return 'Gut! Mit etwas mehr Übung schaffen Sie auch die 80%.'
    } else if (examResult.percentage >= 40) {
      return 'Das war ein guter Anfang. Wiederholen Sie die Lektionen und versuchen Sie es erneut.'
    } else {
      return 'Bitte wiederholen Sie die Kursinhalte gründlich und versuchen Sie es erneut.'
    }
  }

  const getResultColor = () => {
    if (!examResult) return 'text-gray-800'
    
    if (examResult.percentage >= 80) return 'text-green-600'
    if (examResult.percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (shuffledQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Fragen werden geladen...</p>
        </div>
      </div>
    )
  }

  if (isExamComplete && examResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
          <div className="text-center mb-6">
            <div className={`text-6xl font-bold mb-4 ${getResultColor()}`}>
              {examResult.percentage}%
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Prüfung abgeschlossen!
            </h2>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Richtige Antworten:</span>
              <span className="font-semibold text-green-600">{examResult.correct}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Falsche Antworten:</span>
              <span className="font-semibold text-red-600">{examResult.total - examResult.correct}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Gesamt:</span>
              <span className="font-semibold">{examResult.total}</span>
            </div>
          </div>
          
          <div className={`text-center mb-6 p-4 rounded-lg ${examResult.percentage >= 80 ? 'bg-green-50' : 'bg-yellow-50'}`}>
            <p className={`font-medium ${getResultColor()}`}>
              {getResultMessage()}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={handleRestartExam}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Erneut versuchen
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Beenden
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Prüfungssimulation</h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Frage {currentQuestionIndex + 1} von {shuffledQuestions.length}</span>
              <span>Richtige Antworten: {correctAnswers}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index)
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(letter)}
                    disabled={showResult}
                    className={getAnswerOptionClass(option, index)}
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-3">{letter})</span>
                      <span>{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {showHint && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-yellow-800 mb-1">Hinweis:</p>
                  <p className="text-yellow-700 text-sm">{currentQuestion.hint}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t">
            <div className="text-sm text-gray-500">
              {showResult ? (
                selectedAnswer === currentQuestion.correctAnswer ? (
                  <span className="text-green-600 font-medium">✓ Richtig!</span>
                ) : (
                  <span className="text-red-600 font-medium">✗ Falsch</span>
                )
              ) : (
                'Wählen Sie eine Antwort aus'
              )}
            </div>
            
            <div className="flex space-x-4">
              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    selectedAnswer
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Antworten
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  {isLastQuestion ? 'Ergebnis anzeigen' : 'Nächste Frage'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 