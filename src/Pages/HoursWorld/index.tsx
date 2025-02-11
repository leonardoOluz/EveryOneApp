import { GetTimeZoneProvider } from "./Context/GetTimeZoneProvider";
import { ListaTimeZoneProvider } from "./Context/ListaTimeZoneProvider";
import HorasMundial from "./Pages/HorasMundial";

const WordHours = () => {
  return (<ListaTimeZoneProvider>
    <GetTimeZoneProvider>
      <HorasMundial/>
    </GetTimeZoneProvider>
  </ListaTimeZoneProvider>)
};

export default WordHours;