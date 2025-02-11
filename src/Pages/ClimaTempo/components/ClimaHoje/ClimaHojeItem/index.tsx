import { ClimaHojeItemStyled } from "./Styled";

interface PropsClimaHojeItem {
  children: React.ReactNode
}
const ClimaHojeItem = ({ children }: PropsClimaHojeItem) => {
  return (<ClimaHojeItemStyled>{children}</ClimaHojeItemStyled>)
};

export default ClimaHojeItem;