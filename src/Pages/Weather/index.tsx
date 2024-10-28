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
import { backgroudImageWeather, toggleColor } from "../../utils/weather";

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

  if (isLoading && !data && !image) {
    return <Loader />
  }

  return (
    <>
      {data?.data && image ? (
        <WeaterStyledMain
          imageWeather={image}
          toggleColor={toggleColor(data?.data.current?.is_day, image)} >
          <WeatherStyledSection>
            <>
              <WeatherStyledTitulo toggleColor={toggleColor(data?.data.current?.is_day, image)}>Clima Tempo EveryOne-App</WeatherStyledTitulo>
              <WeatherDetailsLocation location={data?.data.location} />
              <WeatherDatailsNow current={data?.data.current} />
              <WeatherDetailsListHours
                toggleColor={toggleColor(data?.data.current?.is_day, image)}
                hours={data?.data.forecast.forecastday[0].hour}
              />
              <WeatherDetailsDay
                day={data?.data.forecast.forecastday[0].day}
                location={data?.data.location}
                toggleColor={toggleColor(data?.data.current?.is_day, image)}
              />

            </>
          </WeatherStyledSection>
        </WeaterStyledMain >
      )
        : <Loader />}
    </>)
};

export default Weather;