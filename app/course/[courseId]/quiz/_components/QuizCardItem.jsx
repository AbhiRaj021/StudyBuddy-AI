// import { useState } from "react";

// const QuizCardItem = ({quizQuestions, userSelectedOption}) => {
//     const [selectedOption, setSelectedOption] = useState();
//     return quizQuestions && (
//         <div className="mt-10 p-5">
//             <h2 className="font-medium text-3xl text-center">{quizQuestions?.question}</h2>

//             <div className="grid grid-cols-2 gap-5 mt-6">
//                 {quizQuestions?.options.map((option,index) => (
//                     <h2
//                     onClick={() => {setSelectedOption(option);
//                         userSelectedOption(option);
//                     }}
//                     key={index}
//                     variant="outline"
//                     className={`w-full border rounded-full p-3 px-4 text-center text-lg hover:bg-gray-200 cursor-pointer
//                         ${selectedOption === option ? 'bg-primary text-white' : 'text-gray-500'}`}
//                     >{option}</h2>
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default QuizCardItem

"use client"
import { useState } from "react"
import { CheckCircle, Circle, Sparkles, HelpCircle, Target } from "lucide-react"

const QuizCardItem = ({ quizQuestions, userSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState()

  const optionLabels = ["A", "B", "C", "D"]

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    userSelectedOption(option)
  }

  return (
    quizQuestions && (
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300 opacity-50"></div>

        {/* Question Section */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg mb-8 relative overflow-hidden group">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative">
            {/* Question Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Question</h3>
                <p className="text-sm text-gray-600">Choose the best answer</p>
              </div>
            </div>

            {/* Question Text */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100 mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed text-center">
                {quizQuestions?.question}
              </h2>
            </div>

            {/* Instructions */}
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Select your answer:</span>
            </div>
          </div>
        </div>

        {/* Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizQuestions?.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`group relative bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                selectedOption === option
                  ? "border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-[1.02]"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {/* Background gradient overlay for selected state */}
              {selectedOption === option && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none"></div>
              )}

              <div className="relative flex items-center gap-4">
                {/* Option Label */}
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0 ${
                    selectedOption === option
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                  }`}
                >
                  {optionLabels[index]}
                </div>

                {/* Option Text */}
                <div className="flex-1">
                  <p
                    className={`text-lg font-medium leading-relaxed transition-colors duration-300 ${
                      selectedOption === option ? "text-blue-700" : "text-gray-700 group-hover:text-blue-600"
                    }`}
                  >
                    {option}
                  </p>
                </div>

                {/* Selection Indicator */}
                <div className="flex-shrink-0">
                  {selectedOption === option ? (
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
                      <Circle className="w-3 h-3 text-gray-300 group-hover:text-blue-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

              {/* Selected state shine effect */}
              {selectedOption === option && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-pulse rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Selection Status */}
        {selectedOption && (
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Answer Selected</h4>
                <p className="text-sm text-gray-600">
                  You selected: <span className="font-medium text-green-700">{selectedOption}</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        {!selectedOption && (
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Click on any option above to select your answer</span>
            </div>
          </div>
        )}
      </div>
    )
  )
}

export default QuizCardItem
