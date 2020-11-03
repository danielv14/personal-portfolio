import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';
import { Icons } from './icons';

const Icon = IconBase(Icons.Moon);

export const IconDarkMode: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconDarkMode.displayName = 'IconDarkMode';
