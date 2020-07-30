import { useState, useEffect } from 'react';
import { useMedia } from 'use-media';
import { site } from '../data/site';
import { storage } from '../utils/storage';

const storage_key = `${site.author} - theme`;
const darkModeClass = 'dark-mode';
const usePrefersDarkMode = () => useMedia('(prefers-color-scheme: dark)');

enum ThemeState {
  Dark = 'dark',
  Light = 'light',
}

export const useDarkMode = () => {
  const [isDarkMode, toggle] = useState<boolean>(false);
  const prefersDarkMode = usePrefersDarkMode();
  const toggleDarkMode = (): void => {
    toggle(!isDarkMode);
    storage.set(storage_key, isDarkMode ? ThemeState.Light : ThemeState.Dark);
    document.body.classList.toggle(darkModeClass);
  };

  useEffect(() => {
    // If user prefers dark mode and no user stored preference is set
    // then toggle dark mode to true and add the dark mode class to DOM body
    // without setting storage pref - only user action through this hook's toggleDarkMode should set to storage
    if (prefersDarkMode && !storage.has(storage_key)) {
      toggle(true);
      document.body.classList.add(darkModeClass);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    if (storage.get(storage_key) === ThemeState.Dark) {
      toggleDarkMode();
    }
  }, []);

  return [isDarkMode, toggleDarkMode] as const;
};
