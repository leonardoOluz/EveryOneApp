import { useEffect, useState } from "react";
import { GeolocationHookReturn } from "../../Interfaces/Weather";
import { useReactQueryWeatherForecast } from "../../http/hooks/useHttpWeather";
import { backgroudImageWeather } from "../../utils/weather";

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

export const useWeatherDadosApi = () => {
  const { coords, loading } = useGeolocation();
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [image, setImage] = useState<string>();
  const { isLoading, data: data } = useReactQueryWeatherForecast(
    latitude,
    longitude
  );

  useEffect(() => {
    if (!loading && coords) {
      setLatitude(coords?.latitude);
      setLongitude(coords?.longitude);
    }
    if (data?.data.current) {
      setImage(backgroudImageWeather(data?.data.current));
    }
  }, [longitude, latitude, loading, coords, data?.data]);

  return {
    isLoading,
    image,
    data,
  };
};