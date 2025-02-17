import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styled from "styled-components";

const  DivAppOpenApp = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: #04040B;
  .openApp{
    width: 100%;
    height: 100%;
    
  }
`

interface IDotLottieComponente {
  animantion: string;
}
const DotLottieOpenApp = ({ animantion }: IDotLottieComponente) => {
  return (
    <DivAppOpenApp>
      <DotLottieReact className="openApp" src={animantion} loop={false} autoplay={true} />
    </DivAppOpenApp>
  );
};

export default DotLottieOpenApp;
