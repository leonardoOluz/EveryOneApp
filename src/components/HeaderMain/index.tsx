import { useContext, useEffect, useState } from "react";
import { IsDark, HeaderStyled } from "./Styles";
import LogoSpringTrail from "../LogoSpringTrail";
import { ThemeContext } from "../../contexts/themeContext";
import { MdLightMode } from "react-icons/md";

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderStyled
      showheader={isScrolled}
    >
      <LogoSpringTrail />
      <IsDark htmlFor="checkbox-darkmode" aria-label="botão de troca de tema" >
        <input id="checkbox-darkmode" type="checkbox" onChange={() => setIsDarkMode(!isDarkMode)} />
        <MdLightMode size={24} />
      </IsDark>
    </HeaderStyled>
  )
}
export default HeaderMain;