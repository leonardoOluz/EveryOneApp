import styled from "styled-components";
import { ButtonPerson, MainPerson } from "../../styles/globalStyles";

export const FooterStyled = styled.footer<{showfooter: boolean}>`
  ${MainPerson}
  bottom: 0;
  transform: ${(props) =>
    props.showfooter ? "translateY(0)" : "translateY(100%)"};
`;

/* Button sem utilização no momento */
export const ButtonFooterStyled = styled.button`
  bottom: 83px;
  border-radius: 8px 8px 0 0;
  ${ButtonPerson}
`;
