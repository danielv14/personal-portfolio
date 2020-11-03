import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';
import { Icons } from './icons';

const Icon = IconBase(Icons.Github);

export const IconGitHub: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconGitHub.displayName = 'IconGitHub';
