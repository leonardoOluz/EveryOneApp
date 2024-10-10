import { DefaultTheme } from "styled-components/dist/types";
import { variaveis } from "../IU";

export const themeLight: DefaultTheme = {
  body: variaveis.colorsSummer.primary,
  inside: variaveis.colorsSummer.secundary,
  text: variaveis.colorsSummer.quinary,
  border: variaveis.colorsSummer.tercciary,
  fontesFamily: variaveis.fontesFamily.secundary,
  fontSizeBig: "2rem",
  fontSizeMedium: "1.5rem",
  fontSizeSmall: "1rem",
};

export const themeDark: DefaultTheme = {
  body: variaveis.colorsBlue.primary,
  inside: variaveis.colorsBlue.secundary,
  text: variaveis.colorsBlue.quinary,
  border: variaveis.colorsBlue.tercciary,
  fontesFamily: variaveis.fontesFamily.primary,
  fontSizeBig: "2rem",
  fontSizeMedium: "1.5rem",
  fontSizeSmall: "1rem",
};
