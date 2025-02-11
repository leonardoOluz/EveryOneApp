import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const BotaoStyled = styled.button<{ $isAtivo: boolean }>`
  width: 20%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  border-left: 4px solid ${({ theme }) => theme.secondary};
  height: 4rem;

  svg {
    color: ${({ theme, $isAtivo }) => $isAtivo ? theme.secondary : "red"};
  }

`;

interface IBotaoProps {
  onClick: () => void;
  isAtivo: boolean
}

const Botao = ({ onClick, isAtivo }: IBotaoProps) => {

  return <BotaoStyled $isAtivo={isAtivo} onClick={onClick} disabled={!isAtivo}>
    <FaSearch size={24} />
  </BotaoStyled>
};

export default Botao;