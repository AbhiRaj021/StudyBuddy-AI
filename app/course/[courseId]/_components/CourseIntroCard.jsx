// import { Progress } from '@/components/ui/progress';
// import React from 'react'

// function CourseIntroCard({ course }) {
//   return (
//     <div className='flex gap-5 items-center p-10 border shadow-md rounded-lg'>
//       <img src={'/knowledge.png'} alt="coursede" width={70} height={70} />
//       <div>
//         <h2 className="font-bold text-2xl mb-2">{course?.courseLayout?.courseTitle}</h2>
//         <p>{course?.courseLayout?.courseSummary}</p>
//         <Progress className='mt-3' value={50} />

//         <h2 className='mt-3 text-lg text-primary'>Total Chapters:{course?.courseLayout?.chapters?.length}</h2>
//       </div>
//     </div>
//   )
// }

// export default CourseIntroCard;

"use client"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Target, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

function CourseIntroCard({ course }) {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate progress percentage (using 50% as default/placeholder)
  const progressPercentage = 50

  // Determine level color based on course difficulty
  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "beginner":
        return "from-green-500 to-green-600"
      case "intermediate":
        return "from-blue-500 to-blue-600"
      case "advanced":
        return "from-purple-500 to-purple-600"
      default:
        return "from-blue-500 to-blue-600"
    }
  }

  const levelColor = getLevelColor(course?.courseLayout?.level)

  return (
    <div
      className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row gap-8 items-start">
        {/* Image Section */}
        <div className="relative group/image">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Image
              src={course?.courseLayout?.courseImage || "/knowledge.png"}
              alt={course?.courseLayout?.courseTitle || "Course"}
              width={80}
              height={80}
              className="object-contain p-4 group-hover/image:scale-110 transition-transform duration-300"
            />

            {/* Level badge */}
            <div className="absolute -top-3 -right-3">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${levelColor} shadow-lg`}
              >
                {course?.courseLayout?.level || "Course"}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-3 py-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">AI-Generated</span>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>2-3 hours</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {course?.courseLayout?.courseTitle || "Course Title"}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {course?.courseLayout?.courseSummary || "Course summary and description will appear here..."}
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Progress</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{progressPercentage}%</span>
            </div>
            <div className="relative">
              <Progress value={progressPercentage} className="h-3 bg-gray-200 rounded-full overflow-hidden" />
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">{course?.courseLayout?.chapters?.length || 0}</div>
                <div className="text-xs text-gray-500">Total Chapters</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {course?.courseLayout?.level || "Level"}
                </div>
                <div className="text-xs text-gray-500">Difficulty</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}

export default CourseIntroCard
