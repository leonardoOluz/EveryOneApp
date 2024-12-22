import styled from "styled-components";

export const ClimaFormPesquisaStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  box-sizing: border-box;
  label {
    font-size: ${({ theme }) => theme.fontSizeBig};
  }
`;

export const ClimaContainerInputButtonStyled = styled.div`
  width: 90%;
  display: flex;
  box-sizing: border-box;
  
  @media screen and (min-width: 809px) {
    width: 100%;
    justify-content: center;
  }
`;
