import { motion, MotionProps } from 'framer-motion';
import styled from 'styled-components';

const wavingSequence = [0.0, 18.0, -8.0, 18.0, -4.0, 10.0, 0, 0];

const animation: MotionProps = {
  transition: { delay: 0.8, duration: 0.8, loop: 1, type: 'tween' },
  animate: { rotate: wavingSequence },
};

const AnimationWave = styled(motion.div)`
  display: inline-block;
  transform-origin: 70% 70%;
  margin-right: var(--margin-small);
`;

export const WavingHand: React.FC = () => <AnimationWave {...animation}>👋</AnimationWave>;

WavingHand.displayName = 'WavingHand';
