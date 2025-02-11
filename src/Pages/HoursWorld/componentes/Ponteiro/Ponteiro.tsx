import { FaLocationArrow } from "react-icons/fa6";
import styled, { css } from "styled-components";

const basePonteiro = css`
  padding: 0 .2rem;
  position: absolute;
  border: .2rem solid;
  border-radius: 55rem;
  border-color: ${({ theme }) => theme.black};
  svg {
        position: absolute;
        left: -1.3rem;
        top: -1.6rem;
        transform: rotate(-45deg);
  }
`;
const PonteiroHora = styled.div<{ $hora: number }>`
  ${basePonteiro}
  top: 5.15rem; 
  height: 12rem;
  ${({ $hora }) => `transform: rotate(${$hora}deg);`}
  background-color: ${({ theme }) => theme.quinary};
  
  @media screen and (min-width: 550px){
    top: 8.2rem; 
    height: 18rem; 
  }
`;
const PonteiroMinuto = styled.div<{ $minuto: number }>`
  ${basePonteiro}
  top: 3.24rem; 
  height: 16rem;
  ${({ $minuto }) => `transform: rotate(${$minuto}deg);`}
  background-color: ${({ theme }) => theme.primary};
  
  @media screen and (min-width: 550px){
    top: 4.15rem; 
    height: 26rem; 
  }
`;
const PonteiroSegundo = styled.div<{ $segundo: number }>`
  ${basePonteiro}
  top: 3.24rem; 
  height: 16rem;
  ${({ $segundo }) => `transform: rotate(${$segundo}deg);`}
  background-color: red;
  border: none;

  svg {
    position: absolute;
    left: -1rem;
    top: -1.2rem;
    transform: rotate(-45deg);
    color: red;
  }
  
  @media screen and (min-width: 550px){
    top: 4.15rem; 
    height: 26rem; 
  }
`;

const Ponto = styled.div`
  position: absolute;
  border-radius: 55rem;
  background-color: ${({ theme }) => theme.tertiary};
  width: .7rem;
  height: .7rem;
  top: 11rem;
  border: .2rem solid ${({ theme }) => theme.quinary};
  
  @media screen and (min-width: 550px){
    top: 16.8rem;
    width: .9rem;
    height: .9rem;  
  }
`;

interface IPonteiroProps {
  tipo: "hora" | "minuto" | "segundo" | "ponto";
  minuto?: number;
  hora?: number;
  segundo?: number;
};
const Ponteiro = ({ tipo, hora = 0, minuto = 0, segundo = 0}: IPonteiroProps) => {

  switch (tipo) {
    case "minuto":
      return (<PonteiroMinuto $minuto={minuto}>
        <FaLocationArrow size={29} className="ponteiroPonta" />
      </PonteiroMinuto>);
    case "hora":
      return (<PonteiroHora $hora={hora} >
        <FaLocationArrow size={29} className="ponteiroPonta" />
      </PonteiroHora>);
    case "segundo":
      return (<PonteiroSegundo $segundo={segundo}>
        <FaLocationArrow
          size={24}
          className="ponteiroPonta" />
      </PonteiroSegundo>);
    case "ponto":
      return (<Ponto />);
  }
};

export default Ponteiro;