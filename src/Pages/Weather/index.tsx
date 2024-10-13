import { useEffect, useState } from "react";
import { WeaterStyledMain, WeatherStyledSection, WeatherStyledTitulo } from "./Styled";
// import { useReactQueryWeatherForecast } from "../../http/hooks/useHttpWeather";

const Weather = () => {
  const [latitude, setLatitude] = useState<number>(0)
  const [longetude, setLongitude] = useState<number>(0)
  // const { isPending, data } = useReactQueryWeatherForecast(latitude, longetude);

  // if (!isPending) {
  //   console.log(data?.data.current)
  // }

  useEffect(() => {
    const onSuccess = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    };
    const onError = (error: GeolocationPositionError) => {
      console.error('Error Code: ' + error.code + '|' + error.message);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [latitude, longetude])

  return (<WeaterStyledMain>
    <WeatherStyledSection>
      <WeatherStyledTitulo>Tempo Hoje</WeatherStyledTitulo>
    </WeatherStyledSection>
  </WeaterStyledMain>)
};

export default Weather;