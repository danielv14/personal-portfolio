import { useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, toggle] = useState<Boolean>(false);

  const toggleDarkMode = (): void => {
    document.body.classList.toggle('dark-mode');
    toggle(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode] as const;
};
