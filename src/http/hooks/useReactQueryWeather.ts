import { useQuery } from "@tanstack/react-query";
import useHttpWeather from "./useHttpWeather";
import { IData } from "../../Interfaces/Weather";

const useReactQueryWeather = () => {
  const { getWeatherForecast } = useHttpWeather();

  const useQueryWeather = (latitude: number, longetude: number) => {
    return useQuery<{ data: IData }>({
      queryKey: ["weatherForecast"],
      queryFn: () => getWeatherForecast(latitude, longetude),
      enabled: latitude !== 0 && longetude !== 0,
    });
  };

  return {
    useQueryWeather,
  };
};

export default useReactQueryWeather;
