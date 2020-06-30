interface ToolboxCategory {
  title: string;
  items: string[];
}

export const toolBox: ToolboxCategory[] = [
  {
    title: 'Nära till hands',
    items: ['HTML5', 'CSS och Preprocessors', 'TypeScript', 'React och Next.js', 'Node', 'Git', 'Jest'],
  },
  { title: 'Använder gärna', items: ['NoSQL med Firebase', 'PostgreSQL', 'Sketch och Figma', 'Vue.js'] },
];
