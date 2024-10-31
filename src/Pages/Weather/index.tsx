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
            <WeatherStyledTitulo toggleColor={toggleColor(data?.data.current?.is_day, image)}>Clima Tempo EveryOne-App</WeatherStyledTitulo>
            <WeatherDetailsLocation location={data?.data.location} />
            <WeatherDatailsNow current={data?.data.current} />
            {data?.data.forecast.forecastday.map((clima) => (
              <>
                <WeatherDetailsDay
                  day={clima.day}
                  date={clima.date}
                  toggleColor={toggleColor(data?.data.current?.is_day, image)}
                />
                <WeatherDetailsListHours
                  toggleColor={toggleColor(data?.data.current?.is_day, image)}
                  hours={clima.hour}
                />
              </>
            ))}
          </WeatherStyledSection>
        </WeaterStyledMain >
      )
        : <Loader />}
    </>)
};

export default Weather;