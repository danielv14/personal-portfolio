import { IconBase, IconComponentProps, renderIcon } from './iconBase/IconBase';
import { Icons } from './Icons';

const Icon = IconBase(Icons.Moon);

export const IconDarkMode: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconDarkMode.displayName = 'IconDarkMode';
