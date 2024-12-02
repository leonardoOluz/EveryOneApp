import styled from "styled-components";

export const ListaClimaDetalhesStyled = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ItemFigureClimaDetalhesStyled = styled.figure`
  display: flex;
  gap: 2rem;
  justify-content: left;
`;

export const ContainerClimaDetalhesStyled = styled.div`
  width: 50%;
  max-width: 250px;
  display: flex;
  gap: 1.6rem;
`;

export const FigcaptionClimaDetalhesStyled = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;
