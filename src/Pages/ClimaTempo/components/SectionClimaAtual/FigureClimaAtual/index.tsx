import styled from "styled-components";
import { AlignTemAtualMix } from "../../../Styles/StylesClima";

const FigureEstilizado = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;  
  ${AlignTemAtualMix}

  @media screen and (max-width: 450px) {
    font-weight: 600;
  }

`;

interface PropsItemClimaAtual {
  children: React.ReactNode
  modificar?: boolean
}

const FigureClimaAtual = ({ children, modificar }: PropsItemClimaAtual) => {
  return (<FigureEstilizado className={modificar ? "alingTemAtual" : ""}>
    {children}
  </FigureEstilizado>)
};

export default FigureClimaAtual
