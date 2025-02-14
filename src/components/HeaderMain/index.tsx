import { useContext, useState } from "react";
import { HeaderStyled } from "./Styles";
import LogoSpringTrail from "../LogoSpringTrail";
import { ThemeContext } from "../../Pages/ClimaTempo/Contexts/useContext";
import { MdLightMode } from "react-icons/md";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import Botao from "../Botao/Botao";
import MenuHamburguer from "../Botao/MenuHamburguer/MenuHamburguer";
import useWindowSize from "../../hooks/useWindowSize";
import { widthMobile } from "../../styles/IU";

const HeaderMain = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [menuSuspenso, setMenuSuspenso] = useState<boolean>(false);
  const width = useWindowSize();


  return (
    <HeaderStyled>
      <Link to="/">
        <LogoSpringTrail hightBox={3.5} widthBox={1.9} />
      </Link>
      {width < widthMobile.nb &&
        <Botao
          tipoButton="secundario"
          ariaLabel="botao-menu-suspenso"
          titulo="botao-menu-suspenso"
          tipo="button"
          id="menu-suspenso"
          onClick={() => setMenuSuspenso(!menuSuspenso)}
        >
          <MenuHamburguer
            selection={menuSuspenso ? "aberto" : "fechado"}
          />
        </Botao>
      }
      <Navbar menuSuspenso={menuSuspenso} setMenuSuspenso={setMenuSuspenso} />
      <Botao
        tipoButton="primario"
        ariaLabel="botão de troca de tema"
        titulo="botão de troca de tema"
        id="darkmode"
        tipo="button"
        onClick={() => setIsDarkMode(!isDarkMode)} >
        <MdLightMode size={30} />
      </Botao>
    </HeaderStyled>
  )
}
export default HeaderMain;