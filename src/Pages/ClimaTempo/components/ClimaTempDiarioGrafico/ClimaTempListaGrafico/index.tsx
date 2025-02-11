import { memo } from "react";
import { useLimiteHoursTemp } from "../../../hooks";
import { IHours } from "../../../Interface";
import { ListaClimaTempDiarioStyled } from "./Styled";
import ClimaTempBarraGrafica from "../ClimaTempBarraGrafico"
import { checkHoursAtual, setDateHour } from "../../../utils";

interface PropsClimaTempBarraGrafica {
    hours: IHours[]
    dataAtual: Date
  }

const ClimaTempDiarioGraficoLista = ({ hours, dataAtual }: PropsClimaTempBarraGrafica) => {
  const hoursLimite = useLimiteHoursTemp(hours, dataAtual);    
    return (
        <ListaClimaTempDiarioStyled>
        {hoursLimite.map((hour) => (
          <ClimaTempBarraGrafica
            key={setDateHour(hour.time!)}
            altTemp={hour.temp_c!}
            hora={hour.time!}
            isActive={checkHoursAtual(dataAtual!, hour.time!)}
          />
        ))}
      </ListaClimaTempDiarioStyled>
    )    
};

export default memo(ClimaTempDiarioGraficoLista);