import { useContext, useRef, useState } from "react";
import { useScrollToItem, useVerificarHoraAtual, useWeatherForecast } from "./hooks";
import { checkHoursAtual } from "./utils";
import { ContainerDivisorStyled, ListaHorasStyled, MainStyled, SectionClimaAstrosStyled, SectionClimaHorasStyled, SectionClimaProxDiasStyled, TituloPrincipalStyled, TituloStyledClimaHoras, TituloStyledProxDias } from "./Styled";
import Loader from "../../components/Loader";
import SectionClimaAtual from "./components/SectionClimaAtual";
import SectionClimaHoje from "./components/ClimaHoje";
import ItemClimaHoras from "./components/ClimaHoras";
import ClimaAstros from "./components/CLimaAstros";
import ClimaProxDias from "./components/ClimaProxDias";
import { ForecastContext } from "./Contexts/useContext";
import SectionClimaTempDiarioGrafico from "./components/ClimaTempDiarioGrafico";
import SectionClimaPesquisa from "./components/ClimaFormPesquisa";
import { Tipografia } from "../../components/Tipografia/Tipografia";

const ClimaTempo = () => {
  const listaRef = useRef<HTMLUListElement>(null);
  const { data: dados, image } = useContext(ForecastContext);
  const [indexAtualHora, setIndexAtualHora] = useState<number>(-1);
  const { isLoading } = useWeatherForecast();
  const verificarHoraAtualMemoizado = useVerificarHoraAtual();
  useScrollToItem({ listaRef, indexAtualHora, dados });

  if (isLoading || !dados || !image) {
    return (
      <Loader />
    )
  }

  return (
    <MainStyled role="main">
      <TituloPrincipalStyled>
        <Tipografia componente="h1" texto="Previsão do tempo" variante="h1" />
      </TituloPrincipalStyled>
      <SectionClimaAtual current={dados.current} image={image} location={dados.location} />
      <ContainerDivisorStyled>
        <SectionClimaPesquisa />
        <SectionClimaTempDiarioGrafico
          hours={dados.forecast.forecastday[1].hour}
          dataAtual={dados.location.localtime!}
        />
      </ContainerDivisorStyled>
      <ContainerDivisorStyled>
        <SectionClimaHoje day={dados.forecast.forecastday[1].day} />

        {/* Precisar remanejar a section aqui para retirar responsabilidade e inserir as tipografias*/}
        <SectionClimaHorasStyled aria-labelledby="horas-titulo">
          <TituloStyledClimaHoras id="horas-titulo">
            <Tipografia componente="h2" texto="Previsão das próximas horas" variante="h2" />
          </TituloStyledClimaHoras>
          <ListaHorasStyled ref={listaRef}>

            {dados.forecast.forecastday[1].hour.map((hour, index) => {

              const isAtivo: boolean = verificarHoraAtualMemoizado(dados.location.localtime!, hour.time!);

              if (isAtivo && index !== indexAtualHora) {
                setIndexAtualHora(index);
              }

              return (
                /* Precisar refaotrr aqui */
                <ItemClimaHoras
                  key={index}
                  hour={hour}
                  active={checkHoursAtual(dados.location.localtime!, hour.time!)}
                />
              )
            })}

          </ListaHorasStyled>
        </SectionClimaHorasStyled>
      </ContainerDivisorStyled>

      <ContainerDivisorStyled>
        {/* Precisar remanejar a section aqui para retirar responsabilidade e inserir as tipografias*/}
        <SectionClimaAstrosStyled aria-labelledby="detalhes-astros">
          <ClimaAstros
            astro={dados.forecast.forecastday[1].astro}
            day={dados.forecast.forecastday[1].day}
          />
        </SectionClimaAstrosStyled>

        {/* Precisar remanejar a section aqui para retirar responsabilidade e inserir as tipografias*/}
        <SectionClimaProxDiasStyled aria-labelledby="proximos-dias">
          <TituloStyledProxDias id="proximos-dias">
            <Tipografia componente="h2" variante="h2" texto="Clima dos proximos dias"/>
          </TituloStyledProxDias>
          {dados.forecast.forecastday.map((forestday, index) => (
            <ClimaProxDias forestday={forestday} key={index} />
          ))}
        </SectionClimaProxDiasStyled>
      </ContainerDivisorStyled>
    </MainStyled>
  )
};

export default ClimaTempo;