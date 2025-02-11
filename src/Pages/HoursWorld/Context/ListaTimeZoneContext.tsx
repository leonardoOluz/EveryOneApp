import { createContext } from "react";
import { IListTimeZone, IZones } from "../Interfaces";

export const ListaTimeZoneContext = createContext<{
    listTimeZone: IListTimeZone;
    filtrarListTimeZone: (e: React.ChangeEvent<HTMLInputElement>) => void;
    textInput: string;
    limparListTimeZone: () => void;
    limparTextInput: () => void;
    zones: IZones[];
    pegarTextInput: (valor: string) => void
}>({
    listTimeZone: {} as IListTimeZone,
    filtrarListTimeZone: () => { },
    textInput: "",
    limparListTimeZone: () => { },
    limparTextInput: () => { },
    zones: [],
    pegarTextInput: () => { }
})