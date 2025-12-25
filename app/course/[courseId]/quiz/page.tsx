// "use client"
// import axios from "axios";
// import { useParams } from "next/navigation";
// import { use, useEffect, useState } from "react";
// import StepProgress from "../_components/StepProgress";
// import QuizCardItem from "./_components/QuizCardItem";

// const Quiz = () => {
//     const {courseId} = useParams();
//     const [loading, setLoading] = useState(true);
//     const [stepCount, setStepCount] = useState(0);
//     const [isCorrectAns, setIsCorrectAns] = useState(null);
//     const [correctAns, setCorrectAns] = useState();
//     const [quizQuestions, setQuizQuestions] = useState([]);
    
//     useEffect(() => {
//         GetQuiz();
//     }, [courseId]);

//     const GetQuiz = async () => {
//         try {
//             setLoading(true);
//             const result = await axios.post('/api/study-type', {
//                 courseId: courseId,
//                 studyType: 'Quiz'
//             });
            
//             console.log("Raw Quiz Data:", result.data);
            
//             // Handle different possible response structures
//             let quizData = [];
            
//             if (Array.isArray(result.data)) {
//                 quizData = result.data;
//             } else if (result.data && Array.isArray(result.data.question)) {
//                 quizData = result.data.question;
//             } else if (result.data && result.data.content && Array.isArray(result.data.content)) {
//                 quizData = result.data.content;
//             } else if (typeof result.data === 'string') {
//                 // If the data is a JSON string, parse it
//                 try {
//                     const parsedData = JSON.parse(result.data);
//                     quizData = Array.isArray(parsedData) ? parsedData : [];
//                 } catch (e) {
//                     console.error("Failed to parse quiz data:", e);
//                 }
//             }
            
//             console.log("Processed Quiz Questions:", quizData);
//             setQuizQuestions(quizData);
//         } catch (error) {
//             console.error("Error fetching quiz data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const checkAnswer = (userAnswer, currentQuestion) => {
//         if(userAnswer === currentQuestion.answer) {
//             setIsCorrectAns(true);
//             setCorrectAns(currentQuestion.answer);
//             return;
//         }
//         setIsCorrectAns(false);
//     }

//     useEffect(() => {
//         setCorrectAns(null);
//         setIsCorrectAns(null);
//     }, [stepCount])
    
//     return (
//         <div>
//             <h2 className="font-bold text-2xl text-center mb-4">Quiz</h2>
//             {loading ? (
//                 <div className="mt-4 text-center">Loading quiz questions...</div>
//             ) : quizQuestions.length > 0 ? (
//                 <StepProgress 
//                     data={quizQuestions} 
//                     stepCount={stepCount} 
//                     setStepCount={(value) => setStepCount(value)}
//                 />
//             ) : (
//                 <div className="mt-4 text-center">
//                     No quiz questions available. Please generate the quiz first.
//                 </div>
//             )}

//             <div>
//                 {/* {quizQuestions && quizQuestions.map((item,index) => ( */}
//                     <QuizCardItem quizQuestions={quizQuestions[stepCount]}
//                     userSelectedOption={(v) => checkAnswer(v,quizQuestions[stepCount])}
//                     />
//                 {/* ))} */}
//             </div>

//             {isCorrectAns === false && <div>
//                 <div className="border p-3 border-red-700 bg-red-200 rounded-xl">
//                     <h2 className="font-bold text-lg text-red-600">Incorrect</h2>
//                     <p className="text-red-600">Correct Answer is : {correctAns}</p>
//                 </div>
//             </div>}

//             {isCorrectAns === true && <div>
//                 <div className="border p-3 border-green-700 bg-green-200 rounded-xl">
//                     <h2 className="font-bold text-lg text-green-600">Correct</h2>
//                     <p className="text-green-600">Your answer is Correct</p>
//                 </div>
//             </div>}
//         </div>
//     );
// };

// export default Quiz;

"use client"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import StepProgress from "../_components/StepProgress"
import QuizCardItem from "./_components/QuizCardItem"
import {
  Brain,
  Sparkles,
  TrendingUp,
  CheckCircle,
  XCircle,
  RefreshCw,
  Target,
  Clock,
  Award,
  AlertCircle,
  BookOpen,
} from "lucide-react"

