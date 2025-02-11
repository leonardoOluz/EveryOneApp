import { ClimaHojeContainerStyled } from "./Styled";

interface PropsClimaHojeContainer {
  children: React.ReactNode;
}

const ClimaHojeContainer = ({ children }: PropsClimaHojeContainer) => {
  return (<ClimaHojeContainerStyled>{children}</ClimaHojeContainerStyled>)
};

export default ClimaHojeContainer;