import { useEffect, useState } from "react";
import { WeaterContainer, WeatherTitulo } from "./Styled";
import useReactQueryWeather from "../../http/hooks/useReactQueryWeather";


const Weather = () => {
  const [latitude, setLatitude] = useState<number>(0)
  const [longetude, setLongitude] = useState<number>(0)
  const { useQueryWeather } = useReactQueryWeather();
  const { isPending, data } = useQueryWeather(latitude, longetude);
  if (!isPending) {
    console.log(data?.data.current)
  }
  useEffect(() => {
    const onSuccess = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    };
    const onError = (error: GeolocationPositionError) => {
      console.error('Error Code: ' + error.code + '|' + error.message);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
    console.log({"useEffect -> Weather": latitude, longetude})
  }, [latitude, longetude])

  return (<WeaterContainer>
    <WeatherTitulo>Tempo Hoje</WeatherTitulo>
  </WeaterContainer>)
};

export default Weather;