import { WiSunrise, WiSunset } from "react-icons/wi";
import { SpanDetalhesClimaTempoStyled } from "../../Styles/StylesClima";
import { GiEvilMoon, GiSunRadiations } from "react-icons/gi";
import { IAstro, IDay } from "../../Interface";
import { ContainerClimaAtrosStyled, FigcaptionClimaAstrosStyled, ItemFigureClimaAstrosStyled, ListaClimaAstrosStyled, TituloStyledClimaAstros } from "./Styled";

interface PropsClimaDetalhes {
  astro: IAstro;
  day: IDay;
}

const ClimaAstros = ({ astro, day }: PropsClimaDetalhes) => {
  return (
    <>
      <TituloStyledClimaAstros id="detalhes-astros">
        Detalhes dos Astros
      </TituloStyledClimaAstros>

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