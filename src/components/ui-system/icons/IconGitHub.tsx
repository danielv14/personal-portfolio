import { IconBase, IconComponentProps, renderIcon } from './iconBase/IconBase';
import { Icons } from './Icons';

const Icon = IconBase(Icons.Github);

export const IconGitHub: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconGitHub.displayName = 'IconGitHub';
