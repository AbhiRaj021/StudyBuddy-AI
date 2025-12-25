// "use client";
// import React, { useState } from "react";
// import SelectOption from "./_components/SelectOption";
// import { Button } from "@/components/ui/button";
// import TopicInput from "./_components/TopicInput";
// import { v4 as uuidv4 } from "uuid";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import { Loader } from "lucide-react";
// import { useRouter } from "next/navigation";

// function Create() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     courseType: "",
//     topic: "",
//     difficultyLevel: "",
//   });
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleUserInput = (fieldName, fieldValue) => {
//     setFormData((prev) => {
//       const updatedData = { ...prev, [fieldName]: fieldValue };
//       console.log("📝 Updated Form Data:", updatedData); // Debugging
//       return updatedData;
//     });
//   };
//   const GenerateCourseOutline = async () => {
//     const courseId = uuidv4();
//     setLoading(true);
  
//     const validCourseTypes = ["Exam", "Job Interview", "Practice", "Coding Prep", "Other"];
  
//     if (
//       !formData.courseType ||
//       !validCourseTypes.includes(formData.courseType) ||
//       !formData.topic ||
//       !formData.difficultyLevel
//     ) {
//       alert("Please fill in all fields and select a valid Course Type.");
//       setLoading(false);
//       return;
//     }
  
//     const userEmail = user?.primaryEmailAddress?.emailAddress;
//     if (!userEmail) {
//       alert("User email is missing. Please log in.");
//       setLoading(false);
//       return;
//     }
  
//     const payload = {
//       courseId,
//       courseType: formData.courseType,
//       topic: formData.topic,
//       difficultyLevel: formData.difficultyLevel,
//       createdBy: userEmail,
//     };
  
//     console.log("📡 Final Payload Before Sending:", JSON.stringify(payload, null, 2));
  
//     try {
//       const result  = await axios.post("/api/generate-course-outline", payload);
//       console.log(result)
  
//       if (!result) {
//         throw new Error("No response from API");
//       }
  
//       console.log("✅ API Response:", result);
//       alert("Course outline generated successfully!");
//       router.replace("/dashboard");
//     } catch (error) {
//       console.error("🔥 API Error:", error);
//       alert(`API Error: ${error.response?.error || error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };  
  

//   return (
//     <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
//       <h2 className="font-bold text-4xl text-primary">
//         Start Building Your Personal Study Material
//       </h2>
//       <p className="text-gray-500 text-lg">
//         Fill All details in order to generate study material for your next
//         project
//       </p>

//       <div className="mt-10">
//         {step === 0 ? (
//           <SelectOption
//             selectedCourseType={(value) => handleUserInput("courseType", value)}
//           />
//         ) : (
//           <TopicInput
//             setTopic={(value) => {
//               console.log("✅ Selected Topic:", value);
//               handleUserInput("topic", value);
//             }}
//             setDifficultyLevel={(value) => {
//               console.log("✅ Selected Difficulty Level:", value);
//               handleUserInput("difficultyLevel", value);
//             }}
//           />
//         )}
//       </div>

//       <div className="flex justify-between w-full mt-32">
//         {step != 0 ? (
//           <Button variant="outline" onClick={() => setStep(step - 1)}>
//             Prev
//           </Button>
//         ) : (
//           "-"
//         )}
//         {step == 0 ? (
//           <Button onClick={() => setStep(step + 1)}>Next</Button>
//         ) : (
//           <Button onClick={GenerateCourseOutline} disabled={loading}>
//             {loading ? <Loader className="animate-spin" /> : "Generate"}
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Create;

"use client"
import React, { useState } from "react"
import SelectOption from "./_components/SelectOption"
import { Button } from "@/components/ui/button"
import TopicInput from "./_components/TopicInput"
import { v4 as uuidv4 } from "uuid"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { Loader, ArrowLeft, ArrowRight, Sparkles, BookOpen, Target, Zap, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

function Create() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    courseType: "",
    topic: "",
    difficultyLevel: "",
  })
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [fieldName]: fieldValue }
      console.log("📝 Updated Form Data:", updatedData)
      return updatedData
    })
  }

  const GenerateCourseOutline = async () => {
    const courseId = uuidv4()
    setLoading(true)

    const validCourseTypes = ["Exam", "Job Interview", "Practice", "Coding Prep", "Other"]

    if (
      !formData.courseType ||
      !validCourseTypes.includes(formData.courseType) ||
      !formData.topic ||
      !formData.difficultyLevel
    ) {
      alert("Please fill in all fields and select a valid Course Type.")
      setLoading(false)
      return
    }

    const userEmail = user?.primaryEmailAddress?.emailAddress
    if (!userEmail) {
      alert("User email is missing. Please log in.")
      setLoading(false)
      return
    }

    const payload = {
      courseId,
      courseType: formData.courseType,
      topic: formData.topic,
      difficultyLevel: formData.difficultyLevel,
      createdBy: userEmail,
    }

    console.log("📡 Final Payload Before Sending:", JSON.stringify(payload, null, 2))

    try {
      const result = await axios.post("/api/generate-course-outline", payload)
      console.log(result)

      if (!result) {
        throw new Error("No response from API")
      }

      console.log("✅ API Response:", result)
      alert("Course outline generated successfully!")
      router.replace("/dashboard")
    } catch (error) {
      console.error("🔥 API Error:", error)
      alert(`API Error: ${error.response?.error || error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    {
      title: "Choose Course Type",
      description: "Select what type of study material you want to create",
      icon: Target,
    },
    {
      title: "Define Your Topic",
      description: "Specify your topic and difficulty level",
      icon: BookOpen,
    },
  ]

  const progressPercentage = ((step + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-white py-20 px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-500"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">AI-Powered Course Creation</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Start Building Your
            </span>
            <br />
            <span className="text-gray-900">Personal Study Material</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Fill all details in order to generate personalized study material for your next learning project
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none"></div>

            <div className="relative">
              {/* Progress Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Course Creation Progress</h3>
                    <p className="text-sm text-gray-600">
                      Step {step + 1} of {steps.length}
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

              {/* Progress Bar */}
              <div className="relative mb-6">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Steps Indicator */}
              <div className="flex justify-between">
                {steps.map((stepInfo, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        index <= step
                          ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {index < step ? <CheckCircle className="w-5 h-5" /> : <stepInfo.icon className="w-5 h-5" />}
                    </div>
                    <div className="hidden md:block">
                      <div
                        className={`font-medium transition-colors duration-300 ${
                          index <= step ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {stepInfo.title}
                      </div>
                      <div className="text-xs text-gray-500">{stepInfo.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl relative overflow-hidden mb-12">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/20 pointer-events-none"></div>

          <div className="relative">
            {/* Current Step Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                {React.createElement(steps[step].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{steps[step].title}</h2>
              <p className="text-gray-600">{steps[step].description}</p>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px] flex items-center justify-center">
              {step === 0 ? (
                <SelectOption selectedCourseType={(value) => handleUserInput("courseType", value)} />
              ) : (
                <TopicInput
                  setTopic={(value) => {
                    console.log("✅ Selected Topic:", value)
                    handleUserInput("topic", value)
                  }}
                  setDifficultyLevel={(value) => {
                    console.log("✅ Selected Difficulty Level:", value)
                    handleUserInput("difficultyLevel", value)
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
          <div className="flex justify-between items-center">
            {/* Previous Button */}
            {step !== 0 ? (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Previous
              </Button>
            ) : (
              <div></div>
            )}

            {/* Form Data Summary */}
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              {formData.courseType && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Type: {formData.courseType}</span>
                </div>
              )}
              {formData.topic && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Topic: {formData.topic.substring(0, 20)}...</span>
                </div>
              )}
              {formData.difficultyLevel && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Level: {formData.difficultyLevel}</span>
                </div>
              )}
            </div>

            {/* Next/Generate Button */}
            {step === 0 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!formData.courseType}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                onClick={GenerateCourseOutline}
                disabled={loading || !formData.topic || !formData.difficultyLevel}
                className="group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Generate Course
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Our AI will guide you through each step to create the perfect study material.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Create

