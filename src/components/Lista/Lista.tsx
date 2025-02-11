import styled from "styled-components"

const ListaStyled = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.secondary};
  
  @media screen and (min-width: 500px){
    flex-direction: row;
  }
`;

interface IListaProps {
  children: React.ReactNode;
}

const Lista = ({ children}: IListaProps) => {
  return (<ListaStyled >{children}</ListaStyled>)
};

export default Lista;