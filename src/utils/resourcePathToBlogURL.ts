export const resourcePathToBlogURL = (resourcePath: string) => {
  const blogPath = resourcePath.split('/').pop();
  return `/blogg/${blogPath ? blogPath.replace('.mdx', '') : ''}`;
};
