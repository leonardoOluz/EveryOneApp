import { useEffect, useState } from "react";
import {
  WeaterStyledMain,
  WeatherStyledSection,
  WeatherStyledTitulo
} from "./Styled";


import { useReactQueryWeatherForecast } from "../../http/hooks/useHttpWeather";
import WeatherDatailsNow from "./WeatherDetailsNow";
import WeatherDetailsDay from "./WeatherDetailsDay";
import Loader from "../../components/Loader";
import { useGeolocation } from "../../hooks/WeatherSet";
import WeatherDetailsListHours from "./WeatherDetailsListHours";
import WeatherDetailsLocation from "./WeatherDetailsLocation";

const Weather = () => {
  const { coords, loading } = useGeolocation();
  const [latitude, setLatitude] = useState<number>(0)
  const [longetude, setLongitude] = useState<number>(0)

  useEffect(() => {
    if (!loading && coords) {
      setLatitude(coords?.latitude)
      setLongitude(coords?.longitude)
    }
  }, [longetude, latitude, loading, coords])

  const { isPending, data } = useReactQueryWeatherForecast(latitude, longetude);

  if (isPending) {
    return <Loader />
  }

  const { forecast, location, current } = data!.data;

  return (<WeaterStyledMain>
    <WeatherStyledTitulo>Clima Tempo EveryOne-App</WeatherStyledTitulo>
    <WeatherStyledSection>

      <WeatherDetailsLocation location={location}/>

      <WeatherDatailsNow current={current} />

      <WeatherDetailsListHours hours={forecast.forecastday[0].hour} />

      <WeatherDetailsDay day={forecast.forecastday[0].day} />

    </WeatherStyledSection>

  </WeaterStyledMain>)
};

export default Weather;