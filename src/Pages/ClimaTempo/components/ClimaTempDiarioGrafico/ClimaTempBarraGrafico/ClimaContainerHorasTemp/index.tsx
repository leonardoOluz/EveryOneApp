import { Tipografia } from "../../../../../../components/Tipografia/Tipografia";
import { ContainerHorasTempStyled } from "./Styled";

interface PropsClimaContainerHorasTemp {
  hora: string;
  temperatura: number;
}

const ClimaContainerHorasTemp = ({ hora, temperatura }: PropsClimaContainerHorasTemp) => {
  return (
    <ContainerHorasTempStyled>
      <Tipografia componente="h3" variante="body" texto={`${hora}h`} />
      <Tipografia componente="body" variante="body2" texto={String(temperatura)} />
    </ContainerHorasTempStyled>
  )
};

export default ClimaContainerHorasTemp;