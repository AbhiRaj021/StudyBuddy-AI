// import React from 'react'

// function ChapterList({course}) {
//   const CHAPTERS = course?.courseLayout?.chapters;
//   return (
//     <div className='mt-5'>
//       <h2 className='font-medium text-xl'>Chapters</h2>

//       <div className='mt-3'>
//         {CHAPTERS?.map((chapter,index) => (
//           <div key={chapter.chapterTitle || index} className='flex gap-5 items-center p-4 mb-4 border shadow-md rounded-lg cursor-pointer '>
//             <h2 key={index} className='text-2xl'>{chapter?.emoji}</h2>
//             <div>
//               <h2 className='font-medium text-lg'>{chapter?.chapterTitle}</h2>
//               <p className='text-gray-500 text-sm'>{chapter?.chapterSummary}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ChapterList

"use client"
import { useState } from "react"
import { BookOpen, Clock, ArrowRight, Sparkles, CheckCircle, PlayCircle } from "lucide-react"

function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters
  const [hoveredChapter, setHoveredChapter] = useState(null)

  return (
    <div className="mt-10 relative">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>

      {/* Header Section */}
      <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg mb-8 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none"></div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Course Chapters
              </h2>
              <p className="text-gray-600">
                {CHAPTERS?.length || 0} chapter{CHAPTERS?.length !== 1 ? "s" : ""} to master
              </p>
            </div>
          </div>

          {/* Chapter Progress Overview */}
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">Learning Path</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Ready to learn</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>~{Math.ceil((CHAPTERS?.length || 0) * 0.5)} hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        {CHAPTERS?.map((chapter, index) => (
          <div
            key={chapter.chapterTitle || index}
            className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer relative overflow-hidden hover:-translate-y-1"
            onMouseEnter={() => setHoveredChapter(index)}
            onMouseLeave={() => setHoveredChapter(null)}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Chapter Number Badge */}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
            </div>

            <div className="relative flex items-start gap-6">
              {/* Emoji Section */}
              <div className="relative group/emoji">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 border border-gray-100">
                  <span className="text-3xl group-hover/emoji:scale-110 transition-transform duration-300">
                    {chapter?.emoji || "📚"}
                  </span>
                </div>

                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <PlayCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {chapter?.chapterTitle || `Chapter ${index + 1}`}
                  </h3>

                  {/* Chapter duration estimate */}
                  <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 rounded-full px-3 py-1">
                    <Clock className="w-3 h-3" />
                    <span>~30 min</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {chapter?.chapterSummary || "Chapter summary will be displayed here..."}
                </p>

                {/* Chapter Features */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Ready</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <BookOpen className="w-3 h-3" />
                      <span>Interactive</span>
                    </div>
                  </div>

                  {/* Action Indicator */}
                  {/* <div className="flex items-center gap-2 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {/* <div className="relative mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500">Progress</span>
                <span className="text-xs font-medium text-gray-700">0%</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div> */}

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {(!CHAPTERS || CHAPTERS.length === 0) && (
        <div className="bg-white rounded-3xl p-12 border-2 border-gray-100 shadow-lg text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Chapters Available</h3>
          <p className="text-gray-600">Chapters will appear here once the course content is generated.</p>
        </div>
      )}

      {/* Bottom Summary */}
      {CHAPTERS && CHAPTERS.length > 0 && (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Complete all {CHAPTERS.length} chapters to master this course
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">{CHAPTERS.length} chapters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Ready to start</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChapterList
