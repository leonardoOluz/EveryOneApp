import { PiWind } from "react-icons/pi";
import { SpanDetalhesClimaTempoStyled, ClimaImage } from "../../Styles/StylesClima";
import { TituloStyleClimaHoje } from "./Styled";
import { WiHumidity } from "react-icons/wi";
import { GiWaterSplash } from "react-icons/gi";
import { IDay } from "../../Interface";
import { setTotalPrecipMm } from "../../utils";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { ValueRemClima } from "../../Styles/EnumsClima";
import SectionClimaTempo from "../SectionClimaTempo";
import ClimaHojeList from "./ClimaHojeList";
import ClimaHojeItem from "./ClimaHojeItem";
import ClimaHojeFigure from "./ClimaHojeFigure";
import ClimaHojeFigcaption from "./ClimaHojeFigure/ClimaHojeFigcaption";
import ClimaHojeContainer from "./ClimaHojeContainer";

interface PropsClimaHoje {
  day: IDay;
}
const SectionClimaHoje = ({ day }: PropsClimaHoje) => {
  return (
    <SectionClimaTempo ariaLabelledy="previsao-do-dia">
      <TituloStyleClimaHoje id="previsao-do-dia">Previsão do dia</TituloStyleClimaHoje>

      <ClimaHojeList aria-label="lista de informações do clima hoje">
        
        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaImage maxWidth={ValueRemClima.rem7} src={day.condition.icon} alt="icone do clima hoje" title="icone do clima hoje" />
            <ClimaHojeFigcaption nomeClasse="weather__climaHoje-description">{day.condition.text}</ClimaHojeFigcaption>
          </ClimaHojeFigure>
        </ClimaHojeItem>

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <FaTemperatureArrowUp size={35} aria-label="Icone de temperatura maxima" title="Icone de temperatura maxima" />
              <ClimaHojeFigcaption>Temperatura Max: </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <SpanDetalhesClimaTempoStyled className="figacaption-temp">{day.maxtemp_c}</SpanDetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>
        
        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <FaTemperatureArrowDown size={35} title="Icone de temperatura minima" aria-label="Icone de temperatura minima" />
              <ClimaHojeFigcaption>Temperatura Min: </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <SpanDetalhesClimaTempoStyled className="figacaption-temp">{day.mintemp_c}</SpanDetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>
        
        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <PiWind size={35} title="Icone do vento" aria-label="icone do vento" />
              <ClimaHojeFigcaption>Vento maximo: </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <SpanDetalhesClimaTempoStyled className="figacaption-WindKm">{day.maxwind_kph}</SpanDetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>
        
        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <WiHumidity size={35} title="Icone da umidade" aria-label="Icone da umidade" />
              <ClimaHojeFigcaption>Umidade do ar: </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <SpanDetalhesClimaTempoStyled>{day.avghumidity}%</SpanDetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        
        </ClimaHojeItem>
        
        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <GiWaterSplash size={35} title="Icone da precipitação da chuva" aria-label="Icone da precipitação da chuva" />
              <ClimaHojeFigcaption>Precipitação de chuva: </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <SpanDetalhesClimaTempoStyled>{setTotalPrecipMm(day.totalprecip_mm!)}</SpanDetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>
      
      </ClimaHojeList>

    </SectionClimaTempo>
  )
};

export default SectionClimaHoje;