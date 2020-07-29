import { Moon } from '@styled-icons/feather';
import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';

const Icon = IconBase(Moon);

export const IconDarkMode: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconDarkMode.displayName = 'IconDarkMode';
