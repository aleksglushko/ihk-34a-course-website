import { useState } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function DemoQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const questions: Question[] = [
    {
      id: 1,
      question: "Welche Rechtsgrundlage regelt die Sachkundeprüfung für Sicherheitsdienste?",
      options: [
        "§ 34a der Gewerbeordnung (GewO)",
        "§ 32 der Strafprozessordnung (StPO)",
        "§ 127 des Bürgerlichen Gesetzbuches (BGB)",
        "§ 15 des Waffengesetzes (WaffG)"
      ],
      correctAnswer: 0,
      explanation: "§ 34a der Gewerbeordnung (GewO) regelt die Sachkundeprüfung für Sicherheitsdienste. Diese Vorschrift legt fest, wer eine Sachkundeprüfung ablegen muss und welche Anforderungen dabei zu erfüllen sind."
    },
    {
      id: 2,
      question: "Was ist ein Jedermannsrecht?",
      options: [
        "Ein Recht, das nur Sicherheitspersonal zusteht",
        "Ein Recht, das jedem Bürger zusteht",
        "Ein Recht, das nur Polizeibeamten zusteht",
        "Ein Recht, das nur Hausbesitzern zusteht"
      ],
      correctAnswer: 1,
      explanation: "Ein Jedermannsrecht ist ein Recht, das jedem Bürger zusteht, nicht nur staatlichen Organen. Beispiele sind das Recht zur vorläufigen Festnahme (§ 127 StPO) oder das Notwehrrecht (§ 32 StGB)."
    },
    {
      id: 3,
      question: "Wann liegt Notwehr vor?",
      options: [
        "Bei jedem Angriff auf eine andere Person",
        "Bei einem gegenwärtigen rechtswidrigen Angriff",
        "Nur bei Angriffen mit Waffen",
        "Nur bei Angriffen auf Eigentum"
      ],
      correctAnswer: 1,
      explanation: "Notwehr liegt vor bei einem gegenwärtigen rechtswidrigen Angriff auf sich oder einen anderen. Der Angriff muss unmittelbar bevorstehen oder bereits begonnen haben und rechtswidrig sein."
    }
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCompleted(false)
    setScore(0)
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (isCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz abgeschlossen!</h2>
          <div className="mb-6">
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
              {score}/{questions.length}
            </div>
            <div className={`text-xl font-semibold ${getScoreColor(percentage)}`}>
              {percentage}% richtig
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 mb-2">
              {percentage >= 80 
                ? "Sehr gut! Sie haben ein solides Grundverständnis." 
                : percentage >= 60
                ? "Gut! Mit dem Vollkurs werden Sie noch besser."
                : "Der Vollkurs wird Ihnen helfen, Ihr Wissen zu vertiefen."}
            </p>
            <p className="text-blue-700 text-sm">
              Dies war nur ein kleiner Vorgeschmack. Der vollständige Kurs enthält über 200 Fragen mit ausführlichen Erklärungen.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Erneut versuchen
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Vollkurs kaufen
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Demo-Quiz</h2>
          <span className="text-sm text-gray-500">
            Frage {currentQuestion + 1} von {questions.length}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {questions[currentQuestion].question}
        </h3>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium text-gray-700">
                {String.fromCharCode(65 + index)}. {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="mb-6 p-4 rounded-lg bg-gray-50 border">
          <div className={`font-semibold mb-2 ${
            selectedAnswer === questions[currentQuestion].correctAnswer 
              ? 'text-green-600' 
              : 'text-red-600'
          }`}>
            {selectedAnswer === questions[currentQuestion].correctAnswer 
              ? '✓ Richtig!' 
              : '✗ Falsch!'}
          </div>
          <p className="text-gray-700 text-sm">
            <strong>Erklärung:</strong> {questions[currentQuestion].explanation}
          </p>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={handleRestart}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Neustart
        </button>
        
        {showResult ? (
          <button
            onClick={handleContinue}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Weiter' : 'Abschließen'}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedAnswer !== null
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Antworten
          </button>
        )}
      </div>
    </div>
  )
} 