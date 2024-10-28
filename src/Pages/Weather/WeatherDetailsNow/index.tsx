import { WeatherStyledContainerNow } from "./Styled";
import { PiWind } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { GiWaterSplash } from "react-icons/gi";
import { ICurrent } from "../../../Interfaces/Weather";
import { WeatherImage } from "../../../styles/weatherStyles/globalStyles";
import { setTotalPrecipMm } from "../../../utils/weather";

interface IWeatherDatailsDayProps {
    current: ICurrent;
}

const WeatherDatailsNow = ({ current }: IWeatherDatailsDayProps) => {
    return (
        <WeatherStyledContainerNow>
            <div className="Details">
                <h2><strong>+</strong>{current?.temp_c}°C</h2>
                <figure>
                    <WeatherImage src={current?.condition.icon} alt={`icon do tempo ${current?.condition.icon}`} />
                </figure>
                <p>{current?.condition.text}</p>
            </div>
            <div className="Details">
                <figure>
                    <PiWind size={45} />
                    <span>{current?.wind_kph} km/h</span>
                </figure>
                <figure>
                    <WiHumidity size={45} />
                    <span>{current?.humidity} %</span>
                </figure>
                <figure>
                    <GiWaterSplash size={45} />
                    <span>{setTotalPrecipMm(current?.precip_mm)}</span>
                </figure>
            </div>
        </WeatherStyledContainerNow>
    )
}

export default WeatherDatailsNow;