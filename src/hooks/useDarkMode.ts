import { useState, useEffect } from 'react';
import { useMedia } from 'use-media';
import { site } from '../data/site';
import { storage } from '../utils/storage';
import { ColorThemeVariant } from '../types/theme/Colors';

const themeStorageKey = `${site.author} - theme`;
const darkModeClass = 'dark-mode';

const usePrefersDarkMode = (): boolean => useMedia('(prefers-color-scheme: dark)');

export const useDarkMode = () => {
  const [isDarkMode, toggle] = useState<boolean>(false);
  const prefersDarkMode = usePrefersDarkMode();
  const toggleDarkMode = (): void => {
    toggle(!isDarkMode);
    storage.set(themeStorageKey, isDarkMode ? ColorThemeVariant.Light : ColorThemeVariant.Dark);
    document.body.classList.toggle(darkModeClass);
  };

  useEffect(() => {
    // If user prefers dark mode and no user-stored preference is set then change theme to dark
    // without persisting theme to storage since only user action should persist to storage
    if (prefersDarkMode && !storage.has(themeStorageKey)) {
      toggle(true);
      document.body.classList.add(darkModeClass);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    if (storage.get(themeStorageKey) === ColorThemeVariant.Dark) {
      toggleDarkMode();
    }
  }, []);

  return [isDarkMode, toggleDarkMode] as const;
};
