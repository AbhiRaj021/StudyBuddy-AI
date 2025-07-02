// "use client";

// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import DOMPurify from 'dompurify';

// function ViewNotes() {
//   const { courseId } = useParams();
//   const [notes, setNotes] = useState();
//   const [stepCount, setStepCount] = useState(0);
//   const route = useRouter();

//   useEffect(() => {
//     GetNotes();
//   }, []);

//   const GetNotes = async () => {
//     const result = await axios.post("/api/study-type", {
//       courseId: courseId,
//       studyType: "notes",
//     });

//     console.log(result?.data);
//     setNotes(result?.data?.notes);
//   };

//   function formatText(text) {
//     // Replace newlines and multiple blank lines with HTML breaks or paragraphs
//     const html = text
//       .replace(/\\n/g, '\n') // Fix double escaped newlines
//       .replace('```html','')
//       .replace(/\n{2,}/g, '</p><p>') // Paragraphs
//       .replace(/\n/g, '<br/>'); // Single line breaks

//     // Wrap in <p> tag for paragraph formatting
//     const wrappedHtml = `<p>${html}</p>`;

//     // Sanitize with DOMPurify
//     return DOMPurify.sanitize(wrappedHtml);
//   }

//   return notes && (
//     <div>
//       <div className="flex gap-5 items-center">
//         {stepCount != 0 && <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount - 1)}>Previous</Button>}
//         {notes?.map((item, index) => (
//           <div key={index} className={`w-full h-2 rounded-full
//           ${index < stepCount ? 'bg-primary' : 'bg-gray-200'} `}>
//           </div>
//         ))}
//         <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount + 1)}>Next</Button>
//       </div>

//       <div className="mt-10">
//         <div
//           className="prose max-w-none"
//           dangerouslySetInnerHTML={{
//             __html: formatText(notes[stepCount]?.notes || ''),
//           }}
//         />
//       </div>
//       {notes?.length == stepCount && <div className="flex items-center gap-10 flex-col justify-center">
//         <h2>End of Notes</h2>
//         <Button className='text-white' onClick={() => route.back()}>Go to Course Page</Button>
//       </div>}
//     </div>
//   )
// }

// export default ViewNotes;

"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DOMPurify from "dompurify"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  Sparkles,
  TrendingUp,
  Home,
  Eye,
  Circle,
} from "lucide-react"

function ViewNotes() {
  const { courseId } = useParams()
  const [notes, setNotes] = useState()
  const [stepCount, setStepCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const route = useRouter()

  useEffect(() => {
    GetNotes()
  }, [])

  const GetNotes = async () => {
    setLoading(true)
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "notes",
      })

      console.log(result?.data)
      setNotes(result?.data?.notes)
    } catch (error) {
      console.error("Error fetching notes:", error)
    } finally {
      setLoading(false)
    }
  }

  function formatText(text) {
    // Replace newlines and multiple blank lines with HTML breaks or paragraphs
    const html = text
      .replace(/\\n/g, "\n") // Fix double escaped newlines
      .replace("```html", "")
      .replace(/\n{2,}/g, "</p><p>") // Paragraphs
      .replace(/\n/g, "<br/>") // Single line breaks

    // Wrap in <p> tag for paragraph formatting
    const wrappedHtml = `<p>${html}</p>`

    // Sanitize with DOMPurify
    return DOMPurify.sanitize(wrappedHtml)
  }

  const totalNotes = notes?.length || 0
  const progressPercentage = totalNotes > 0 ? ((stepCount + 1) / totalNotes) * 100 : 0
  const isLastNote = stepCount >= totalNotes - 1
  const isCompleted = notes?.length === stepCount

  // Estimate reading time (assuming 200 words per minute)
  const estimateReadingTime = (text) => {
    const wordCount = text?.split(" ").length || 0
    const minutes = Math.ceil(wordCount / 200)
    return minutes
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded-2xl w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    notes && (
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Course Notes
                    </h1>
                    <p className="text-gray-600">
                      Chapter {stepCount + 1} of {totalNotes}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {Math.round(progressPercentage)}%
                  </div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Reading Progress</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>~{estimateReadingTime(notes[stepCount]?.notes)} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>
                        {stepCount + 1}/{totalNotes}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>

                  {/* Step indicators */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center h-3">
                    {notes?.map((item, index) => (
                      <div
                        key={index}
                        className="relative flex items-center justify-center"
                        style={{ left: `${(index / (totalNotes - 1)) * 100}%` }}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            index < stepCount
                              ? "bg-gradient-to-br from-blue-500 to-purple-500 border-blue-500 shadow-lg"
                              : index === stepCount
                                ? "bg-white border-blue-500 shadow-md"
                                : "bg-white border-gray-300"
                          }`}
                        >
                          {index < stepCount ? (
                            <CheckCircle className="w-2 h-2 text-white" />
                          ) : index === stepCount ? (
                            <div className="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                          ) : (
                            <Circle className="w-2 h-2 text-gray-400" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                {/* Previous Button */}
                {stepCount !== 0 ? (
                  <Button
                    variant="outline"
                    onClick={() => setStepCount(stepCount - 1)}
                    className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}

                {/* Chapter Info */}
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{stepCount} completed</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Chapter {stepCount + 1}</span>
                  </div>
                </div>

                {/* Next Button */}
                {!isCompleted && (
                  <Button
                    onClick={() => setStepCount(stepCount + 1)}
                    disabled={isLastNote}
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next Chapter
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Notes Content */}
          {!isCompleted && (
            <div className="bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-lg relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/20 pointer-events-none"></div>

              <div className="relative">
                {/* Chapter Header */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Chapter {stepCount + 1}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>~{estimateReadingTime(notes[stepCount]?.notes)} minute read</span>
                      <span>•</span>
                      <span>{notes[stepCount]?.notes?.split(" ").length || 0} words</span>
                    </div>
                  </div>
                </div>

                {/* Notes Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: formatText(notes[stepCount]?.notes || ""),
                  }}
                />
              </div>
            </div>
          )}

          {/* Completion State */}
          {isCompleted && (
            <div className="bg-white rounded-3xl p-12 border-2 border-gray-100 shadow-lg text-center relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/20 to-purple-50/30 pointer-events-none"></div>

              <div className="relative">
                {/* Completion Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                {/* Completion Message */}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Congratulations! 🎉
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  You've successfully completed all {totalNotes} chapters of notes. Great job on your learning journey!
                </p>

                {/* Completion Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{totalNotes}</div>
                    <div className="text-xs text-gray-500">Chapters Read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-500">Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      ~{notes?.reduce((total, note) => total + estimateReadingTime(note?.notes), 0)}
                    </div>
                    <div className="text-xs text-gray-500">Minutes Read</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => route.back()}
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Back to Course
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setStepCount(0)}
                    className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 px-8 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Again
                  </Button>
                </div>

                {/* Encouragement Message */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 justify-center">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">
                      Ready for the next challenge? Try the quiz or flashcards!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  )
}

export default ViewNotes

