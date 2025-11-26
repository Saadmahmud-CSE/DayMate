import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import NewsList from './components/NewsList';
import SuggestionsCard from './components/SuggestionsCard';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const BACKEND_URL = import.meta.env.BACKEND_URL || "http://127.0.0.1:8000";

  const fetchPlan = async (location) => {
    setLoading(true);
    setError('');
    setWeather(null);
    setNews([]);
    setSuggestions([]);

    try {
      const res = await fetch(`${BACKEND_URL}/api/plan?location=${encodeURIComponent(location)}`);
      
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`City not found or server error: ${res.status}`);
      }

      const data = await res.json();

      setWeather(data.weather || null);
      setNews(Array.isArray(data.news) ? data.news : []);
      setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);

    } catch (err) {
      console.error("Fetch error:", err);
      setError("Cannot connect to AI planner. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlan("Chittagong");
  }, []);

  return (
    <div className="min-h-screen">
      <div className="dark:bg-gradient-to-br dark:from-slate-950 dark:via-teal-950/90 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <Header />

          <div className="text-center my-12">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r dark:from-teal-400 dark:to-cyan-400 from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              DayMate
            </h1>
            <p className="text-xl text-gray-700 dark:text-teal-300 mt-4">
              Your AI Daily Planning Assistant
            </p>
          </div>

          <SearchBar onSearch={fetchPlan} />

          {loading && (
            <div className="text-center py-20">
              <div className="text-3xl text-grey-200 animate-pulse">
                Loading...
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-red-400 text-xl bg-red-900/20 rounded-3xl p-8 max-w-2xl mx-auto">
                {error}
              </p>
              <p className="text-gray-500 mt-4">
                Make sure your backend is running: <code className="bg-gray-800 px-3 py-1 rounded">uvicorn app.main:app --reload</code>
              </p>
            </div>
          )}

          {!loading && !error && weather && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="card">
                <WeatherCard weather={weather} />
              </div>

              <div className="card">
                <h2 className="text-2xl font-extrabold text-teal-300 dark:text-teal-400 mb-6">
                  AI Recommendations
                </h2>
                <SuggestionsCard backendSuggestions={suggestions} />
              </div>

              <div className="card">
                <h2 className="text-2xl font-extrabold text-teal-300 dark:text-teal-400 ml-2 mb-6">
                  Local News
                </h2>
                <NewsList articles={news} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}