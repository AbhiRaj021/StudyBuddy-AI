"use client"
import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";
import { CourseCountContext } from "../_context/CourseCountContext";
import { Menu, X } from "lucide-react";

function DashboardLayout({ children }) {
  const [totalCourse, setTotalCourse] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <CourseCountContext.Provider value={{totalCourse, setTotalCourse}}>
      <div>
        {/* Desktop Sidebar */}
        <div className="md:w-64 hidden md:block fixed">
          <SideBar />
        </div>

        {/* Mobile Sidebar */}
        <div className={`md:hidden fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 bg-white w-64`}>
          <SideBar toggleSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed bottom-4 left-4 z-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Overlay */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="md:ml-64">
          <DashboardHeader />
          <div className="p-10">
            {children}
          </div>
        </div>
      </div>
    </CourseCountContext.Provider>
  );
}

export default DashboardLayout;
