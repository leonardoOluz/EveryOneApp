import { Outlet } from "react-router-dom";
import FooterMain from "../FooterMain";
import HeaderMain from "../HeaderMain";
import { useEffect, useState } from "react";
import DotLottieOpenApp from "./DotLottieOpenApp/DotLottieOpenApp";
import useWindowSize from "../../hooks/useWindowSize";
import { widthMobile } from "../../styles/IU";
import EveryOneApp from "../EveryOneApp";

const PageBase = () => {
  const [openApp, setOpenApp] = useState<boolean>(true);
  const width = useWindowSize();

  useEffect(() => {
    const seTimeout = setTimeout(() => {
      setOpenApp(false);
    }, 4600);
    return () => clearTimeout(seTimeout);
  }, []);

  if (openApp) {
    return (
      <>
        {width < widthMobile.nb ? (
          <DotLottieOpenApp animantion="./json/open-app-animation.json" />
        ) : (
          <EveryOneApp />
        )}
      </>
    );
  }

  return (
    <>
      <HeaderMain />
      <Outlet />
      <FooterMain />
    </>
  );
};

export default PageBase;
