export const resourcePathToBlogURL = (resourcePath: string): string => {
  const path = resourcePath.split('/').pop()?.replace('.mdx', '');
  if (!path) {
    return '';
  }
  return `/blogg/${path}`;
};
