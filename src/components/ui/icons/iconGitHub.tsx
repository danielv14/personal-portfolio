import { Github } from '@styled-icons/feather';
import { IconBase, IconProps } from './iconBase';

export const IconGitHub: React.FC<IconProps> = (props) => {
  const Icon = IconBase(Github);
  return <Icon {...props} />;
};

IconGitHub.displayName = 'IconGitHub';
