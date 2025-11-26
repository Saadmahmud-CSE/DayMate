import React from 'react'

export default function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <div className="text-gray-300">No forecast available</div>
  }

  return (
    <div className="space-y-3">
      {forecast.map((f, i) => (
        <div key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-800 transition">
          <div className="font-medium">{f.time}</div>
          <div className="text-gray-300">{f.temp}°C</div>
        </div>
      ))}
    </div>
  )
}
