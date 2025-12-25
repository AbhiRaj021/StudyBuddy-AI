// "use client";
// import axios from "axios";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import StepProgress from "../_components/StepProgress";
// import QuestionAnswerItem from "./_components/QuestionAnswerItem";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// const QuestionAnswer = () => {
//     const { courseId } = useParams();
//     const [questionAnswer, setQuestionAnswer] = useState();
//     const [stepCount, setStepCount] = useState(0);
//     const [qa, setQa] = useState([])
//     const [isFlipped, setIsFlipped] = useState();
//     const [api, setApi] = useState();

//     useEffect(() => {
//         GetQuestionAnswer();
//     }, [courseId]);

//     useEffect(() => {
//         if(!api) {
//           return;
//         }
//         api.on('select', () => {
//           setIsFlipped(false);
//         })
//       }, [api]);

//     const GetQuestionAnswer = async () => {
//         const result = await axios.post('/api/study-type', {
//             courseId: courseId,
//             studyType: 'ALL'
//         })

//         setQuestionAnswer(result?.data?.result?.qa || []);
//         setQa(result.data.result.qa || []);
//         console.log("Question Answer Data:", result);

//         console.log(result);
//     }

//     const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };
//     return (
//         <div>
//             <h2 className="font-bold text-2xl">Question Answers</h2>
//             <p>Question Answer will help you to retain topic and notes in your mind</p>
//             {/* <StepProgress data={qa} stepCount={stepCount} setStepCount={() => setQuestionAnswer(stepCount+1)}/> */}

//             <div className="mt-10">
//         <Carousel setApi={setApi}>
//           <CarouselContent>
//             {questionAnswer?.map((quesans, index) => (
//               <CarouselItem key={index} className="flex items-center justify-center">
//               <QuestionAnswerItem handleClick={handleClick} isFlipped={isFlipped} quesans={quesans} />
//             </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//         </div>
//     )
// }

// export default QuestionAnswer;

"use client"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import QuestionAnswerItem from "./_components/QuestionAnswerItem"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  HelpCircle,
  CheckCircle2,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Target,
  Clock,
  BookOpen,
} from "lucide-react"

const QuestionAnswer = () => {
  const { courseId } = useParams()
  const [questionAnswer, setQuestionAnswer] = useState<any[]>()
  const [stepCount, setStepCount] = useState(0)
  const [qa, setQa] = useState([])
  const [isFlipped, setIsFlipped] = useState(false)
  const [api, setApi] = useState<any>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewedCards, setViewedCards] = useState(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GetQuestionAnswer()
  }, [courseId])

  useEffect(() => {
    if (!api) {
      return
    }
    api.on("select", () => {
      setIsFlipped(false)
      const current = api.selectedScrollSnap()
      setCurrentIndex(current)
      setViewedCards((prev) => new Set([...prev, current]))
    })
  }, [api])

  const GetQuestionAnswer = async () => {
    setLoading(true)
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "ALL",
      })

      console.log("Raw QA API response:", result.data)

      // Handle different possible response structures (similar to Quiz page)
      let qaData = []

      if (Array.isArray(result?.data?.result?.qa)) {
        qaData = result.data.result.qa
      } else if (typeof result?.data?.result?.qa === "string") {
        // If the data is a JSON string, parse it
        try {
          const parsedData = JSON.parse(result.data.result.qa)
          qaData = Array.isArray(parsedData) ? parsedData : []
        } catch (e) {
          console.error("Failed to parse QA data:", e)
        }
      } else if (result?.data?.result?.qa && typeof result.data.result.qa === "object") {
        // If it's an object, try to extract array from it
        if (Array.isArray(result.data.result.qa.content)) {
          qaData = result.data.result.qa.content
        } else {
          qaData = [result.data.result.qa]
        }
      }

      console.log("Processed QA Data:", qaData)
      setQuestionAnswer(qaData)
      setQa(qaData)
    } catch (error) {
      console.error("Error fetching Q&A:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const resetProgress = () => {
    setViewedCards(new Set())
    setCurrentIndex(0)
    setIsFlipped(false)
    api?.scrollTo(0)
  }

  const progressPercentage = questionAnswer ? (viewedCards.size / questionAnswer.length) * 100 : 0

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Enhanced Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-gray-700">Question & Answer Session</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master Your Knowledge
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Interactive question-answer cards designed to help you retain topics and strengthen your understanding
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{questionAnswer?.length || 0}</div>
                <div className="text-sm opacity-90">Total Cards</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{viewedCards.size}</div>
                <div className="text-sm opacity-90">Reviewed</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
                <div className="text-sm opacity-90">Progress</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentIndex + 1}</div>
                <div className="text-sm opacity-90">Current</div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Study Progress</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex justify-center gap-4">
          <Button onClick={resetProgress} variant="outline" className="gap-2 hover:bg-blue-50 border-blue-200">
            <RotateCcw className="h-4 w-4" />
            Reset Progress
          </Button>

          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Card {currentIndex + 1} of {questionAnswer?.length || 0}
          </Badge>
        </div>

        {/* Enhanced Carousel Section */}
        <div className="relative">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">{isFlipped ? "Answer" : "Question"}</span>
                </div>
              </div>

              <Carousel setApi={setApi} className="max-w-4xl mx-auto">
                <CarouselContent>
                  {questionAnswer?.map((quesans, index) => (
                    <CarouselItem key={index} className="flex items-center justify-center">
                      <QuestionAnswerItem
                        handleClick={handleClick}
                        isFlipped={isFlipped}
                        quesans={quesans}
                        isViewed={viewedCards.has(index)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-300" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-300" />
              </Carousel>

              {/* Navigation Hint */}
              <div className="text-center mt-8 space-y-4">
                <p className="text-gray-600">Click the card to reveal the answer • Use arrows to navigate</p>

                <div className="flex justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Study Tips */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-lg text-gray-800">💡 Study Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>• Read each question carefully</div>
                <div>• Think before revealing the answer</div>
                <div>• Review difficult cards multiple times</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QuestionAnswer
