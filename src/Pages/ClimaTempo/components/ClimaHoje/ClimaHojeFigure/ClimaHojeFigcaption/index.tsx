import { ClimaHojeFigcaptionStyled } from "./Styled"

interface PropsClimaHojeFigcaption {
  children: React.ReactNode;
  nomeClasse?: string
}

const ClimaHojeFigcaption = ({ children, nomeClasse }: PropsClimaHojeFigcaption) => {
  return (<ClimaHojeFigcaptionStyled className={nomeClasse}>{children}</ClimaHojeFigcaptionStyled>)
}

export default ClimaHojeFigcaption