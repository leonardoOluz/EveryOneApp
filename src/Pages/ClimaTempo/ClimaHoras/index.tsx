import { FaRegClock, FaTemperatureLow } from "react-icons/fa";
import { IHours } from "../../../Interfaces/Weather";
import { ClimaImage, DivisorStyled } from "../../../styles/StylesClima/StylesClima";
import { setDateHoursMinute } from "../../../utils/ClimaTempoUtils";
import { FigureStyled, ItemListaHoraStyled } from "./Styled";
import { PiWindThin } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { memo } from "react";
import { ValueRemClima } from "../../../styles/StylesClima/EnumsClima";

interface PropsClimaHoras {
    hour: IHours;
    active: boolean
}
const ItemClimaHoras = ({ hour, active }: PropsClimaHoras) => {

    return (<ItemListaHoraStyled active={active} >
        <ClimaImage maxWidth={ValueRemClima.rem5} src={hour.condition?.icon} alt={hour.condition?.text} title={"imagem de " + hour.condition?.text} />
        <FigureStyled>
            <FaRegClock aria-label="icone de relogio" title="icone de relogio" />
            <figcaption>{setDateHoursMinute(hour.time!)}</figcaption>
        </FigureStyled>
        <DivisorStyled></DivisorStyled>
        <FigureStyled>
            <FaTemperatureLow aria-label="icone de temperatura" title="icone de temperatura" />
            <figcaption>+{hour.temp_c}°C</figcaption>
        </FigureStyled>
        <DivisorStyled className=" hiddenComponente"></DivisorStyled>
        <FigureStyled className="hiddenComponente">
            <WiHumidity aria-label="icone de umidade" title="icone de umidade" />
            <figcaption>{hour.humidity} %</figcaption>
        </FigureStyled>
        <DivisorStyled></DivisorStyled>
        <FigureStyled>
            <PiWindThin aria-label="icone de vento" title="icone de vento" />
            <figcaption>{hour.wind_kph} km/h</figcaption>
        </FigureStyled>
    </ItemListaHoraStyled>);
};

export default memo(ItemClimaHoras);