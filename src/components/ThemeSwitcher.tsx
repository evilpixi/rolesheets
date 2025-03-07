"use client";

import { useEffect } from 'react';
import { applyTheme } from "@lib/theme";

export default function ThemeSwitcher()
{
  useEffect(() =>
  {
    const currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);
  }, []);

  const toggleTheme = () =>
  {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}