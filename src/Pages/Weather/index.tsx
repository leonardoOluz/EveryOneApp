import { useEffect, useState } from "react";
import { WeaterStyledMain, WeatherImage, WeatherStyledListHours, WeatherStyledSection, WeatherStyledSlider, WeatherStyledTitulo } from "./Styled";
import WeatherDatailsDay from "./WeatherDetailsDay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules"

import { useReactQueryWeatherForecast } from "../../http/hooks/useHttpWeather";
import Loader from "../../components/Loader";
import setDate from "../../utils/weather/setDate";

const Weather = () => {
  const [latitude, setLatitude] = useState<number>(0)
  const [longetude, setLongitude] = useState<number>(0)
  const [slidesPerView, setSlidesPerView] = useState<number>(9)
  const { isPending, data } = useReactQueryWeatherForecast(latitude, longetude);
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
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 400) {
        return setSlidesPerView(3)
      }
      if (window.innerWidth < 768) {
        return setSlidesPerView(4)
      }
      if (window.innerWidth < 1025) {
        return setSlidesPerView(6)
      }
      if (window.innerWidth > 1025) {
        return setSlidesPerView(9)
      }
    };

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [])

  if (isPending) {
    return <Loader />
  }

  return (<WeaterStyledMain>
    <WeatherStyledTitulo>Weather</WeatherStyledTitulo>
    <WeatherStyledSection>
      <WeatherDatailsDay current={data?.data.current} locantion={data?.data.location} />
      <WeatherStyledListHours>
        <Swiper
          modules={[Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          scrollbar={{ draggable: false }}
          onSwiper={() => { }}
          onSlideChange={() => { }}
        >
          {data?.data.forecast.forecastday[0].hour.map((hour, index) => (
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
    </WeatherStyledSection>
  </WeaterStyledMain>)
};

export default Weather;