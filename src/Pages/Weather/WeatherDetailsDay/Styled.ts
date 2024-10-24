import styled from "styled-components";
import { WeatherContainerStandard, WeatherContainerStyled } from "../../../styles/weatherStyles/globalStyles";

export const WeatherDetailsDayStyled = styled.div`
  ${WeatherContainerStyled}
  ${WeatherContainerStandard}
  
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
