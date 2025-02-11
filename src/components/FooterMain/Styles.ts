import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
  text-align: center;
  padding: 1.6rem;
`;

export const TextFooterStyled = styled.p`
  color: ${({ theme }) => theme.quinary};
  font-size: ${({ theme }) => theme.fontSizeBig};  
`;