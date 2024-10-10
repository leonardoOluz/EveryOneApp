import { useState } from "react";
import { ButtonHeaderStyled, HeaderStyled } from "./Styles";

const HeaderMain = () => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  return (
    <HeaderStyled
      onMouseOut={() => setShowHeader(false)}
      onMouseOver={() => setShowHeader(true)}
      showheader={showHeader}
    >
      <ButtonHeaderStyled>
        {showHeader ? "Esconder" : "Mostrar"}
      </ButtonHeaderStyled>
      <h1>EveryOne App</h1>
    </HeaderStyled>
  )
}
export default HeaderMain;