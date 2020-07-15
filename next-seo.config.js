const title = 'Daniel Vernberg';
const description = 'Webbutvecklare med lite extra kärlek för frontend, JavaScript och schysst design';
const urlSite = 'danielvernberg.se';

const SEO = {
  title,
  description,
  canonical: urlSite,
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: urlSite,
    title,
    description,
  },
};

export default SEO;
