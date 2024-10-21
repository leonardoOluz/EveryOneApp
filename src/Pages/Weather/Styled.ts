import styled from "styled-components";
import {
  WeatherContainerStandard,
  WeatherContainerStyled,
} from "../../styles/globalStyles";

export const WeaterStyledMain = styled.main`
  box-sizing: border-box;
  height: auto;
  background-image: url("../src/assets/images/weather/skyNightClean.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const WeatherStyledSection = styled.section`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const WeatherStyledTitulo = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeBig};
  font-weight: 800;
  padding: 0.5rem 1rem;
  ${WeatherContainerStandard}
  ${WeatherContainerStyled}
`;
