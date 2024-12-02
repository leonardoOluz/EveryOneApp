import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  background-image: url("/src/Pages/ClimaTempo/assets/ImagenClimaTempoTwo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerDivisorStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
