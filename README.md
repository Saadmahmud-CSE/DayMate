# DayMate - AI Daily Planning Assistant

## Live URLs
- Frontend (Vercel): https://day-mate-two.vercel.app
- Backend (Render):  https://daymate-1.onrender.com
- Test API: https://daymate-backend.onrender.com/api/plan?location=Dhaka

## Features
- Real-time weather (OpenWeatherMap)
- Local news integration
- AI Planning Agent (Python) — generates suggestions based on weather + news
  - Rain → "Take an umbrella — rain is expected today"
  - Hot → "It's hot! Stay hydrated and wear light clothes"
  - Cold → "It's cold — wear a jacket and stay warm"
  - Traffic in news → "Heavy traffic reported — leave early!"
- Clean, responsive UI with dark/light mode

## Tech Stack
- Backend: FastAPI (Python)
- Frontend: React + Vite + Tailwind CSS
- Deployment:
  - Frontend → Vercel
  - Backend → Render

## Environment Variables
- `.env.example` files included in both folders

## Local Development
```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd frontend
npm install
npm run dev