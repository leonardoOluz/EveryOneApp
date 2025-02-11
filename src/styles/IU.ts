import { IVariaveis } from "../Interfaces/IVariaveis";

export const styledVariable: IVariaveis = {
  colorsBlue: {
    primary: "#0d1321",
    secundary: "#1d2d44",
    tercciary: "#3e5c76",
    quaternary: "#748cab",
    quinary: "#f0ebd8",
  },
  colorsSummer: {
    primary: "#C2E5F2",
    secundary: "#07B2D9",
    tercciary: "#88DFF2",
    quaternary: "#04C4D9",
    quinary: "#000000",
  },
  black: "#000000",
  white: "#ffffff",
  fontesFamily: {
    primary: '"Archivo Narrow", serif',
    secundary: '"Archivo Narrow", serif',
  },
};

export enum ValueRem {
  rem1 = "1rem",
  rem1n6 = "1.6rem",
  rem2 = "2rem",
  rem2n4 = "2.4rem",
  rem3 = "3rem",
  rem3n2 = "3.2rem",
  rem4 = "4rem",
  rem5 = "5rem",
  rem6 = "6rem",
  rem7 = "7rem",
  rem8 = "8rem",
  rem9 = "9rem",
  rem10 = "10rem",
  rem11 = "11rem",
  rem12 = "12rem",
  rem13 = "13rem",
  rem14 = "14rem",
  rem15 = "15rem",
  rem16 = "16rem",
  rem17 = "17rem",
  rem18 = "18rem",
  rem19 = "19rem",
  rem20 = "20rem",
}

export interface IEstilos {
  h1: string;
  h2: string;
  h3: string;
  body: string;
  body2: string;
};

export interface IComponete {
  h1: string;
  h2: string;
  h3: string;
  body: string;
};