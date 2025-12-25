import { Video, FileText, Volume2, ArrowRight, Sparkles, Clock, Zap, Star, Rocket } from "lucide-react"

const FutureLearning = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-500"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full px-6 py-3 mb-8">
            <Rocket className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Innovation Pipeline</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              The Future of Learning
            </span>
            <br />
            <span className="text-gray-900">Is Almost Here</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience these groundbreaking features. Upgrade now to get early access when they
            launch and revolutionize your learning experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* AI Video Lectures */}
          <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-auto flex flex-col hover:-translate-y-2">
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Clock className="w-3 h-3" />
                Coming Soon
              </div>
            </div>

            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Video className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Video Lectures</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 flex-1">
              Transform your static slides into engaging video lectures. Our AI adds voice-over explanations and visual
              animations to bring your content to life.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">AI-generated voice narration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Dynamic visual animations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Multiple language support</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <div className="text-sm text-blue-700 font-medium">Expected Launch: Q2 2025</div>
            </div>
          </div>

          {/* Folder Foresight */}
          <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-purple-200 transition-all duration-500 h-auto flex flex-col hover:-translate-y-2">
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Clock className="w-3 h-3" />
                Coming Soon
              </div>
            </div>

            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Folder Foresight</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 flex-1">
              Elevate your organization. Get AI-powered study guides for each folder, tailored to your unique learning
              journey and academic goals.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Smart content organization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Personalized study paths</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Progress tracking insights</span>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-4 text-center">
              <div className="text-sm text-purple-700 font-medium">Expected Launch: Q3 2025</div>
            </div>
          </div>

          {/* Custom Podcasts */}
          <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-orange-200 transition-all duration-500 h-auto flex flex-col hover:-translate-y-2">
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Clock className="w-3 h-3" />
                Coming Soon
              </div>
            </div>

            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Custom Podcasts</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 flex-1">
              Learn on the go. Turn your study materials into engaging podcasts, perfect for auditory learners and busy
              schedules.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Natural voice synthesis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Offline listening support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Customizable playback speed</span>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <div className="text-sm text-orange-700 font-medium">Expected Launch: Q4 2025</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Get Early Access?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">First Access</h4>
                <p className="text-gray-600 text-sm">Be the first to try cutting-edge features</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Special Pricing</h4>
                <p className="text-gray-600 text-sm">Lock in early adopter discounts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Shape the Future</h4>
                <p className="text-gray-600 text-sm">Your feedback influences development</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="/dashboard">
            <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg mb-4">
              <span className="flex items-center gap-3">
                Get Early Access
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </a>

          <p className="text-gray-500 text-sm">Join 10,000+ students on the waitlist • No commitment required</p>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Roadmap</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-orange-200"></div>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h4 className="font-semibold text-gray-900">AI Video Lectures</h4>
                    <p className="text-gray-600 text-sm">Q2 2025</p>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <h4 className="font-semibold text-gray-900">Folder Foresight</h4>
                    <p className="text-gray-600 text-sm">Q3 2025</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h4 className="font-semibold text-gray-900">Custom Podcasts</h4>
                    <p className="text-gray-600 text-sm">Q4 2025</p>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutureLearning
