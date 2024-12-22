import styled from "styled-components";

export const ListaEstilizadaTempAgora = styled.ul`
  display: flex;
  flex-direction: column;
`;

interface PropsListaClimaAtual {
    children: React.ReactNode;
}

const ListaClimaAtual = ({ children }: PropsListaClimaAtual) => {
    return (<ListaEstilizadaTempAgora>{children}</ListaEstilizadaTempAgora>)
};

export default ListaClimaAtual;