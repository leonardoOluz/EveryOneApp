import { Link } from "react-router-dom";
import { Tipografia } from "../../../components/Tipografia/Tipografia";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

interface IDotLottieComponente {
  animantion: string;
  toPath: string;
  texto: string;
}

const DotLottieComponente = ({ animantion, toPath, texto }: IDotLottieComponente) => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  return (
    <Link to={toPath} className="linksDotLottieReact">
      <DotLottieReact
        className="lottieReact"
        src={animantion}
        loop={false}
        autoplay={false}
        dotLottieRefCallback={setDotLottie}
        onMouseEnter={() => dotLottie?.play()}
        onMouseLeave={() => dotLottie?.pause()}
      />
      <Tipografia componente="body" variante="h3" texto={texto} />
    </Link>
  );
};

export default DotLottieComponente;
