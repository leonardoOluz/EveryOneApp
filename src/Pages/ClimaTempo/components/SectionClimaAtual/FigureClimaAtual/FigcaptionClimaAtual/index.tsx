import styled from "styled-components";
import { FigcaptionMixTemp } from "../../../../Styles/StylesClima";

const FigcaptionEstilizado = styled.figcaption`
  ${FigcaptionMixTemp};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface PropsFigcaptionClimaAtual {
  children: React.ReactNode;
  claseName?: string
};

const FigcaptionClimaAtual = ({ children, claseName = "" }: PropsFigcaptionClimaAtual) => {
  return (<FigcaptionEstilizado className={claseName}>
    {children}
  </FigcaptionEstilizado>)
};

export default FigcaptionClimaAtual;