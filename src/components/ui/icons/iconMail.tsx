import { Mail } from '@styled-icons/feather';
import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';

const Icon = IconBase(Mail);

export const IconMail: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconMail.displayName = 'IconMail';
