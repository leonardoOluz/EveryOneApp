import { useEffect, useState } from "react";
import { IListTimeZone, IZones } from "../Interfaces"
import { ListaTimeZoneContext } from "./ListaTimeZoneContext"
import { useReactQueryListTimeZoneDB } from "../api/useApiTimeZoneDB";


interface IListaTimeZoneProps {
  children: React.ReactNode;
}
export const ListaTimeZoneProvider = ({ children }: IListaTimeZoneProps) => {
  const [listTimeZone, setListTimeZone] = useState<IListTimeZone>({} as IListTimeZone);
  const [textInput, setTextInput] = useState<string>("");
  const [zones, setZones] = useState<IZones[]>([]);
  const { data } = useReactQueryListTimeZoneDB();

  useEffect(() => {
    if (data?.data) {
      setListTimeZone(data.data);
    };
  }, [data?.data]);

  const filtrarListTimeZone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textoDigitado = e.target.value;
    setTextInput(textoDigitado);    
    const zones = listTimeZone?.zones.filter((zone) => {
      const regex = new RegExp(textoDigitado, "i");
      if (regex.test(zone.zoneName)) {
        return zone
      }
    });
    
    if (textoDigitado.length === 0) {
      setZones([]);
      return
    };
    setZones(zones || []);
  };
  const limparListTimeZone = () => {
    setZones([]);
  };
  const limparTextInput = () => {
    setTextInput("");
  };
  const pegarTextInput = (valor: string) => {
    setTextInput(valor);
  };

  const valor = {
    listTimeZone,
    filtrarListTimeZone,
    textInput,
    limparListTimeZone,
    limparTextInput,
    zones,
    pegarTextInput
  };
  return (
    <ListaTimeZoneContext.Provider value={valor}>
      {children}
    </ListaTimeZoneContext.Provider>
  )
}