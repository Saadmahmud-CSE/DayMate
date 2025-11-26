import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-3xl mx-auto gap-4 mt-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city: London, Mumbai, Tokyo, Dhaka..."
        className="flex-1 px-8 py-5 text-lg rounded-full bg-gray-200 dark:bg-slate-800/90 border border-teal-700 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-400/30 dark:placeholder-gray-200 placeholder-gray-700 backdrop-blur"
      />
      <button
        type="submit"
        className="px-10 py-5 bg-gradient-to-r from-cyan-800 to-teal-800 hover:from-cyan-700 hover:to-teal-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-400 dark:hover:to-cyan-400 rounded-full font-extrabold dark:text-black text-gray-200 shadow-xl transition transform hover:scale-105"
      >
        Search
      </button>
    
    </form>
  );
}