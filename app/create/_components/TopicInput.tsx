// import { Textarea } from "@/components/ui/textarea";
// import React from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// function TopicInput({setTopic, setDifficultyLevel}) {
//   return (
//     <div className="mt-10 w-fullflex flex-col">
//       <h2>
//         Enter Topic or Paste the content for which you want to generate study
//         materials
//       </h2>
//       <Textarea placeholder="Start Writing Here" className="mt-2" onChange={(event) => setTopic(event.target.value)}/>
//       <h2 className="mt-5 mb-3">Select the difficulty level</h2>
//       <Select onValueChange={(value) => setDifficultyLevel(value)}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Difficulty Level" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="Easy">Easy</SelectItem>
//           <SelectItem value="Moderate">Moderate</SelectItem>
//           <SelectItem value="Hard">Hard</SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }

// export default TopicInput;

"use client"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Target, Sparkles, FileText, TrendingUp } from "lucide-react"

function TopicInput({ setTopic, setDifficultyLevel }) {
  const [topicValue, setTopicValue] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("")

  const handleTopicChange = (event) => {
    const value = event.target.value
    setTopicValue(value)
    setTopic(value)
  }

  const handleDifficultyChange = (value) => {
    setSelectedDifficulty(value)
    setDifficultyLevel(value)
  }

  const difficultyLevels = [
    {
      value: "Easy",
      label: "Easy",
      description: "Perfect for beginners",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "🌱",
    },
    {
      value: "Moderate",
      label: "Moderate",
      description: "Intermediate level content",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: "📈",
    },
    {
      value: "Hard",
      label: "Hard",
      description: "Advanced and challenging",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: "🚀",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300 opacity-50"></div>

      <div className="space-y-8">
        {/* Topic Input Section */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Enter Your Topic
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Enter your topic or paste the content for which you want to generate comprehensive study materials
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">AI Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="relative">
              <Textarea
                placeholder="Start writing your topic here..."
                className="min-h-[200px] w-full p-6 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none text-lg leading-relaxed bg-white hover:border-gray-300 shadow-sm hover:shadow-md"
                onChange={handleTopicChange}
                value={topicValue}
              />

              {/* Character counter */}
              <div className="absolute bottom-4 right-4 text-sm text-gray-400">{topicValue.length} characters</div>

              {/* Input status indicator */}
              <div className="absolute top-4 right-4">
                {topicValue.length > 0 && <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>}
              </div>
            </div>

            {/* Topic suggestions */}
            {topicValue.length === 0 && (
              <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Example Topics:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning Fundamentals",
                    "React.js Development",
                    "Data Structures & Algorithms",
                    "Digital Marketing Strategy",
                  ].map((example, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setTopicValue(example)
                        setTopic(example)
                      }}
                      className="text-xs bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 px-3 py-1 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-200"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Difficulty Level Section */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Select Difficulty Level
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Choose the appropriate difficulty level to customize the complexity of your study materials
                </p>
              </div>
              {selectedDifficulty && (
                <div className="hidden md:block">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full px-4 py-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-700">{selectedDifficulty} Selected</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Custom Difficulty Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {difficultyLevels.map((level, index) => (
                <button
                  key={level.value}
                  onClick={() => handleDifficultyChange(level.value)}
                  className={`group/card relative p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-lg hover:-translate-y-1 ${
                    selectedDifficulty === level.value
                      ? `${level.bgColor} ${level.borderColor} shadow-md transform scale-105`
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {/* Level icon */}
                  <div className="text-2xl mb-3">{level.icon}</div>

                  {/* Level info */}
                  <h3
                    className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                      selectedDifficulty === level.value
                        ? `bg-gradient-to-r ${level.color} bg-clip-text text-transparent`
                        : "text-gray-900 group-hover/card:text-gray-700"
                    }`}
                  >
                    {level.label}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{level.description}</p>

                  {/* Selection indicator */}
                  {selectedDifficulty === level.value && (
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-6 h-6 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Fallback Select (hidden but functional) */}
            <div className="hidden">
              <Select onValueChange={handleDifficultyChange} value={selectedDifficulty}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Difficulty Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty explanation */}
            {selectedDifficulty && (
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  What to expect with {selectedDifficulty} level:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {selectedDifficulty === "Easy" && (
                    <>
                      <li>• Basic concepts and fundamental principles</li>
                      <li>• Simple examples and step-by-step explanations</li>
                      <li>• Beginner-friendly terminology</li>
                    </>
                  )}
                  {selectedDifficulty === "Moderate" && (
                    <>
                      <li>• Intermediate concepts with practical applications</li>
                      <li>• Real-world examples and case studies</li>
                      <li>• Balanced depth and accessibility</li>
                    </>
                  )}
                  {selectedDifficulty === "Hard" && (
                    <>
                      <li>• Advanced concepts and complex theories</li>
                      <li>• In-depth analysis and critical thinking</li>
                      <li>• Professional-level content and terminology</li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Form Progress: {topicValue && selectedDifficulty ? "Complete" : "In Progress"}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${topicValue ? "bg-green-500" : "bg-gray-300"}`}></div>
                <span className={topicValue ? "text-green-600" : "text-gray-500"}>Topic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${selectedDifficulty ? "bg-green-500" : "bg-gray-300"}`}></div>
                <span className={selectedDifficulty ? "text-green-600" : "text-gray-500"}>Difficulty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicInput

