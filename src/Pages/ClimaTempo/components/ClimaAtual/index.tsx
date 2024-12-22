import { TbTemperatureSun } from "react-icons/tb";
import {
  SectionImagemAtual, ContainerTituloLocalStyled,
  ContainerWeatherNow, SubTituloStyled, TextoStilizado
} from "./Styled";
import { ClimaImage, SpanAcessibilidadeHidden } from "../../Styles/StylesClima";
import { ICurrent, ILocation } from "../../Interface";
import { setDateNow, toggleColor } from "../../utils";
import ListaClimaAtual from "./ListaClimaAtual";
import ItemClimaAtual from "./ListaClimaAtual/ItemClimaAtual";
import FigureClimaAtual from "./FigureClimaAtual";
import FigcaptionClimaAtual from "./FigureClimaAtual/FigcaptionClimaAtual";

interface PropsClimaAtual {
  current: ICurrent;
  image: string;
  location: ILocation;
}
const SectionClimaAtual = ({ current, image, location }: PropsClimaAtual) => {
  return (
    <SectionImagemAtual
      imagem={image}
      toggleColor={toggleColor(current.is_day, image)}
    >
      <ContainerTituloLocalStyled>
        <SubTituloStyled>{location?.country}, {location?.region}</SubTituloStyled>
        <TextoStilizado>Tempo agora em {location?.name}, <span>{setDateNow(location?.localtime || new Date())}</span></TextoStilizado>
      </ContainerTituloLocalStyled>

      <ContainerWeatherNow textColor={toggleColor(current.is_day, image)}>
        <ListaClimaAtual aria-label="lista do tempo atual">
          <ItemClimaAtual>
            <FigureClimaAtual >
              <ClimaImage src={current?.condition.icon} alt="imagem do clima atual" />
              <FigcaptionClimaAtual>{current?.condition.text}</FigcaptionClimaAtual>
            </FigureClimaAtual>
          </ItemClimaAtual>
          <ItemClimaAtual>
            <FigureClimaAtual modificar>
              <TbTemperatureSun size={45} title="temperatura" aria-label="icone de temperatura" />
              <FigcaptionClimaAtual claseName="figcaption-temp">
                {current?.temp_c}
                <SpanAcessibilidadeHidden>graus celsius</SpanAcessibilidadeHidden>
              </FigcaptionClimaAtual>
            </FigureClimaAtual>
          </ItemClimaAtual>
        </ListaClimaAtual>
      </ContainerWeatherNow>
    </SectionImagemAtual>
  )
}

export default SectionClimaAtual;