import MainHome from "./Main/Main";
import SessaoHome from "./SessaoHome/SessaoHome";
import DotLottieComponente from "./DotLottieComponente/DotLottieComponente";

const Home = () => {
  return (
    <MainHome>
      <SessaoHome>
        <DotLottieComponente
          animantion="./json/weather-animation.json"
          toPath="clima-tempo"
          texto="Clima Tempo"
        />
        <DotLottieComponente
          animantion="./json/clock-animation.json"
          toPath="hours-world"
          texto="Horas Mundial"
        />
        <DotLottieComponente
          animantion="./json/git-animation.json"
          toPath="https://github.com/leonardoOluz"
          texto="Github"
        />
        <DotLottieComponente
          animantion="./json/linkedin-animation.json"
          toPath="https://www.linkedin.com/in/leonardo-luz-ads/"
          texto="Linkedin"
        />
      </SessaoHome>
    </MainHome>
  );
};

export default Home;
