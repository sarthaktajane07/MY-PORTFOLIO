import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card border border-border text-foreground hover:text-[#0C8C7E] dark:hover:text-[#14B8A6] hover:border-[#0C8C7E]/40 dark:hover:border-[#14B8A6]/40 transition-all duration-200 shadow-xs flex items-center justify-center cursor-pointer"
      aria-label="Toggle Light/Dark Theme"
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-[#5B6573] hover:text-[#0C8C7E] transition-colors" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
      )}
    </button>
  );
};
