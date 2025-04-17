import React, { createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState(lightTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        setResolvedTheme(e.matches ? darkTheme : lightTheme);
      }
    };

    if (theme === 'system') {
      setResolvedTheme(mediaQuery.matches ? darkTheme : lightTheme);
    } else {
      setResolvedTheme(theme === 'light' ? lightTheme : darkTheme);
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};