import styled from "styled-components";
import Lista from "../../Lista/Lista";
import Item from "../../Lista/Item/Item";
import { Link, useLocation, } from "react-router-dom";
import { ILinksNavbar } from "../../../Interfaces/IVariaveis";
import { widthMobile } from "../../../styles/IU";

const NavStyled = styled.nav<{ $isSuspenso: boolean }>`
    position: absolute;
    inset: 0;
    bottom: auto;
    top: 12.5rem;
    z-index: -255;
    
    ${({ $isSuspenso }) =>
    $isSuspenso
      ? "display: flex;"
      : "display: none;"}
   
   @media screen and (min-width: ${widthMobile.css}){
      display: flex;
      position: static;
      transform: translateY(0);
      background-color: transparent;
      padding: 0;
    }

`;
const linksNavbar: ILinksNavbar[] = [
  {
    to: "/",
    texto: "Home"
  },
  {
    to: "/clima-tempo",
    texto: "Previsão do Tempo"
  },
  {
    to: "/hours-world",
    texto: "Relogio universal"
  }
]
interface INavbarProps {
  menuSuspenso: boolean;
  setMenuSuspenso: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ menuSuspenso, setMenuSuspenso }: INavbarProps) => {
  const location = useLocation();

  return (<NavStyled $isSuspenso={menuSuspenso}>
    <Lista >
      {linksNavbar.map((item, index) => (
        <Item
          onClick={() => setMenuSuspenso(!menuSuspenso)}
          isAtive={location.pathname === item.to}
          key={index}
        >
          <Link to={item.to}>
            {item.texto}
          </Link>
        </Item>
      ))}
    </Lista>
  </NavStyled>)
};

export default Navbar;