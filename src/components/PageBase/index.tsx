import FooterMain from "../FooterMain";
import HeaderMain from "../HeaderMain";

interface PageBaseProps {
  children?: React.ReactNode;
}

const PageBase = ({ children }: PageBaseProps) => {
  return (
    <>
      <HeaderMain />
      {children}
      <FooterMain />
    </>
  )
}

export default PageBase;