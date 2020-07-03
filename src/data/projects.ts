interface Project {
  title: string;
  icon: string;
  summary: string;
  tags: string[];
  urlSource: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: 'ColorPix',
    icon: '🎨',
    summary: 'Webbapp som hjälper användaren hitta intressanta färgpaletter utifrån bilder',
    tags: ['Vue', 'Node'],
    urlSource: 'https://github.com/danielv14/ColorPix',
    url: 'https://colorpix.herokuapp.com/',
  },
  {
    title: 'IMDb CLI',
    icon: '👨‍💻',
    summary: 'TypeScript-baserat CLI för att söka efter information om film och serier',
    tags: ['TypeScript', 'Node', 'CLI'],
    urlSource: 'https://github.com/danielv14/imdb-cli',
  },
  {
    title: 'Aftonbladet Checker',
    icon: '📰',
    summary: 'Webbapp som skrapar Aftonbladet dagligen och visar statistik',
    tags: ['React', 'Node', 'Firebase'],
    urlSource: 'https://github.com/danielv14/aftonbladet-checkr-next',
    url: 'http://aftonbladet-checker.herokuapp.com/',
  },
  {
    title: 'Denna sajt',
    icon: '💼',
    summary: 'Nedskalat portfolio byggt med React, styled-components och MDX',
    tags: ['React', 'MDX', 'styled-components'],
    urlSource: 'https://github.com/danielv14/personal-portfolio',
  },
];
