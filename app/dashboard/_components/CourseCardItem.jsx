// import Course from "@/app/course/[courseId]/Page";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { RefreshCw } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function CourseCardItem({ course }) {
//   return (
//     <div className="border rounded-lg shadow-md p-5">
//       <div>
//         <div className="flex justify-between items-center">
//           <Image src={"/knowledge.png"} alt="other" width={50} height={50} />
//           <h2 className="text-[10px] p-1 px-2 rounded-full bg-blue-500 text-white">
//             {course?.courseLayout?.level}
//           </h2>
//         </div>
//         <h2 className="mt-3 font-medium text-lg">{course?.topic}</h2>
//         <p className="text-xs line-clamp-2 text-gray-500">
//           {course?.courseLayout?.courseSummary}
//         </p>

//         <div className="mt-3">
//           <Progress value={50} />
//         </div>

//         <div className="mt-3 flex justify-end">
//           {course?.status === "generating" ? (
//             <h2 className="text-sm p-1 px-2 flex gap-2 items-center rounded-full bg-gray-400 text-white">
//               <RefreshCw className="h-5 w-5" />
//               Generating...
//             </h2>
//           ) : (
//             <Link href={`/course/${course?.courseId}`}>
//               <Button className="text-white">View</Button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseCardItem;


import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RefreshCw, Clock, BookOpen, ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function CourseCardItem({ course, viewMode = "grid" }) {
  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "beginner":
        return "from-green-500 to-green-600"
      case "intermediate":
        return "from-blue-500 to-blue-600"
      case "advanced":
        return "from-purple-500 to-purple-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getLevelBgColor = (level) => {
    switch (level?.toLowerCase()) {
      case "beginner":
        return "bg-green-50 border-green-200"
      case "intermediate":
        return "bg-blue-50 border-blue-200"
      case "advanced":
        return "bg-purple-50 border-purple-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  if (viewMode === "list") {
    return (
      <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div className="relative flex items-center gap-6">
          {/* Image Section */}
          <div className="relative group/image">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Image
                src={"/knowledge.png"}
                alt="course"
                width={40}
                height={40}
                className="group-hover/image:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-2 -right-2">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getLevelColor(course?.courseLayout?.level)} shadow-lg`}
              >
                {course?.courseLayout?.level || "Level"}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {course?.topic || "Course Title"}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
              {course?.courseLayout?.courseSummary || "Course description..."}
            </p>

            {/* Progress Section */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs font-medium text-gray-700">50%</span>
                </div>
                <div className="relative">
                  <Progress value={50} className="h-2 bg-gray-200 rounded-full overflow-hidden" />
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col items-end gap-3">
            {course?.status === "generating" ? (
              <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 text-orange-700 px-4 py-2 rounded-2xl">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span className="text-sm font-medium">Generating...</span>
              </div>
            ) : (
              <Link href={`/course/${course?.courseId}`}>
                <Button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  View Course
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group h-[380px] bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden relative hover:-translate-y-2 flex flex-col">
  {/* Decorative elements */}
  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  {/* Background gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

  {/* Content Wrapper */}
  <div className="flex flex-col h-full flex-1 justify-between">

    {/* Header, Title, Summary */}
    <div className="relative p-6 flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        {/* Image Container */}
        <div className="relative group/image">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <Image
              src={"/knowledge.png"}
              alt="course"
              width={32}
              height={32}
              className="group-hover/image:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Level Badge */}
        <div
          className={`px-3 py-1 rounded-full border-2 ${getLevelBgColor(course?.courseLayout?.level)} backdrop-blur-sm`}
        >
          <span
            className={`text-xs font-semibold bg-gradient-to-r ${getLevelColor(course?.courseLayout?.level)} bg-clip-text text-transparent`}
          >
            {course?.courseLayout?.level || "Level"}
          </span>
        </div>
      </div>

      {/* Course Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
        {course?.topic || "Course Title"}
      </h3>

      {/* Course Summary */}
      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
        {course?.courseLayout?.courseSummary || "Course description and summary will appear here..."}
      </p>
    </div>

    {/* Progress Section */}
    <div className="relative px-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-500" />
          <span className="text-xs font-medium text-gray-700">Progress</span>
        </div>
        <span className="text-xs font-bold text-gray-900">50%</span>
      </div>
      <div className="relative">
        <Progress value={50} className="h-3 bg-gray-200 rounded-full overflow-hidden" />
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: "50%" }}
        ></div>
      </div>
    </div>

    {/* Footer Section */}
    <div className="relative p-6 pt-4 border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
      <div className="flex justify-between items-center">
        {/* Time Indicator */}
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-xs">2-3 hours</span>
        </div>

        {/* Action Button */}
        {course?.status === "generating" ? (
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 text-orange-700 px-4 py-2 rounded-2xl">
            <RefreshCw className="h-4 w-4 animate-spin" />
            <span className="text-xs font-medium">Generating...</span>
          </div>
        ) : (
          <Link href={`/course/${course?.courseId}`}>
            <Button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4" />
              View
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  </div>

  {/* Hover Effect Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

  )
}

export default CourseCardItem

