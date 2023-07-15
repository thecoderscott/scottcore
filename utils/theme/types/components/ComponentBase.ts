export interface ComponentBase {
  palette: {
    background?: {
      default: string;
      hover?: string;
    }
    border?: {
      default: string;
      hover?: string;
      focus?: string;
    };
    typography: {
      primary: string;
    };
  }
}
