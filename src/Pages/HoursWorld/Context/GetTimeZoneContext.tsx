import { createContext } from "react";
import { IGetTimezone, IRelogio } from "../Interfaces";
import clock from "./relogio";

export const GetTimeZoneContext = createContext<{
  getTimeZone: IGetTimezone;
  relogio: IRelogio;
  pegarTexto: (valor: string) => void
  isLoading: boolean;
  setPonteiros: (formatted: Date) => void
}>({
  getTimeZone: {} as IGetTimezone,
  relogio: clock,
  pegarTexto: () => { },
  isLoading: true,
  setPonteiros: () => {}
})