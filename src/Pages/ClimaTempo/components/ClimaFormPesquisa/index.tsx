import { memo, useState } from "react";
import { ClimaContainerInputButtonStyled, ClimaFormPesquisaStyled } from "./Styled";
import { useWeatherForecastCity } from "../../hooks";
import Loader from "../../../../components/Loader";
import { SpanAlert } from "../../Styles/StylesClima";

const ClimaFormPesquisa = () => {
  const [city, setCity] = useState<string>("");
  const { setCity: setCityHttp, refetch, isLoading, isError } = useWeatherForecastCity();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCityHttp(city)

    if (city) {
      refetch();
      setCity("");
    }
  }

  return (<>
    {isLoading && <Loader />}
    <ClimaFormPesquisaStyled onSubmit={e => handleSubmit(e)} aria-label="formulario de pesquisa de cidade">
      {isError ? <SpanAlert role="alert">Ops, Algo de errado aconteceu, verifique o nome da cidade</SpanAlert> : <label htmlFor="city-input">Digite o nome da cidade:</label>}
      <ClimaContainerInputButtonStyled>
        <input
          type="text"
          id="city-input"
          placeholder="Digite uma cidade"
          about="Digite uma cidade"
          value={city}
          onChange={e => setCity(e.target.value)} />
        <button type="submit">Buscar</button>
      </ClimaContainerInputButtonStyled>
    </ClimaFormPesquisaStyled>
  </>)

};

export default memo(ClimaFormPesquisa)