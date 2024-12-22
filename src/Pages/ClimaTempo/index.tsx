import { useContext, useRef, useState } from "react";
import { useScrollToItem, useVerificarHoraAtual, useWeatherForecast } from "./hooks";
import { checkHoursAtual } from "./utils";
import { ContainerDivisorStyled, ListaHorasStyled, MainStyled, SectionClimaAstrosStyled, SectionClimaFormPesquisa, SectionClimaGraficoTemp, SectionClimaHorasStyled, SectionClimaProxDiasStyled, TituloPrincipalStyled, TituloStyledClimaHoras, TituloStyledFormPesquisa, TituloStyledGraficoTemp, TituloStyledProxDias } from "./Styled";
import Loader from "../../components/Loader";
import SectionClimaAtual from "./components/ClimaAtual";
import SectionClimaHoje from "./components/ClimaHoje";
import ItemClimaHoras from "./components/ClimaHoras";
import ClimaAstros from "./components/CLimaAstros";
import ClimaProxDias from "./components/ClimaProxDias";
import { ForecastContext } from "./Contexts/useContext";
import ClimaFormPesquisa from "./components/ClimaFormPesquisa";
import ClimaTempDiarioGrafico from "./components/ClimaTempDiarioGrafico";

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

      <TituloPrincipalStyled>Previsão do tempo</TituloPrincipalStyled>

      <SectionClimaAtual current={dados.current} image={image} location={dados.location} />

      <ContainerDivisorStyled>

        <SectionClimaFormPesquisa aria-labelledby="formulario-busca">
          <TituloStyledFormPesquisa id="formulario-busca">Buscar Cidade</TituloStyledFormPesquisa>
          <ClimaFormPesquisa />
        </SectionClimaFormPesquisa>

        <SectionClimaGraficoTemp>
          <TituloStyledGraficoTemp>Temperatura diaría</TituloStyledGraficoTemp>
          <ClimaTempDiarioGrafico
            hours={dados.forecast.forecastday[1].hour}
            dataAtual={dados.location.localtime!}
          />
        </SectionClimaGraficoTemp>
        
      </ContainerDivisorStyled>

      <ContainerDivisorStyled>
        <SectionClimaHoje day={dados.forecast.forecastday[1].day} />

        <SectionClimaHorasStyled aria-labelledby="horas-titulo">
          <TituloStyledClimaHoras id="horas-titulo">Previsão das próximas horas</TituloStyledClimaHoras>
          <ListaHorasStyled ref={listaRef}>

            {dados.forecast.forecastday[1].hour.map((hour, index) => {

              const isAtivo: boolean = verificarHoraAtualMemoizado(dados.location.localtime!, hour.time!);

              if (isAtivo && index !== indexAtualHora) {
                setIndexAtualHora(index);
              }

              return (
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

        <SectionClimaAstrosStyled aria-labelledby="detalhes-astros">
          <ClimaAstros
            astro={dados.forecast.forecastday[1].astro}
            day={dados.forecast.forecastday[1].day}
          />
        </SectionClimaAstrosStyled>

        <SectionClimaProxDiasStyled aria-labelledby="proximos-dias">
          <TituloStyledProxDias id="proximos-dias">Clima dos proximos dias</TituloStyledProxDias>
          {dados.forecast.forecastday.map((forestday, index) => (
            <ClimaProxDias forestday={forestday} key={index} />
          ))}
        </SectionClimaProxDiasStyled>

      </ContainerDivisorStyled>

    </MainStyled>
  )
};

export default ClimaTempo;