import { useEffect, useMemo, useRef, useState } from "react";
import Loader from "../../components/Loader";
import { useWeatherDadosApi } from "../../hooks/WeatherSet";
import { checkHoursAtual } from "../../utils/ClimaTempoUtils";
import ClimaAtual from "./ClimaAtual";
import SectionClimaHoje from "./ClimaHoje";
import ItemClimaHoras from "./ClimaHoras";
import { ContainerDivisorStyled, ListaHorasStyled, MainStyled, SectionClimaAstrosStyled, SectionClimaHorasStyled, SectionClimaProxDiasStyled } from "./Styled";
import { SubTituloStyled } from "../../styles/StylesClima/StylesClima";
import ClimaAstros from "./CLimaAstros";
import ClimaProxDias from "./ClimaProxDias";



const ClimaTempo = () => {
  const listaRef = useRef<HTMLUListElement>(null);
  const { data, isLoading, image } = useWeatherDadosApi();
  const [indexAtualHora, setIndexAtualHora] = useState<number>(-1);

  /* Colocar em um hook personalizado */
  useEffect(() => {
    if (indexAtualHora !== -1 && listaRef.current) {
      const item = listaRef.current.children[indexAtualHora];
      const itemRect = item.getBoundingClientRect();
      const listaRect = listaRef.current.getBoundingClientRect();
      const posicaoVertical: number = itemRect.top - listaRect.top + itemRect.height / 2 - listaRect.height / 2;

      listaRef?.current?.scrollTo({
        top: posicaoVertical,
        behavior: 'smooth',
      });
    }
  }, [data?.data.forecast.forecastday, data?.data.location.localtime, indexAtualHora]);

  /* Colcor em um hook personalizado */
  const verificarHoraAtualMemoizado = useMemo(() => {
    return (horaLocal: Date, horaPrevisao: Date) => {
      // Lógica para comparar as horas
      return checkHoursAtual(horaLocal, horaPrevisao)
    };
  }, []);


  if (isLoading || !data || !image) {
    return (
      <Loader />
    )
  }

  return (
    <MainStyled role="main">

      <ClimaAtual current={data.data.current} image={image} location={data.data.location} />

      <ContainerDivisorStyled>

        <SectionClimaHoje day={data.data.forecast.forecastday[1].day} />

        <SectionClimaHorasStyled>
          <SubTituloStyled>Previsão das próximas horas</SubTituloStyled>
          <ListaHorasStyled ref={listaRef}>
            {data?.data.forecast.forecastday[1].hour.map((hour, index) => {
              const isAtivo: boolean = verificarHoraAtualMemoizado(data.data.location.localtime!, hour.time!);
              if (isAtivo && index !== indexAtualHora) {
                setIndexAtualHora(index);
              }

              return (
                <ItemClimaHoras
                  key={index}
                  hour={hour}
                  active={checkHoursAtual(data.data.location.localtime!, hour.time!)}
                />
              )
            })}
          </ListaHorasStyled>
        </SectionClimaHorasStyled>
      
      </ContainerDivisorStyled>

      <ContainerDivisorStyled>

        <SectionClimaAstrosStyled>
          <ClimaAstros
            astro={data.data.forecast.forecastday[1].astro}
            day={data.data.forecast.forecastday[1].day}
          />
        </SectionClimaAstrosStyled>

        <SectionClimaProxDiasStyled>
          <SubTituloStyled>Clima dos proximos dias</SubTituloStyled>
          {data.data.forecast.forecastday.map((forestday, index) => (
            <ClimaProxDias forestday={forestday} key={index} />
          ))}
        </SectionClimaProxDiasStyled>
        
      </ContainerDivisorStyled>

    </MainStyled>
  )
};

export default ClimaTempo;