import styled from "styled-components";
import { css } from "styled-components";

/* Titulo Principal h1 */
export const TituloPrincipalStyled = styled.h1`
  background-color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSizeTitle};
  border-radius: 0.8rem;
  padding: 1rem;
  width: 100%;
  align-self: center;
  text-align: center;
  box-sizing: border-box;
  
  @media screen and (min-width: 809px){
    width: 90%;
  }
`;

/* Mixin de sub-titulos h2/h3 */
export const SubTituloStyledMix = css`
  margin: 1.6rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeTitle};
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 0.8rem;
`;




/* Tipografia Clima Atual */

// Sub-titulo do clima-atual
export const SubTituloStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeTitle};
  box-sizing: border-box;
`;

// Tesxto estilizado do clima atual
export const TextoStilizado = styled.p`
  font-size: ${({ theme }) => theme.fontSizeBig};
`;
