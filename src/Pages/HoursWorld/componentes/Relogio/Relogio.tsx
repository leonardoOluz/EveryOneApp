import styled from "styled-components";
import imagemRelogio from "../../assets/relogio.avif";
import Ponteiro from "../Ponteiro/Ponteiro";
import useGetTimeZoneContext from "../../hooks/useGetTimeZoneContext";

const ImgRelogioStyled = styled.img`
  max-width: 36rem;
  width: 100%;
  align-self: center;
  @media screen and (min-width: 550px){
    max-width: 65rem;
  }
`

const CirculoStyled = styled.div`
  margin-top: 5rem;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-bottom: 2rem;
`

interface CirculoProps {
  children?: React.ReactNode;
}

const Relogio = ({ children }: CirculoProps) => {
  const { relogio } = useGetTimeZoneContext();

  return (<CirculoStyled>
    <ImgRelogioStyled src={imagemRelogio} alt="relogio" />
    {children}
    <Ponteiro tipo="minuto" minuto={relogio.minuto} />
    <Ponteiro tipo="hora" hora={relogio.hora} />
    <Ponteiro tipo="segundo" segundo={relogio.segundo} />
    <Ponteiro tipo="ponto" />
  </CirculoStyled>)
};

export default Relogio;