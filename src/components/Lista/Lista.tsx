import styled from "styled-components"
import { widthMobile } from "../../styles/IU";

const ListaStyled = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.secondary};
  
  @media screen and (min-width: ${widthMobile.css}){
    flex-direction: row;
    gap: 2rem;
  }
`;
interface IListaProps {
  children: React.ReactNode;
};
const Lista = ({ children}: IListaProps) => {
  return (<ListaStyled >{children}</ListaStyled>)
};

export default Lista;