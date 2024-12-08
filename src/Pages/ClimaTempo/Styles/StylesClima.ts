import styled from "styled-components";
import { ValueRemClima } from "./EnumsClima";
import { css } from "styled-components";

/* Clima Tempo  */

// Seção estilizada
export const SectionClimaStyled = css`
  padding: 1.6rem;
  width: 45%;
  max-height: 35rem;
  background-color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: 810px) {
    width: 100%;
    margin: 1rem 0;
  }

  @media screen and (max-width: 600px) {
    max-height: 45rem;
  }
`;
// Imagem estilizada
export const ClimaImage = styled.img<{ maxWidth?: string }>`
  width: ${({ maxWidth }) => (maxWidth ? maxWidth : ValueRemClima.rem12)};
  height: ${({ maxWidth }) => (maxWidth ? maxWidth : ValueRemClima.rem12)};
  border-radius: 0.8rem;
  object-fit: cover;
`;
// Titulos e subtitulos h3
export const SubTituloStyled = css`
  margin: 1.6rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeTitle};
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 0.8rem;
`;
// Span estilizado
export const SpanDetalhesClimaTempoStyled = styled.span`
  width: 35%;
  text-align: left;
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.secondary};
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizeBig};
  border-radius: 0.8rem;
  font-weight: bold;
  box-sizing: border-box;
`;

// divisor span estiizado
export const DivisorStyled = styled.span`
  height: 1.6rem;
  border: 1px solid ${({ theme }) => theme.quinary};
`;
