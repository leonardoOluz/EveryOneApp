import { DefaultTheme } from "styled-components/dist/types";
import { styledVariable, ValueRem } from "../IU";

export const themeLight: DefaultTheme = {
  primary: styledVariable.colorsSummer.primary,
  secondary: styledVariable.colorsSummer.secundary,
  tertiary: styledVariable.colorsSummer.tercciary,
  quaternary: styledVariable.colorsSummer.quaternary,
  quinary: styledVariable.colorsSummer.quinary,
  fontesFamily: styledVariable.fontesFamily.secundary,
  white: styledVariable.white,
  black: styledVariable.black,
  fontSizeTitle: ValueRem.rem3n2,
  fontSizeBig: ValueRem.rem2n4,
  fontSizeMedium: ValueRem.rem1n6,
  fontSizeSmall: ValueRem.rem1,
};

export const themeDark: DefaultTheme = {
  primary: styledVariable.colorsBlue.primary,
  secondary: styledVariable.colorsBlue.secundary,
  tertiary: styledVariable.colorsBlue.tercciary,
  quaternary: styledVariable.colorsBlue.quaternary,
  quinary: styledVariable.colorsBlue.quinary,
  fontesFamily: styledVariable.fontesFamily.primary,
  white: styledVariable.white,
  black: styledVariable.black,
  fontSizeTitle: ValueRem.rem3n2,
  fontSizeBig: ValueRem.rem2n4,
  fontSizeMedium: ValueRem.rem1n6,
  fontSizeSmall: ValueRem.rem1,
};
