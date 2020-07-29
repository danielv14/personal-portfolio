import { Github } from '@styled-icons/feather';
import { IconBase, IconComponentProps, renderIcon } from './iconBase/iconBase';

const Icon = IconBase(Github);

export const IconGitHub: React.FC<IconComponentProps> = (props) => renderIcon(Icon, props);

IconGitHub.displayName = 'IconGitHub';
