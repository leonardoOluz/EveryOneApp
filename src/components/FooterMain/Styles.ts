import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: .6rem .6rem .8rem rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 1.6rem;
`;
