import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    inside: string;
    text: string;
    fontesFamily?: string;
    border: string;
    fontSizeTitle: string
    fontSizeBig: string;
    fontSizeMedium: string;
    fontSizeSmall: string;
  }
}
