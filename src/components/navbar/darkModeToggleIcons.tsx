import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { IconDarkMode } from '../ui/icons/iconDarkMode';
import { IconLightMode } from '../ui/icons/iconLightMode';

interface DarkModeToggleIconsProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

enum AnimationVariant {
  Dark = 'dark',
  Light = 'light',
}

const variants: Variants = {
  [AnimationVariant.Dark]: { rotate: -360 },
  [AnimationVariant.Light]: { rotate: 360 },
};

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

  return (
    <motion.div
      transition={{ type: 'spring', stiffness: 100, damping: 200 }}
      animate={shouldRenderDarkVariant ? AnimationVariant.Dark : shouldrenderLightVariant ? AnimationVariant.Light : ''}
      variants={variants}
    >
      {isDarkMode ? <IconLightMode onClick={toggleDarkMode} /> : <IconDarkMode onClick={toggleDarkMode} />}
    </motion.div>
  );
};

DarkModeToggleIcons.displayName = 'DarkModeToggleIcons';
