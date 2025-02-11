import styled from "styled-components";
import { ValueRemClima } from "./EnumsClima";
import { css } from "styled-components";

/* Clima Tempo  */

// Seção estilizada
export const SectionClimaStyledMix = css`
  padding: 1.6rem;
  max-height: 45rem;
  background-color: ${({ theme }) => theme.secondary};
  box-sizing: border-box;
  width: 100%;
  margin: 1rem 0;

  @media screen and (min-width: 809px) {
    margin: 0;
    width: 45%;
  }
`;
// Imagem estilizada
export const ClimaImage = styled.img<{ maxWidth?: string }>`
  width: ${({ maxWidth }) => (maxWidth ? maxWidth : ValueRemClima.rem12)};
  height: ${({ maxWidth }) => (maxWidth ? maxWidth : ValueRemClima.rem12)};
  border-radius: 0.8rem;
  object-fit: cover;
`;
// Titulos e subtitulos h2 / h3
export const SubTituloStyledMix = css`
  margin: 1.6rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 0.8rem;
`;
// Estilizando figure Clima atual
export const AlignTemAtualMix = css`
  &.alingTemAtual {
    justify-content: space-around;
    figcaption {
      font-size: ${({ theme }) => theme.fontSizeBig};
    }
  }
`;
// Estilizando figcaption
export const FigcaptionMixTemp = css`
  &.figcaption-temp::after {
    content: " °C";
    font-size: ${({theme}) => theme.fontSizeMedium};
  }
`;

export const DetalhesClimaTempoStyled = styled.div`
  width: 35%;
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.secondary};
  padding: 0 1rem;
  border-radius: 0.8rem;
  box-sizing: border-box;
  
  &.figacaption-temp::after {
    content: " °C";
    font-size: ${({ theme }) => theme.fontSizeMedium};
    
  }
  &.figacaption-WindKm::after {
    content: " Km/h";
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }
`;
// divisor span estiizado
export const DivisorStyled = styled.span`
  height: 1.6rem;
  border: 1px solid ${({ theme }) => theme.quinary};
`;
//Alert Error span
export const SpanAlert = styled.span`
  font-size: ${({ theme }) => theme.fontSizeMedium};
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 10px;
`;
// Span hidden acessibilidade
export const SpanAcessibilidadeHidden = styled.span`
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`;
