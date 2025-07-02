// import { Button } from '@/components/ui/button'
// import axios from 'axios'
// import { RefreshCcw } from 'lucide-react';
// import Image from 'next/image'
// import Link from 'next/link';
// import React, { useState } from 'react'
// import { toast } from 'sonner'

// function MaterialCardItem({item, studyTypeContent, course, refreshData}) {
  
//   const [loading, setLoading] = useState(false);
//   const GenerateContent = async () => {
//     // console.log(course)

//     toast('Generating your content...')
//     setLoading(true);
//     let chapters = '';
//     course?.courseLayout.chapters.forEach((chapter) =>  {
//       chapters = (chapter.chapterTitle)+','+chapters
//     })
//     console.log(chapters)

//     const result = await axios.post('/api/study-type-content', {
//       courseId:course?.courseId,
//       type: item.name,
//       chapters: chapters,
//     })
//     setLoading(false);
//     console.log(result);
//     refreshData(true);
//     toast("Your Content is ready to view")
//   }
//   return (
//     <Link href={'/course/'+course?.courseId+item.path}>
//     <div className={`border shadow-md rounded-lg p-5 flex flex-col items-center
//     ${(!studyTypeContent || !studyTypeContent[item.type] || 
//       studyTypeContent[item.type]?.length === 0) && 'grayscale'}
//     `}>
//       {(!studyTypeContent || !studyTypeContent[item.type] || 
//         studyTypeContent[item.type]?.length === 0) ?
//       <h2 className='p-1 px-2 bg-gray-500 text-white rounded-full text-[12px] mb-2'>Generate</h2>
//       : <h2 className='p-1 px-2 bg-green-500 text-white rounded-full text-[12px] mb-2'>Ready</h2>}
//       <Image src={item.icon} alt={item.name} width={50} height={50} />
//       <h2 className='font-medium mt-3'>{item.name}</h2>
//       <p className='text-gray-500 text-sm text-center'>{item.desc}</p>

//       {(!studyTypeContent || !studyTypeContent[item.type] || 
//         studyTypeContent[item.type]?.length === 0) ?
//        <Button className='mt-3 w-full border-radius-4 hover:bg-gray-300' variant='outline' onClick={(e) => {
//          e.preventDefault(); // Prevent Link navigation
//          GenerateContent();
//        }}>
//         {loading && <RefreshCcw className='animate-spin'/>}
//         Generate</Button>
//       : 
//       <Button className='mt-3 w-full border-radius-4 hover:bg-gray-300' variant='outline'>View</Button>}
//     </div>
//     </Link>
//   )
// }

// export default MaterialCardItem

"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { RefreshCcw, ArrowRight, Sparkles, CheckCircle, Clock, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

function MaterialCardItem({ item, studyTypeContent, course, refreshData }) {
  const [loading, setLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const GenerateContent = async () => {
    toast("Generating your content...")
    setLoading(true)
    let chapters = ""
    course?.courseLayout.chapters.forEach((chapter) => {
      chapters = chapter.chapterTitle + "," + chapters
    })
    console.log(chapters)

    const result = await axios.post("/api/study-type-content", {
      courseId: course?.courseId,
      type: item.name,
      chapters: chapters,
    })
    setLoading(false)
    console.log(result)
    refreshData(true)
    toast("Your Content is ready to view")
  }

  const isContentReady = studyTypeContent && studyTypeContent[item.type] && studyTypeContent[item.type]?.length > 0
  const contentCount = studyTypeContent?.[item.type]?.length || 0

  return (
    <Link href={"/course/" + course?.courseId + item.path}>
      <div
        className={`group relative bg-white rounded-3xl p-2 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-full flex flex-col ${
          !isContentReady
            ? "hover:border-orange-200 hover:-translate-y-2"
            : "hover:border-blue-200 hover:-translate-y-2"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Background gradient overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            !isContentReady
              ? "bg-gradient-to-br from-orange-50/30 via-yellow-50/20 to-orange-50/30"
              : "bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"
          }`}
        ></div>

        {/* Status Badge */}
        <div className="relative mb-6">
          <div className="flex justify-between items-start">
            {!isContentReady ? (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 rounded-full px-4 py-2 shadow-sm">
                <Clock className="w-3 h-3 text-orange-600" />
                <span className="text-xs font-semibold text-orange-700">Generate</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 border border-green-300 rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span className="text-xs font-semibold text-green-700">Ready</span>
              </div>
            )}

            {/* Content Count */}
            {isContentReady && (
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-3 py-1">
                <span className="text-xs font-bold text-blue-700">{contentCount}</span>
              </div>
            )}
          </div>
        </div>

        {/* Icon Section */}
        <div className="relative mb-6 flex justify-center">
          <div
            className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
              !isContentReady
                ? `bg-gradient-to-br ${item.color} ${loading ? "animate-pulse" : ""}`
                : `bg-gradient-to-br ${item.color}`
            }`}
          >
            <div className="relative w-12 h-12">
              <Image
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                fill
                className={`object-contain transition-all duration-300 ${
                  !isContentReady ? "grayscale group-hover:grayscale-0" : ""
                } ${isHovered ? "scale-110" : ""}`}
              />
            </div>

            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 bg-white/20 rounded-2xl flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-white animate-spin" />
              </div>
            )}
          </div>

          {/* Sparkle effect for ready content */}
          {isContentReady && isHovered && (
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="relative flex-1 text-center">
          <h3
            className={`text-xl font-bold mb-3 transition-colors duration-300 ${
              !isContentReady
                ? "text-gray-600 group-hover:text-orange-600"
                : `bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`
            }`}
          >
            {item.name}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{item.desc}</p>

          {/* Progress indicator for ready content */}
          {isContentReady && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500">Available</span>
                <span className="text-xs font-medium text-gray-700">{contentCount} items</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 ease-out`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="relative mt-auto">
          {!isContentReady ? (
            <Button
              className="group/btn w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault() // Prevent Link navigation
                GenerateContent()
              }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCcw className="w-4 h-4 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>Generate</span>
                </>
              )}
            </Button>
          ) : (
            <Button
              className={`group/btn w-full bg-gradient-to-r ${item.color} hover:shadow-xl text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2`}
            >
              <span>View Content</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Loading State Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <RefreshCcw className="w-6 h-6 text-white animate-spin" />
              </div>
              <p className="text-sm font-medium text-gray-700">Generating content...</p>
              <p className="text-xs text-gray-500 mt-1">This may take a moment</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default MaterialCardItem
