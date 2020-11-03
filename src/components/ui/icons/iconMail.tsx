import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';
import { Icons } from './icons';

const Icon = IconBase(Icons.Email);

export const IconMail: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconMail.displayName = 'IconMail';
