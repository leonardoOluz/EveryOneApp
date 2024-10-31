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
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  li {
    box-sizing: border-box;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.5rem;
    border-radius: 8px;
  }
`;
export const WeatherDetailsDayContainer = styled.div<{ toggleColor?: boolean }>`
  display: flex;
  gap: 0.5rem;
  text-align: center;
  margin: 0.5rem;
  svg {
    color: ${({ theme, toggleColor }) => (toggleColor ? "white" : theme.text)};
  }
`;
