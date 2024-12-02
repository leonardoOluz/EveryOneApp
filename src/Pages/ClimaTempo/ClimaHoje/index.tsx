import { PiWind } from "react-icons/pi";
import { SpanDetalhesClimaTempoStyled, SubTituloStyled, WeatherImage } from "../../../styles/StylesClima/StylesClima";
import { SecaoClimaHoje } from "./Styled";
import { WiHumidity } from "react-icons/wi";
import { GiWaterSplash } from "react-icons/gi";
import { IDay } from "../../../Interfaces/Weather";
import { setTotalPrecipMm } from "../../../utils/ClimaTempoUtils";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

interface PropsClimaHoje {
  day: IDay;
}
const ClimaHoje = ({ day }: PropsClimaHoje) => {
  return (
    <SecaoClimaHoje>
      <SubTituloStyled>Previsão do dia</SubTituloStyled>
      <ul aria-label="lista de informações do clima hoje">
        <li>
          <figure>
            <WeatherImage maxWidth="7rem" src={day.condition.icon} alt="icone do clima hoje" title="icone do clima hoje" />
            <figcaption className="weather__climaHoje-description">{day.condition.text}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <FaTemperatureArrowUp size={35} aria-label="Icone de temperatura maxima" title="Icone de temperatura maxima" />
              <figcaption>Temperatura Max: </figcaption>
            </div>
            <SpanDetalhesClimaTempoStyled className="figacaption-temp">{day.maxtemp_c}</SpanDetalhesClimaTempoStyled>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <FaTemperatureArrowDown size={35} title="Icone de temperatura minima" aria-label="Icone de temperatura minima" />
              <figcaption>Temperatura Min: </figcaption>
            </div>
            <SpanDetalhesClimaTempoStyled className="figacaption-temp">{day.mintemp_c}</SpanDetalhesClimaTempoStyled>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <PiWind size={35} title="Icone do vento" aria-label="icone do vento" />
              <figcaption>Vento maximo: </figcaption>
            </div>
            <SpanDetalhesClimaTempoStyled className="figacaption-WindKm">{day.maxwind_kph}</SpanDetalhesClimaTempoStyled>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <WiHumidity size={35} title="Icone da umidade" aria-label="Icone da umidade" />
              <figcaption>Umidade do ar: </figcaption>
            </div>
            <SpanDetalhesClimaTempoStyled>{day.avghumidity}%</SpanDetalhesClimaTempoStyled>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <GiWaterSplash size={35} title="Icone da precipitação da chuva" aria-label="Icone da precipitação da chuva" />
              <figcaption>Precipitação de chuva: </figcaption>
            </div>
            <SpanDetalhesClimaTempoStyled>{setTotalPrecipMm(day.totalprecip_mm!)}</SpanDetalhesClimaTempoStyled>
          </figure>
        </li>
      </ul>
    </SecaoClimaHoje>
  )
};

export default ClimaHoje;