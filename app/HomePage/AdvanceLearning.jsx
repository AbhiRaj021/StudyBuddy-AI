import { Lightbulb, MessageCircle, ArrowRight, Sparkles, Brain, Clock, Users, Target } from "lucide-react"

const AdvanceLearning = () => {
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full px-6 py-3 mb-8">
            <Brain className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Next-Level Learning</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Advanced Learning
            </span>
            <br />
            <span className="text-gray-900">Features</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Unlock your full potential with cutting-edge AI technology that adapts to your unique learning style and
            accelerates your academic success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Study Techniques Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-3">
              {/* Header Section */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Study Techniques</h2>
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Personalized Methods</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Unlock your full potential with AI-guided learning methods. From Feynman Technique to Mind Mapping,
                  master proven study strategies personalized for you.
                </p>

                {/* Techniques List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Feynman Technique for deep understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Mind mapping for visual learners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Spaced repetition optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Active recall strategies</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">15+</div>
                      <div className="text-sm text-gray-600">Study Methods</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">3x</div>
                      <div className="text-sm text-gray-600">Learning Speed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                Improve Your Method
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 24/7 AI Tutor Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-3">
              {/* Header Section */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">24/7 AI Tutor</h2>
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Always Available</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Meet your tireless study companion. Our AI tutor understands your materials deeply and explains
                  complex topics in ways that click for you.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Instant answers to any question</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Personalized explanations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Step-by-step problem solving</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Multi-subject expertise</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-gray-600">Availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">1M+</div>
                      <div className="text-sm text-gray-600">Questions Answered</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Benefits Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-8 border border-gray-100 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Our Advanced Features Make a Difference
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Smart Adaptation</h4>
                <p className="text-gray-600 text-sm">AI learns your style and adapts accordingly</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Methods</h4>
                <p className="text-gray-600 text-sm">Based on cognitive science research</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized</h4>
                <p className="text-gray-600 text-sm">Tailored to your unique learning needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Results Driven</h4>
                <p className="text-gray-600 text-sm">Measurable improvement in performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvanceLearning
