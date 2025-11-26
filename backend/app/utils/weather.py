import httpx
import os
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.getenv("WEATHER_API_KEY")

async def get_weather(city):
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {"q": city, "appid": API_KEY, "units": "metric"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
    
    if response.status_code != 200:
        return None

    data = response.json()
    return {
        "city": data["name"],
        "country": data["sys"]["country"],
        "temp": round(data["main"]["temp"]),
        "feels_like": round(data["main"]["feels_like"]),
        "condition": data["weather"][0]["description"].capitalize(),
        "humidity": data["main"]["humidity"],
        "wind": round(data["wind"]["speed"] * 3.6),
        "icon": data["weather"][0]["icon"]
    }