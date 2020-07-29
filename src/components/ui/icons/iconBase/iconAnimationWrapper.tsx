import { motion } from "framer-motion";
import { iconAnimations } from "./iconAnimations";
import { IconAnimation } from "../../../../types/icon/iconAnimation";

export interface IconAnimationWrapperProps {
  animation?: IconAnimation;
}

export const IconAnimationWrapper: React.FC<IconAnimationWrapperProps> = ({ animation = IconAnimation.None, children }) => {
  return (
    <motion.div {...iconAnimations[animation]}>
      {children}
    </motion.div>
  );
}
IconAnimationWrapper.displayName = 'IconAnimationWrapper';