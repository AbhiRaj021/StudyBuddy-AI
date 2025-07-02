import { UserPlus, FileText, Bot, TrendingUp, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

const StartLearning = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-500"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Quick & Easy Setup</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Start Learning
            </span>
            <br />
            <span className="text-gray-900">in Minutes</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Get up and running with our AI-powered learning platform in just 4 simple steps. No complex setup required.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full"></div>

          {/* Progress dots */}
          <div className="hidden lg:flex absolute top-[76px] justify-between items-center w-full px-16">
            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-lg"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Step 1: Sign Up */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 text-center hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>

              <div className="mb-8 mt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserPlus className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Create your account in seconds with just your email. No credit card required to get started.
              </p>

              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Free to start</span>
              </div>
            </div>

            {/* Step 2: Choose Your Material */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-purple-200 transition-all duration-500 text-center hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                2
              </div>

              <div className="mb-8 mt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Material</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Upload YouTube videos, lecture recordings, documents, or slides. We support all major formats.
              </p>

              <div className="flex items-center justify-center gap-2 text-purple-600 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Multiple formats</span>
              </div>
            </div>

            {/* Step 3: Let the AI Do the Rest */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-pink-200 transition-all duration-500 text-center hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                3
              </div>

              <div className="mb-8 mt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-8 h-8 text-pink-600" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let AI Do the Rest</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our AI automatically generates personalized notes, flashcards, quizzes, and interactive study materials.
              </p>

              <div className="flex items-center justify-center gap-2 text-pink-600 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Fully automated</span>
              </div>
            </div>

            {/* Step 4: Track Your Progress */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-green-200 transition-all duration-500 text-center hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                4
              </div>

              <div className="mb-8 mt-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Your Progress</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Monitor your learning journey with detailed analytics, performance insights, and personalized
                recommendations.
              </p>

              <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Real-time insights</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Join Thousands of Successful Students</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">2.5x</div>
                <div className="text-gray-600">Faster Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="/dashboard">
            <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
            <span className="flex items-center gap-3">
              Start Your Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            </button>
          </a>

          <p className="text-gray-500 mt-4 text-sm">No credit card required • Free 7-day trial</p>
        </div>
      </div>
    </div>
  )
}

export default StartLearning
