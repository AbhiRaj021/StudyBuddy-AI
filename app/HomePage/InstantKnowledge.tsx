import { Mic, Video, ArrowRight, Sparkles, Clock, BookOpen } from "lucide-react"

const InstantKnowledge = () => {
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
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Real-Time Processing</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Instant Knowledge
            </span>
            <br />
            <span className="text-gray-900">Capture</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Transform any audio or video content into structured, searchable study materials with the power of AI.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Lecture Transcription Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-3">
              {/* Header Section */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Lecture Transcription</h2>
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">AI-Powered</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Transform your lecture recordings into searchable, organized notes with our advanced AI transcription.
                  Extract key concepts, add visual summaries, and even generate quiz questions.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time transcription with 99% accuracy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Automatic key concept extraction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Generate quizzes and flashcards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Smart chapter organization</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">2hrs</div>
                      <div className="text-sm text-gray-600">Avg. Processing Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">99%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                Transcribe Now
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* YouTube Learning Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-3">
              {/* Header Section */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">YouTube Learning</h2>
                  <div className="flex items-center gap-2 text-purple-600 font-medium">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">Video-to-Notes</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Turn any educational video into powerful study material. Our AI extracts key insights and creates
                  comprehensive notes from your favorite YouTube content.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Extract key insights automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Create timestamped summaries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Generate study guides</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Multi-language support</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">5min</div>
                      <div className="text-sm text-gray-600">Avg. Processing Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">100K+</div>
                      <div className="text-sm text-gray-600">Videos Processed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                Convert Videos
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature Highlight */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Knowledge Capture Tools?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">AI-Powered</h4>
                <p className="text-gray-600 text-sm">Advanced machine learning for accurate content extraction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Process hours of content in just minutes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Study Ready</h4>
                <p className="text-gray-600 text-sm">Instantly create notes, quizzes, and flashcards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstantKnowledge