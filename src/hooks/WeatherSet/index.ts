import { useEffect, useState } from "react";

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

interface GeolocationHookReturn {
  loading: boolean;
  error: string | null;
  coords: GeolocationCoordinates | null;
}

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
  const [slidesPerView, setSlidesPerView] = useState<number>(9)
  
  useEffect(() => {
      const resize = () => {
        if (window.innerWidth < 400) {
          return setSlidesPerView(3)
        }
        if (window.innerWidth < 768) {
          return setSlidesPerView(4)
        }
        if (window.innerWidth < 1025) {
          return setSlidesPerView(6)
        }
        if (window.innerWidth > 1025) {
          return setSlidesPerView(9)
        }
      };
  
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return slidesPerView;

};
