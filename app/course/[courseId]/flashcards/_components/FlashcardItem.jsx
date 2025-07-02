// import React from "react";
// import ReactCardFlip from "react-card-flip";

// function FlashcardItem({ isFlipped, handleClick, flashcard }) {
//   return (
//     <div>
//       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//         <div className="p-4 bg-primary shadow-lg text-white flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] 
//         md:h-[350px] md:w-[300px]"onClick={handleClick}>
//           <h2>{flashcard?.front}</h2>
//         </div>

//         <div className="p-4 bg-white shadow-lg text-primary flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] 
//         md:h-[350px] md:w-[300px]" onClick={handleClick}>
//           <h2>{flashcard?.back}</h2>
//         </div>
//       </ReactCardFlip>
//     </div>
//   );
// }

// export default FlashcardItem;

"use client"
import ReactCardFlip from "react-card-flip"
import { RotateCcw, Sparkles, Eye, EyeOff } from "lucide-react"

function FlashcardItem({ isFlipped, handleClick, flashcard }) {
  return (
    <div className="relative group">
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl transform scale-110"></div>

      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side - Question */}
        <div
          className="relative p-8 bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl text-white flex flex-col items-center justify-center rounded-3xl cursor-pointer h-[280px] w-[220px] md:h-[380px] md:w-[320px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-blue-400 overflow-hidden group/card"
          onClick={handleClick}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>

          {/* Question indicator */}
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
            <div className="flex items-center gap-2">
              <Eye className="w-3 h-3 text-white" />
              <span className="text-xs font-medium text-white">Question</span>
            </div>
          </div>

          {/* Flip indicator */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            <RotateCcw className="w-4 h-4 text-white" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-bold leading-relaxed text-center px-2 line-clamp-6">
              {flashcard?.front || "Question content"}
            </h2>
          </div>

          {/* Bottom hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white/80 font-medium opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            Click to reveal answer
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
        </div>

        {/* Back Side - Answer */}
        <div
          className="relative p-8 bg-white shadow-xl text-gray-900 flex flex-col items-center justify-center rounded-3xl cursor-pointer h-[280px] w-[220px] md:h-[380px] md:w-[320px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-200 overflow-hidden group/card"
          onClick={handleClick}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-500/5 rounded-full blur-lg"></div>

          {/* Answer indicator */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-100 to-green-200 backdrop-blur-sm rounded-full px-3 py-1 border border-green-300">
            <div className="flex items-center gap-2">
              <EyeOff className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-green-700">Answer</span>
            </div>
          </div>

          {/* Flip indicator */}
          <div className="absolute top-4 right-4 bg-gray-100 backdrop-blur-sm rounded-full p-2 border border-gray-200 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            <RotateCcw className="w-4 h-4 text-gray-600" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg md:text-xl font-bold leading-relaxed text-center px-2 line-clamp-6 text-gray-900">
              {flashcard?.back || "Answer content"}
            </h2>
          </div>

          {/* Bottom hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            Click to see question
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>

          {/* Decorative border gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </ReactCardFlip>

      {/* Card shadow enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}

export default FlashcardItem

