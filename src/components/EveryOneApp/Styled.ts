import styled from "styled-components";

export const EveryOneAppStyled = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`;
