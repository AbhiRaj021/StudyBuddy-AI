import {
  LayoutGrid,
  Zap,
  Star,
  Clock,
  Settings,
  ArrowRight,
  Users,
  Sparkles,
  GraduationCap,
  Award,
  Rocket,
} from "lucide-react"

const AboutStudyBuddy = () => {
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Student-First Learning</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              About StudyBuddy AI
            </span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Made For Students, By Students. We're revolutionizing the way you learn with AI-powered tools designed for
            the modern educational journey.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Our Mission */}
          <div className="bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>

            {/* Content */}
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                At StudyBuddy AI, we believe that education should be simple, effective, and available to everyone, no matter where they are or what their background is. Our mission is to break down the barriers to learning by offering a platform that uses the power of AI to support students in the best possible way.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We’ve built StudyBuddy AI to make studying not just faster, but smarter and more personalized. Whether you're preparing for exams, trying to understand difficult topics, or just want to improve your skills, our tools are designed to fit your unique learning style.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Founded by a students who personally struggled with the pressures of modern education, we know how hard it can be to stay motivated and find the right resources. That’s why we’re focused on building real, practical tools that work in real-life study situations — not just fancy features that look good on paper.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                At StudyBuddy AI, we’re not just building an app. We’re creating a support system for learners everywhere — one that adapts, guides, and grows with you on your journey toward success.
              </p>


              <a href="/dashboard">
                <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  Start Learning Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Instant note generation */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <LayoutGrid className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant note generation</h3>
              <p className="text-gray-600">
                Transform lectures and readings into comprehensive, structured notes with a single click.
              </p>
            </div>

            {/* Smart flashcards */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart flashcards</h3>
              <p className="text-gray-600">
                AI-generated flashcards that adapt to your learning patterns and optimize retention.
              </p>
            </div>

            {/* AI-powered quizzes */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-pink-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-powered quizzes</h3>
              <p className="text-gray-600">
                Custom quizzes that identify and target your knowledge gaps for efficient studying.
              </p>
            </div>

            {/* Personalized study plans */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-teal-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized study plans</h3>
              <p className="text-gray-600">
                Tailored schedules that optimize your study time based on your goals and deadlines.
              </p>
            </div>

            {/* 24/7 AI tutor assistance - spans 2 columns */}
            <div className="col-span-2 bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl hover:border-orange-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 AI tutor assistance</h3>
              <p className="text-gray-600">
                Get instant help with difficult concepts, homework problems, and exam preparation any time of day or
                night.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">3.5M</div>
            <div className="text-gray-600">Study Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Founded by students who understand the challenges of modern education firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Alex Chen</h3>
              <p className="text-gray-500 mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Computer Science PhD candidate with a passion for accessible education.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Maya Johnson</h3>
              <p className="text-gray-500 mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600 text-sm">
                AI researcher specializing in educational technology and adaptive learning.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">David Park</h3>
              <p className="text-gray-500 mb-3">Head of Product</p>
              <p className="text-gray-600 text-sm">
                Former educator with 10+ years experience in curriculum development.
              </p>
            </div>
          </div>
        </div> */}

        {/* Values Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-10 border border-gray-100 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                We're committed to creating the highest quality educational tools.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
              <p className="text-gray-600 text-sm">We believe quality education should be available to everyone.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">We continuously push the boundaries of educational technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStudyBuddy
