import axios from "axios";
import { IListTimeZone, IGetTimezone } from "../Interfaces";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useTimeZoneDB = () => {
  const httpTimeZoneDb = axios.create({
    baseURL: "http://api.timezonedb.com",
  });

  const getTimeZoneDb = async (zone: string) => {
    try {
      return await httpTimeZoneDb.get<IGetTimezone>("/v2.1/get-time-zone",
        {
          params: {
            key: "7772XBAZLGSM",
            format: "json",
            by: "zone",
            zone,
          }
        }
      )
    } catch (error) {
      console.error(error);
    }
  };
  const getListTimeZonesDb = async () => {
    try {
      return await httpTimeZoneDb.get<IListTimeZone>("/v2.1/list-time-zone",
        {
          params: {
            key: "7772XBAZLGSM",
            format: "json",
          }
        }
      )
    } catch (error) {
      console.error(error);
    }
  };

  return {
    httpTimeZoneDb,
    getTimeZoneDb,
    getListTimeZonesDb
  }
};
export const useReactQueryTimeZoneDB = (zone: string): UseQueryResult<{ data: IGetTimezone }> => {
  const { getTimeZoneDb } = useTimeZoneDB();
  return useQuery({
    queryKey: ["timeZone", zone],
    queryFn: () => getTimeZoneDb(zone),
  })
};
export const useReactQueryListTimeZoneDB = (): UseQueryResult<{data: IListTimeZone}> => {
  const { getListTimeZonesDb } = useTimeZoneDB();
  return useQuery({
    queryKey: ["listTimeZone"],
    queryFn: () => getListTimeZonesDb(),
  });
};

export default useTimeZoneDB;

// http://api.timezonedb.com/v2.1/get-time-zone?key=7772XBAZLGSM&format=json&by=zone&zone=America/Chicago

// http://api.timezonedb.com/v2.1/convert-time-zone?key=7772XBAZLGSM&format=json&from=America/Los_Angeles&to=Australia/Sydney&time=1464793200

// http://api.timezonedb.com/v2.1/get-time-zone?key=7772XBAZLGSM&format=json&by=position&lat=40.689247&lng=-74.044502

// http://api.timezonedb.com/v2.1/list-time-zone?key=YOUR_API_KEY&format=json