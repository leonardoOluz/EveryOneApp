import { dateTransform } from "../../../utils/dateTransform";
import { ICurrent } from "../Interface";
import { imagesDay, imagesNight } from "../Styles/IU";

export function setDateHoursMinute(date: Date): string {
  const apiDate = new Date(date);
  const hour = apiDate.getHours();
  const minutes = apiDate.getMinutes();
  return `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

export function setDateWeekMonthDay(date: Date): string {
  const apiDate = dateTransform(date);
  const day = apiDate.toLocaleString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  });

  return `${day}`;
}

export function setDateNow(date: Date): string {
  const apiDate = dateTransform(date);
  const day = apiDate.toLocaleString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day}`;
}

export function backgroudImageWeather(current: ICurrent): string {
  const regRainEasy = /(Chuva fraca|chuvisco)/gi;
  const regRainHard = /(Chuva forte|tempestade|chovendo|pancadas)/gi;
  const regSkyCloudy = /(Parcialmente nublado|Nublado)/gi;
  const regSkyCloudyTotal = /(Encoberto|Possibilidade de chuva irregular)/gi;

  const images = current.is_day ? imagesDay : imagesNight;

  if (regRainEasy.test(current.condition.text)) {
    return images.skyCloudyRainEasy;
  }

  if (regRainHard.test(current.condition.text)) {
    return images.skyCloudyRainHard;
  }

  if (regSkyCloudy.test(current.condition.text)) {
    return images.skyCloudy;
  }

  if (current.cloud >= 80 || regSkyCloudyTotal.test(current.condition.text)) {
    return images.skyCloudyTotal;
  }

  return images.skyBlue;
}

export function toggleColor(day: number, image: string): boolean {
  let isRain: boolean = false;

  isRain =
    day === 0 ||
    image.includes(imagesDay.skyCloudyRainEasy) ||
    image.includes(imagesDay.skyCloudyRainHard) ||
    image.includes(imagesDay.skyCloudyTotal)
      ? true
      : false;


  return isRain;
}

export function setTotalPrecipMm(precip: number): string {
  return `${precip.toString()} mm`;
}

export function checkHoursAtual(currentData: Date, hours: Date): boolean {
  const atual = dateTransform(currentData);
  const hour = dateTransform(hours);
  let isNow = false;
  if (atual.getHours() === hour.getHours()) {
    isNow = true;
  }
  return isNow;
}
