import { useEffect, useState } from "react";
import { HeaderStyled } from "./Styles";
import LogoSpringTrail from "../LogoSpringTrail";

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(true);

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
    </HeaderStyled>
  )
}
export default HeaderMain;