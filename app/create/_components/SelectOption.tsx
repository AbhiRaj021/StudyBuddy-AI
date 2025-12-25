// import Image from "next/image";
// import React, { useState } from "react";

// function SelectOption({selectedCourseType}) {
//   const Options = [
//     {
//       name: "Exam",
//       icon: "/exam.png",
//     },
//     {
//       name: "Job Interview",
//       icon: "/job.png",
//     },
//     {
//       name: "Practice",
//       icon: "/practice.png",
//     },
//     {
//       name: "Coding Prep",
//       icon: "/code.png",
//     },
//     {
//       name: "Other",
//       icon: "/knowledge.png",
//     },
//   ];

//   const [selectedOption, setSelectedOption] = useState("");
//   return (
//     <div>
//       <h2 className="text-center mb-2 text-lg">
//         For Which you want to create your personal study material?
//       </h2>
//       <div className="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         {Options.map((option, index) => (
//           <div
//             key={index}
//             className={`p-4 flex flex-col items-center justify-between border rounded-lg hover:border-primary cursor-pointer ${option?.name === selectedOption ? "border-primary" : ""}`}
//             onClick={() => {
//               console.log("✅ Selected Option:", option.name); // Debugging
//               setSelectedOption(option.name);
//               selectedCourseType(option.name);
//             }}
//           >
//             <Image src={option.icon} alt={option.name} width={50} height={50} />
//             <h2 className="text-sm mt-2">{option.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SelectOption;

"use client"
import Image from "next/image"
import { useState } from "react"
import { CheckCircle, Sparkles, Info } from "lucide-react"

function SelectOption({ selectedCourseType }) {
  const Options = [
    {
      name: "Exam",
      icon: "/exam.png",
      description: "Prepare for tests and exams with structured study materials",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
    },
    {
      name: "Job Interview",
      icon: "/job.png",
      description: "Get ready for interviews with targeted preparation materials",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
    },
    {
      name: "Practice",
      icon: "/practice.png",
      description: "Enhance your skills with practical exercises and examples",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
    },
    {
      name: "Coding Prep",
      icon: "/code.png",
      description: "Master programming concepts and coding challenges",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-300",
    },
    {
      name: "Other",
      icon: "/knowledge.png",
      description: "Create custom study materials for any other purpose",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
    },
  ]

  const [selectedOption, setSelectedOption] = useState("")
  const [hoveredOption, setHoveredOption] = useState("")

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">What type of study material do you want to create?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the purpose of your study material to help us generate the most relevant content for your needs
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Options.map((option, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
              option.name === selectedOption
                ? `${option.bgColor} ${option.borderColor} shadow-lg transform scale-[1.02]`
                : "border-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1"
            }`}
            onClick={() => {
              console.log("✅ Selected Option:", option.name)
              setSelectedOption(option.name)
              selectedCourseType(option.name)
            }}
            onMouseEnter={() => setHoveredOption(option.name)}
            onMouseLeave={() => setHoveredOption("")}
          >
            {/* Background gradient overlay */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                option.name === selectedOption ? "opacity-100" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50"></div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color} transform ${
                  option.name === selectedOption || option.name === hoveredOption ? "scale-x-100" : "scale-x-0"
                } transition-transform duration-300 origin-left`}
              ></div>
            </div>

            {/* Content */}
            <div className="relative p-6">
              {/* Selection indicator */}
              {option.name === selectedOption && (
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              {/* Icon and Name */}
              <div className="flex flex-col items-center text-center mb-4">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    option.name === selectedOption
                      ? `bg-gradient-to-br ${option.color} shadow-lg`
                      : "bg-gray-100 group-hover:bg-white group-hover:shadow-md"
                  }`}
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={option.icon || "/placeholder.svg"}
                      alt={option.name}
                      fill
                      className={`object-contain transition-transform duration-300 ${
                        option.name === selectedOption || option.name === hoveredOption ? "scale-110" : ""
                      }`}
                    />
                  </div>
                </div>
                <h3
                  className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                    option.name === selectedOption
                      ? `bg-gradient-to-r ${option.color} bg-clip-text text-transparent`
                      : "text-gray-900 group-hover:text-gray-700"
                  }`}
                >
                  {option.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">{option.description}</p>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                  option.name === hoveredOption && option.name !== selectedOption ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                  <Sparkles className="w-3 h-3" />
                  <span>Click to select</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selection Summary */}
      {selectedOption && (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-blue-600" />
            <div>
              <span className="font-medium text-gray-900">Selected: </span>
              <span className="text-blue-600 font-semibold">{selectedOption}</span>
              <p className="text-sm text-gray-600 mt-1">
                {Options.find((opt) => opt.name === selectedOption)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      {!selectedOption && (
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Please select one option to continue</p>
        </div>
      )}
    </div>
  )
}

export default SelectOption

