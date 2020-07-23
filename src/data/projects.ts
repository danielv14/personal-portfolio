import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: 'ColorPix',
    icon: '🎨',
    summary: 'Webbapp som hjälper användaren hitta intressanta färgpaletter utifrån bilder från Unsplash API:et',
    tags: ['Vue', 'Node'],
    urlSource: 'https://github.com/danielv14/ColorPix',
    url: 'https://colorpix.herokuapp.com/',
  },
  {
    title: 'IMDb CLI',
    icon: '📺',
    summary: 'TypeScript-baserat CLI för att söka efter information om film och serier',
    tags: ['TypeScript', 'Node', 'CLI'],
    urlSource: 'https://github.com/danielv14/imdb-cli',
  },
  {
    title: 'Aftonbladet Checker',
    icon: '📰',
    summary: 'Webbapp som dagligen hämtar och sparar viss information från Aftonbladets startsida och visar statistik',
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
  {
    title: 'Flexbox Grid',
    icon: '🔮',
    summary: 'Ett responsivt, flexbox-baserat och konfigurerbart grid-system byggt med SCSS',
    tags: ['Responsiv design', 'SCSS'],
    urlSource: 'https://github.com/danielv14/flexbox-grid',
    url: 'https://danielv14.github.io/flexbox-grid/',
  },
  {
    title: 'Palettr',
    icon: '👩‍🎨',
    summary: 'Sajt med Vue.js frontend och Laravel backend för att skapa och hitta intressanta färgpaletter',
    tags: ['Vue', 'Laravel', 'Postgres'],
    urlSource: 'https://github.com/danielv14/Palettr',
    url: 'http://palettr.herokuapp.com/',
  },
];
