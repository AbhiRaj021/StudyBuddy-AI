import React from 'react';
import { ArrowRight, Users, Globe, MessageCircle } from 'lucide-react';
import Navbar from '../common/Navbar';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          {/* Feature announcement */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              New features: Tutor Me Companion & Smart Notebooks
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform Your Learning
              </span>
              <br />
              <span className="text-gray-900">
                with AI-Powered Study Tools
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your entire study workflow, supercharged by AI. From lecture to exam day, we've got you covered.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a href="/dashboard">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center">
              Start Learning - It's Free!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            
            <button className="px-8 py-4 rounded-full font-semibold text-lg text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              See Features
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20,000+</div>
              <div className="text-gray-600 font-medium">Active Students</div>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">23+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;