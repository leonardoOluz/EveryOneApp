import { useEffect, useState } from "react";
import {
  WeaterStyledMain, WeatherImage,
  WeatherStyledListHours, WeatherStyledSection,
  WeatherStyledSlider, WeatherStyledTitulo
} from "./Styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules"
import { useReactQueryWeatherForecast } from "../../http/hooks/useHttpWeather";
import WeatherDatailsNow from "./WeatherDetailsNow";
import WeatherDetailsDay from "./WeatherDetailsDay";
import Loader from "../../components/Loader";
import setDate from "../../utils/weather/setDate";
import { useGeolocation, useResize } from "../../hooks/WeatherSet";

const Weather = () => {
  const numberSlides = useResize();
  const { coords, loading } = useGeolocation();
  const [latitude, setLatitude] = useState<number>(0)
  const [longetude, setLongitude] = useState<number>(0)
  const [slidesPerView, setSlidesPerView] = useState<number>()
  const { isPending, data } = useReactQueryWeatherForecast(latitude, longetude);

  useEffect(() => {
    if (!loading && coords) {
      setLatitude(coords?.latitude)
      setLongitude(coords?.longitude)
    }
    setSlidesPerView(numberSlides)
  }, [longetude, latitude, loading, coords, numberSlides])

  if (isPending && data) {
    return <Loader />
  }

  const { forecast, location, current } = data!.data;

  return (<WeaterStyledMain>
    <WeatherStyledTitulo>Weather</WeatherStyledTitulo>
    <WeatherStyledSection>
      <WeatherDatailsNow current={current} locantion={location} />
      <WeatherStyledListHours>
        <Swiper
          modules={[Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          scrollbar={{ draggable: false }}
        >
          {forecast.forecastday[0].hour.map((hour, index) => (
            <SwiperSlide key={index}>
              <WeatherStyledSlider>
                <h3>{setDate(hour.time!)}</h3>
                <WeatherImage src={hour.condition?.icon} alt="icone do tempo horario referido" />
                <p>+{hour.temp_c}°C</p>
              </WeatherStyledSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      </WeatherStyledListHours>
      <WeatherDetailsDay day={forecast.forecastday[0].day} />
    </WeatherStyledSection>
  </WeaterStyledMain>)
};

export default Weather;