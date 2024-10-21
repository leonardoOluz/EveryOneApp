import { ILocation } from "../../../Interfaces/Weather";
import { WeatherStyledTitleLocal } from "../../../styles/globalStyles";
import { setDateNow } from "../../../utils/weather/setDate";
import { WeatherLocalization } from "./Styled";

interface IWeatherDetailsLocationProps {
    location?: ILocation
}

const WeatherDetailsLocation = ({location}: IWeatherDetailsLocationProps) => {
    return (
        <WeatherStyledTitleLocal>
            <h2>{location?.name}</h2>
            <WeatherLocalization>
                {setDateNow(location?.localtime || new Date())}
            </WeatherLocalization>
        </WeatherStyledTitleLocal>
    )
};

export default WeatherDetailsLocation;