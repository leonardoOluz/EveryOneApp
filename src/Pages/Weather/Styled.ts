import styled from "styled-components";
import { fadeIn } from "../../styles/globalStyles";

export const WeaterStyledMain = styled.main<{
  imageWeather: string;
  night: number | undefined;
}>`
  box-sizing: border-box;
  height: auto;
  background-image: ${({ imageWeather }) =>
    imageWeather
      ? `url("../src/assets/images/weather/${imageWeather}.jpg")`
      : ``};
  animation: ${({ imageWeather }) => (imageWeather ? fadeIn : "")} 2s
    ease-in;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 0 auto;
  padding: 5rem 0;
  opacity: ${({ imageWeather }) => (imageWeather ? 1 : 0)};
  ${({ night, theme }) => (!night ? "color: white" : `color: ${theme.text}`)}
`;

export const WeatherStyledSection = styled.section`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const WeatherStyledTitulo = styled.h1<{ night: number | undefined }>`
  text-align: center;
  ${({ night, theme }) => (!night ? "color: white" : `color: ${theme.text}`)}
  font-weight: 800;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizeTitle};
`;
