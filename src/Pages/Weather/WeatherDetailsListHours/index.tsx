import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules"
import { useEffect, useRef, useState } from "react";
import { setDateHoursMinute } from "../../../utils/weather";
import { useResize, useWeatherScrollObserver } from "../../../hooks/WeatherSet";
import { IHours } from "../../../Interfaces/Weather";
import { WeatherStyledListHours, WeatherStyledSlider } from "./Styled";
import { WeatherImage } from "../../../styles/weatherStyles/globalStyles";


interface IWeatherDetailsListHoursProps {
  hours: IHours[]
  toggleColor: boolean
}

const WeatherDetailsListHours = ({ hours, toggleColor }: IWeatherDetailsListHoursProps) => {
  const numberSlides = useResize();
  const [slidesPerView, setSlidesPerView] = useState<number>(9)

  const elementRef = useRef(null)
  useWeatherScrollObserver(elementRef, "show");

  useEffect(() => {
    setSlidesPerView(numberSlides)
  }, [numberSlides])



  return (
    <WeatherStyledListHours ref={elementRef}>
      <Swiper
        modules={[Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        scrollbar={{ draggable: false }}
      >
        {hours.map((hour, index) => (
          <SwiperSlide key={index}>
            <WeatherStyledSlider toggleColor={toggleColor}>
              <h3>{setDateHoursMinute(hour.time!)}</h3>
              <WeatherImage src={hour.condition?.icon} alt="icone do tempo horario referido" />
              <p>+{hour.temp_c}°C</p>
            </WeatherStyledSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </WeatherStyledListHours>
  )
}

export default WeatherDetailsListHours;