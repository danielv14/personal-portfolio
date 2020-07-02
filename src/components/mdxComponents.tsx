import Link from 'next/link';
import { isInternalLink } from '../utils/isInternalLink';

const customLinkComponent = (props: any) => {
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

export const MDXComponents = {
  a: customLinkComponent,
};
