import { Link } from "react-router-dom";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import MainHome from "./Main/Main";
import SessaoHome from "./SessaoHome/SessaoHome";

const Home = () => {
  return (<MainHome>
    <SessaoHome>
      <Link to="hours-world" className="linksDotLottieReact">
        <DotLottieReact
          className="lottieReact"
          src="/json/clock-animation.json"
          loop
          autoplay
        />
        <Tipografia componente="h2" variante="h3" texto="Horas Mundial" />
      </Link>
      <Link to="clima-tempo" className="linksDotLottieReact">
        <DotLottieReact
          src="/json/weather-animation.json"
          className="lottieReact"
          loop
          autoplay
        />
        <Tipografia componente="h2" variante="h3" texto="Clima Tempo" />
      </Link>
      <Link to="https://github.com/leonardoOluz" className="linksDotLottieReact">
        <DotLottieReact
          src="/json/git-animation.json"
          className="lottieReact"
          loop
          autoplay
        />
        <Tipografia componente="h2" variante="h3" texto="Clima Tempo" />
      </Link>
      <Link to="https://github.com/leonardoOluz" className="linksDotLottieReact">
        <DotLottieReact
          src="/json/git-animation.json"
          className="lottieReact"
          loop
          autoplay
        />
        <Tipografia componente="h2" variante="h3" texto="Clima Tempo" />
      </Link>
      <Link to="https://github.com/leonardoOluz" className="linksDotLottieReact">
        <DotLottieReact
          src="/json/git-animation.json"
          className="lottieReact"
          loop
          autoplay
        />
        <Tipografia componente="h2" variante="h3" texto="Clima Tempo" />
      </Link>
      <Link to="https://github.com/leonardoOluz" className="linksDotLottieReact">
        <DotLottieReact
          src="/json/git-animation.json"
          className="lottieReact"
          loop
          autoplay
        />
        <Tipografia componente="h2" variante="h3" texto="Clima Tempo" />
      </Link>
    </SessaoHome>
  </MainHome>)
};

export default Home;