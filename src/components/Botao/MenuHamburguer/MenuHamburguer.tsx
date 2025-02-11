import styled from "styled-components";

const SpanOpen = styled.span`
  margin: auto 0;
  border-bottom: 2px solid ${({theme}) => theme.quinary};
  width: 8.5rem;
  margin: 0.4rem 0;
  box-sizing: border-box;
  `;
const SpanClose = styled.span`
  color:${({theme}) => theme.quinary};
  font-size: 3.5rem;
  font-weight: bold;
  box-sizing: border-box;
`;
interface IMenuHmaburguer {
  selection: "aberto" | "fechado";
}

const MenuHamburguer = ({ selection }: IMenuHmaburguer) => {

  if (selection === "fechado") {
    return (<>
      <SpanOpen />
      <SpanOpen />
      <SpanOpen />
    </>)
  }
  if (selection === "aberto"){
    return <SpanClose>X</SpanClose>
  }
}

export default MenuHamburguer;