import React, { useState } from 'react';
import { IconDarkMode } from '../ui/icons/iconDarkMode';
import { IconLightMode } from '../ui/icons/iconLightMode';
import { IconAnimation } from '../../types/icon/iconAnimation';

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

  const shouldRenderDarkVariant = isDarkMode && hasUserToggled;
  const shouldrenderLightVariant = !isDarkMode && hasUserToggled;
  const animation = shouldRenderDarkVariant
    ? IconAnimation.RotateLeft
    : shouldrenderLightVariant
    ? IconAnimation.RotateRight
    : IconAnimation.None;
  return isDarkMode ? (
    <IconLightMode onClick={toggleDarkMode} animation={animation} />
  ) : (
    <IconDarkMode onClick={toggleDarkMode} animation={animation} />
  );
};

DarkModeToggleIcons.displayName = 'DarkModeToggleIcons';
