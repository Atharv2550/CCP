# Career Connect Portal (CCP)

An intelligent, full-stack recruitment and career acceleration platform built with the MERN stack and powered by Google Gemini AI.

---

## 🚀 Key Features

- **Multi-Role Authentication & Access Control:**
  - Role-based workflows for Job Seekers (Freshers & Experienced), Employers / Recruiters, and System Administrators.
  - Secure JWT authentication with HTTP-only cookies, password hashing with bcrypt, and OTP verification via email.

- **AI-Powered ATS Resume Analyzer:**
  - Evaluates resume compatibility against target job descriptions using Google Gemini AI.
  - Provides scoring, keyword gap analysis, structural insights, and actionable improvement recommendations.

- **AI Dynamic Career Roadmap Generator:**
  - Builds personalized step-by-step career progression plans tailored to a candidate's background and aspirations.

- **Automated Corporate Verification:**
  - Verifies employer legitimacy and Corporate Identification Number (CIN) through government data APIs and AI verification.

- **Interactive Resume Builder & Portfolio:**
  - Multiple professional resume templates (Modern, Corporate, Creative, Tech, Classic) with live preview and PDF generation.

- **Recruitment Pipeline Management:**
  - Job posting, applicant screening, interview scheduling, and status tracking in real time.
  - Automated job alerts and application status notifications.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Redux Toolkit, React Router v7, Lucide Icons
- **Backend:** Node.js, Express.js (v5), MongoDB, Mongoose
- **AI & Integrations:** Google Gemini AI (`@google/genai`), Cloudinary (media/assets), Nodemailer / Brevo (email)

---

## 📁 Project Structure

```
CCP/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components & modals
│   │   ├── pages/              # Role-based pages and views
│   │   ├── redux/              # Redux slices and store configuration
│   │   ├── services/           # Axios API client and services
│   │   └── utils/              # Helper functions and formatters
│   └── package.json
├── server/                     # Backend Express server
│   ├── controllers/            # Route controllers & business logic
│   ├── middleware/             # Auth, file upload, & validation middleware
│   ├── models/                 # Mongoose schemas & data models
│   ├── routes/                 # Express API routes
│   ├── services/               # Gemini AI, Datagov, and scheduler services
│   ├── utils/                  # Email dispatch and seeders
│   └── package.json
├── stitch_career_connect_portal/ # UI/UX design mockups and screens
├── PROJECT_REPORT.md           # Comprehensive technical report
└── README.md
```

---

## ⚙️ Quick Start

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas instance)
- Google Gemini API Key

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Fill in your environment variables in .env
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
cp .env.example .env
# Configure VITE_API_URL if needed (defaults to http://localhost:5000/api)
npm run dev
```

---

## 📄 License
This project is licensed under the ISC License.
