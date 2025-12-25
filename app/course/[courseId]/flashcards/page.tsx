"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import FlashcardItem from "./_components/FlashcardItem"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  CreditCard,
  Sparkles,
  TrendingUp,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Eye,
  Clock,
  Target,
  Zap,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"

function FlashCards() {
  const { courseId } = useParams()
  const [flashCards, setFlashCards] = useState<any[]>([])
  const [isFlipped, setIsFlipped] = useState(false)
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GetFlashCards()
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }
    api.on("select", () => {
      setIsFlipped(false)
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const GetFlashCards = async () => {
    setLoading(true)
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "ALL",
      })

      console.log("Raw Flashcard API response:", result.data)

      // Handle different possible response structures (similar to Quiz and QA pages)
      let flashcardData = []

      if (Array.isArray(result?.data?.result?.flashcards)) {
        flashcardData = result.data.result.flashcards
      } else if (typeof result?.data?.result?.flashcards === "string") {
        // If the data is a JSON string, parse it
        try {
          const parsedData = JSON.parse(result.data.result.flashcards)
          flashcardData = Array.isArray(parsedData) ? parsedData : []
        } catch (e) {
          console.error("Failed to parse flashcard data:", e)
        }
      } else if (result?.data?.result?.flashcards && typeof result.data.result.flashcards === "object") {
        // If it's an object, try to extract array from it
        if (Array.isArray(result.data.result.flashcards.content)) {
          flashcardData = result.data.result.flashcards.content
        } else {
          flashcardData = [result.data.result.flashcards]
        }
      }

      console.log("Processed Flashcard Data:", flashcardData)
      setFlashCards(flashcardData)
    } catch (error) {
      console.error("Error fetching flashcards:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const handleRefresh = () => {
    GetFlashCards()
  }

  const progressPercentage = flashCards.length > 0 ? ((current + 1) / flashCards.length) * 100 : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded-2xl w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                    FlashCards
                  </h2>
                  <p className="text-gray-600">Flashcards: The Ultimate Tool to Lock in Concepts!</p>
                </div>
              </div>

              <button
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-purple-50 hover:from-gray-100 hover:to-purple-100 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{flashCards.length}</div>
                    <div className="text-xs text-gray-500">Total Cards</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{current + 1}</div>
                    <div className="text-xs text-gray-500">Current Card</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-4 border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{Math.round(progressPercentage)}%</div>
                    <div className="text-xs text-gray-500">Progress</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">~{flashCards.length * 2}</div>
                    <div className="text-xs text-gray-500">Est. Minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-gray-700">Study Progress</span>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {current + 1} / {flashCards.length}
                </span>
              </div>
              <div className="relative">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-semibold text-gray-900">How to Use</h3>
              </div>
              <p className="text-sm text-gray-600">
                Click on any flashcard to flip it and reveal the answer. Use the navigation arrows to move between
                cards. Study at your own pace!
              </p>
            </div>
          </div>
        </div>

        {/* Flashcard Carousel */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg relative overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-blue-50/10 to-pink-50/20 pointer-events-none"></div>

          <div className="relative">
            {flashCards.length > 0 ? (
              <>
                {/* Carousel Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{current + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Flashcard {current + 1}</h3>
                      <p className="text-sm text-gray-600">
                        {isFlipped ? "Answer side" : "Question side"} • Click to flip
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      onClick={handleClick}
                      variant="outline"
                      className="bg-white hover:bg-purple-50 text-purple-600 border-2 border-purple-200 hover:border-purple-300 px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Flip Card
                    </Button>
                  </div>
                </div>

                {/* Carousel */}
                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent>
                    {flashCards?.map((flashcard, index) => (
                      <CarouselItem key={index} className="flex items-center justify-center">
                        <FlashcardItem handleClick={handleClick} isFlipped={isFlipped} flashcard={flashcard} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Custom Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <CarouselPrevious className="group relative bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-2xl w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                      <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800 group-hover:-translate-x-0.5 transition-all duration-200" />
                    </CarouselPrevious>

                    {/* Card Indicators */}
                    <div className="flex items-center gap-2 px-4">
                      {flashCards.slice(0, 5).map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? "bg-gradient-to-r from-purple-500 to-blue-500 w-6" : "bg-gray-300"
                            }`}
                        ></div>
                      ))}
                      {flashCards.length > 5 && (
                        <span className="text-xs text-gray-500 ml-2">+{flashCards.length - 5} more</span>
                      )}
                    </div>

                    <CarouselNext className="group relative bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-2xl w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-0.5 transition-all duration-200" />
                    </CarouselNext>
                  </div>
                </Carousel>

                {/* Study Tips */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Study Tip</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For best results, try to answer each question before flipping the card. Repeat cards you find
                    challenging until you can answer them confidently.
                  </p>
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Flashcards Available</h3>
                <p className="text-gray-600 mb-4">
                  Flashcards will appear here once they are generated for this course.
                </p>
                <Button
                  onClick={handleRefresh}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Flashcards
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Stats */}
        {flashCards.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">
                  Keep going! You're making great progress with your flashcards.
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">{flashCards.length} cards total</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Card {current + 1} active</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FlashCards

