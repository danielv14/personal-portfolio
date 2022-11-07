import { styled } from 'theme';
import { MotionComponent, MotionComponentProps } from 'ui/motion/MotionComponent';

const wavingSequence = [0.0, 18.0, -8.0, 18.0, -4.0, 10.0, 0, 0];

const animation: MotionComponentProps = {
  transition: { delay: 0.8, duration: 0.8, loop: 1, type: 'tween' },
  animate: { rotate: wavingSequence },
};

const AnimationWave = styled(MotionComponent, {
  display: 'inline-block',
  transformOrigin: '70% 70%',
  marginRight: '$small',
});

export const WavingHand: React.FC = () => <AnimationWave {...animation}>👋</AnimationWave>;

WavingHand.displayName = 'WavingHand';
