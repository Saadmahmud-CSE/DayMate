from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from app.utils.weather import get_weather
from app.utils.news import get_news
from app.agents.planner import generate_plan

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/plan")
async def api_plan(location: str = Query(...)):
    weather = await get_weather(location)
    news = await get_news(location)
    plan = generate_plan(weather, news)
    return {"weather": weather, "news": news, "suggestions": plan}
