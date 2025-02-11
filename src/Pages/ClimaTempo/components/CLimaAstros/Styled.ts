import styled from "styled-components";
import { SubTituloStyledMix } from "../../Styles/StylesClima";

export const ListaClimaAstrosStyled = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ItemFigureClimaAstrosStyled = styled.figure`
  display: flex;
  gap: 2rem;
  justify-content: left;
`;

export const ContainerClimaAtrosStyled = styled.div`
  width: 50%;
  max-width: 250px;
  display: flex;
  gap: 1.6rem;
`;

export const FigcaptionClimaAstrosStyled = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;

export const TituloStyledClimaAstros = styled.div`
  ${SubTituloStyledMix}
`;
