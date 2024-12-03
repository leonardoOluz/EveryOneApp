import { LiaTemperatureHighSolid, LiaTemperatureLowSolid } from "react-icons/lia";
import { IForecastday } from "../../../Interfaces/Weather";
import { ValueRemClima } from "../../../styles/StylesClima/EnumsClima";
import { ClimaImage, DivisorStyled } from "../../../styles/StylesClima/StylesClima"
import { setDateWeekMonthDay } from "../../../utils/ClimaTempoUtils";
import { ContainerCliamaProxDiasStyled, FigcaptionClimaProxDiasStyled, ItemClimaProxDiasStyled, ItemFigureClimaProxDiasStyled, ListaClimaProxDiasStyled, SubTituloClimaProxDiasStyled } from "./Styled";

interface PropsCliaProxDias {
  forestday: IForecastday
}
const ClimaProxDias = ({ forestday }: PropsCliaProxDias) => {
  return (<ContainerCliamaProxDiasStyled>
    <SubTituloClimaProxDiasStyled>{setDateWeekMonthDay(forestday.date)}</SubTituloClimaProxDiasStyled>
    <ListaClimaProxDiasStyled>
      
      <ItemClimaProxDiasStyled>
        <ItemFigureClimaProxDiasStyled>
          <ClimaImage maxWidth={ValueRemClima.rem5} src={forestday.day.condition.icon} alt="icone do clima" title="icone do clima" />
          <FigcaptionClimaProxDiasStyled>{forestday.day.condition.text}</FigcaptionClimaProxDiasStyled>
        </ItemFigureClimaProxDiasStyled>
        <DivisorStyled className="hiddenComponente"></DivisorStyled>
      </ItemClimaProxDiasStyled>
      
      <ItemClimaProxDiasStyled>
        <ItemFigureClimaProxDiasStyled className="hiddenComponente">
          <LiaTemperatureHighSolid size={25} title="icone de temperatura" aria-label="icone de temperatura" />
          <FigcaptionClimaProxDiasStyled celsus><span>Max: </span>{forestday.day.maxtemp_c}</FigcaptionClimaProxDiasStyled>
        </ItemFigureClimaProxDiasStyled>
        <DivisorStyled className="hiddenComponente"></DivisorStyled>
      </ItemClimaProxDiasStyled>

      <ItemClimaProxDiasStyled className="hiddenComponente">
        <ItemFigureClimaProxDiasStyled>
        <LiaTemperatureLowSolid size={25} title="icone de temperatura" aria-label="icone de temperatura" />
          <FigcaptionClimaProxDiasStyled celsus><span>Min: </span>{forestday.day.mintemp_c}</FigcaptionClimaProxDiasStyled>
        </ItemFigureClimaProxDiasStyled>
      </ItemClimaProxDiasStyled>

    </ListaClimaProxDiasStyled>

  </ContainerCliamaProxDiasStyled>)
}

export default ClimaProxDias;