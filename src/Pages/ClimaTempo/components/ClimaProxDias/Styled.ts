import styled from "styled-components";

export const ContainerCliamaProxDiasStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin: 0.8rem 0;

  @media screen and (max-width: 600px) {
    gap: 0;
  }
`;

export const SubTituloClimaProxDiasStyled = styled.h3`
  font-size: ${({ theme }) => theme.fontSizeBig};
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.secondary};
  padding: 0 1rem;
  text-align: center;
  border-radius: 0.8rem;
  width: 140px;
  min-width: 140px;
`;

export const ListaClimaProxDiasStyled = styled.ul`
  display: flex;
  gap: 1.6rem;

  @media screen and (max-width: 600px) {
    display: inline-block;
    /* gap: 0; */
    .hiddenComponente {
      display: none;
    }
  }
`;

export const ItemClimaProxDiasStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ItemFigureClimaProxDiasStyled = styled.figure`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const FigcaptionClimaProxDiasStyled = styled.figcaption<{
  celsus?: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSizeMedium};
  ${({ celsus: gruss }) => (gruss ? "&:after {content: ' °C'}" : "")}
`;
