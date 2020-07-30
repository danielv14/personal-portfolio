import { Sun } from '@styled-icons/feather';
import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';

const Icon = IconBase(Sun);

export const IconLightMode: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);
IconLightMode.displayName = 'IconLightMode';
