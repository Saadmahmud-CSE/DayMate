import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('daymate-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved === 'dark' : prefersDark;
    setIsDark(initial);
    if (initial) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('daymate-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('daymate-theme', 'light');
    }
  };

  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br dark:from-teal-400 dark:to-cyan-500 from-teal-700 to-cyan-700 flex items-center justify-center dark:text-black text-gray-200 font-bold text-xl shadow-lg">
          DM
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r dark:from-teal-400 dark:to-cyan-400 from-teal-700 to-cyan-700 bg-clip-text text-transparent">
            DayMate
          </h1>
          <p className="text-sm dark:text-gray-200 text-gray-700">AI assistant for your daily plan</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          
          <div
            onClick={toggleTheme}
            className="relative w-14 h-8 bg-gray-700 rounded-full transition-all duration-300 shadow-inner"
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                isDark
                  ? 'left-1 bg-slate-900 translate-x-6'
                  : 'left-1 bg-white translate-x-0'
              }`}
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-cyan-400" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          </div>
        </label>
      </div>
    </header>
  );
}