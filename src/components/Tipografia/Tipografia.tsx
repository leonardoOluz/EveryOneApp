
import { componetes } from "../../styles/componente";
import { estilosTipografia } from "../../styles/estilosTipografia";
import componentesEstilizados from "./Tipografia.styles";

type IkeyComponente = keyof typeof componetes;
type IkeyVariante = keyof typeof estilosTipografia;

interface PropsTipografia {
  texto: string;
  componente: IkeyComponente;
  variante: IkeyVariante;
}

export const Tipografia = ({ texto, componente, variante }: PropsTipografia) => {
  const Componente = componentesEstilizados[`${componente}_${variante}`];
  return (<Componente>{texto}</Componente>);
};