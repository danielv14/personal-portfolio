import { Sunrise } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

const Icon = IconBase(Sunrise);

export const IconLightMode: React.FC<IconProps> = (props) => {
  return <Icon {...props} />;
};

IconLightMode.displayName = 'IconLightMode';
