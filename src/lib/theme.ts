export const applyTheme = (theme: string) =>
{
  if (theme === 'dark')
  {
    document.documentElement.classList.add('dark-theme');
  } else
  {
    document.documentElement.classList.remove('dark-theme');
  }
};