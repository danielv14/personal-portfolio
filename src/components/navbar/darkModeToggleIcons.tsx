import React, { useState } from 'react';
import { motion, MotionProps, Variants, Transition } from 'framer-motion';
import { IconLightMode } from '../ui/icons/iconLightMode';
import { IconDarkMode } from '../ui/icons/iconDarkMode';

interface DarkModeToggleIconsProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const transitionType: Transition = {
  type: 'tween',
  duration: 0.2,
  ease: 'easeInOut',
};

const animation: MotionProps = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: transitionType,
  initial: false,
};

const variants: Variants = {
  dark: { rotate: -360, ...transitionType },
  light: { rotate: 360, ...transitionType },
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
      {...animation}
      animate={shouldRenderDarkVariant ? 'dark' : shouldrenderLightVariant ? 'light' : ''}
      variants={variants}
    >
      {isDarkMode ? <IconLightMode onClick={toggleDarkMode} /> : <IconDarkMode onClick={toggleDarkMode} />}
    </motion.div>
  );
};

DarkModeToggleIcons.displayName = 'DarkModeToggleIcons';
