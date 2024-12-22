import styled from "styled-components";

export const ItemBarraGraficoStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.7rem;
`;

export const BarraGraficoStyled = styled.div<{
  altTemp: number;
  isActive: boolean;
}>`
  max-width: .8rem;
  height: ${({ altTemp }) => altTemp}rem;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.primary : theme.quinary};
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.quinary : theme.secondary)};

  border-radius: 0.8rem;
`;
