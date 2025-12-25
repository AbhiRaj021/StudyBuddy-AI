import { BookOpen, MessageSquare, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

const EverythingNeed = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">AI-Powered Study Tools</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-gray-900">to Excel in Your Studies</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Our AI-powered tools work together to create the perfect study environment, helping you learn faster and
            retain more information.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* New & Exclusive Badge */}
          <div className="absolute -top-6 right-4 z-10">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transform rotate-3">
              New & Exclusive
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tutor me Companion Card */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Tutor me Companion</h2>
                  <p className="text-blue-600 font-medium">Voice-to-Voice AI Tutor</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Your personal AI tutor that understands your learning patterns and adapts to your unique study style.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  "Engage in natural voice conversations with your AI tutor",
                  "Personalized learning based on your patterns and preferences",
                  "Interactive whiteboard for visualizing complex concepts",
                  "Work through problems together with real-time feedback",
                  "Available 24/7 whenever you need study assistance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group">
                Try Tutor Me Companion
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Smart Notebooks Card */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Smart Notebooks</h2>
                  <p className="text-purple-600 font-medium">AI Note-Taking Tool</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Transform the way you capture and organize information with intelligent note-taking powered by AI.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  "AI automatically drafts comprehensive notes for you",
                  "Smart organization of key concepts and ideas",
                  "Highlight important information at a glance",
                  "Simplify complex topics into digestible formats",
                  "Focus on understanding rather than just transcribing",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group">
                Create Your Smart Notebook
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Study Experience?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who are already excelling with our AI-powered tools.
            </p>
            <a href="/dashboard">
              <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EverythingNeed
