import styled from 'styled-components';
import Link, { LinkProps } from 'next/link';

export const UnstyledLink = styled.a`
  font-weight: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: none;
  }
`;

UnstyledLink.displayName = 'UnstyledLink';

export const UnstyledInternalLink: React.FC<LinkProps> = ({ children, passHref = true, ...props }) => {
  return (
    <Link passHref={passHref} {...props}>
      <UnstyledLink>{children}</UnstyledLink>
    </Link>
  );
};

UnstyledInternalLink.displayName = 'UnstyledInternalLink';
