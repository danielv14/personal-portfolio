import Image from 'next/image';

export const customImageComponent = (props: any) => {
  return <Image unsized {...props} />;
};
