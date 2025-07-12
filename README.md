# 🎓 StudyBuddy AI - AI-Powered Learning Platform

<div align="center">
  <img src="public/StudyBuddyAI.jpg" alt="StudyBuddy AI Logo" width="200" height="200" style="border-radius: 20px;">
  
  <h3>Transform Your Learning Experience with Artificial Intelligence</h3>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-Latest-blue?logo=tailwindcss)](https://tailwindcss.com/)
  [![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-orange)](https://ai.google.dev/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com/)
  
  [🌟 Live Demo](https://studybuddy-ai.vercel.app) | [📖 Documentation](#documentation) | [🚀 Features](#features)
</div>

## 🌟 Overview

StudyBuddy AI is a revolutionary learning platform that leverages artificial intelligence to create personalized study materials. Built for students, by students, it transforms any topic into comprehensive learning resources including notes, flashcards, quizzes, and interactive Q&A sessions.

### ✨ Key Highlights

- 🤖 **AI-Powered Content Generation** - Create study materials from any topic using Google Gemini AI
- 📚 **Multi-Format Learning** - Notes, flashcards, quizzes, and Q&A sessions
- 🎯 **Personalized Experience** - Adaptive learning paths based on your progress
- 🔐 **Secure Authentication** - Powered by Clerk for seamless user management
- 💳 **Flexible Pricing** - Free tier with premium subscription options
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

## 🚀 Features

### 🎯 Core Learning Tools

| Feature | Description | Technology |
|---------|-------------|------------|
| **AI Course Generation** | Create comprehensive courses from any topic | Google Gemini AI |
| **Smart Notes** | Auto-generated, structured notes with key concepts | AI Content Processing |
| **Interactive Flashcards** | Spaced repetition algorithm for better retention | React Carousel |
| **Adaptive Quizzes** | Personalized quizzes that target knowledge gaps | AI Question Generation |
| **Q&A Sessions** | Interactive question-answer cards for active learning | Dynamic Content |

### 🎨 User Experience

- **Modern UI/UX** - Clean, intuitive interface built with Tailwind CSS
- **Dark/Light Mode** - Customizable themes for comfortable studying
- **Progress Tracking** - Visual progress indicators and statistics
- **Mobile Responsive** - Seamless experience across all devices
- **Fast Loading** - Optimized for speed with Next.js 14

### 🔧 Technical Features

- **Real-time Content Generation** - Instant AI-powered content creation
- **Background Processing** - Inngest for handling long-running tasks
- **Secure Payments** - Razorpay integration for subscriptions
- **Database Management** - Drizzle ORM with PostgreSQL
- **API Routes** - RESTful API design with Next.js App Router

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Authentication**: Clerk
- **AI Integration**: Google Gemini API
- **Background Jobs**: Inngest
- **Payment Processing**: Razorpay

### Deployment & DevOps
- **Hosting**: Vercel
- **Database**: Neon PostgreSQL
- **Environment**: Production-ready configuration
- **Monitoring**: Built-in analytics and error tracking

## 📁 Project Structure

```
studybuddy-ai/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   ├── api/                      # API routes
│   ├── course/                   # Course-related pages
│   ├── create/                   # Course creation
│   ├── dashboard/                # User dashboard
│   ├── HomePage/                 # Landing page components
│   ├── common/                   # Shared components
│   └── payment/                  # Payment processing
├── components/                   # Reusable UI components
│   └── ui/                       # Base UI components
├── configs/                      # Configuration files
│   ├── db.js                     # Database configuration
│   ├── schema.js                 # Database schema
│   └── AiModel.js                # AI model configurations
├── inngest/                      # Background job functions
├── lib/                          # Utility functions
├── public/                       # Static assets
└── styles/                       # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (Neon recommended)
- Google Gemini AI API key
- Clerk authentication setup
- Razorpay account (for payments)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AbhiRaj021/StudyBuddy-AI.git
cd StudyBuddy-AI
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env.local` file with the following variables:
```env
# Database
NEXT_PUBLIC_DATABASE_CONNECTION_STRING=postgresql://username:password@host/database

# Google Gemini AI
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Razorpay Payment
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key

# Inngest (Optional for background jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

4. **Database Setup**
```bash
# Generate database schema
npm run db:generate

# Push schema to database
npm run db:push
```

5. **Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application running.

## 🎯 Usage Guide

### Creating Your First Course

1. **Sign Up/Login** - Use Clerk authentication
2. **Navigate to Create** - Click "Create Course" from dashboard
3. **Choose Course Type** - Select from Exam, Job Interview, Practice, Coding, or Other
4. **Enter Topic** - Describe what you want to learn
5. **Set Difficulty** - Choose Easy, Medium, or Hard
6. **Generate Content** - AI creates comprehensive study materials
7. **Study & Practice** - Access notes, flashcards, quizzes, and Q&A

### Study Materials Overview

- **📝 Notes/Chapters** - Structured learning content with key concepts
- **🗂️ Flashcards** - Interactive cards for memory retention
- **📊 Quizzes** - Multiple-choice questions with immediate feedback
- **❓ Q&A Sessions** - Question-answer format for active learning

## 🔧 API Reference

### Core Endpoints

```javascript
// Generate course outline
POST /api/generate-course-outline
{
  "courseId": "uuid",
  "topic": "Machine Learning Basics",
  "courseType": "Exam",
  "difficultyLevel": "Medium",
  "createdBy": "user@example.com"
}

// Create study content
POST /api/study-type-content
{
  "courseId": "uuid",
  "type": "flashcards",
  "chapters": "Introduction, Algorithms, Applications"
}

// Retrieve study materials
POST /api/study-type
{
  "courseId": "uuid",
  "studyType": "ALL" // or specific type
}
```

## 💳 Pricing

### Free Tier
- ✅ 5 courses per month
- ✅ Basic study materials
- ✅ Core features access

### StudyBuddy AI Plus (₹8/month)
- ✅ Unlimited courses
- ✅ Advanced AI features
- ✅ Priority support
- ✅ Enhanced content quality
- ✅ Progress analytics

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/AbhiRaj021/StudyBuddy-AI/issues)
- **Discussions**: [GitHub Discussions](https://github.com/AbhiRaj021/StudyBuddy-AI/discussions)
- **Email**: abhirajrajput021@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** - For powerful AI capabilities
- **Clerk** - For seamless authentication
- **Vercel** - For excellent deployment platform
- **Neon** - For reliable PostgreSQL hosting
- **Razorpay** - For secure payment processing

## 📊 Project Stats

- **🌟 Features**: 15+ AI-powered learning tools
- **📱 Responsive**: Works on all devices
- **🚀 Performance**: Optimized for speed
- **🔒 Security**: Enterprise-grade security
- **📈 Scalable**: Built for growth

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AbhiRaj021">Abhiraj Rajput</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>