import { useEffect, useState } from "react";
import { FooterStyled } from "./Styles";

const FooterMain = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > document.documentElement.scrollHeight - window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);


  return (
    <FooterStyled
      showfooter={isScrolled}
    >
      <h1>EveryOne App</h1>
    </FooterStyled>
  )
}

export default FooterMain;