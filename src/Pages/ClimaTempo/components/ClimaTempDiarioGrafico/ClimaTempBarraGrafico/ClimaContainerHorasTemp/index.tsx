import { ContainerHorasTempStyled } from "./Styled";

interface PropsClimaContainerHorasTemp {
  hora: string;
  temperatura: number;
}

const ClimaContainerHorasTemp = ({hora, temperatura}: PropsClimaContainerHorasTemp) => {
  return (
    <ContainerHorasTempStyled>
      <h3>{hora}h</h3>
      <span>{temperatura}</span>
    </ContainerHorasTempStyled>
  )
};

export default ClimaContainerHorasTemp;