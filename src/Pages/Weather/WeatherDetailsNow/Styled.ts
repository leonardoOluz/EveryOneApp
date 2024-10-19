import styled from "styled-components";
import { WeatherContainerStyled } from "../../../styles/globalStyles";

export const WeatherStyledContainerNow = styled.div`
 ${WeatherContainerStyled}
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
  }
`;

export const WeatherStyledTitleNow = styled.h2`
  text-align: center;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizeBig};
`;
