import { Sunset } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

export const IconDarkMode: React.FC<IconProps> = (props) => {
  const Icon = IconBase(Sunset);
  return <Icon {...props} />;
};

IconDarkMode.displayName = 'IconDarkMode';
