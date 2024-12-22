import styled from "styled-components";
import { ValueRemClima } from "../../../../Styles/EnumsClima";

const ItemEstilizadoTempAgora = styled.li`
  padding-left: ${ValueRemClima.rem3};
`;

interface PropsItemClimaAtual {
    children: React.ReactNode
}

const ItemClimaAtual = ({ children }: PropsItemClimaAtual) => {
    return (<ItemEstilizadoTempAgora>{children}</ItemEstilizadoTempAgora>)
};

export default ItemClimaAtual;