export interface ICountryFlag {
  img: string;
  emoji: string;
  emoji_unicode: string;
}

export interface IConnectionInfo {
  asn: number;
  org: string;
  isp: string;
  domain: string;
}

export interface ITimezoneInfo {
  utc: string;
  current_time: string;
}

export interface IUserInfo {
  ip: string;
  type: string;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  postal: number;
  calling_code: number;
  capital: string;
  flag: ICountryFlag;
  connection: IConnectionInfo;
  timezone: ITimezoneInfo;
}
