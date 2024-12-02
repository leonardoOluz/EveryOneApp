import { WiSunrise, WiSunset } from "react-icons/wi";
import { SpanDetalhesClimaTempoStyled, SubTituloStyled } from "../../../styles/StylesClima/StylesClima";
import { GiEvilMoon, GiSunRadiations } from "react-icons/gi";
import { IAstro, IDay } from "../../../Interfaces/Weather";
import { ContainerClimaDetalhesStyled, FigcaptionClimaDetalhesStyled, ItemFigureClimaDetalhesStyled, ListaClimaDetalhesStyled } from "./Styled";

interface PropsClimaDetalhes {
  astro: IAstro;
  day: IDay;
}

const ClimaDetalhes = ({ astro, day }: PropsClimaDetalhes) => {
  return (
    <>
      <SubTituloStyled>
        Detalhes dos Astros
      </SubTituloStyled>

      <ListaClimaDetalhesStyled>
        <li>
          <ItemFigureClimaDetalhesStyled>
            <ContainerClimaDetalhesStyled>
              <WiSunrise size={40} />
              <FigcaptionClimaDetalhesStyled>Nascer do sol: </FigcaptionClimaDetalhesStyled>
            </ContainerClimaDetalhesStyled>
            <SpanDetalhesClimaTempoStyled>{astro.sunrise}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaDetalhesStyled>
        </li>

        <li>
          <ItemFigureClimaDetalhesStyled>
            <ContainerClimaDetalhesStyled>
              <WiSunset size={40} />
              <FigcaptionClimaDetalhesStyled>Pôr do sol: </FigcaptionClimaDetalhesStyled>
            </ContainerClimaDetalhesStyled>
            <SpanDetalhesClimaTempoStyled>{astro.sunset}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaDetalhesStyled>
        </li>

        <li>
          <ItemFigureClimaDetalhesStyled>
            <ContainerClimaDetalhesStyled>
              <GiSunRadiations size={40} />
              <FigcaptionClimaDetalhesStyled>Radiação solar</FigcaptionClimaDetalhesStyled>
            </ContainerClimaDetalhesStyled>
            <SpanDetalhesClimaTempoStyled>{day.uv}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaDetalhesStyled>
        </li>

        <li>
          <ItemFigureClimaDetalhesStyled>
            <ContainerClimaDetalhesStyled>
              <GiEvilMoon size={40} />
              <FigcaptionClimaDetalhesStyled>Fase lunar:</FigcaptionClimaDetalhesStyled>
            </ContainerClimaDetalhesStyled>
            <SpanDetalhesClimaTempoStyled>{astro.moon_phase}</SpanDetalhesClimaTempoStyled>
          </ItemFigureClimaDetalhesStyled>
        </li>
        
      </ListaClimaDetalhesStyled>
    </>
  )
};

export default ClimaDetalhes;