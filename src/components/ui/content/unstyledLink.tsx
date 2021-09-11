import Link, { LinkProps } from 'next/link';
import { styled } from 'theme';

export const UnstyledLink = styled('a', {
  fontWeight: 'inherit',
  color: 'inherit',
  margin: '0',
  padding: '0',
  '&:hover': {
    textDecoration: 'none',
  },
});

UnstyledLink.displayName = 'UnstyledLink';

export const UnstyledInternalLink: React.FC<LinkProps> = ({ children, passHref = true, ...props }) => {
  return (
    <Link passHref={passHref} {...props}>
      <UnstyledLink>{children}</UnstyledLink>
    </Link>
  );
};

UnstyledInternalLink.displayName = 'UnstyledInternalLink';
