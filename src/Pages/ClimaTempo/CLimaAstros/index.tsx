import { WiSunrise, WiSunset } from "react-icons/wi";
import { SpanDetalhesClimaTempoStyled, SubTituloStyled } from "../../../styles/StylesClima/StylesClima";
import { GiEvilMoon, GiSunRadiations } from "react-icons/gi";
import { IAstro, IDay } from "../../../Interfaces/Weather";
import { ContainerClimaAtrosStyled, FigcaptionClimaAstrosStyled, ItemFigureClimaAstrosStyled, ListaClimaAstrosStyled } from "./Styled";

interface PropsClimaDetalhes {
  astro: IAstro;
  day: IDay;
}

const ClimaAstros = ({ astro, day }: PropsClimaDetalhes) => {
  return (
    <>
      <SubTituloStyled>
        Detalhes dos Astros
      </SubTituloStyled>

      <ListaClimaAstrosStyled>
        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <WiSunrise size={40} />
              <FigcaptionClimaAstrosStyled>Nascer do sol: </FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <SpanDetalhesClimaTempoStyled>{astro.sunrise}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <WiSunset size={40} />
              <FigcaptionClimaAstrosStyled>Pôr do sol: </FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <SpanDetalhesClimaTempoStyled>{astro.sunset}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <GiSunRadiations size={40} />
              <FigcaptionClimaAstrosStyled>Radiação solar</FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <SpanDetalhesClimaTempoStyled>{day.uv}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <GiEvilMoon size={40} />
              <FigcaptionClimaAstrosStyled>Fase lunar:</FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <SpanDetalhesClimaTempoStyled>{astro.moon_phase}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>
        
      </ListaClimaAstrosStyled>
    </>
  )
};

export default ClimaAstros;