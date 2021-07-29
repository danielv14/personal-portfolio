import { IconVariant } from '../../../types/icon/icons';
import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';
import { icons } from './iconBase/icons';

interface IconProps {
  variant: IconVariant;
}

export const Icon: React.FC<IconProps & IconComponentProps> = ({ variant, ...rest }) =>
  renderIcon(IconBase(icons[variant]), rest);

Icon.displayName = 'Icon';
