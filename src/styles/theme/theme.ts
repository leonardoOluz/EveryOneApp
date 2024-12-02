import { DefaultTheme } from "styled-components/dist/types";
import { styledVariable } from "../IU";

export const themeLight: DefaultTheme = {
  primary: styledVariable.colorsSummer.primary,
  secondary: styledVariable.colorsSummer.secundary,
  tertiary: styledVariable.colorsSummer.tercciary,
  quaternary: styledVariable.colorsSummer.quaternary,
  quinary: styledVariable.colorsSummer.quinary,
  fontesFamily: styledVariable.fontesFamily.secundary,
  fontSizeTitle: "3.2rem",
  fontSizeBig: "2.4rem",
  fontSizeMedium: "1.6rem",
  fontSizeSmall: "1rem",
};

export const themeDark: DefaultTheme = {
  primary: styledVariable.colorsBlue.primary,
  secondary: styledVariable.colorsBlue.secundary,
  tertiary: styledVariable.colorsBlue.tercciary,
  quaternary: styledVariable.colorsBlue.quaternary,
  quinary: styledVariable.colorsBlue.quinary,
  fontesFamily: styledVariable.fontesFamily.primary,
  fontSizeTitle: "3.2rem",
  fontSizeBig: "2.4rem",
  fontSizeMedium: "1.6rem",
  fontSizeSmall: "1rem"
};
