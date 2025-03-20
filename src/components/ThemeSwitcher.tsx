"use client";

import Switch from './Switch';
import useTheme from '@/app/hooks/useTheme';

export default function ThemeSwitcher()
{
  const { theme, toggleTheme } = useTheme();
  return (
    <Switch isOn={theme !== "light"} handleToggle={toggleTheme} />
  );
}