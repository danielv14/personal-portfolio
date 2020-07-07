import { useState, useEffect } from 'react';
import { site } from '../data/site';
import { storage } from '../utils/storage';

const storage_key = `${site.author} - dark-mode`;

export const useDarkMode = () => {
  const [isDarkMode, toggle] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    storage.set(storage_key, isDarkMode ? 'false' : 'true');
    document.body.classList.toggle('dark-mode');
    toggle(!isDarkMode);
  };

  useEffect(() => {
    if (storage.get(storage_key) === 'true') {
      toggleDarkMode();
    }
  }, []);

  return [isDarkMode, toggleDarkMode] as const;
};
