import {
  WeaterStyledMain,
  WeatherContainerDayHours,
  WeatherStyledSection,
  WeatherStyledTitulo
} from "./Styled";
import { useWeatherDadosApi } from "../../hooks/WeatherSet";
import { toggleColor, setDateDayMonth } from "../../utils/weather";
import WeatherDatailsNow from "./WeatherDetailsNow";
import WeatherDetailsDay from "./WeatherDetailsDay";
import WeatherDetailsListHours from "./WeatherDetailsListHours";
import WeatherDetailsLocation from "./WeatherDetailsLocation";
import Loader from "../../components/Loader";

const Weather = () => {
  const { data, isLoading, image } = useWeatherDadosApi();

  if (isLoading || !data || !image) {
    return (
      <Loader />
    )
  }

  return (
    <WeaterStyledMain
      imageWeather={image}
      toggleColor={toggleColor(data.data.current.is_day, image!)} >
      <WeatherStyledSection>
        <WeatherStyledTitulo toggleColor={toggleColor(data.data.current.is_day, image!)}>Clima Tempo EveryOne-App</WeatherStyledTitulo>
        <WeatherDetailsLocation location={data.data.location} />
        <WeatherDatailsNow current={data.data.current} />
        {data?.data.forecast.forecastday.map((clima, index) => (
          <WeatherContainerDayHours key={index}>
            <WeatherDetailsDay
              day={clima.day}
              date={clima.date}
              toggleColor={toggleColor(data?.data.current?.is_day, image)}
            />
            <WeatherDetailsListHours
              toggleColor={toggleColor(data?.data.current?.is_day, image)}
              hours={clima.hour}
            />
          </WeatherContainerDayHours>
        ))}
      </WeatherStyledSection>
    </WeaterStyledMain >
  )
};

export default Weather;