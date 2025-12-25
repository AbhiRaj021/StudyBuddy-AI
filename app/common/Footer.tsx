import { Check, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-white py-20 px-8 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-32 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                <Image
                  src="/StudyBuddyAI.jpg"
                  alt="logo"
                  width={120}
                  height={80}
                  className="w-full h-full object-fill rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StudyBuddy AI
              </span>
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The new way to study with AI-powered tools designed for modern learners.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Lucknow, UP</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">hello@studybuddy.ai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">+91 (123) 123-4567</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Features</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Pricing</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Testimonials</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Statistics</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Help Center</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">API Docs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Careers</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">Press Kit</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">Get the latest updates and study tips delivered to your inbox.</p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500">No spam, unsubscribe at any time.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">© 2025 StudyBuddy AI</span>
                <Sparkles className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-gray-500 text-sm md:border-l md:border-gray-300 md:pl-4">
                Made for students by students
              </span>
            </div>

            <div className="flex flex-wrap gap-6 lg:gap-8">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
                Affiliate Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-xs text-gray-500">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-xs text-gray-500">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">98%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              All systems operational
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
