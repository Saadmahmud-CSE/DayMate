import React from 'react';

export default function WeatherCard({ weather, loading }) {
  if (loading && !weather) {
    return (
      <div className="card p-8 text-center">
        <div className="text-xl text-gray-400">Loading weather...</div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="card p-8 text-center">
        <div className="text-xl text-gray-400">No weather data</div>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
       
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-4xl font-bold text-white">
            {weather.city}, {weather.country}
          </h2>
          {weather.time && (
            <p className="text-sm text-gray-400 mt-1">
              {new Date(weather.time).toLocaleString()}
            </p>
          )}
        </div>

        <div className="text-right">
          <div className="text-6xl sm:text-7xl font-extrabold text-white leading-tight mt-20">
            {Math.round(weather.temp)}°C
          </div>
          <p className="text-lg text-gray-300 mt-2">
            Feels like {Math.round(weather.feels_like)}°C
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-2xl font-semibold text-teal-400 capitalize">
              {weather.condition || 'Unknown'}
            </p>
            {weather.description && (
              <p className="text-base text-gray-300 mt-1 capitalize">
                {weather.description}
              </p>
            )}
          </div>

          <div className="text-left sm:text-right space-y-2">
            <div>
              <span className="text-gray-400 text-sm">Humidity:</span>{' '}
              <span className="text-xl font-medium text-white">
                {weather.humidity}%
              </span>
            </div>
            <div>
              <span className="text-gray-400 text-sm">Wind:</span>{' '}
              <span className="text-xl font-medium text-white">
                {weather.wind_speed} km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}