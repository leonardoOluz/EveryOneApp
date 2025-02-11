import styled from "styled-components";
import { componetes } from "../../styles/componente";
import { estilosTipografia } from "../../styles/estilosTipografia";

type IkeyComponente = keyof typeof componetes;
type IkeyVariante = keyof typeof estilosTipografia;

const componentesEstilizados: { [key: string]: ReturnType<typeof styled> } = {};

Object.keys(componetes).forEach((componente: string) => {
  Object.keys(estilosTipografia).forEach((variante: string) => {
    const componenteKey: IkeyComponente = componente as IkeyComponente;
    const tag: string = componetes[componenteKey];
    const estilo: string = estilosTipografia[variante as IkeyVariante];
    componentesEstilizados[`${componente}_${variante}`] = styled(tag)`
      ${estilo}
    `;
  });
});

export default componentesEstilizados;
