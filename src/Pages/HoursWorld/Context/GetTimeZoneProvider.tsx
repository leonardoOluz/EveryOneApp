import { useCallback, useEffect, useState } from "react";
import { GetTimeZoneContext } from "./GetTimeZoneContext";
import { IGetTimezone, IRelogio } from "../Interfaces";
import { useReactQueryTimeZoneDB } from "../api/useApiTimeZoneDB";
import clock from "./relogio";

interface IGetTimeZoneProps {
  children: React.ReactNode;
}
export const GetTimeZoneProvider = ({ children }: IGetTimeZoneProps) => {
  const [getTimeZone, setGetTimeZone] = useState<IGetTimezone>({} as IGetTimezone);
  const [relogio, setRelogio] = useState<IRelogio>(clock)
  const [texto, setTexto] = useState<string>("America/Sao_Paulo");
  const { data, isLoading} = useReactQueryTimeZoneDB(texto);

  const setPonteiros = useCallback((formatted: Date) => {
    const data = new Date(formatted);
    const angulo_hora = (360 / 12 * data.getHours()) + (360 / 12 * (data.getMinutes() / 60))
    const CALC_MS = 360 / 60;
    setRelogio(() => {
      return {
        hora: angulo_hora,
        minuto: CALC_MS * data.getMinutes(),
        segundo: CALC_MS * data.getSeconds(),
      }
    })
  }, [setRelogio]);

  useEffect(() => {
    if (data?.data.formatted && !isLoading) {
      setGetTimeZone(() => {
        return {
          ...data.data
        }
      });
      setPonteiros(data.data.formatted);
    };
  }, [data?.data, setPonteiros, isLoading]);

  const pegarTexto = (valor: string) => {
    setTexto(valor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const progressao_hora = 360 / (12 * 60 * 60);
      setRelogio(relogioAnterior => {
        return {
          ...relogioAnterior,
          segundo: relogioAnterior.segundo + 6,
          minuto: relogioAnterior.minuto + 0.1,
          hora: relogioAnterior.hora + progressao_hora
        }
      });
    }, 600);
    return () => clearInterval(interval);
  }, [relogio.segundo, relogio.minuto, relogio.hora]);

  const value = {
    getTimeZone,
    relogio,
    pegarTexto,
    isLoading,
    setPonteiros
  };

  return <GetTimeZoneContext.Provider value={value}>
    {children}
  </GetTimeZoneContext.Provider>;
};