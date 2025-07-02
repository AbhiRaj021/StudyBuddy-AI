// "use client";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import CourseCardItem from "./CourseCardItem";
// import { Button } from "@/components/ui/button";
// import { RefreshCw } from "lucide-react";
// import { CourseCountContext } from "@/app/_context/CourseCountContext";

// function CourseList() {
//   const { user } = useUser();
//   const [courseList, setCourseList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const {totalCourse, setTotalCourse} = useContext(CourseCountContext);
//   useEffect(() => {
//     user && GetCourseList();
//   }, [user]);

//   const GetCourseList = async () => {
//     setLoading(true);
//     const result = await axios.post("/api/courses", {
//       createdBy: user?.primaryEmailAddress?.emailAddress,
//     });
//     console.log(result);
//     setCourseList(result.data.result);
//     setLoading(false);
//     setTotalCourse(result.data.result.length);
//   };
//   return (
//     <div className="mt-10">
//       <h2 className="text-2xl font-bold flex justify-between items-center">Your Study Material
//         <Button variant="outline"
//         onClick={GetCourseList} 
//         className="border-primary text-primary"><RefreshCw />Refresh</Button>
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-5">
//         {loading == false ? courseList.map((course,index) => (
//           <CourseCardItem course={course} key={index}/>
//         ))
//         : [1,2,3,4,5,6].map((item,index) => (
//           <div key={index} className="h-56 w-full bg-slate-200 rounded-lg animate-pulse"></div>
//         ))
//       }
//       </div>
//     </div>
//   )
// }

// export default CourseList;

"use client"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import CourseCardItem from "./CourseCardItem"
import { Button } from "@/components/ui/button"
import { RefreshCw, BookOpen, Sparkles, TrendingUp, Filter, Search, Grid3X3, List } from "lucide-react"
import { CourseCountContext } from "@/app/_context/CourseCountContext"

function CourseList() {
  const { user } = useUser()
  const [courseList, setCourseList] = useState([])
  const [loading, setLoading] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const { totalCourse, setTotalCourse } = useContext(CourseCountContext)

  useEffect(() => {
    user && GetCourseList()
  }, [user])

  const GetCourseList = async () => {
    setLoading(true)
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      })
      console.log(result)
      setCourseList(result.data.result)
      setTotalCourse(result.data.result.length)
    } catch (error) {
      console.error("Error fetching courses:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredCourses = courseList.filter((course) =>
    course.courseLayout?.courseTitle?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="mt-10 relative">
      {/* Decorative background elements */}
      <div className="absolute top-4 right-20 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>

      {/* Header Section */}
      <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg mb-8 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none"></div>

        <div className="relative">
          {/* Title and Stats */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Your Study Material
                </h2>
                <p className="text-gray-600 mt-1">
                  {loading
                    ? "Loading..."
                    : `${filteredCourses.length} course${filteredCourses.length !== 1 ? "s" : ""} available`}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold text-gray-900">{totalCourse}</div>
                    <div className="text-xs text-gray-500">Total Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white shadow-sm"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === "grid" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === "list" ? "bg-white shadow-sm text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Button */}
              {/* <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-2xl px-4 py-3 flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filter
              </Button> */}

              {/* Refresh Button */}
              <Button
                onClick={GetCourseList}
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl px-6 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="relative">
        {!loading && filteredCourses.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search terms or create a new course.</p>
          </div>
        )}

        {!loading && filteredCourses.length === 0 && !searchTerm && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses yet</h3>
            <p className="text-gray-600 mb-4">Start your learning journey by creating your first course.</p>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl px-6 py-3">
              Create Your First Course
            </Button>
          </div>
        )}

        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {loading
            ? [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="bg-white rounded-3xl border-2 border-gray-100 shadow-lg overflow-hidden">
                  {/* Skeleton Header */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>

                  {/* Skeleton Content */}
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded-xl animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-1/2"></div>

                    {/* Skeleton Footer */}
                    <div className="flex justify-between items-center pt-4">
                      <div className="h-8 w-20 bg-gray-200 rounded-xl animate-pulse"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))
            : filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden hover:-translate-y-2"
                >
                  <CourseCardItem course={course} viewMode={viewMode} />
                </div>
              ))}
        </div>
      </div>

      {/* Bottom Stats */}
      {!loading && filteredCourses.length > 0 && (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">
                Showing {filteredCourses.length} of {totalCourse} courses
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">All courses loaded</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseList

