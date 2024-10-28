import { useContext, useEffect, useState } from "react";
import { HeaderContainerIsDark, HeaderStyled } from "./Styles";
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
      <HeaderContainerIsDark onClick={() => setIsDarkMode(!isDarkMode)}>
        <MdLightMode size={24} />
      </HeaderContainerIsDark>
    </HeaderStyled>
  )
}
export default HeaderMain;