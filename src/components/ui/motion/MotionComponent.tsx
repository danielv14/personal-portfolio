import { motion, MotionProps } from 'framer-motion';
import { styled } from 'theme';

export type MotionComponentProps = MotionProps;

export const MotionComponent = styled(motion.div);

MotionComponent.displayName = 'MotionComponent';
