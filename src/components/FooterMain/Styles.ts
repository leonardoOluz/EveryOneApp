import styled from "styled-components";
export const FooterStyled = styled.footer`
  background-color: ${({theme}) => theme.inside};
  border: 0.5px solid ${({theme}) => theme.border};
  text-align: center;
  padding: 1rem;
`;
