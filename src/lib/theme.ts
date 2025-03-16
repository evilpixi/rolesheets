export const applyTheme = (theme: "light" | "dark") =>
{
  if (theme === 'dark')
  {
    document.documentElement.classList.add('dark');
  } else
  {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem("theme", theme);
};

export const getCurrentTheme = (): "dark" | "light" =>
{
  const theme: string | null = localStorage.getItem("theme");
  if (theme !== "dark" && theme !== "light") return "light"
  return theme;
}