const Quiz = () => {
  const { courseId } = useParams()
  const [loading, setLoading] = useState(true)
  const [stepCount, setStepCount] = useState(0)
  const [isCorrectAns, setIsCorrectAns] = useState(null)
  const [correctAns, setCorrectAns] = useState()
  const [quizQuestions, setQuizQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  useEffect(() => {
    GetQuiz()
  }, [courseId])

  const GetQuiz = async () => {
    try {
      setLoading(true)
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "Quiz",
      })

      console.log("Raw Quiz Data:", result.data)

      // Handle different possible response structures
      let quizData = []

      if (Array.isArray(result.data)) {
        quizData = result.data
      } else if (result.data && Array.isArray(result.data.question)) {
        quizData = result.data.question
      } else if (result.data && result.data.content && Array.isArray(result.data.content)) {
        quizData = result.data.content
      } else if (typeof result.data === "string") {
        // If the data is a JSON string, parse it
        try {
          const parsedData = JSON.parse(result.data)
          quizData = Array.isArray(parsedData) ? parsedData : []
        } catch (e) {
          console.error("Failed to parse quiz data:", e)
        }
      }

      console.log("Processed Quiz Questions:", quizData)
      setQuizQuestions(quizData)
    } catch (error) {
      console.error("Error fetching quiz data:", error)
    } finally {
      setLoading(false)
    }
  }

  const checkAnswer = (userAnswer, currentQuestion) => {
    if (userAnswer === currentQuestion.answer) {
      setIsCorrectAns(true)
      setCorrectAns(currentQuestion.answer)
      setScore(score + 1)
    } else {
      setIsCorrectAns(false)
      setCorrectAns(currentQuestion.answer)
    }
    setAnsweredQuestions(answeredQuestions + 1)
  }

  useEffect(() => {
    setCorrectAns(null)
    setIsCorrectAns(null)
  }, [stepCount])

  const progressPercentage = quizQuestions.length > 0 ? ((stepCount + 1) / quizQuestions.length) * 100 : 0
  const scorePercentage = answeredQuestions > 0 ? (score / answeredQuestions) * 100 : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded-2xl w-1/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-2/3 mx-auto"></div>
              <div className="h-64 bg-gray-200 rounded-3xl w-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-20 px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg mb-8 relative overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none"></div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-green-800 bg-clip-text text-transparent">
                    Interactive Quiz
                  </h1>
                  <p className="text-gray-600">Test your knowledge and track your progress</p>
                </div>
              </div>

              <button
                onClick={GetQuiz}
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-green-50 hover:from-gray-100 hover:to-green-100 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh Quiz
              </button>
            </div>

            {/* Stats Section */}
            {quizQuestions.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{quizQuestions.length}</div>
                      <div className="text-xs text-gray-500">Total Questions</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{stepCount + 1}</div>
                      <div className="text-xs text-gray-500">Current Question</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Award className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {score}/{answeredQuestions}
                      </div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{Math.round(scorePercentage)}%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Section */}
            {quizQuestions.length > 0 && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Quiz Progress</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {stepCount + 1} / {quizQuestions.length}
                  </span>
                </div>
                <div className="relative">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-green-600" />
                <h3 className="text-sm font-semibold text-gray-900">How to Take the Quiz</h3>
              </div>
              <p className="text-sm text-gray-600">
                Read each question carefully and select the best answer. You'll get immediate feedback after each
                response. Use the navigation to move between questions.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Component */}
        {quizQuestions.length > 0 && (
          <div className="mb-8">
            <StepProgress data={quizQuestions} stepCount={stepCount} setStepCount={(value) => setStepCount(value)} />
          </div>
        )}

        {/* Quiz Content */}
        {quizQuestions.length > 0 ? (
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg relative overflow-hidden mb-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-blue-50/10 to-purple-50/20 pointer-events-none"></div>

            <div className="relative">
              {/* Question Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{stepCount + 1}</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Question {stepCount + 1}</h2>
                  <p className="text-sm text-gray-600">Choose the best answer</p>
                </div>
              </div>

              {/* Quiz Card */}
              <QuizCardItem
                quizQuestions={quizQuestions[stepCount]}
                userSelectedOption={(v) => checkAnswer(v, quizQuestions[stepCount])}
              />
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 border-2 border-gray-100 shadow-lg text-center relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-blue-50/20 to-purple-50/30 pointer-events-none"></div>

            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Quiz Questions Available</h3>
              <p className="text-gray-600 mb-6">
                Quiz questions will appear here once they are generated for this course.
              </p>
              <button
                onClick={GetQuiz}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                Generate Quiz
              </button>
            </div>
          </div>
        )}

        {/* Answer Feedback */}
        {isCorrectAns === false && (
          <div className="bg-white rounded-3xl p-6 border-2 border-red-200 shadow-lg relative overflow-hidden mb-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-red-50/50 pointer-events-none"></div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Incorrect Answer</h3>
                  <p className="text-red-600 leading-relaxed">
                    <span className="font-medium">Correct Answer:</span> {correctAns}
                  </p>
                  <div className="mt-4 p-3 bg-red-100 rounded-xl border border-red-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-red-700">
                        Don't worry! Learning from mistakes helps you remember better.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isCorrectAns === true && (
          <div className="bg-white rounded-3xl p-6 border-2 border-green-200 shadow-lg relative overflow-hidden mb-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-green-50/50 pointer-events-none"></div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Correct Answer! 🎉</h3>
                  <p className="text-green-600 leading-relaxed">
                    Great job! Your answer is correct. Keep up the excellent work!
                  </p>
                  <div className="mt-4 p-3 bg-green-100 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        You're building strong knowledge! Continue to the next question.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Stats Summary */}
        {quizQuestions.length > 0 && answeredQuestions > 0 && (
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Quiz Performance: {score} correct out of {answeredQuestions} answered
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">{Math.round(scorePercentage)}% accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Question {stepCount + 1} active</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
