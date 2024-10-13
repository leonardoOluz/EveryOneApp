import styled from "styled-components";

export const WeaterStyledMain = styled.main`
  width: 100vw;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WeatherStyledSection = styled.section`  
`;

export const WeatherStyledTitulo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSizeBig};
`;