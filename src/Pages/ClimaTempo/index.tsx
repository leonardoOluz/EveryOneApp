import { useEffect, useMemo, useRef, useState } from "react";
import Loader from "../../components/Loader";
import { useWeatherDadosApi } from "../../hooks/WeatherSet";
import { checkHoursAtual } from "../../utils/ClimaTempoUtils";
import ClimaAtual from "./ClimaAtual";
import ClimaHoje from "./ClimaHoje";
import ItemClimaHoras from "./ClimaHoras";
import { ContainerDivisorStyled, ListaHorasStyled, MainStyled } from "./Styled";
import { SectionWeatherStyled, SubTituloStyled } from "../../styles/StylesClima/StylesClima";
import ClimaDetalhes from "./CLimaDetalhes";



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
        <ClimaHoje day={data.data.forecast.forecastday[0].day} />
        <SectionWeatherStyled>
          <SubTituloStyled>Previsão das próximas horas</SubTituloStyled>
          <ListaHorasStyled ref={listaRef}>
            {data?.data.forecast.forecastday[0].hour.map((hour, index) => {
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
        </SectionWeatherStyled>
      </ContainerDivisorStyled>

      <ContainerDivisorStyled>

        <SectionWeatherStyled>
          <ClimaDetalhes
            astro={data.data.forecast.forecastday[0].astro}
            day={data.data.forecast.forecastday[0].day}
          />
        </SectionWeatherStyled>

        <ClimaHoje day={data.data.forecast.forecastday[2].day} />
      </ContainerDivisorStyled>

    </MainStyled>
  )
};

export default ClimaTempo;