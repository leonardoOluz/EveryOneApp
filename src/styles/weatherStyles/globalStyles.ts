import styled, { css } from "styled-components";

export const WeatherContainerStyled = css`
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const WeatherContainerStandard = css`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const WeatherImage = styled.img`
  width: 65px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
`;