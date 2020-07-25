import { Moon } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

const Icon = IconBase(Moon);

export const IconDarkMode: React.FC<IconProps> = (props) => {
  return <Icon {...props} />;
};

IconDarkMode.displayName = 'IconDarkMode';
