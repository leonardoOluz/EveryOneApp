import styled from "styled-components";

const ItemStyled = styled.li<{ $isAtivo: boolean }>`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeBig};
  box-sizing: border-box;
  padding: 0 1rem;
  transition: transform 0.2s ease-in-out;
  border-bottom: 1px solid ${({ theme }) => theme.quinary};  
  ${({ $isAtivo }) => $isAtivo ? `font-weight: 800;` : `font-weight: 300;`}
  
  a {
    color: ${({ theme }) => theme.quinary};  
    text-decoration: none;
  }
  
  @media screen and (min-width: 550px){
    width: auto;
    border: none;
    a {
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;

interface IItemProps {
  children: React.ReactNode,
  isAtive: boolean;
  onClick: () => void;
}

const Item = ({ children, isAtive, onClick }: IItemProps) => {
  return (<ItemStyled $isAtivo={isAtive} onClick={onClick}>{children}</ItemStyled>)
};

export default Item;