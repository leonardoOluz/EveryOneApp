import styled from "styled-components";
import {
  WeatherContainerStandard,
  WeatherContainerStyled,
} from "../../../styles/weatherStyles/globalStyles";

export const WeatherLocalizationContainer = styled.div`
  ${WeatherContainerStandard}
  ${WeatherContainerStyled}
  text-align: center;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizeBig};
`;

export const WeatherLocalization = styled.p`
  font-size: ${({ theme }) => theme.fontSizeSmall};
  line-height: 24px;
`;
