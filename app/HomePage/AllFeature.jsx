import { ArrowRight, Sparkles, Zap, Target, Users, CheckCircle } from "lucide-react"

const AllFeature = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-500"></div>

      {/* Large decorative shape */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 transform translate-x-1/2 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main content container */}
        <div className="relative bg-white rounded-3xl p-12 md:p-16 border-2 border-gray-100 shadow-2xl text-center max-w-5xl mx-auto backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce delay-300"></div>

          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Complete Learning Ecosystem</span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              All Features Work Together
            </span>
            <br />
            <span className="text-gray-900">Seamlessly</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Every tool is designed to complement each other, creating a comprehensive learning experience that adapts to
            your unique needs and accelerates your academic success.
          </p>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Personalized</div>
                <div className="text-sm text-gray-600">Adapts to your style</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-purple-50 rounded-2xl p-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">AI-Powered</div>
                <div className="text-sm text-gray-600">Smart automation</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 rounded-2xl p-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Proven</div>
                <div className="text-sm text-gray-600">50K+ students</div>
              </div>
            </div>
          </div>

          {/* Benefits list */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Seamless integration across all tools</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Real-time progress synchronization</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Unified learning dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Cross-platform accessibility</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <a href="/dashboard">
              <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
              <span className="flex items-center gap-3">
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              </button>
            </a>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free 7-day trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>

        {/* Bottom stats section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2.5x</div>
            <div className="text-gray-600">Faster Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
        </div>

        {/* Final testimonial */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl text-gray-600 italic mb-4">
            "This platform completely transformed how I study. The way all the features work together is incredible -
            it's like having a personal learning assistant that knows exactly what I need."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Abhiraj</div>
              <div className="text-sm text-gray-600">Computer Science Student, NIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllFeature
