// "use client";
// import { CourseCountContext } from "@/app/_context/CourseCountContext";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useContext } from "react";

// function SideBar() {
//   const MenuList = [
//     {
//       name: "Dashboard",
//       icon: LayoutDashboard,
//       path: "/dashboard",
//     },
//     {
//       name: "Upgrade",
//       icon: Shield,
//       path: "/dashboard/upgrade",
//     },
//     // {
//     //   name: "Profile",
//     //   icon: UserCircle,
//     //   path: "/dashboard/profile",
//     // },
//   ];

//   const {totalCourse, setTotalCourse} = useContext(CourseCountContext);
//   const currentPath = usePathname();
//   return (
//     <div className="h-screen shadow-md p-5">
//       <div className="flex items-center gap-2">
//         <Image src={"/logo.svg"} alt="logo" height={40} width={40} />
//         <h2 className="font-bold text-2xl">Study Resources</h2>
//       </div>

//       <div className="mt-10">
//         <Link href={'/create'} className="w-full">
//         <Button className="w-full">+ Create New</Button>
//         </Link>
//         <div className="mt-5">
//           {MenuList.map((menu, index) => (
//             <Link href={menu.path} key={index}>
//               <div
//                 className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3 ${
//                   currentPath === menu.path && "bg-slate-200"
//                 }`}
//               >
//                 <menu.icon />
//                 <h2>{menu.name}</h2>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]">
//         <h2 className="text-lg mb-2">Available Credits : {(5-totalCourse)}</h2>
//         <Progress value={(totalCourse/5)*100} />
//         <h2 className="text-sm">{totalCourse} Out of 5 Credits Used</h2>

//         <Link href={'/dashboard/upgrade'} className="text-sm text-primary mt-3">Upgrade to create more</Link>
//       </div>
//     </div>
//   );
// }

// export default SideBar;


"use client"
import { CourseCountContext } from "@/app/_context/CourseCountContext"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LayoutDashboard, Shield, Plus, Crown, Zap, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useState } from "react"

function SideBar({ toggleSidebar }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
  ]

  const { totalCourse, setTotalCourse } = useContext(CourseCountContext)
  const currentPath = usePathname()
  const remainingCredits = 5 - totalCourse
  const progressPercentage = (totalCourse / 5) * 100

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      {/* Mobile Toggle Button - Fixed at bottom left */}
      <div className="h-screen shadow-md p-5 bg-white">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>

        <div className="relative h-full flex flex-col">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
              <Image
                src="/StudyBuddyAI.jpg"
                alt="logo"
                width={120}
                height={80}
                className="w-full h-full object-fill rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StudyBuddy AI
              </h2>
              <p className="text-xs text-gray-500">AI-Powered Learning</p>
            </div>
          </div>

          {/* Create New Button */}
          <Link href={"/create"} className="w-full mb-8" onClick={() => setIsSidebarOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Create New
            </Button>
          </Link>

          {/* Navigation Menu */}
          <div className="flex-1">
            <div className="space-y-3">
              {MenuList.map((menu, index) => {
                const isActive = currentPath === menu.path
                return (
                  <Link href={menu.path} key={index} onClick={() => setIsSidebarOpen(false)}>
                    <div
                      className={`group relative flex gap-4 items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                        ? `${menu.bgColor} border-2 border-opacity-20 shadow-md transform scale-105`
                        : `hover:bg-gray-50 ${menu.hoverColor} hover:transform hover:scale-105`
                        }`}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"></div>
                      )}

                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                          ? `bg-gradient-to-br ${menu.color} text-white shadow-lg`
                          : "bg-gray-100 text-gray-600 group-hover:bg-white group-hover:shadow-md"
                          }`}
                      >
                        <menu.icon className="w-5 h-5" />
                      </div>

                      {/* Menu name */}
                      <h2
                        className={`font-medium transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                          }`}
                      >
                        {menu.name}
                      </h2>

                      {/* Upgrade badge */}
                      {menu.name === "Upgrade" && (
                        <div className="ml-auto">
                          <Crown className="w-4 h-4 text-purple-500" />
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Credits Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-100 rounded-3xl p-6 shadow-lg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-500"></div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  Available Credits
                </h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {remainingCredits}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Usage Progress</span>
                  <span className="text-sm font-medium text-gray-700">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="relative">
                  <Progress value={progressPercentage} className="h-3 bg-gray-200 rounded-full overflow-hidden" />
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Usage Stats */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{totalCourse}</span> out of{" "}
                  <span className="font-semibold text-gray-900">5</span> credits used
                </span>
              </div>

              {/* Upgrade Link */}
              <Link href={"/dashboard/upgrade"}>
                <div className="group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
                  <Crown className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold">Upgrade to create more</span>
                </div>
              </Link>

              {/* Credit status indicator */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${remainingCredits > 0 ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                ></div>
                <span className="text-xs text-gray-500">
                  {remainingCredits > 0 ? `${remainingCredits} credits remaining` : "No credits remaining"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar

