import styled from "styled-components";
import { ButtonPerson, MainPerson } from "../../styles/globalStyles";

export const HeaderStyled = styled.header<{showheader: boolean}>`
  ${MainPerson}
  top: 0; 
  transform: ${(props) => {
    return props.showheader ? "translateY(0)" : "translateY(-100%)"
  }};
`;

/* Button sem utilização no momento */
export const ButtonHeaderStyled = styled.button`
  top: 83px;
  border-radius: 0 0 8px 8px;
  ${ButtonPerson}
`;
