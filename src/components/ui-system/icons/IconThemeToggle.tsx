import React, { useState } from 'react';
import { IconAnimation } from '../../../types/icon/iconAnimation';
import { IconDarkMode } from './IconDarkMode';
import { IconLightMode } from './IconLightMode';

interface ThemeToggleIconProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggleIcon: React.FC<ThemeToggleIconProps> = ({ isDarkMode, onToggle }) => {
  const [hasUserToggled, userToggle] = useState(false);
  const toggleDarkMode = () => {
    if (!hasUserToggled) {
      userToggle(true);
    }
    onToggle();
  };
  const animation: IconAnimation = hasUserToggled ? 'rotate-right' : 'none';
  const Icon = isDarkMode ? IconLightMode : IconDarkMode;
  return <Icon onClick={toggleDarkMode} animation={animation} />;
};

ThemeToggleIcon.displayName = 'ThemeToggleIcon';
