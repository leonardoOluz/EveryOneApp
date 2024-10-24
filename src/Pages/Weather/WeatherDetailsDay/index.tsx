import { useRef } from "react";
import { WeatherDetailsDayStyled } from "./Styled";
import { useWeatherScrollObserver } from "../../../hooks/WeatherSet";
import { IDay } from "../../../Interfaces/Weather";

interface IWeatherDetailsDayProps {
  day: IDay
}

const WeatherDetailsDay = ({ day }: IWeatherDetailsDayProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  useWeatherScrollObserver(elementRef, "show");

  return <WeatherDetailsDayStyled ref={elementRef}>
    {day?.condition.text}
  </WeatherDetailsDayStyled>
};

export default WeatherDetailsDay;