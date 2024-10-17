import { useEffect, useState } from "react";
import { HeaderStyled } from "./Styles";

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
      <h1>EveryOne App</h1>
    </HeaderStyled>
  )
}
export default HeaderMain;