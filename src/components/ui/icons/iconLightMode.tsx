import { IconBase, IconComponentProps, renderIcon } from './iconBase/IconBase';
import { Icons } from './Icons';

const Icon = IconBase(Icons.Sun);

export const IconLightMode: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);
IconLightMode.displayName = 'IconLightMode';
