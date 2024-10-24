import { ILocation } from "../../../Interfaces/Weather";
import { setDateNow } from "../../../utils/weather";
import { WeatherLocalization, WeatherLocalizationContainer } from "./Styled";

interface IWeatherDetailsLocationProps {
    location: ILocation
}

const WeatherDetailsLocation = ({location}: IWeatherDetailsLocationProps) => {
    return (
        <WeatherLocalizationContainer>
            <h2>{location?.name}</h2>
            <WeatherLocalization>
                {setDateNow(location?.localtime || new Date())}
            </WeatherLocalization>
        </WeatherLocalizationContainer>
    )
};

export default WeatherDetailsLocation;
