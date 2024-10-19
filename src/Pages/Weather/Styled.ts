import styled from "styled-components";

export const WeaterStyledMain = styled.main`
  box-sizing: border-box;
  height: auto;
  background-image: url("../src/assets/images/weather/skyCloudyRain.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const WeatherStyledSection = styled.section`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const WeatherStyledTitulo = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeBig};
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: .5rem 1rem;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
`;

export const WeatherImage = styled.img`
  width: 65px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
`;

export const WeatherStyledListHours = styled.ul`
  width: 80%;
  margin: 1rem auto;
`;

export const WeatherStyledSlider = styled.li`
  color: ${({ theme }) => theme.text};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  h3, p {
    font-size: ${({theme}) => theme.fontSizeMedium};
    align-items: center;
  }
`;
