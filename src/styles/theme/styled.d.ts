import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    white: string;  
    black: string;
    fontesFamily?: string;
    fontSizeTitle: string
    fontSizeBig: string;
    fontSizeMedium: string;
    fontSizeSmall: string;
  }
}
