# 🩺 MedEcho — AI-Powered Voice Healthcare Assistant

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge" />
  <img src="https://img.shields.io/badge/OpenRouter-AI-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vapi-Voice%20AI-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AssemblyAI-Speech%20to%20Text-red?style=for-the-badge" />
</p>

<p align="center">
  <strong>Consult specialized AI doctors through natural voice conversations.</strong><br>
  Get intelligent doctor recommendations, live speech transcription, and AI-generated consultation reports—all in one platform.
</p>

---

## 🌟 Overview

**MedEcho** is an AI-powered healthcare assistant that enables users to consult specialized AI doctor agents through real-time voice conversations.

Instead of searching symptoms manually, users simply describe their health concerns. MedEcho intelligently recommends the most suitable medical specialist, connects them to an AI doctor for a natural voice consultation, transcribes the conversation live, and generates a structured medical report at the end of the session.

The goal is to make preliminary healthcare guidance more accessible through conversational AI while delivering a smooth, modern user experience.

---

## ✨ Features

### 🧠 AI Doctor Recommendation

* Describe symptoms in natural language.
* AI analyzes medical concerns.
* Recommends the most appropriate specialist for consultation.

### 🎙️ Voice Consultation with AI Doctors

* Real-time voice conversations powered by **Vapi AI**.
* Dedicated AI agents for different medical specialties.
* Fast and natural conversational experience.

### 📝 Live Speech-to-Text

* Displays live transcripts during consultations.
* Powered by **AssemblyAI**.
* Improves accessibility and conversation tracking.

### 📄 AI Consultation Reports

After every consultation, MedEcho automatically generates a structured report including:

* Patient symptoms
* Consultation summary
* Key observations
* Suggested next steps
* Follow-up recommendations

Generated using **OpenRouter AI**.

### 🔐 Authentication & Billing

* Secure user authentication using **Clerk**.
* User management.
* Subscription and billing integration.
* Protected routes.

### 📚 Consultation History

* Access previous consultations.
* View previously generated AI reports.
* Track consultation history from the dashboard.

### 📱 Responsive UI

* Clean and modern interface.
* Optimized for desktop and mobile devices.

---
## 💳 Subscription Plans

| Feature | Free | Pro |
|----------|:----:|:---:|
| Secure Authentication | ✅ | ✅ |
| Voice Consultation | ✅ | ✅ |
| AI General Physician | ✅ 5 Sessions | ✅ Unlimited |
| AI Specialist Recommendation | ❌ | ✅ |
| Specialized AI Doctor Agents | ❌ | ✅ |
| Live Speech-to-Text | ✅ | ✅ |
| AI Consultation Reports | ✅ | ✅ |
| Consultation History | ✅ | ✅ |

---

## ⚙️ Application Workflow

```text
                        User Login (Clerk)
                               │
                               ▼
                         Authentication
                               │
                               ▼
                        Choose Subscription
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
          🆓 Free User                 💎 Pro User
                │                             │
                ▼                             ▼
     AI General Physician         Describe Symptoms
        (5 Free Sessions)                 │
                │                         ▼
                │           AI Specialist Recommendation
                │                         │
                └──────────────┬──────────┘
                               ▼
                Voice Consultation (Vapi AI)
                               │
                               ▼
          Live Speech-to-Text (AssemblyAI)
                               │
                               ▼
      AI Consultation Report (OpenRouter)
                               │
                               ▼
         Consultation History Dashboard
```

---

## 🎯 Free vs Pro

### 🆓 Free Plan

- 🔐 Secure authentication with Clerk
- 🩺 Up to **5 AI General Physician consultations**
- 🎙️ Real-time voice consultations
- 📝 Live speech-to-text transcription
- 📄 AI-generated consultation reports
- 📚 Consultation history

### 💎 Pro Plan

Everything included in the **Free Plan**, plus:

- 🤖 AI-powered specialist recommendation based on symptoms
- 🩺 Access to specialized AI doctor agents
- ♾️ Unlimited voice consultations

---

# 🛠 Tech Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui

## Backend

* Next.js API Routes

## Database

* PostgreSQL
* Drizzle ORM

## Authentication & Billing

* Clerk

## AI Services

* **OpenRouter** – Doctor recommendations & consultation report generation
* **Vapi AI** – Real-time AI voice consultations
* **AssemblyAI** – Live speech-to-text transcription

---

# 📂 Project Structure

```text
app/
├── api/
│   ├── suggest-doctors/
│   ├── medical-report/
│   ├── session-chat/
│   ├── users/
│   └── count-session/
│
├── dashboard/
│   ├── billing/
│   ├── history/
│   ├── medical-agent/
│   └── profile/
│
├── components/
├── config/
├── context/
├── db/
├── lib/
└── public/
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/Harsh301204/MedEcho.git
cd MedEcho
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env.local` file.

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=

# OpenRouter
OPENROUTER_API_KEY=

# Vapi
NEXT_PUBLIC_VAPI_PUBLIC_KEY=
VAPI_PRIVATE_KEY=

# AssemblyAI
ASSEMBLYAI_API_KEY=
```

## Run the Development Server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

# 🎯 Why MedEcho?

Finding the right medical specialist can be confusing, especially when symptoms overlap across different conditions.

MedEcho simplifies this process by:

* Recommending the right specialist using AI.
* Providing natural voice consultations with specialized AI doctors.
* Displaying live conversation transcripts.
* Automatically generating structured consultation reports.
* Maintaining a history of previous consultations.

---

# 🔮 Future Improvements

* 📹 Video consultations
* 🌍 Multi-language support
* 📅 Appointment scheduling
* 💊 Prescription generation
* 📈 Patient health timeline
* 📤 Email consultation reports
* 🧠 Persistent patient memory across sessions
* 📱 Mobile application

---

# ⚠️ Disclaimer

**MedEcho is intended for educational and informational purposes only.**

The AI-generated recommendations and consultation reports are **not a substitute for professional medical advice, diagnosis, or treatment**. Always seek guidance from qualified healthcare professionals for medical decisions.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# ⭐ Show Your Support

If you found this project interesting or useful, consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and supports future development.
