import { CLimaHojeFigureStyled } from "./Styled";

interface PropsClimaHojeFigure {
    children: React.ReactNode;
}

const ClimaHojeFigure = ({ children }: PropsClimaHojeFigure) => {
    return (<CLimaHojeFigureStyled >{children}</CLimaHojeFigureStyled>)
};

export default ClimaHojeFigure