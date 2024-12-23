import styled from "styled-components";
import imagemFundoTempo from "../ClimaTempo/assets/estacoes/ImagenClimaTempoTwo.avif";
import { SectionClimaStyledMix, SubTituloStyledMix } from "./Styles/StylesClima";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 5rem 2rem 2rem 2rem;
  background-image: url(${imagemFundoTempo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerDivisorStyled = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ListaHorasStyled = styled.ul`
  height: 25rem;
  max-height: 35rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 1px;
    opacity: 0;
  }
`;

export const SectionClimaHorasStyled = styled.section`
  ${SectionClimaStyledMix}
`;

export const TituloStyledClimaHoras = styled.h2`
  ${SubTituloStyledMix}
`;

export const SectionClimaAstrosStyled = styled.section`
  ${SectionClimaStyledMix}
`;

export const SectionClimaProxDiasStyled = styled.section`
  ${SectionClimaStyledMix}
`;

export const TituloStyledProxDias = styled.h2`
  ${SubTituloStyledMix}
`;

export const SectionClimaFormPesquisa = styled.section`
  ${SectionClimaStyledMix}
`;

export const TituloStyledFormPesquisa = styled.h2`
  ${SubTituloStyledMix}
`;

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

export const SectionClimaGraficoTemp = styled.section`
  ${SectionClimaStyledMix}
`;

export const TituloStyledGraficoTemp = styled.h2`
  ${SubTituloStyledMix}
`;