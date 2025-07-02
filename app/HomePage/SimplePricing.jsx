import { Check, ArrowRight, Sparkles, Crown, Zap, Star } from "lucide-react"

const SimplePricing = () => {
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
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Transparent Pricing</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h1>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Start free, upgrade when you need to. No hidden fees, no surprises. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="group relative bg-white rounded-3xl p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-auto flex flex-col">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free</h2>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-gray-900">₹0</span>
              </div>
              <p className="text-gray-500">Perfect for getting started</p>
            </div>

            <div className="space-y-5 mb-10 flex-grow">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg">5 Credits per month</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg">Basic AI Analysis</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg">Community Support</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg">Basic Templates</span>
              </div>
            </div>

            <a href="/dashboard">
              <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <p className="text-center text-gray-500 text-sm mt-4">No credit card required</p>
          </div>

          {/* Premium Plan */}
          <div className="group relative bg-white rounded-3xl p-10 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-auto flex flex-col transform hover:-translate-y-2">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium</h2>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ₹8
                </span>
                <span className="text-gray-500 text-lg">/ month</span>
              </div>
              <p className="text-gray-500">Everything you need to excel</p>
            </div>

            <div className="space-y-5 mb-10 flex-grow">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Unlimited Credits</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Advanced AI Tools</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Priority 24/7 Support</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Early Access to New Features</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Advanced Analytics & Insights</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 text-lg">Custom Study Plans</span>
              </div>
            </div>

            <a href="/dashboard">
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group">
              Upgrade to Premium
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <p className="text-center text-gray-500 text-sm mt-4">7-day free trial • Cancel anytime</p>
          </div>
        </div>

        {/* Bottom section with guarantees */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Platform?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">30-Day Money Back</h4>
                <p className="text-gray-600 text-sm">Not satisfied? Get a full refund within 30 days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">No Setup Fees</h4>
                <p className="text-gray-600 text-sm">Start immediately with no hidden costs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Premium Support</h4>
                <p className="text-gray-600 text-sm">Get help when you need it from our expert team</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Can I upgrade or downgrade anytime?</h4>
              <p className="text-gray-600">
                Yes! You can change your plan at any time. Changes take effect immediately and we'll prorate any
                charges.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">What happens to my data if I cancel?</h4>
              <p className="text-gray-600">
                Your data remains accessible for 30 days after cancellation. You can export it anytime during this
                period.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer student discounts?</h4>
              <p className="text-gray-600">
                Yes! Students get 50% off Premium plans with a valid .edu email address. Contact support to apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimplePricing
