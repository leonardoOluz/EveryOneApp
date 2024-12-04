import { IImagesVariables } from "../../Interfaces/Weather";
import daySkyBlue from "../../assets/weather/day/skyBlue.jpg";
import daySkyCloudy from "../../assets/weather/day/skyCloudy.jpg";
import daySkyCloudyTotal from "../../assets/weather/day/skyCloudyTotal.jpg";
import daySkyCloudyRainEasy from "../../assets/weather/day/skyCloudyRainEasy.jpg";
import daySkyCloudyRainHard from "../../assets/weather/day/skyCloudyRainHard.jpg";
import nightSkyBlueNight from "../../assets/weather/night/skyBlueNight.jpg";
import nightSkyCloudyNight from "../../assets/weather/night/skyCloudyNight.jpg";
import nightSkyCloudyTotalNight from "../../assets/weather/night/skyCloudyTotalNight.jpg";
import nightSkyCloudyRainEasyNight from "../../assets/weather/night/skyCloudyRainEasyNight.jpg";
import nightSkyCloudyRainHardNight from "../../assets/weather/night/skyCloudyRainHardNight.jpg";


export const imagesDay: IImagesVariables = {
  skyBlue: daySkyBlue,
  skyCloudy: daySkyCloudy,
  skyCloudyTotal: daySkyCloudyTotal,
  skyCloudyRainEasy: daySkyCloudyRainEasy,
  skyCloudyRainHard: daySkyCloudyRainHard,
};

export const imagesNight: IImagesVariables = {
  skyBlue: nightSkyBlueNight,
  skyCloudy: nightSkyCloudyNight,
  skyCloudyTotal: nightSkyCloudyTotalNight,
  skyCloudyRainEasy: nightSkyCloudyRainEasyNight,
  skyCloudyRainHard: nightSkyCloudyRainHardNight,
};
