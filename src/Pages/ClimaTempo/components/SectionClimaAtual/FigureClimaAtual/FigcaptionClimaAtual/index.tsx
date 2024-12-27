import styled from "styled-components";
import { FigcaptionMixTemp } from "../../../../Styles/StylesClima";

const FigcaptionEstilizado = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSizeTitle};
  font-weight: 800;
  ${FigcaptionMixTemp};

  @media screen and (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSizeBig};
    font-weight: 600;
  }
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