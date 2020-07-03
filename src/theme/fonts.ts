interface Fonts {
  fontFamily: {
    main: string;
    headings: string;
    mono: string;
  };
  size: {
    base: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    small: string;
    smaller: string;
    code: string;
  };
}

export const fonts: Fonts = {
  fontFamily: {
    main: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    headings: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    mono: `'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
  },
  size: {
    base: '18px',
    h1: '2rem',
    h2: '1.5rem',
    h3: '1.3rem',
    h4: '1.2rem',
    h5: '1.1rem',
    h6: '1rem',
    small: '0.9rem',
    smaller: '0.8rem',
    code: '0.8rem',
  },
};
