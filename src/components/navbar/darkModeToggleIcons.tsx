import React, { useState } from 'react';
import { IconAnimation } from '../../types/icon/iconAnimation';
import { IconDarkMode } from '../ui/icons/iconDarkMode';
import { IconLightMode } from '../ui/icons/iconLightMode';

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
  const animation = hasUserToggled ? IconAnimation.RotateRight : IconAnimation.None;
  const Icon = isDarkMode ? IconLightMode : IconDarkMode;
  return <Icon onClick={toggleDarkMode} animation={animation} />;
};

DarkModeToggleIcons.displayName = 'DarkModeToggleIcons';
