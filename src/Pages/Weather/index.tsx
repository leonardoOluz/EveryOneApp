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
import { backgroudImageWeather } from "../../utils/weather";

const Weather = () => {
  const { coords, loading } = useGeolocation();
  const [latitude, setLatitude] = useState<number>(0)
  const [longetude, setLongitude] = useState<number>(0)
  const [image, setImage] = useState<string>()
  const { isLoading, data: data } = useReactQueryWeatherForecast(latitude, longetude);

  useEffect(() => {
    if (!loading && coords) {
      setLatitude(coords?.latitude)
      setLongitude(coords?.longitude)
    }
    if (data?.data.current) {
      setImage(backgroudImageWeather(data?.data.current))
    }

  }, [longetude, latitude, loading, coords, data?.data])

  if (isLoading && data !== undefined) {
    return <Loader />
  }

  return (<WeaterStyledMain imageWeather={image || ""}>
    <WeatherStyledTitulo>Clima Tempo EveryOne-App</WeatherStyledTitulo>
    <WeatherStyledSection>

      <WeatherDetailsLocation location={data?.data.location} />

      <WeatherDatailsNow current={data?.data.current} />

      <WeatherDetailsListHours hours={data?.data.forecast.forecastday[0].hour || []} />

      <WeatherDetailsDay day={data?.data.forecast.forecastday[0].day} />

    </WeatherStyledSection>

  </WeaterStyledMain>)
};

export default Weather;