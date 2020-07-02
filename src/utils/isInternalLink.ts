export const isInternalLink = (href: string): boolean => href.startsWith('/') || href.startsWith('#');
