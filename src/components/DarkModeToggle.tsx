
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(saved ? JSON.parse(saved) : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-20 right-6 z-30 p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 animate-glow"
    >
      {isDark ? (
        <div className="w-6 h-6 bg-yellow-400 rounded-full relative">
          <div className="absolute inset-1 bg-yellow-300 rounded-full animate-pulse" />
        </div>
      ) : (
        <div className="w-6 h-6 bg-slate-800 rounded-full relative overflow-hidden">
          <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transform translate-x-1 -translate-y-1" />
        </div>
      )}
    </button>
  );
};

export default DarkModeToggle;
