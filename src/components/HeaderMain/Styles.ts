import styled from "styled-components";
import { MainPerson } from "../../styles/globalStyles";

export const HeaderStyled = styled.header<{ showheader: boolean }>`
  ${MainPerson}
  top: 0;
  transform: ${(props) => {
    return props.showheader ? "translateY(0)" : "translateY(-100%)";
  }};
  display: flex;
  justify-content: space-between;
`;

export const HeaderContainerIsDark = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.text};
  }
`;
