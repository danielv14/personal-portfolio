import { Mail } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

export const IconMail: React.FC<IconProps> = (props) => {
  const Icon = IconBase(Mail);
  return <Icon {...props} />;
};
