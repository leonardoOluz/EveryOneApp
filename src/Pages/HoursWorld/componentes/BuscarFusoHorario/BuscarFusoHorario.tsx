import styled from "styled-components"
import EntradaTexto from "../EntradaTexto/EntradaTexto";
import Botao from "../Botao/Botao";
import ListaTimeZone from "../ListaTimeZone/ListaTimeZone";
import useListTimeZoneContext from "../../hooks/useListTimeZoneContext";
import { Container } from "../Container/Container";
import useGetTimeZoneContext from "../../hooks/useGetTimeZoneContext";
import Overlay from "../Overlay/Overlay";
import { useState } from "react";

const BuscaEstilizada = styled.div`
  position: relative;
  width: 100%;

  @media screen  and (min-width: 550px){
    max-width:55rem;
  }
`;
interface IBuscaEstilizadaProps {
  pegarTextLocal: (e: string) => void;
};
const BuscarFusoHorario = ({ pegarTextLocal }: IBuscaEstilizadaProps) => {
  const { filtrarListTimeZone,
    textInput,
    limparTextInput,
    limparListTimeZone,
    zones,
    pegarTextInput
  } = useListTimeZoneContext();
  const { isLoading } = useGetTimeZoneContext();
  const [isList, setIsList] = useState<boolean>(false);
  const [focoAtivo, setFocoativo] = useState<number | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocoativo(focoAntigo => {
          if (focoAntigo == null) {
            return 0;
          }
          if (focoAntigo >= (zones.length - 1)) {
            return focoAntigo = zones.length - 1
          }
          return focoAntigo += 1
        });
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocoativo(focoAntigo => {
          if (focoAntigo == null) {
            return 0;
          }
          if (focoAntigo <= 0) {
            return 0
          }
          if (focoAntigo > (zones.length - 1)) {
            return focoAntigo = zones.length - 1
          }
          return focoAntigo -= 1;
        });
        break;
      case "Enter":
        event.preventDefault();
        if (focoAtivo !== null) {
          pegarTextInput(zones[focoAtivo].zoneName);
          limparListTimeZone();
        }
        break;
      case "Escape":
        event.preventDefault();
        setFocoativo(null);
        limparListTimeZone();
        break;
      default:
        break;
    };
  };



  const pegarTexto = (valor: string) => {
    if (valor.length > 5) {
      pegarTextLocal(valor);
      limparTextInput();
      limparListTimeZone();
    }
  };

  return (
    <BuscaEstilizada>
      {isLoading && <Overlay />}
      <Container $isList={isList}>
        <EntradaTexto
          onKeyDown={handleKeyDown}
          onChange={filtrarListTimeZone}
          placeholder="Escolha uma localidade"
          value={textInput} />
        <Botao onClick={() => pegarTexto(textInput)} isAtivo={!!textInput} />
      </Container>
      <ListaTimeZone focoAtivo={focoAtivo} checkLista={(checado) => setIsList(checado)} />
    </BuscaEstilizada>
  )
};

export default BuscarFusoHorario;