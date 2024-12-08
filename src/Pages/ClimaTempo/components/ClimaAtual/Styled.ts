import styled from "styled-components";
import { imagesDay } from "../../Styles/IU";

export const ContainerImagemAtual = styled.section<{
  imagem: string;
  toggleColor: boolean;
}>`
  background-image: ${({ imagem }) => `url(${imagem})`};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
  ${({ toggleColor, theme, imagem }) =>
    toggleColor
      ? "color: white"
      : imagem.includes(imagesDay.skyCloudy)
      ? "color: #000"
      : `color: ${theme.quinary}`}
`;

export const ContainerTituloLocalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  margin-top: 2.4rem;
  padding: 0.5rem 1.6rem;
  align-items: center;
  gap: 1.6rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSizeTitle};
    box-sizing: border-box;
    color: ${({ theme }) => theme.quinary};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizeBig};
    color: ${({ theme }) => theme.quinary};
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ContainerWeatherNow = styled.div`
  display: flex;
  justify-content: start;

  ul {
    display: flex;
    flex-direction: column;
    li {
      figure {
        /* width: 195px; */
        display: flex;
        justify-content: left;
        /* gap: 1rem; */
        align-items: center;

        .figacaption-temp::after {
          content: " °C";
        }

        figcaption {
          font-size: ${({ theme }) => theme.fontSizeTitle};
          font-weight: 800;

          @media screen and (max-width: 450px) {
            font-size: ${({ theme }) => theme.fontSizeBig};
            font-weight: 600;
          }
        }

        .hiddenVissible {
          width: 1px;
          height: 1px;
          overflow: hidden;
          position: absolute;
          clip: rect(1px 1px 1px 1px);
          clip: rect(1px, 1px, 1px, 1px);
        }

        @media screen and (max-width: 450px) {
          /* font-size: ${({ theme }) => theme.fontSizeBig}; */
          font-weight: 600;
        }
      }
    }

    .imagem-tempAtual {
      justify-content: center;
      padding-left: 1.5rem;
      gap: 2.5rem;
      figcaption {
        font-size: ${({ theme }) => theme.fontSizeBig};
      }
    }
  }
`;
