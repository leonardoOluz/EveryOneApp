import { useState } from "react";
import { ButtonFooterStyled, FooterStyled } from "./Styles";

const FooterMain = () => {
  const [showFooter, setShowFooter] = useState<boolean>(true);

  return (
    <FooterStyled
      onMouseOut={() => setShowFooter(false)}
      onMouseOver={() => setShowFooter(true)}
      showfooter={showFooter}
    >
      <ButtonFooterStyled>
        {showFooter ? "Esconder" : "Mostrar"}
      </ButtonFooterStyled>
      <h1>EveryOne App</h1>
    </FooterStyled>
  )
}

export default FooterMain;