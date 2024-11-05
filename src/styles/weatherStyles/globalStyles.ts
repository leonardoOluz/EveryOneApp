import styled, { css } from "styled-components";

export const WeatherContainerStyled = css`
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

/* css animations */
export const hidden = css`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;
/* css animations */
export const show = css`
  opacity: 1;
  transform: translateY(0);
`;
