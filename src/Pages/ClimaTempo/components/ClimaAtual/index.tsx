import { TbTemperatureSun } from "react-icons/tb";
import { ContainerImagemAtual, ContainerTituloLocalStyled, ContainerWeatherNow } from "./Styled";
import { ClimaImage } from "../../Styles/StylesClima";
import { ICurrent, ILocation } from "../../Interface";
import { setDateNow, toggleColor } from "../../utils";

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
        <h2>{location?.country}, {location?.region}</h2>
        <p>Tempo agora em {location?.name}, <span>{setDateNow(location?.localtime || new Date())}</span></p>
      </ContainerTituloLocalStyled>
      <ContainerWeatherNow>
        <ul aria-label="lista do tempo atual">
          <li>
            <figure>
              <ClimaImage src={current?.condition.icon} alt="imagem do clima atual" />
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