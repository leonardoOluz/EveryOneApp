import styled from "styled-components";
import {
  SectionClimaStyled,
  SubTituloStyled,
} from "../../Styles/StylesClima";

export const SecaoClimaHojeStyled = styled.section`
  ${SectionClimaStyled}
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    figure {
      display: flex;
      gap: 2rem;
      justify-content: left;

      .figacaption-temp::after {
        content: " °C";
      }
      .figacaption-WindKm::after {
        content: " Km/h";
        font-size: 1.6rem;
      }
      div {
        width: 50%;
        max-width: 250px;
        display: flex;
        gap: 1.6rem;

        figcaption {
          font-size: ${({ theme }) => theme.fontSizeMedium};
        }
      }
    }
  }

  .weather__climaHoje-description {
    font-size: ${({ theme }) => theme.fontSizeBig};
  }

  @media screen and (max-width: 810px) {
    width: 100%;
    margin: 1rem 0;
  }

  @media screen and (max-width: 450px) {
    max-height: 100%;

    ul {
      li {
        figure {
          justify-content: flex-start;

          div {
            width: 180px;
            gap: 1rem;
            justify-content: left;
          }
          figcaption {
            font-size: ${({ theme }) => theme.fontSizeMedium};
          }
        }
      }
    }
  }
`;

export const TituloStyleClimaHoje = styled.h2`
  ${SubTituloStyled}
`;
