import axios from "axios";
import "dotenv/config";

const useHttpWeather = () => {
  const url_api = process.env.WEATHER_API_URL;
  const key_api = process.env.WEATHER_API_KEY;
  const httpWeather = () => {
    return axios.create({
      baseURL: url_api,
      params: {
        key: key_api,
      },
    });
  };
  return {
    httpWeather,
  };
};

export default useHttpWeather;
