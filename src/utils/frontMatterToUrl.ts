export const toBlogURL = (resourcePath: string) => {
  const blogPath = resourcePath.split('/').pop();
  return `/blogg/${blogPath ? blogPath.replace('.mdx', '') : ''}`;
};
