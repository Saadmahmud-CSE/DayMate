def generate_plan(weather, news):
    
    suggestions = []
    temp = weather["temp"]
    condition = weather["condition"].lower()

    # Weather-based tips
    if "rain" in condition or "drizzle" in condition:
        suggestions.append("Take an umbrella — rain is expected today")
    elif temp > 30:
        suggestions.append("It's hot! Stay hydrated and wear light clothes")
    elif temp < 10:
        suggestions.append("It's cold — wear a jacket and stay warm")
    else:
        suggestions.append("Nice weather! Great day to go outside")

    # News-based tips
    for item in news:
        title = item["title"].lower()
        if any(word in title for word in ["traffic", "jam", "delay", "road"]):
            suggestions.append("Heavy traffic reported — leave early!")
        if any(word in title for word in ["strike", "protest", "rally"]):
            suggestions.append("Protest in city — avoid main roads")

    if not suggestions:
        suggestions.append("Have a wonderful and peaceful day!")

    return suggestions[:4]