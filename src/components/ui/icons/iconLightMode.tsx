import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';
import { Icons } from './icons';

const Icon = IconBase(Icons.Sun);

export const IconLightMode: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);
IconLightMode.displayName = 'IconLightMode';
