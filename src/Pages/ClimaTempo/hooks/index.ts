import { useContext, useEffect, useMemo, useState } from "react";
import {
  GeolocationHookReturn,
  IHours,
  UseScrollToItemProps,
} from "../Interface";
import {
  useReactQueryWeatherForecastCity,
  useReactQueryWeatherForecastLatLong,
} from "../api/useApiWeather";
import { backgroudImageWeather, checkHoursAtual, debounce } from "../utils";
import { ForecastContext } from "../Contexts/useContext";
import { breakpoints } from "../Styles/EnumsClima";

export const useNewResize = (): number => {
  const [slidesPerView, setSlidesPerView] = useState<number>(24);

  useEffect(() => { 
    const handleResize = () => {
      const breakpoint = breakpoints.find(
        (bp) => bp.width >= window.innerWidth
      );
      if (breakpoint) {
        setSlidesPerView(breakpoint.slidesPerView);
      }
    };
    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  return slidesPerView;
};
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
  const { coords, error } = useGeolocation();
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);

  useEffect(() => {
    if (error) {
      // se ocorrer um erro de geolocalizacao, defina as coordenadas padrao
      setUserLatitude(-23.4600871);
      setUserLongitude(-46.6964897);
    }

    if (coords) {
      setUserLatitude(coords?.latitude);
      setUserLongitude(coords?.longitude);
    }
  }, [coords, error]);

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
    isError,
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
    isError,
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
export const useLimiteHoursTemp = (
  hours: IHours[],
  dataAtual: Date
): IHours[] => {
  const [horas, setHoras] = useState<IHours[]>([]);
  const quantiNumberTemp = useNewResize();
  const indexAtual = hours.findIndex((hours) =>
    checkHoursAtual(hours.time!, dataAtual)
  );

  useEffect(() => {
    if (quantiNumberTemp === 24) {
      setHoras(hours);
    } else if (indexAtual - quantiNumberTemp / 2 < 0) {
      setHoras(
        hours.slice(indexAtual - indexAtual, indexAtual + quantiNumberTemp / 2)
      );
    } else if (indexAtual + quantiNumberTemp / 2 > hours.length) {
      setHoras(
        hours.slice(
          indexAtual - quantiNumberTemp / 2,
          indexAtual + quantiNumberTemp / 2
        )
      );
    } else {
      setHoras(
        hours.slice(
          indexAtual - quantiNumberTemp / 2,
          indexAtual + quantiNumberTemp / 2
        )
      );
    }
  }, [hours, indexAtual, quantiNumberTemp]);

  return horas;
};
