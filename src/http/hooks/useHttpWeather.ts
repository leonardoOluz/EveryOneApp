import axios from "axios";

const useHttpWeather = () => {
  const httpWeather = () => {
    return axios.create({
      baseURL: "http://api.weatherapi.com/v1",
      params: {
        key: "718afc8ffdc746a681c213104240710",
      },
    });
  };

  const getWeatherForecast = (latitude: number, longetude: number) => {
    return httpWeather().get("/forecast.json", {
      params: {
        q: `${latitude},${longetude}`,
        lang: "pt",
      },
    });
  };

  return {
    httpWeather,
    getWeatherForecast,
  };
};

export default useHttpWeather;
