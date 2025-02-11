import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { IData } from "../Interface";

const useApiWeather = () => {
  const httpWeather = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    params: {
      key: "718afc8ffdc746a681c213104240710",
    },
  });

  const getWeatherForecastLatLong = async (latitude: number, longetude: number) => {
    return await httpWeather.get("/forecast.json", {
      params: {
        q: `${latitude},${longetude}`,
        lang: "pt",
        days: 10,
      },
    });
  };

  const getWeatherForecastCity = async (city: string) => {
    return await httpWeather.get("/forecast.json", {
      params: {
        q: city,
        lang: "pt",
        days: 10,
      },
    });
  };

  return {
    httpWeather,
    getWeatherForecastLatLong,
    getWeatherForecastCity,
  };
};
export const useReactQueryWeatherForecastLatLong = (
  latitude: number,
  longetude: number
) => {
  const { getWeatherForecastLatLong } = useApiWeather();

  const query = useQuery<{ data: IData }>({
    queryKey: ["weatherForecast"],
    queryFn: () => getWeatherForecastLatLong(latitude, longetude),
    refetchInterval: 60000 * 10,
    enabled: latitude !== 0 && longetude !== 0,
  });

  if (latitude === 0 && longetude === 0) {
    return { data: null, isLoading: false, refetch: () => {} };
  }

  return query;
};

interface EmptyQueryResult {
  data: null;
  isLoading: false;
  refetch: () => void;
  isError: boolean;
}

export const useReactQueryWeatherForecastCity = (
  city: string
): UseQueryResult<{ data: IData }, unknown> | EmptyQueryResult => {
  const { getWeatherForecastCity } = useApiWeather();

  const query = useQuery<{ data: IData }, unknown>({
    queryKey: ["weatherForecastCity", city],
    queryFn: () => getWeatherForecastCity(city),
    enabled: !!city,
  });

  if (!city) {
    return { data: null, isLoading: false, refetch: () => {}, isError: false };
  }

  return query;
};

export default useApiWeather;
