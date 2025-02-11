import { WiSunrise, WiSunset } from "react-icons/wi";
import { DetalhesClimaTempoStyled } from "../../Styles/StylesClima";
import { GiEvilMoon, GiSunRadiations } from "react-icons/gi";
import { IAstro, IDay } from "../../Interface";
import { ContainerClimaAtrosStyled, FigcaptionClimaAstrosStyled, ItemFigureClimaAstrosStyled, ListaClimaAstrosStyled, TituloStyledClimaAstros } from "./Styled";
import { Tipografia } from "../../../../components/Tipografia/Tipografia";

interface PropsClimaDetalhes {
  astro: IAstro;
  day: IDay;
}

const ClimaAstros = ({ astro, day }: PropsClimaDetalhes) => {
  return (
    <>
      <TituloStyledClimaAstros id="detalhes-astros">
        <Tipografia componente="h2" variante="h2" texto="Detalhes dos Astros"/>
      </TituloStyledClimaAstros>

      <ListaClimaAstrosStyled>
        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <WiSunrise size={40} />
              <FigcaptionClimaAstrosStyled>Nascer do sol: </FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <DetalhesClimaTempoStyled>{astro.sunrise}</DetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <WiSunset size={40} />
              <FigcaptionClimaAstrosStyled>Pôr do sol: </FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <DetalhesClimaTempoStyled>{astro.sunset}</DetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <GiSunRadiations size={40} />
              <FigcaptionClimaAstrosStyled>Radiação solar</FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <DetalhesClimaTempoStyled>{day.uv}</DetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

        <li>
          <ItemFigureClimaAstrosStyled>
            <ContainerClimaAtrosStyled>
              <GiEvilMoon size={40} />
              <FigcaptionClimaAstrosStyled>Fase lunar:</FigcaptionClimaAstrosStyled>
            </ContainerClimaAtrosStyled>
            <DetalhesClimaTempoStyled>{astro.moon_phase}</DetalhesClimaTempoStyled>
          </ItemFigureClimaAstrosStyled>
        </li>

      </ListaClimaAstrosStyled>
    </>
  )
};

export default ClimaAstros;