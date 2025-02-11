import { SectionClimaGraficoTempStyled, TituloStyledGraficoTemp } from "./Styled";
import ClimaTempDiarioGraficoLista from "./ClimaTempListaGrafico"
import { IHours } from "../../Interface";
import { Tipografia } from "../../../../components/Tipografia/Tipografia";

interface PropsSectionClimaTempDiarioGrafico {
  hours: IHours[]
  dataAtual: Date
}

const SectionClimaTempDiarioGrafico = ({ dataAtual, hours }: PropsSectionClimaTempDiarioGrafico) => {

  return (
    <SectionClimaGraficoTempStyled>
      <TituloStyledGraficoTemp id="temperatura-diária">
        <Tipografia componente="h2" variante="h2" texto="Temperatura diária" />
      </TituloStyledGraficoTemp>
      <ClimaTempDiarioGraficoLista dataAtual={dataAtual} hours={hours} />
    </SectionClimaGraficoTempStyled>
  )
};

export default SectionClimaTempDiarioGrafico;