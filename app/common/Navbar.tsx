"use client"
import { CheckCircle, ChevronDown, Menu, X, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (section) => {
    // Close mobile menu if open
    setMobileMenuOpen(false)

    // Navigate to homepage first if we're not there
    if (window.location.pathname !== '/') {
      router.push('/')
    }

    // Wait for DOM to update
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const dropdownMenus = {
    Features: [
      { name: "Core Learning Tools", description: "AI-powered notes and flashcards", onClick: () => handleNavigation('everythingNeed') },
      { name: "Instant Knowledge Capture", description: "Transform any content instantly", onClick: () => handleNavigation('everythingNeed') },
      { name: "Advanced Learning Features", description: "Personalized study techniques", onClick: () => handleNavigation('everythingNeed') },
    ],
    Pricing: [
      { name: "Free Plan", description: "Get started with basic features", onClick: () => handleNavigation('simplePricing') },
      { name: "Premium Plan", description: "Unlock all advanced features", onClick: () => handleNavigation('simplePricing') },
    ],
    FAQ: [
      { name: "Common Questions", description: "Find answers quickly", onClick: () => handleNavigation('faq') },
      { name: "Support", description: "Get help when you need it", onClick: () => handleNavigation('faq') },
    ],
    "About Us": [
      { name: "Our Story", description: "Learn about our mission", onClick: () => handleNavigation('aboutStudyBuddy') },
      { name: "Team", description: "Meet the people behind StudyBuddy", onClick: () => handleNavigation('aboutStudyBuddy') },
      { name: "Contact", description: "Get in touch with us", onClick: () => handleNavigation('aboutStudyBuddy') },
    ],
    Blog: [
      { name: "Latest Posts", description: "Recent articles and updates" },
      { name: "Featured Articles", description: "Our most popular content" },
    ],
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
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
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl px-2 py-2 border border-gray-100 shadow-sm">
              {Object.keys(dropdownMenus).map((item, index) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${hoveredItem === item
                      ? "bg-white text-blue-600 shadow-md transform scale-105"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/50"
                      }`}
                  >
                    <span>{item}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${hoveredItem === item ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {hoveredItem === item && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-blue-500" />
                          {item}
                        </h3>
                      </div>
                      {dropdownMenus[item].map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            subItem.onClick && subItem.onClick()
                          }}
                          className="group block px-4 py-3 hover:bg-blue-50 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center space-x-4">
            <a href="/dashboard">
              <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {Object.keys(dropdownMenus).map((item) => (
                <div key={item} className="space-y-1">
                  <button
                    onClick={() => setHoveredItem(hoveredItem === item ? null : item)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                  >
                    <span className="font-medium">{item}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${hoveredItem === item ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {hoveredItem === item && (
                    <div className="pl-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                      {dropdownMenus[item].map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a href="/dashboard">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar