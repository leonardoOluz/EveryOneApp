import styled from "styled-components";

export const WeaterContainer = styled.main`
  width: 100vw;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const WeatherTitulo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeBig};
`;