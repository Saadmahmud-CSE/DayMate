import React from 'react'

export default function NewsList({ articles = [] }) {
  if (!articles || articles.length === 0) {
    return <div className="text-gray-300">No news available</div>
  }

  return (
    <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
      {articles.map((a, i) => (
        <a key={i} href={a.url || '#'} target="_blank" rel="noreferrer" className="block p-3 rounded-md transition">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <div className="text-sm text-gray-300">{a.source?.name || a.author}</div>
              <div className="font-semibold text-gray-200">{a.title}</div>
              <div className="text-xs text-gray-300 mt-1">{a.description}</div>
            </div>
            {a.urlToImage && (
              <img src={a.urlToImage} alt="" className="w-20 h-14 object-cover rounded" />
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
