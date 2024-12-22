import styled from "styled-components";

export const ListaClimaTempDiarioStyled = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.6rem;
  box-sizing: border-box;

  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 1px;
    opacity: 0;
  }
`;