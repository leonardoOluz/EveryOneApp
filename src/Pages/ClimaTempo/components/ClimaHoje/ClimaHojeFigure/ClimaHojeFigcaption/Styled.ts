import styled from "styled-components";

export const ClimaHojeFigcaptionStyled = styled.figcaption`
  font-size: ${({ theme }) => theme.fontSizeMedium};

  &.weather__climaHoje-description {
    font-size: ${({ theme }) => theme.fontSizeBig};
  }
`;
