import httpx
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("NEWS_API_KEY")

async def get_news(city: str):
   
    url = "https://newsapi.org/v2/everything"
    
    params = {
        "q": city,
        "language": "en",
        "sortBy": "publishedAt",
        "pageSize": 5,
        "apiKey": API_KEY
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)

    if response.status_code != 200:
        return []

    data = response.json()
    articles = data.get("articles", [])

    news_list = []
    for item in articles[:5]:
        news_list.append({
            "title": item.get("title", "No title"),
            "source": item.get("source", {}).get("name", "Unknown"),
            "url": item.get("url", "#"),
            "description": item.get("description", ""),
            "published_at": item.get("publishedAt", "")[:10]
        })

    return news_list