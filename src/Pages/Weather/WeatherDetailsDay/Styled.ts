import styled from "styled-components";
import {
  hidden,
  show,
  WeatherContainerStandard,
  WeatherContainerStyled,
} from "../../../styles/weatherStyles/globalStyles";

export const WeatherDetailsDayStyled = styled.div`
  ${WeatherContainerStyled}
  ${WeatherContainerStandard}
  ${hidden}
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }

  &.show {
    ${show}
  }
`;

export const WeatherFigureDayStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h3 {
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }
`;

export const WeatherListaDetailsDayStyled = styled.ul`
  display: inline-block;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3rem;
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

export const WeatherDetailsDayContainer = styled.figure<{ toggleColor?: boolean }>`
  display: flex;
  gap: 0.5rem;
  text-align: center;
  margin: 0.5rem;
  svg {
    color: ${({ theme, toggleColor }) => (toggleColor ? "white" : theme.text)};
  }
`;
