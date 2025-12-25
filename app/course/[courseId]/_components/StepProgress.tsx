// import { Button } from "@/components/ui/button"

// const StepProgress = ({stepCount, setStepCount, data}) => {
//     return (
//         <div className="flex gap-5 items-center">
//             {stepCount != 0 && <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount - 1)}>Previous</Button>}
//             {data?.map((item, index) => (
//                 <div key={index} className={`w-full h-2 rounded-full
//                 ${index < stepCount ? 'bg-primary' : 'bg-gray-200'} `}>
//                 </div>
//             ))}
//             <Button variant="outline" size="sm" onClick={() => setStepCount(stepCount + 1)}>Next</Button>
//         </div>
//     )
// }

// export default StepProgress

"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Sparkles } from "lucide-react"

const StepProgress = ({ stepCount, setStepCount, data }) => {
  const totalSteps = data?.length || 0
  const progressPercentage = totalSteps > 0 ? (stepCount / totalSteps) * 100 : 0
  const isLastStep = stepCount >= totalSteps - 1

  return (
    <div className="w-full bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none"></div>

      <div className="relative">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Progress</h3>
              <p className="text-sm text-gray-600">
                Step {stepCount + 1} of {totalSteps}
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

        {/* Progress Bar Section */}
        <div className="mb-8">
          <div className="relative">
            {/* Background track */}
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Step indicators */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center h-3">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center"
                  style={{ left: `${(index / (totalSteps - 1)) * 100}%` }}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      index < stepCount
                        ? "bg-gradient-to-br from-blue-500 to-purple-500 border-blue-500 shadow-lg"
                        : index === stepCount
                          ? "bg-white border-blue-500 shadow-md"
                          : "bg-white border-gray-300"
                    }`}
                  >
                    {index < stepCount ? (
                      <CheckCircle className="w-3 h-3 text-white" />
                    ) : index === stepCount ? (
                      <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                    ) : (
                      <Circle className="w-3 h-3 text-gray-400" />
                    )}
                  </div>

                  {/* Step number label */}
                  <div
                    className={`absolute -bottom-8 text-xs font-medium transition-colors duration-300 ${
                      index <= stepCount ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Details */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{stepCount}</div>
              <div className="text-xs text-gray-500">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">1</div>
              <div className="text-xs text-gray-500">Current</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-600">{totalSteps - stepCount - 1}</div>
              <div className="text-xs text-gray-500">Remaining</div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
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

          {/* Step Status */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{stepCount} completed</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Step {stepCount + 1}</span>
            </div>
          </div>

          {/* Next Button */}
          <Button
            onClick={() => setStepCount(stepCount + 1)}
            disabled={isLastStep}
            className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLastStep ? "Complete" : "Next"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Completion Message */}
        {isLastStep && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Almost there!</h4>
                <p className="text-sm text-gray-600">You've reached the final step. Complete to finish.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StepProgress
