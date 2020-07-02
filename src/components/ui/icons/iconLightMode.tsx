import { Sunrise } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

export const IconLightMode: React.FC<IconProps> = (props) => {
  const Icon = IconBase(Sunrise);
  return <Icon {...props} />;
};

IconLightMode.displayName = 'IconLightMode';
