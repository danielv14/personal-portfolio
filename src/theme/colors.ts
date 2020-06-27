interface Colors {
  themed: {
    light: ColorTheme;
    dark: ColorTheme;
  };
  primary: string;
  primaryDarken: string;
}

export interface ColorTheme {
  backgroundColor: string;
  textColor: string;
  textMutedColor: string;
}

const darkTheme: ColorTheme = {
  backgroundColor: '#171923',
  textColor: '#FFFFFF',
  textMutedColor: '#A0AEC0',
};

const lightTheme: ColorTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#414141',
  textMutedColor: '#BDBDBD',
};

export const colors: Colors = {
  themed: {
    light: lightTheme,
    dark: darkTheme,
  },
  primary: '#6691FF',
  primaryDarken: '#5477D3',
};
