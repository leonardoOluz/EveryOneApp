import LogoSpringTrail from "../LogoSpringTrail";
import { EveryOneAppStyled } from "./Styled";

const EveryOneApp = () => {
    return (
        <EveryOneAppStyled>
            <LogoSpringTrail hightBox={45} widthBox={45} displayDirection="column"/>
        </EveryOneAppStyled>       
    )
}

export default EveryOneApp;