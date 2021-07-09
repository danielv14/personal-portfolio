import Link from 'next/link';
import { ReactNode } from 'react';
import { isInternalLink } from '../../utils/isInternalLink';

interface CustomLinkComponentProps {
  href: string;
  children: ReactNode | string;
}

export const customLinkComponent = (props: CustomLinkComponentProps) => {
  console.log(props);
  const href = props.href;
  if (isInternalLink(href)) {
    return (
      <Link href={href} passHref>
        <a {...props} />
      </Link>
    );
  }

  return <a {...props} />;
};
