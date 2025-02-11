export interface IGetTimezone {
  abbreviation: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  dst: string;
  formatted: Date;
  gmtOffset: number;
  message: string;
  nextAbbreviation: string;
  regionName: string;
  status: string;
  timestamp: number;
  zoneEnd: number;
  zoneName: string;
  zoneStart: number;
}
export interface IZones {
  countryCode: string;
  countryName: string;
  gmtOffset: number;
  timestamp: number;
  zoneName: string;
}
export interface IListTimeZone {
  message: string;
  status: string;
  zones: IZones[];
}
export interface IRelogio {
  hora: number;
  minuto: number;
  segundo: number;
}
