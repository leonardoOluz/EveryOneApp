import { useRef } from "react";
import { WeatherDetailsDayContainer, WeatherDetailsDayStyled, WeatherFigureDayStyled, WeatherListaDetailsDayStyled } from "./Styled";
import { useWeatherScrollObserver } from "../../../hooks/WeatherSet";
import { IDay } from "../../../Interfaces/Weather";
import { setDateDayMonth, setTotalPrecipMm } from "../../../utils/weather";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { WeatherImage } from "../../../styles/weatherStyles/globalStyles";
interface IWeatherDetailsDayProps {
  day: IDay;
  toggleColor: boolean;
  date: Date;
}

const WeatherDetailsDay = ({ day, toggleColor, date }: IWeatherDetailsDayProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  useWeatherScrollObserver(elementRef, "show");

  return <WeatherDetailsDayStyled ref={elementRef}>
    <h2>Previsão para {setDateDayMonth(date)}</h2>
    <WeatherFigureDayStyled>
      <h3>{day?.condition.text}</h3>
      <figure>
        <WeatherImage src={day?.condition.icon} alt={`icone do clima hoje ${day?.condition.text}`}/>
      </figure>
    </WeatherFigureDayStyled>
    <WeatherListaDetailsDayStyled>
      <li>
        <h3>Temperatura</h3>
        <WeatherDetailsDayContainer toggleColor={toggleColor}>
          <FaLongArrowAltDown size={20} />
          {day?.mintemp_c}°C
          <FaLongArrowAltUp size={20} />
          {day?.maxtemp_c}°C
        </WeatherDetailsDayContainer>
      </li>
      <li>
        <h3>Chuva</h3>
        <WeatherDetailsDayContainer toggleColor={toggleColor}>
          <CiDroplet size={20}/>
          <CiDroplet size={20}/>
          <CiDroplet size={20}/>
          <span>{setTotalPrecipMm(day?.totalprecip_mm || 0)}</span>
        </WeatherDetailsDayContainer>
      </li>
      <li>
        <h3>Umidade</h3>
        <WeatherDetailsDayContainer toggleColor={toggleColor}>
          <WiHumidity size={20} />
          <span>{day?.avghumidity} <strong>%</strong></span>
        </WeatherDetailsDayContainer>
      </li>
      <li>
        <h3>Chance de chuva</h3>
        <WeatherDetailsDayContainer toggleColor={toggleColor}>
          <WiHumidity size={20} />
          <span>{day?.avghumidity} <strong>%</strong></span>
        </WeatherDetailsDayContainer>
      </li>
    </WeatherListaDetailsDayStyled>
  </WeatherDetailsDayStyled>
};

export default WeatherDetailsDay;