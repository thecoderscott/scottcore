export interface Palette {
  core: {
    primary: string;
    primaryHighlight: string;
    secondary: string;
    secondaryHighlight: string;
    tertiary: string;
    tertiaryHighlight: string;
  };

  mono?: {
    white: string;
    black: string;

    grey: {
      lightest: string;
      lighter: string;
      light: string;
      default: string;
      dark: string;
      darker: string;
      darkest: string;
    };
  };

  backgrounds: {
    primary: string;
    secondary: string;
    gradient: string;
  };

  borders: {
    primary: string;
    gradient: string;
  }
}
