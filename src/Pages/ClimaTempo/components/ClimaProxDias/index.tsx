import { LiaTemperatureHighSolid, LiaTemperatureLowSolid } from "react-icons/lia";
import { IForecastday } from "../../Interface";
import { ValueRemClima } from "../../Styles/EnumsClima";
import { ClimaImage } from "../../Styles/StylesClima"
import { setDateWeekMonthDay } from "../../utils";
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
      </ItemClimaProxDiasStyled>

      <ItemClimaProxDiasStyled className="hiddenComponenteItem2">
        <ItemFigureClimaProxDiasStyled >
          <LiaTemperatureHighSolid size={25} title="icone de temperatura" aria-label="icone de temperatura" />
          <FigcaptionClimaProxDiasStyled celsus><span>Max: </span>{forestday.day.maxtemp_c}</FigcaptionClimaProxDiasStyled>
        </ItemFigureClimaProxDiasStyled>
      </ItemClimaProxDiasStyled>

      <ItemClimaProxDiasStyled className="hiddenComponenteItem3">
        <ItemFigureClimaProxDiasStyled>
          <LiaTemperatureLowSolid size={25} title="icone de temperatura" aria-label="icone de temperatura" />
          <FigcaptionClimaProxDiasStyled celsus><span>Min: </span>{forestday.day.mintemp_c}</FigcaptionClimaProxDiasStyled>
        </ItemFigureClimaProxDiasStyled>
      </ItemClimaProxDiasStyled>

    </ListaClimaProxDiasStyled>

  </ContainerCliamaProxDiasStyled>)
}

export default ClimaProxDias;