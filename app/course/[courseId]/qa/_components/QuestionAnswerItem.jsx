// import React from "react";
// import ReactCardFlip from "react-card-flip";
// const QuestionAnswerItem = ({ isFlipped, handleClick, quesans }) => {
//     return (
//         <div>
//             <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//                 <div className="p-4 bg-primary shadow-lg text-white flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] 
//         md:h-[350px] md:w-[300px]"onClick={handleClick}>
//                     <h2>{quesans?.question}</h2>
//                 </div>

//                 <div className="p-4 bg-white shadow-lg text-primary flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] 
//         md:h-[350px] md:w-[300px]" onClick={handleClick}>
//                     <h2>{quesans?.answer}</h2>
//                 </div>
//             </ReactCardFlip>
//         </div>
//     )
// }

// export default QuestionAnswerItem;


"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Lightbulb, CheckCircle2 } from "lucide-react"

const QuestionAnswerItem = ({ isFlipped, handleClick, quesans, isViewed }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Viewed Indicator */}
      {isViewed && (
        <div className="absolute -top-3 -right-3 z-10">
          <Badge className="bg-green-500 hover:bg-green-600 text-white gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Reviewed
          </Badge>
        </div>
      )}

      {/* Flip Container */}
      <div className="relative w-full h-[400px] md:h-[450px] cursor-pointer perspective-1000" onClick={handleClick}>
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Question Side (Front) */}
          <Card
            className={`absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
              !isFlipped ? "hover:scale-105" : ""
            }`}
          >
            <CardContent className="h-full flex flex-col justify-between p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/5"></div>
              </div>

              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30 gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Question
                  </Badge>
                  <div className="text-white/70 text-sm">Click to reveal answer</div>
                </div>
              </div>

              {/* Question Content */}
              <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">{quesans?.question}</h2>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Think about your answer
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answer Side (Back) */}
          <Card
            className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
              isFlipped ? "hover:scale-105" : ""
            }`}
          >
            <CardContent className="h-full flex flex-col justify-between p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-28 h-28 rounded-full bg-white/20"></div>
                <div className="absolute bottom-4 right-4 w-36 h-36 rounded-full bg-white/10"></div>
                <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-white/15"></div>
              </div>

              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30 gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Answer
                  </Badge>
                  <div className="text-white/70 text-sm">Click to see question</div>
                </div>
              </div>

              {/* Answer Content */}
              <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">{quesans?.answer}</h2>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Great! You've learned something new
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="text-center mt-4">
        <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          Tap card to flip
        </div>
      </div>
    </div>
  )
}

export default QuestionAnswerItem
