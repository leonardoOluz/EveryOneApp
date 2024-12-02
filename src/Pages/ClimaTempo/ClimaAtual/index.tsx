import { TbTemperatureSun } from "react-icons/tb";
import { ContainerImagemAtual, ContainerTituloLocalStyled, ContainerWeatherNow } from "./Styled";
import { WeatherImage } from "../../../styles/StylesClima/StylesClima";
import { ICurrent, ILocation } from "../../../Interfaces/Weather";
import { setDateNow, toggleColor } from "../../../utils/ClimaTempoUtils";

interface PropsClimaAtual {
  current: ICurrent;
  image: string;
  location: ILocation;
}
const ClimaAtual = ({ current, image, location }: PropsClimaAtual) => {
  return (
    <ContainerImagemAtual
      imagem={image}
      toggleColor={toggleColor(current.is_day, image)}
    >
      <ContainerTituloLocalStyled>
        <h2>Tempo agora em {location?.name}, <span>{setDateNow(location?.localtime || new Date())}</span></h2>
      </ContainerTituloLocalStyled>
      <ContainerWeatherNow>
        <ul aria-label="lista do tempo atual">
          <li>
            <figure>
              <WeatherImage src={current?.condition.icon} alt="imagem do clima atual" />
              <figcaption>{current?.condition.text}</figcaption>
            </figure>
          </li>
          <li>
            <figure className="imagem-tempAtual">
              <TbTemperatureSun size={45} title="temperatura" aria-label="icone de temperatura" />
              <figcaption className="figacaption-temp"> {current?.temp_c}<span className="hiddenVissible">graus celsius</span></figcaption>
            </figure>
          </li>
        </ul>
      </ContainerWeatherNow>
    </ContainerImagemAtual>
  )
}

export default ClimaAtual;