import { useContext } from "react"
import { ListaTimeZoneContext } from "../Context/ListaTimeZoneContext"

const useListTimeZoneContext = () => {
  return useContext(ListaTimeZoneContext)
};

export default useListTimeZoneContext;