// import React, { useEffect, useState } from "react";
// import MaterialCardItem from "./MaterialCardItem";
// import axios from "axios";
// import Link from "next/link";

// function StudyMaterialSection({ courseId, course }) {
//   const [studyTypeContent, setStudyTypeContent] = useState();
//   const MaterialList = [
//     {
//       name: "Notes/Chapters",
//       desc: "Read notes to prepare it",
//       icon: "/notes.png",
//       path: "/notes",
//       type: "notes",
//     },
//     {
//       name: "Flashcard",
//       desc: "Flashcard help to remember the concepts",
//       icon: "/flashcard.png",
//       path: "/flashcards",
//       type: "flashcards",
//     },
//     {
//       name: "Quiz",
//       desc: "Great way to test your knowledge",
//       icon: "/quiz.png",
//       path: "/quiz",
//       type: "quiz",
//     },
//     {
//       name: "QA",
//       desc: "Help to practice your learning",
//       icon: "/qa.png",
//       path: "/qa",
//       type: "qa",
//     },
//   ];

//   useEffect(() => {
//     GetStudyMaterial();
//   }, []);

//   const GetStudyMaterial = async () => {
//     try {
//       const result = await axios.post("/api/study-type", {
//         courseId: courseId,
//         studyType: "ALL",
//       });

//       console.log("Full API response:", JSON.stringify(result?.data, null, 2));

//       // Check if result has all expected properties
//       if (result?.data?.result) {
//         console.log("Notes:", result.data.result.notes?.length || 0);
//         console.log("Flashcards:", result.data.result.flashcards?.length || 0);
//         console.log("Quiz:", result.data.result.quiz?.length || 0);
//         console.log("QA:", result.data.result.qa?.length || 0);

//         setStudyTypeContent(result.data.result);
//       } else {
//         console.error("Unexpected API response structure:", result.data);
//       }
//     } catch (error) {
//       console.error("Error fetching study materials:", error);
//     }
//   };

//   return (
//     <div className="mt-5">
//       <h2 className="font-medium text-xl">Study Material</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
//         {MaterialList.map((item, index) => (
//           <MaterialCardItem
//             key={index}
//             item={item}
//             studyTypeContent={studyTypeContent}
//             course={course}
//             refreshData={GetStudyMaterial}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StudyMaterialSection;


"use client"
import { useEffect, useState } from "react"
import MaterialCardItem from "./MaterialCardItem"
import axios from "axios"
import { BookOpen, Sparkles, RefreshCw, AlertCircle } from "lucide-react"

function StudyMaterialSection({ courseId, course }) {
  const [studyTypeContent, setStudyTypeContent] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const MaterialList = [
    {
      name: "Notes/Chapters",
      desc: "Read notes to prepare it",
      icon: "/notes.png",
      path: "/notes",
      type: "notes",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Flashcard",
      desc: "Flashcard help to remember the concepts",
      icon: "/flashcard.png",
      path: "/flashcards",
      type: "flashcards",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "Quiz",
      desc: "Great way to test your knowledge",
      icon: "/quiz.png",
      path: "/quiz",
      type: "quiz",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "QA",
      desc: "Help to practice your learning",
      icon: "/qa.png",
      path: "/qa",
      type: "qa",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ]

  useEffect(() => {
    GetStudyMaterial()
  }, [])

  const GetStudyMaterial = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "ALL",
      })

      console.log("Full API response:", JSON.stringify(result?.data, null, 2))

      // Check if result has all expected properties
      if (result?.data?.result) {
        console.log("notes:", result.data.result.notes?.length || 0)
        console.log("Flashcards:", result.data.result.flashcards?.length || 0)
        console.log("Quiz:", result.data.result.quiz?.length || 0)
        console.log("QA:", result.data.result.qa?.length || 0)

        setStudyTypeContent(result.data.result)
      } else {
        console.error("Unexpected API response structure:", result.data)
        setError("Unexpected API response structure")
      }
    } catch (error) {
      console.error("Error fetching study materials:", error)
      setError("Failed to load study materials")
    } finally {
      setLoading(false)
    }
  }

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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Study Materials
                </h2>
                <p className="text-gray-600">
                  Explore different ways to master {course?.courseLayout?.courseTitle || "this course"}
                </p>
              </div>
            </div>

            <button
              onClick={GetStudyMaterial}
              disabled={loading}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh Materials
            </button>
          </div>

          {/* Material Types Description */}
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-semibold text-gray-900">Available Study Methods</h3>
            </div>
            <p className="text-sm text-gray-600">
              Each study method is designed to help you learn in different ways. Use notes for detailed understanding,
              flashcards for memorization, quizzes to test your knowledge, and Q&A for practice.
            </p>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl border-2 border-gray-100 shadow-md p-6 h-64 animate-pulse flex flex-col"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-5/6 mb-6"></div>
              <div className="mt-auto h-10 bg-gray-200 rounded-xl w-full"></div>
            </div>
          ))}
        </div>
      )}

      {/* Material Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {!loading &&
          MaterialList.map((item, index) => (
            <MaterialCardItem
              key={index}
              item={item}
              studyTypeContent={studyTypeContent}
              course={course}
              refreshData={GetStudyMaterial}
            />
          ))}
      </div>

      {/* Bottom Stats */}
      {!loading && studyTypeContent && (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-blue-600">{studyTypeContent?.notes?.length || 0}</div>
              <div className="text-sm text-gray-600">Notes</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600">{studyTypeContent?.flashcards?.length || 0}</div>
              <div className="text-sm text-gray-600">Flashcards</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">{studyTypeContent?.quiz?.length || 0}</div>
              <div className="text-sm text-gray-600">Quiz Questions</div>
            </div>
            <div>
              <div className="text-lg font-bold text-pink-600">{studyTypeContent?.qa?.length || 0}</div>
              <div className="text-sm text-gray-600">Q&A Pairs</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudyMaterialSection
