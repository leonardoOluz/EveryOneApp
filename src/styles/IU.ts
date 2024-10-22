import { IVariaveis } from "../Interfaces/IVariaveis";
import { IImagesVariables } from "../Interfaces/Weather";

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
  fontesFamily: {
    primary: '"Roboto Condensed", sans-serif',
    secundary: '"Oswald", sans-serif',
  },
};

export const imagesDay: IImagesVariables = {
  skyBlue: "day/skyBlue",
  skyCloudy: "day/skyCloudy",
  skyCloudyTotal: "day/skyCloudyTotal",
  skyCloudyRainEasy: "day/skyCloudyRainEasy",
  skyCloudyRainHard: "day/skyCloudyRainHard",
};

export const imagesNight: IImagesVariables = {
  skyBlue: "night/skyBlueNight",
  skyCloudy: "night/skyCloudyNight",
  skyCloudyTotal: "night/skyCloudyTotalNight",
  skyCloudyRainEasy: "night/skyCloudyRainEasyNight",
  skyCloudyRainHard: "night/skyCloudyRainHardNight",
}