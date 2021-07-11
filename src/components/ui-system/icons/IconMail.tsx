import { IconBase, IconComponentProps, renderIcon } from './iconBase/IconBase';
import { Icons } from './Icons';

const Icon = IconBase(Icons.Email);

export const IconMail: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconMail.displayName = 'IconMail';
