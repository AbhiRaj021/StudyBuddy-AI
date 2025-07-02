// "use client";
// import { useUser } from '@clerk/nextjs';
// import Image from 'next/image'
// import React from 'react'

// function WelcomeBanner() {
//   const { user } = useUser();
//   return (
//     <div className='p-5 bg-blue-500 w-full text-white rounded-lg flex items-center gap-6'>
//       <Image src={'/lappy.jpg'} alt='laptop' width={100} height={100} />
//       <div>
//         <h2>Hello, {user?.fullName}</h2>
//         <p>Welcome Back, Its time to get back and start learning new course</p>
//       </div>
//     </div>
//   )
// }

// export default WelcomeBanner


"use client"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { Sparkles, BookOpen, TrendingUp, Clock } from "lucide-react"

function WelcomeBanner() {
  const { user } = useUser()

  const currentHour = new Date().getHours()
  const getGreeting = () => {
    if (currentHour < 12) return "Good Morning"
    if (currentHour < 17) return "Good Afternoon"
    return "Good Evening"
  }

  const stats = [
    { label: "Courses", value: "12", icon: BookOpen },
    { label: "Progress", value: "85%", icon: TrendingUp },
    { label: "Study Time", value: "2.5h", icon: Clock },
  ]

  return (
    <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/40 pointer-events-none"></div>

      <div className="relative flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <Image
              src={"/lappy.jpg"}
              alt="laptop"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">{getGreeting()}</span>
          </div>

          {/* Main Greeting */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-gray-900">Hello, </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {user?.fullName || "Student"}
            </span>
            <span className="text-2xl">👋</span>
          </h2>

          {/* Welcome Message */}
          <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-2xl">
            Welcome! It's time to continue your learning journey and unlock new knowledge. Ready to dive into your
            studies?
          </p>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Action Section */}
        {/* <div className="flex flex-col gap-3">
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Continue Learning
          </button>
          <button className="group bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-2xl font-medium border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View Progress
          </button>
        </div> */}
      </div>

      {/* Bottom Achievement Section */}
      {/* <div className="relative mt-8 pt-6 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">🔥</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Make learning streak!</div>
              <div className="text-xs text-gray-500">Keep it up to unlock rewards</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">All systems ready</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default WelcomeBanner
