import styled from "styled-components";

export const ClimaFormPesquisaStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  box-sizing: border-box;
  label {
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }
`;

export const ClimaContainerInputButtonStyled = styled.div`
  display: inline-block;
  box-sizing: border-box;

  input {
    all: unset;
    padding: 0.7rem 0;
    border-radius: 0.8rem 0 0 0.8rem;
    text-decoration: none;
    outline-style: none;
    border: 2px solid ${({ theme }) => theme.quinary};
    background-color: #fff;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;

    &::placeholder {
      content: "Digite uma cidade";
    }
  }

  button {
    all: unset; /* retira todas as propriedades padrão */
    margin: 0;
    cursor: pointer;
    padding: 0.7rem 1rem;
    text-align: center;
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.quinary};
    border-radius: 0 0.8rem 0.8rem 0;
    border: 2px solid ${({ theme }) => theme.quinary};
    text-decoration: none;
    outline-style: none;
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
    }
    &:active {
      transform: scale(0.95);
    }
  }

  @media screen and (max-width: 450px) {
    input {
      padding: 1.6rem 0;
    }
    button {
      padding: 1.6rem 1rem;
    }
  }
`;
