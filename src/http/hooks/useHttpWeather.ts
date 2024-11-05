import {
  useQuery,
} from "@tanstack/react-query";
import axios, {  } from "axios";
import { IData } from "../../Interfaces/Weather";

const useHttpWeather = () => {
  const httpWeather = axios.create({
    baseURL: "http://api.weatherapi.com/v1",
    params: {
      key: "718afc8ffdc746a681c213104240710",
    },
  });

  const getWeatherForecast = (latitude: number, longetude: number) => {
    return httpWeather.get("/forecast.json", {
      params: {
        q: `${latitude},${longetude}`,
        lang: "pt",
        days: 10,
      },
    });
  };

  return {
    httpWeather,
    getWeatherForecast,
  };
};

export const useReactQueryWeatherForecast = (
  latitude: number,
  longetude: number
) => {
  const { getWeatherForecast } = useHttpWeather();
  return useQuery<{ data: IData }>({
    queryKey: ["weatherForecast"],
    queryFn: () => getWeatherForecast(latitude, longetude),
    refetchInterval: 60000 * 10,
    refetchIntervalInBackground: true,
    staleTime: 1000,
    enabled: latitude !== 0 && longetude !== 0,
  });
};

export default useHttpWeather;
