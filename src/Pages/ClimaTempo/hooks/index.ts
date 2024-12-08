import { useContext, useEffect, useMemo, useState } from "react";
import { GeolocationHookReturn, UseScrollToItemProps } from "../Interface";
import {
  useReactQueryWeatherForecastCity,
  useReactQueryWeatherForecastLatLong,
} from "../api/useApiWeather";
import { backgroudImageWeather, checkHoursAtual } from "../utils";
import { ForecastContext } from "../Contexts/useContext";

export const useWeatherScrollObserver = (
  elementRef: React.RefObject<HTMLDivElement>,
  nameClass: string
) => {
  useEffect(() => {
    const watchScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementRef.current?.classList.add(nameClass);
          }
          if (!entry.isIntersecting) {
            elementRef.current?.classList.remove(nameClass);
          }
        });
      },
      { rootMargin: "-100px" }
    );

    if (elementRef.current) {
      watchScroll.observe(elementRef.current);
    }

    return () => {
      if (watchScroll) {
        watchScroll.disconnect();
      }
    };
  }, [elementRef, nameClass]);
};
export const useGeolocation = (): GeolocationHookReturn => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setLoading(false);
      setCoords(position.coords);
    };

    const error = (error: GeolocationPositionError) => {
      setLoading(false);
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { loading, error, coords };
};
export const useResize = (): number => {
  const [slidesPerView, setSlidesPerView] = useState<number>(9);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 400) {
        return setSlidesPerView(3);
      }
      if (window.innerWidth < 768) {
        return setSlidesPerView(4);
      }
      if (window.innerWidth < 1025) {
        return setSlidesPerView(6);
      }
      if (window.innerWidth > 1025) {
        return setSlidesPerView(9);
      }
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return slidesPerView;
};
export const useScrollToItem = ({
  listaRef,
  indexAtualHora,
  dados,
}: UseScrollToItemProps) => {
  useEffect(() => {
    if (indexAtualHora && listaRef.current && dados) {
      const item = listaRef.current.children[indexAtualHora];
      const itemRect = item.getBoundingClientRect();
      const listaRect = listaRef.current.getBoundingClientRect();
      const posicaoVertical =
        itemRect.top -
        listaRect.top +
        itemRect.height / 2 -
        listaRect.height / 2;

      listaRef.current.scrollTo({
        top: posicaoVertical,
        behavior: "smooth",
      });
    }
  }, [
    dados,
    dados?.forecast.forecastday,
    dados?.location.localtime,
    indexAtualHora,
    listaRef,
  ]);
};
export const useUserLocation = () => {
  const { coords } = useGeolocation();
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);

  useEffect(() => {
    if (coords) {
      setUserLatitude(coords?.latitude);
      setUserLongitude(coords?.longitude);
    }
  }, [coords]);

  return { userLatitude, userLongitude, setUserLatitude, setUserLongitude };
};
export const useWeatherForecast = () => {
  const { userLatitude, userLongitude, setUserLatitude, setUserLongitude } =
    useUserLocation();
  const { data: weatherData, isLoading } = useReactQueryWeatherForecastLatLong(
    userLatitude,
    userLongitude
  );
  const { setData, setImage } = useContext(ForecastContext);

  useEffect(() => {
    if (weatherData?.data.current) {
      setImage(backgroudImageWeather(weatherData?.data.current));
      setData(weatherData.data);
      setUserLatitude(0);
      setUserLongitude(0);
    }
  }, [weatherData, setData, setImage, setUserLatitude, setUserLongitude]);

  return { weatherData, isLoading };
};
export const useWeatherForecastCity = () => {
  const { setData, setIsLoading, setImage } = useContext(ForecastContext);
  const [city, setCity] = useState<string>("");

  const {
    data: weatherData,
    isLoading,
    refetch,
  } = useReactQueryWeatherForecastCity(city);

  useEffect(() => {
    if (weatherData?.data.current) {
      setData(weatherData.data);
      setImage(backgroudImageWeather(weatherData?.data.current));
      setCity("");
    }
  }, [setData, setIsLoading, weatherData, setImage]);

  return {
    setCity,
    refetch,
    isLoading,
  };
};

export const useVerificarHoraAtual = () => {
  const verificarHoraAtualMemoizado = useMemo(() => {
    return (horaLocal: Date, horaPrevisao: Date) => {
      // Lógica para comparar as horas
      return checkHoursAtual(horaLocal, horaPrevisao);
    };
  }, []);

  return verificarHoraAtualMemoizado;
};
