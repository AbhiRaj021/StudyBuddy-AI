"use client"

import { ArrowRight, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Search } from "lucide-react"
import { useState } from "react"

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      question: "How does StudyBuddy AI work?",
      answer:
        "StudyBuddy AI uses advanced artificial intelligence to analyze your learning materials and create personalized study content. Simply upload your documents, and our AI will generate flashcards, quizzes, summaries, and practice questions tailored to your specific needs.",
      category: "Getting Started",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption to protect your data both in transit and at rest. Your study materials and personal information are never shared with third parties, and you maintain full control over your content at all times.",
      category: "Security",
    },
    {
      question: "Can I use StudyBuddy AI for any subject?",
      answer:
        "Yes! StudyBuddy AI works across all academic subjects including STEM fields, humanities, languages, business, and more. Our AI is trained on diverse educational content to support learners in virtually any discipline.",
      category: "Features",
    },
    {
      question: "How accurate are the AI-generated materials?",
      answer:
        "Our AI maintains high accuracy rates through continuous learning and validation. However, we always recommend reviewing generated content as part of your study process. The AI serves as a powerful study aid, not a replacement for critical thinking.",
      category: "Features",
    },
    {
      question: "Can I collaborate with others using StudyBuddyAI?",
      answer:
        "Yes! StudyBuddyAI offers collaborative features that allow you to share study sets with classmates, create group study sessions, and work together on projects. You can control permissions and choose what content to share.",
      category: "Collaboration",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial that gives you full access to all StudyBuddyAI features. No credit card required. After the trial, you can choose from our flexible subscription plans that fit your learning needs and budget.",
      category: "Pricing",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-white py-20 px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-500"></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Help Center</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-gray-900">Questions</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you need to know about StudyBuddyAI. Can't find what you're looking for? Contact our support team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((item, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-200">
                      {item.question}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{item.category}</div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                    )}
                  </div>
                </div>
              </button>

              {openItems.has(index) && (
                <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-200">
                  <div className="ml-14 bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or contact support for help.</p>
          </div>
        )}

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Our support team is here to help you get the most out of StudyBuddyAI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
              Browse Help Center
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">{"<"}2min</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
