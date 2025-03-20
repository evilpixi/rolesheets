import { useEffect, useState } from "react";

function getSystemTheme()
{
  if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  {
    return "dark";
  }
  return "light";
}

export default function useTheme()
{
  const initialTheme = localStorage.getItem("theme") as "light" | "dark" || getSystemTheme();
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

  useEffect(() =>
  {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
  {
    setTheme((prevState) => prevState === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
}