import { useContext } from "react"
import { GetTimeZoneContext } from "../Context/GetTimeZoneContext"

const useGetTimeZoneContext = () => {
    return useContext(GetTimeZoneContext);
};

export default useGetTimeZoneContext;