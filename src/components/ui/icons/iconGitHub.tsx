import { Github } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

const Icon = IconBase(Github);

export const IconGitHub: React.FC<IconProps> = (props) => {
  return <Icon {...props} />;
};

IconGitHub.displayName = 'IconGitHub';
