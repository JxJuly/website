'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import { Sun, MoonStar } from 'lucide-react';

import { IconButton } from '../button';

const getDefaultTheme = () => {
  const savedTheme = window.localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  const systemTheme = window.matchMedia('(prefers-color-schema: dark)').matches ? 'dark' : 'light';
  return systemTheme;
};

export const ThemeButton = () => {
  const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    setTheme(getDefaultTheme());
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return <IconButton icon={theme === 'dark' ? <MoonStar /> : <Sun />} onClick={toggle} />;
};
