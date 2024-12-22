import { useLimiteHoursTemp } from "../../hooks";
import { IHours } from "../../Interface";
import { checkHoursAtual } from "../../utils";
import ClimaTempBarraGrafica from "./ClimaTempBarraGrafico";
import { ListaClimaTempDiarioStyled } from "./Styled";

interface PropsClimaTempBarraGrafica {
  hours: IHours[]
  dataAtual: Date
}

const ClimaTempDiarioGrafico = ({ hours, dataAtual }: PropsClimaTempBarraGrafica) => {
  const hoursLimite = useLimiteHoursTemp(hours, dataAtual);  

  return (
    <ListaClimaTempDiarioStyled>
      {hoursLimite.map((hour, index) => (
        <ClimaTempBarraGrafica
          key={index}
          altTemp={hour.temp_c!}
          hora={hour.time!}
          isActive={checkHoursAtual(dataAtual!, hour.time!)}
        />
      ))}
    </ListaClimaTempDiarioStyled>
  )
};

export default ClimaTempDiarioGrafico;