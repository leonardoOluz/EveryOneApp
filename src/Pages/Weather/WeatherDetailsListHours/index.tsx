import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules"
import { useEffect, useState } from "react";
import { setDateHoursMinute } from "../../../utils/weather";
import { useResize } from "../../../hooks/WeatherSet";
import { IHours } from "../../../Interfaces/Weather";
import { WeatherStyledListHours, WeatherStyledSlider } from "./Styled";
import { WeatherImage } from "../../../styles/weatherStyles/globalStyles";


interface IWeatherDetailsListHoursProps {
  hours: IHours[]
  night: number | undefined
}

const WeatherDetailsListHours = ({ hours, night }: IWeatherDetailsListHoursProps) => {
  const numberSlides = useResize();
  const [slidesPerView, setSlidesPerView] = useState<number>(9)

  useEffect(() => {
    setSlidesPerView(numberSlides)
  }, [numberSlides])



  return (
    <WeatherStyledListHours>
      <Swiper
        modules={[Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        scrollbar={{ draggable: false }}
      >
        {hours.map((hour, index) => (
          <SwiperSlide key={index}>
            <WeatherStyledSlider night={night}>
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