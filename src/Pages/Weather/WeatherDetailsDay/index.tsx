import { WeatherImage } from "../Styled";
import { WeatherStyledContainerDay, WeatherStyledTitleDay } from "./Styled";
import { PiWind } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { GiWaterSplash } from "react-icons/gi";
import { ICurrent, ILocation } from "../../../Interfaces/Weather";

interface IWeatherDatailsDayProps {
    current?: ICurrent;
    locantion?: ILocation;
}

const WeatherDatailsDay = ({ current, locantion }: IWeatherDatailsDayProps) => {
    return (
        <WeatherStyledContainerDay>
            <WeatherStyledTitleDay>{locantion?.region}</WeatherStyledTitleDay>
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
                    <span>{current?.humidity}%</span>
                </figure>
                <figure>
                    <GiWaterSplash size={45} />
                    <span>{current?.precip_mm} mm Hg</span>
                </figure>
            </div>
        </WeatherStyledContainerDay>
    )
}

export default WeatherDatailsDay;