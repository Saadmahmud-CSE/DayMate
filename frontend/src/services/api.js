const BASE_URL = "http://127.0.0.1:8000";

export async function getDailyPlan(city) {
    const response = await fetch(`${BASE_URL}/api/plan?location=${encodeURIComponent(city)}`);
    
    if (!response.ok) {
        throw new Error("City not found or server error");
    }
    
    return response.json();
}
