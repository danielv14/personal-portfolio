import React, { useState } from 'react';
import { IconAnimation } from '../../types/icon/iconAnimation';
import { IconDarkMode } from '../ui/icons/IconDarkMode';
import { IconLightMode } from '../ui/icons/IconLightMode';

interface DarkModeToggleIconsProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const DarkModeToggleIcons: React.FC<DarkModeToggleIconsProps> = ({ isDarkMode, onToggle }) => {
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

DarkModeToggleIcons.displayName = 'DarkModeToggleIcons';
