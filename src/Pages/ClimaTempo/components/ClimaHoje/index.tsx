import { PiWind } from "react-icons/pi";
import { DetalhesClimaTempoStyled, ClimaImage } from "../../Styles/StylesClima";
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
import { Tipografia } from "../../../../components/Tipografia/Tipografia";

interface PropsClimaHoje {
  day: IDay;
}
const SectionClimaHoje = ({ day }: PropsClimaHoje) => {
  return (
    <SectionClimaTempo ariaLabelledy="previsao-do-dia">
      <TituloStyleClimaHoje id="previsao-do-dia">
        <Tipografia componente="h2" variante="h2" texto="Previsão do dia" />
      </TituloStyleClimaHoje>

      <ClimaHojeList aria-label="lista de informações do clima hoje">

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaImage maxWidth={ValueRemClima.rem7} src={day.condition.icon} alt="icone do clima hoje" title="icone do clima hoje" />
            <ClimaHojeFigcaption nomeClasse="weather__climaHoje-description">
              <Tipografia componente="body" variante="h3" texto={`${day.condition.text}`} />
            </ClimaHojeFigcaption>
          </ClimaHojeFigure>
        </ClimaHojeItem>

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <FaTemperatureArrowUp size={35} aria-label="Icone de temperatura maxima" title="Icone de temperatura maxima" />
              <ClimaHojeFigcaption>
                <Tipografia componente="body" variante="body" texto="Temperatura Max: " />
              </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <DetalhesClimaTempoStyled className="figacaption-temp">
              <Tipografia componente="body" variante="body" texto={String(day.maxtemp_c)} />
            </DetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <FaTemperatureArrowDown size={35} title="Icone de temperatura minima" aria-label="Icone de temperatura minima" />
              <ClimaHojeFigcaption>
                <Tipografia componente="body" variante="body" texto="Temperatura Min: " />
              </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <DetalhesClimaTempoStyled className="figacaption-temp">
              <Tipografia componente="body" variante="body" texto={String(day.mintemp_c)} />
            </DetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <PiWind size={35} title="Icone do vento" aria-label="icone do vento" />
              <ClimaHojeFigcaption>
                <Tipografia componente="body" variante="body" texto="Vento maximo: " />
              </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <DetalhesClimaTempoStyled className="figacaption-WindKm">
              <Tipografia componente="body" variante="body" texto={String(day.maxwind_kph)} />
            </DetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <WiHumidity size={35} title="Icone da umidade" aria-label="Icone da umidade" />
              <ClimaHojeFigcaption>
                <Tipografia componente="body" variante="body" texto="Umidade do ar: " />
              </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <DetalhesClimaTempoStyled>
              <Tipografia componente="body" variante="body" texto={`${day.avghumidity} %`} />
            </DetalhesClimaTempoStyled>
          </ClimaHojeFigure>

        </ClimaHojeItem>

        <ClimaHojeItem>
          <ClimaHojeFigure>
            <ClimaHojeContainer>
              <GiWaterSplash size={35} title="Icone da precipitação da chuva" aria-label="Icone da precipitação da chuva" />
              <ClimaHojeFigcaption>
                <Tipografia componente="body" variante="body" texto="Precipitação de chuva: " />
              </ClimaHojeFigcaption>
            </ClimaHojeContainer>
            <DetalhesClimaTempoStyled>
              <Tipografia componente="body" variante="body" texto={setTotalPrecipMm(day.totalprecip_mm!)} />
            </DetalhesClimaTempoStyled>
          </ClimaHojeFigure>
        </ClimaHojeItem>

      </ClimaHojeList>

    </SectionClimaTempo>
  )
};

export default SectionClimaHoje;