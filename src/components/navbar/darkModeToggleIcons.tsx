import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { IconLightMode } from '../ui/icons/iconLightMode';
import { IconDarkMode } from '../ui/icons/iconDarkMode';

interface DarkModeToggleIconsProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const animation: MotionProps = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: {
    type: 'tween',
    duration: 0.3,
    ease: 'easeInOut',
  },
  initial: false,
};

const variants = {
  dark: { rotate: -360 },
  light: { rotate: 360 },
};

export const DarkModeToggleIcons: React.FC<DarkModeToggleIconsProps> = ({ isDarkMode, onToggle }) => {
  return (
    <motion.div {...animation} animate={isDarkMode ? 'dark' : 'light'} variants={variants}>
      {isDarkMode ? <IconLightMode onClick={onToggle} /> : <IconDarkMode onClick={onToggle} />}
    </motion.div>
  );
};

DarkModeToggleIcons.displayName = 'DarkModeToggleIcons';
