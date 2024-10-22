import { DefaultTheme } from "styled-components/dist/types";
import { styledVariable } from "../IU";

export const themeLight: DefaultTheme = {
  body: styledVariable.colorsSummer.primary,
  inside: styledVariable.colorsSummer.secundary,
  text: styledVariable.colorsSummer.quinary,
  border: styledVariable.colorsSummer.tercciary,
  fontesFamily: styledVariable.fontesFamily.secundary,
  fontSizeBig: "2rem",
  fontSizeMedium: "1.5rem",
  fontSizeSmall: "1rem",
};

export const themeDark: DefaultTheme = {
  body: styledVariable.colorsBlue.primary,
  inside: styledVariable.colorsBlue.secundary,
  text: styledVariable.colorsBlue.quinary,
  border: styledVariable.colorsBlue.tercciary,
  fontesFamily: styledVariable.fontesFamily.primary,
  fontSizeBig: "2rem",
  fontSizeMedium: "1.5rem",
  fontSizeSmall: "1rem",
};
