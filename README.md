<div align="center">

# 🍬 SugarSense

### Your Intelligent Diabetes Management Companion

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-SugarSense-00C853?style=for-the-badge&logoColor=white)](https://sugarsense-app.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Doughnut.png" alt="Doughnut" width="100" />

**Empowering diabetics with AI-driven insights, personalized health tracking, and smart lifestyle recommendations.**

[🚀 Live Demo](https://sugarsense-app.vercel.app/) • [📖 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [⚡ Quick Start](#-quick-start)

</div>

---

## ✨ Overview

**SugarSense** is a comprehensive diabetes management platform that combines cutting-edge AI technology with intuitive health tracking tools. Whether you're newly diagnosed or have been managing diabetes for years, SugarSense provides personalized insights to help you maintain optimal blood sugar levels and live a healthier life.

<div align="center">

| 📊 Track | 🤖 AI Coach | 🛒 Store | 📈 Reports |
|:---:|:---:|:---:|:---:|
| Log blood sugar readings | Get personalized advice | Shop diabetic-friendly products | View detailed analytics |

</div>

---

## 🎯 Features

### 🩺 **Health Tracking**
- **Blood Sugar Logging** - Easy-to-use interface for tracking glucose levels
- **Medication Management** - Keep track of your medications and schedules
- **Visual Charts** - Beautiful, interactive charts to visualize your health trends
- **Comprehensive Reports** - Detailed reports to share with your healthcare provider

### 🤖 **AI-Powered Assistance**
- **ChatpataAI** - Your personal AI health companion powered by Google's Gemini AI
- **AI Coach** - Get personalized lifestyle and diet recommendations
- **Smart Chatbot** - 24/7 assistance for your diabetes-related questions
- **Today's Plan** - AI-generated daily health plans tailored to you

### 🛍️ **Diabetes-Friendly Store**
- **Curated Products** - Shop verified diabetic-friendly food and supplies
- **3D Product Viewer** - Interactive 3D visualization of products
- **Easy Checkout** - Seamless shopping experience
- **Order Tracking** - Keep track of all your orders

### 👤 **Personalized Experience**
- **Patient Intake Form** - Comprehensive onboarding for personalized care
- **User Profiles** - Manage your health information securely
- **Theme Toggle** - Dark/Light mode for comfortable viewing
- **Responsive Design** - Works beautifully on all devices

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **3D Graphics** | ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white) ![React Three Fiber](https://img.shields.io/badge/R3F-000000?style=flat-square&logo=threedotjs&logoColor=white) |
| **Backend** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) ![Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black) |
| **AI/ML** | ![Google AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=flat-square&logo=google&logoColor=white) |
| **Charts** | ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white) |

</div>

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

```bash
# Clone the repository
git clone https://github.com/Ashurai84/Sugarsense.git

# Navigate to the project directory
cd Sugarsense/project\ 2

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Firebase and Gemini AI credentials

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

---

## 📁 Project Structure

```
Sugarsense/
├── project 2/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── AICoach.tsx
│   │   │   ├── ChatpataAI.tsx
│   │   │   ├── Store.tsx
│   │   │   └── ...
│   │   ├── context/        # React Context providers
│   │   ├── lib/            # Firebase & Gemini setup
│   │   ├── styles/         # Global styles
│   │   └── utils/          # Utility functions
│   ├── functions/          # Firebase Cloud Functions
│   └── public/             # Static assets
```

---

## 🚀 Deployment

The application is deployed on **Vercel** for optimal performance and reliability.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ashurai84/Sugarsense)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💖 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powering our AI features
- [Firebase](https://firebase.google.com/) for backend infrastructure
- [Vercel](https://vercel.com/) for hosting
- All the amazing open-source libraries that made this possible

---

<div align="center">

### 🌟 Star this repo if you found it helpful!

Made with ❤️ by [Ashurai84](https://github.com/Ashurai84)

[![GitHub followers](https://img.shields.io/github/followers/Ashurai84?style=social)](https://github.com/Ashurai84)

</div>
