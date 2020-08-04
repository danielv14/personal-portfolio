export const resourcePathToBlogURL = (resourcePath: string): string => {
  const path = resourcePath.split('/').pop()?.replace('.mdx', '') ?? '';
  return `/blogg/${path}`;
};
