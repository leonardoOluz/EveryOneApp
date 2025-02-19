import { Outlet } from "react-router-dom";
import FooterMain from "../FooterMain";
import HeaderMain from "../HeaderMain";
const PageBase = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <FooterMain />
    </>
  );
};

export default PageBase;
