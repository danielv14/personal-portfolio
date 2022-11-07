import { site } from 'data/site';
import { useEffect, useState } from 'react';
import { darkTheme } from 'theme';
import { Theme } from 'types/theme';
import { useMedia } from 'use-media';
import { storage } from 'utils/storage';

const themeStorageKey = `${site.author} - theme`;

const usePrefersDarkMode = (): boolean => useMedia('(prefers-color-scheme: dark)');

export const useDarkMode = () => {
  const [isDarkMode, toggle] = useState<boolean>(false);
  const prefersDarkMode = usePrefersDarkMode();
  const toggleDarkMode = (): void => {
    toggle(!isDarkMode);
    storage.set(themeStorageKey, isDarkMode ? Theme.Light : Theme.Dark);
    document.body.classList.toggle(darkTheme);
  };

  useEffect(() => {
    // If user prefers dark mode and no user-stored preference is set then change theme to dark
    // without persisting theme to storage since only user action should persist to storage
    if (prefersDarkMode && !storage.has(themeStorageKey)) {
      toggle(true);
      document.body.classList.add(darkTheme);
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    if (storage.get(themeStorageKey) === Theme.Dark) {
      toggleDarkMode();
    }
  }, []);

  return [isDarkMode, toggleDarkMode] as const;
};
