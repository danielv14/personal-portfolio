interface CustomImageComponentProps {
  src: string;
  alt: string;
}

export const customImageComponent = ({ alt, ...rest }: CustomImageComponentProps) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img loading="lazy" alt={alt || 'En bild'} {...rest} />;
};
