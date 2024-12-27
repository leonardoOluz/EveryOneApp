import { SectionClimaGraficoTempStyled, TituloStyledGraficoTemp } from "./Styled";
import ClimaTempDiarioGraficoLista from "./ClimaTempListaGrafico"
import { IHours } from "../../Interface";

interface PropsSectionClimaTempDiarioGrafico {
  hours: IHours[]
  dataAtual: Date
}

const SectionClimaTempDiarioGrafico = ({ dataAtual, hours}: PropsSectionClimaTempDiarioGrafico) => {

  return (
    <SectionClimaGraficoTempStyled>
      <TituloStyledGraficoTemp id="temperatura-diária">Temperatura diaría</TituloStyledGraficoTemp>
      <ClimaTempDiarioGraficoLista  dataAtual={dataAtual} hours={hours}/>
    </SectionClimaGraficoTempStyled>
  )
};

export default SectionClimaTempDiarioGrafico;