import { Mail } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

const Icon = IconBase(Mail);

export const IconMail: React.FC<IconProps> = (props) => {
  return <Icon {...props} />;
};

IconMail.displayName = 'IconMail';
