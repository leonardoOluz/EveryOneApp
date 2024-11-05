import styled from "styled-components";
import { fadeIn } from "../../styles/globalStyles";
import { WeatherContainerStandard } from "../../styles/weatherStyles/globalStyles";

export const WeaterStyledMain = styled.main<{
  imageWeather: string;
  toggleColor: boolean;
}>`
  box-sizing: border-box;
  height: auto;
  background-image: ${({ imageWeather }) =>
    imageWeather
      ? `url("../src/assets/images/weather/${imageWeather}.jpg")`
      : ``};
  animation: ${({ imageWeather }) => (imageWeather ? fadeIn : "")} 2s ease-in;
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
  ${({ toggleColor, theme }) =>
    toggleColor ? "color: white" : `color: ${theme.text}`}
`;

export const WeatherStyledSection = styled.section`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  /* overflow-y: auto; */
  /* scrollbar-width: none; */
`;

export const WeatherStyledTitulo = styled.h1<{ toggleColor: boolean }>`
  text-align: center;
  ${({ toggleColor, theme }) =>
    toggleColor ? "color: white" : `color: ${theme.text}`}
  font-weight: 800;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizeTitle};
  ${WeatherContainerStandard}
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
`;

export const WeatherContainerDayHours = styled.div`
  width: 100%;
  max-width: 750px;
`;
