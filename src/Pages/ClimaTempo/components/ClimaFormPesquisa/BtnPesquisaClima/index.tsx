import styled from "styled-components";

const BtnEstilizado = styled.button`
    all: unset; /* retira todas as propriedades padrão */
    margin: 0;
    padding: 1.7rem 1rem;
    cursor: pointer;
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
    
    @media screen and (min-width: 809px) {
      padding: 0.7rem 1rem;
  }
`;

interface PropsBtnPesquisaClima {
  tipo: "button" | "submit" | "reset";
  children: React.ReactNode;
}
const BtnPesquisaClima = ({ children, tipo = "button" }: PropsBtnPesquisaClima) => {
  return (<BtnEstilizado type={tipo} >{children}</BtnEstilizado>)
}

export default BtnPesquisaClima;