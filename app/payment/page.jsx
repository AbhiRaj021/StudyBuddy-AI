"use client"

import Script from "next/script"
import axios from "axios"
import {
  ArrowLeft,
  CreditCard,
  HelpCircle,
  Shield,
  CheckCircle,
  Star,
  Users,
  Zap,
  BookOpen,
  Brain,
  Target,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"

const PaymentPage = () => {
  const { user, isLoaded } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: ""
  })

  useEffect(() => {
    if (isLoaded && user) {
      setFormData(prevData => ({
        ...prevData,
        email: user.primaryEmailAddress?.emailAddress || ""
      }));
    }
  }, [user, isLoaded]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("/api/payment", {
        price: 8.0,
      })

      console.log(response)
      if (response.status === 200) {
        const options = {
          key: "rzp_test_xE3VyHvHxxEzNS",
          amount: response.data.amount,
          currency: response.data.currency,
          order_id: response.data.razorpayOrderId,
          handler: async (response) => {
            const paymentId = response.razorpay_payment_id
            const orderId = response.razorpay_order_id
            const res = await axios.post("/api/payment-confirm", {
              razorpayPaymentId: paymentId,
              razorpayOrderId: orderId,
              userId: user.id,
              plan: "StudyBuddy AI Plus Subscription",
              amount: 999,
            })
            if (res.data.status === "success") {
              console.log(res)
            }
          },
          theme: {
            color: "#F33A6A",
          },
          method: {
            upi: true,
            card: true,
            netbanking: true,
            wallet: true,
            paylater: true,
          },
        }

        if (typeof window !== "undefined" && typeof window.Razorpay !== "undefined") {
          const rzp = new window.Razorpay(options)
          rzp.open()
        } else {
          alert("Razorpay SDK failed to load.")
        }
      }
    } catch (error) {
      console.error("Payment error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const features = [
    { icon: Brain, title: "AI-Powered Learning", description: "Smart content generation" },
    { icon: BookOpen, title: "Unlimited Courses", description: "Create unlimited study materials" },
    { icon: Target, title: "Personalized Quizzes", description: "Adaptive learning experience" },
    { icon: Zap, title: "Instant Flashcards", description: "Quick knowledge retention" },
  ]

  const testimonials = [
    { name: "Abhiraj R.", rating: 5, text: "StudyBuddy AI transformed my learning experience!" },
    { name: "Raju K.", rating: 5, text: "The AI-generated content is incredibly accurate." },
    { name: "Abhi S.", rating: 5, text: "Best investment I've made for my education." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* <ArrowLeft className="w-5 h-5 mr-3 text-gray-600 cursor-pointer hover:text-gray-800" /> */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/StudyBuddyAI.jpg"
                    alt="logo"
                    width={120}
                    height={80}
                    className="w-full h-full object-fill rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2">
                  StudyBuddy AI
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Plan Details & Features */}
          <div className="lg:col-span-1 space-y-6">
            {/* Plan Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">StudyBuddy AI Plus</h2>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">₹8</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Unlock unlimited AI-powered learning</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Subscription</span>
                  <span className="font-medium">₹8.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-600">Tax</span>
                    <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-500">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">₹8.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-900">Join 10,000+ Students</span>
              </div>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center mb-1">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">{testimonial.name}</span>
                    </div>
                    <p className="text-sm text-gray-600">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Subscription</h3>
                <p className="text-gray-600">Start your AI-powered learning journey today</p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-6">
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    Contact Information
                  </h4>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    Payment Method
                  </h4>

                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CreditCard className="w-5 h-5 text-gray-600 mr-3" />
                        <span className="font-medium text-gray-900">Secure Payment via Razorpay</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">UPI</div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Cards</div>
                        <div className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Wallets</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Choose from multiple payment options including UPI, Credit/Debit Cards, Net Banking, and Digital
                      Wallets
                    </p>
                  </div>

                  {/* Security Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>256-bit SSL</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>PCI Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Bank-level Security</span>
                    </div>
                  </div>
                </div>

                {/* Terms and Subscribe Button */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">What you get:</p>
                        <ul className="space-y-1 text-blue-700">
                          <li>• Unlimited AI-generated courses and study materials</li>
                          <li>• Advanced quiz and flashcard features</li>
                          <li>• Priority customer support</li>
                          <li>• Cancel anytime with no hidden fees</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Subscribe Now - ₹8.00/month
                      </div>
                    )}
                  </button>

                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-500">Powered by</span>
                      <span className="text-sm font-semibold text-gray-700">Razorpay</span>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                        Terms of Service
                      </a>
                      <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                        Privacy Policy
                      </a>
                      <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                        Refund Policy
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
    </div>
  )
}

export default PaymentPage
