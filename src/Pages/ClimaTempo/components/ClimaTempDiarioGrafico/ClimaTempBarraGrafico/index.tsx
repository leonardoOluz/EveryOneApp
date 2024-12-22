import { memo } from "react";
import { converstionNumberTemp, setDateHour } from "../../../utils";
import ClimaContainerHorasTemp from "./ClimaContainerHorasTemp";
import { BarraGraficoStyled, ItemBarraGraficoStyled } from "./Styled";

interface PropsClimaTempBarraGrafica {
  altTemp: number
  hora: Date
  isActive: boolean
}

const ClimaTempBarraGrafica = ({ altTemp, hora, isActive }: PropsClimaTempBarraGrafica) => {
  return (<ItemBarraGraficoStyled>
    <ClimaContainerHorasTemp hora={setDateHour(hora)} temperatura={altTemp} />
    <BarraGraficoStyled isActive={isActive} altTemp={converstionNumberTemp(altTemp)} />
  </ItemBarraGraficoStyled>
  )
};

export default memo(ClimaTempBarraGrafica);