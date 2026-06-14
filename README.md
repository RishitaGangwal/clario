# 🧠 Clario

Clario is a simple web app that helps you turn a goal into a step-by-step plan.

You enter a goal, and it breaks it into:
- A basic roadmap
- Possible challenges
- Simple suggestions to move forward
- A rough idea of difficulty

The goal is to help you understand what to do next without overthinking.

---

## 🚀 Live Demo
Coming soon (deployment in progress)

---

## ✨ Features

- Goal input interface
- Step-by-step breakdown
- Timeline-style output
- Risk identification
- Simple suggestions
- Success likelihood estimate

---

## 🧠 Why Clario

When starting something new, the hardest part is usually figuring out the first step.

Clario is built to make that first step clearer.

---

## 🏗️ Tech Stack

Frontend:
- React
- Tailwind CSS
- Axios

Backend:
- Java Spring Boot
- REST API
- DTO-based structure

---

## ⚙️ How to run locally

### Clone the repo
git clone https://github.com/your-username/clario.git

---

### Backend
cd server
mvn spring-boot:run

Runs on:
http://localhost:8080

---

### Frontend
cd client
npm install
npm start

Runs on:
http://localhost:3000

---

## 🔌 API

POST /api/goal/analyze

Request:
{
  "goal": "Become a backend developer in 3 months"
}

Response:
{
  "timeline": ["Step 1", "Step 2", "Step 3"],
  "risks": ["Distractions", "Inconsistency"],
  "suggestions": ["Practice daily", "Build projects"],
  "successProbability": 70
}

---

## 🚀 Future Improvements

- AI-based roadmap generation
- Save goals and track progress
- User authentication
- Deployment
- Better personalization

---

## 👩‍💻 Author
Rishita Gangwal

---

## ⭐ Note
This project is built for learning purpose.
