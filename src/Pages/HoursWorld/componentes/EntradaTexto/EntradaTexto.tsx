import styled from "styled-components";

const InputEstilizado = styled.input`
  width: 80%;
  box-sizing: border-box;
  border: none;
  outline: none;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSizeBig};
  color: ${({ theme }) => theme.secondary};
  padding-left: 2rem;
  
  &::placeholder{
    font-size: ${({ theme }) => theme.fontSizeBig};
    color: ${({ theme }) => theme.secondary};
  }
  
  @media screen  and (min-width: 550px){
    padding-left: 0rem;
   
  }

`;
interface IInputEstilizadoProps {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
const EntradaTexto = ({ onChange, placeholder, value, onKeyDown }: IInputEstilizadoProps) => {
  return (<InputEstilizado onKeyDown={onKeyDown} onChange={onChange} placeholder={placeholder} value={value} />);
};

export default EntradaTexto;