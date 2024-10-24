import styled from "styled-components";
import { WeatherContainerStandard } from "../../../styles/weatherStyles/globalStyles";

export const WeatherStyledListHours = styled.ul`
  width: 80%;
  max-width: 750px;
  margin: 1rem auto;
`;

export const WeatherStyledSlider = styled.li<{night: number | undefined}>`
  ${({night, theme}) => !night ? "color: white": `color: ${theme.text}`}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  ${WeatherContainerStandard}

  h3,
  p {
    font-size: ${({ theme }) => theme.fontSizeSmall};
    align-items: center;
  }
`;