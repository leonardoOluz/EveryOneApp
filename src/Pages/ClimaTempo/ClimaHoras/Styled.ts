import styled from "styled-components";

export const ItemListaHoraStyled = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme, active }) =>
    active ? theme.quinary : theme.secondary};
  color: ${({ theme, active }) => (active ? theme.secondary : theme.quinary)};
  border-radius: 0.8rem;

  border-bottom: 1px solid
    ${({ theme, active }) => (active ? theme.secondary : theme.quinary)};
  padding-bottom: 0.2rem;

  .divisorStyled {
    height: 1.6rem;
    border: 1px solid ${({ theme }) => theme.quinary};
  }

  @media screen and (max-width: 600px) {
    .hiddenComponente {
      display: none;
    }
  }
`;

export const FigureStyled = styled.figure`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  figcaption {
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }

  svg {
    width: 2.6rem;
    height: 2.6rem;
  }
`;
