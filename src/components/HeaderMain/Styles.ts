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

export const IsDark = styled.label`
  background-color: transparent;
  border: none;
  cursor: pointer;

  input[type="checkbox"] {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  svg {
    color: ${({ theme }) => theme.quinary};
  }
`;
