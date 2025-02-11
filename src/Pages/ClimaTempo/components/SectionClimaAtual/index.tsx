import { TbTemperatureSun } from "react-icons/tb";
import {
  SectionImagemAtual, ContainerTituloLocalStyled,
  ContainerWeatherNow
} from "./Styled";
import { ClimaImage, SpanAcessibilidadeHidden } from "../../Styles/StylesClima";
import { ICurrent, ILocation } from "../../Interface";
import { setDateNow, toggleColor } from "../../utils";
import ListaClimaAtual from "./ListaClimaAtual";
import ItemClimaAtual from "./ListaClimaAtual/ItemClimaAtual";
import FigureClimaAtual from "./FigureClimaAtual";
import FigcaptionClimaAtual from "./FigureClimaAtual/FigcaptionClimaAtual";
import { Tipografia } from "../../../../components/Tipografia/Tipografia";

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
        <Tipografia componente="h2" variante="h2" texto={`${location?.country}, ${location?.region}`} />
        <Tipografia componente="body" variante="h3" texto={`Tempo agora em ${location?.name},`} />
        <Tipografia componente="body" variante="body" texto={setDateNow(location?.localtime || new Date())} />
      </ContainerTituloLocalStyled>

      <ContainerWeatherNow textColor={toggleColor(current.is_day, image)}>
        <ListaClimaAtual aria-label="lista do tempo atual">
          <ItemClimaAtual>
            
            <FigureClimaAtual >
              <ClimaImage src={current?.condition.icon} alt="imagem do clima atual" />
              <FigcaptionClimaAtual>
                <Tipografia componente="body" variante="body" texto={current?.condition.text} />
              </FigcaptionClimaAtual>
            </FigureClimaAtual>
          
          </ItemClimaAtual>
          <ItemClimaAtual>

            <FigureClimaAtual modificar>
              <TbTemperatureSun size={45} title="temperatura" aria-label="icone de temperatura" />
              <FigcaptionClimaAtual claseName="figcaption-temp">
                <Tipografia componente="body" variante="body" texto={String(current?.temp_c)} />
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