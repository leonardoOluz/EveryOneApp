import styled from "styled-components";
import {
  WeatherContainerStandard,
  WeatherContainerStyled,
} from "../../../styles/weatherStyles/globalStyles";

export const WeatherStyledContainerNow = styled.div`
  ${WeatherContainerStyled}
  ${WeatherContainerStandard}
  .Details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSizeMedium};
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      span {
        font-size: ${({ theme }) => theme.fontSizeMedium};
      }
    }
    p {
      font-size: ${({ theme }) => theme.fontSizeMedium};
    }
  }
`;
