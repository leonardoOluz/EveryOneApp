import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.inside};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 1rem;
`;
