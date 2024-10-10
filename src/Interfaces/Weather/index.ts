export interface IData {
  current: ICurrent;
  forecast: IForecast;
  location: ILocation;
}
export interface ILocation {
  name?: string;
  region?: string;
  country?: string;
  lat?: number;
  lon?: number;
  tz_id?: string;
  localtime_epoch?: number;
  localtime?: Date;
}
export interface ICurrent {
  temp_c: number;
  is_day: number;
  condition: ICondition;
  wind_kph: number;
  wind_mph: number;
  wind_degree: number;
  wind_dir: string;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  vis_km: number;
  uv: number;
}
export interface ICondition {
  text: string;
  icon: string;
  code: number;
}
export interface IForecast {
  forecastday: IForecastday[];
}
export interface IDay {
  maxtemp_c?: number;
  mintemp_c?: number;
  avgtemp_c?: number;
  maxwind_kph?: number;
  totalprecip_mm?: number;
  avghumidity?: number;
  daily_will_it_rain?: number;
  daily_chance_of_rain?: number;
  condition: ICondition;
  uv?: number;
}
export interface IHours {
  time_epoch?: number;
  time?: Date;
  temp_c?: number;
  is_day?: number;
  condition?: ICondition;
  wind_kph?: number;
  precip_mm?: number;
  humidity?: number;
  cloud?: number;
  feelslike_c?: number;
  windchill_c?: number;
  heatindex_c?: number;
  will_it_rain?: number;
  chance_of_rain?: number;
  gust_kph?: number;
  uv?: number;
  short_rad?: number;
  diff_rad?: number;
}
export interface IForecastday {
  astro: IAstro;
  date: Date;
  day: IDay;
  hour: IHours[]
}
export interface IAstro {
  sunset?: string;
  sunrise?: string;
  moon_phase?: string;
  is_moon_up?: number;
  is_sun_up?: number;
}
