import styled from "styled-components";
import useListTimeZoneContext from "../../hooks/useListTimeZoneContext";
import { useEffect } from "react";

const ListaEstilizada = styled.ul`
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  top: 4.3rem;
  left: 0;
  right: 0;
  max-height: 57rem;
  overflow-y: scroll;
  scrollbar-width: 1px;
  z-index: 1;
`;
const ItemEstilizado = styled.li<{ $isAtivo: boolean }>`
    border: .1rem solid ${({ theme }) => theme.secondary};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizeBig};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
    }
    ${({ $isAtivo, theme }) => $isAtivo && `background-color:${theme.tertiary}`}
`;
interface IListaTimeZoneProps {
  checkLista: (cheacar: boolean) => void;
  focoAtivo: number | null;
};

const ListaTimeZone = ({ checkLista, focoAtivo }: IListaTimeZoneProps) => {
  const { zones, pegarTextInput, limparListTimeZone } = useListTimeZoneContext();
  useEffect(() => {
    if (zones.length === 0) {
      checkLista(false);
      return
    }
    if (zones) {
      checkLista(true);
      return
    }
  }, [zones, checkLista]);

  const handleOnKeyDown = (evento: React.KeyboardEvent<HTMLLIElement>, textoZone: string) => {
    if(evento.key === "Enter") {
      pegarTextInput(textoZone);
      limparListTimeZone();
    };
  };

  return (<ListaEstilizada>
    {zones.map((item, index) => (
      <ItemEstilizado
        $isAtivo={focoAtivo === index}
        onClick={() => pegarTextInput(item.zoneName)}
        key={index}
        tabIndex={0}
        onKeyDown={e => handleOnKeyDown(e, item.zoneName)}
      >
        {item.zoneName}
      </ItemEstilizado>
    ))}
  </ListaEstilizada>)
};

export default ListaTimeZone;