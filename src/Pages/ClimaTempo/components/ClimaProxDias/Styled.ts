import styled from "styled-components";

export const ContainerCliamaProxDiasStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin: 0.8rem 0;
  justify-content: space-between;
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
  width: 70%;

  .hiddenComponenteItem2 {
    display: none;
  }

  .hiddenComponenteItem3 {
    display: none;
  }

  @media screen and (min-width: 605px) {
    gap: 1.4rem;

    .hiddenComponenteItem2 {
      display: flex;
    }
  }

  @media screen and (min-width: 720px) {
    
    .hiddenComponenteItem3 {
      display: flex;
    }
  }

  @media screen and (min-width: 809px) {
    .hiddenComponenteItem3 {
      display: none;
    }
    .hiddenComponenteItem2 {
      display: none;
    }
  }

  @media screen and (min-width: 1285px) {
    .hiddenComponenteItem2 {
      display: flex;
    }
  }

  @media screen and (min-width: 1582px) {
    .hiddenComponenteItem3 {
      display: flex;
    }
  }

`;

export const ItemClimaProxDiasStyled = styled.li`
  display: flex;
  align-items: center;
`;

export const ItemFigureClimaProxDiasStyled = styled.figure`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const FigcaptionClimaProxDiasStyled = styled.figcaption<{
  celsus?: boolean;
}>`
  
  font-size: ${({ theme }) => theme.fontSizeSmall};
  ${({ celsus: gruss }) => (gruss ? "&:after {content: ' °C'}" : "")}
  
  @media screen and (min-width: 390px){
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }
`;
