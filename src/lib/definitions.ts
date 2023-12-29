export interface Countries {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Latlng[] };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

export interface CapitalInfo {
  latlng: Latlng[];
}

export interface Latlng {}

export interface Car {
  signs: Latlng[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}
export interface Currency {
  name?: string;
  symbol?: string;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Demonyms {
  eng: Latlng[];
  fra: Latlng[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Idd {
  root: string;
  suffixes: Latlng[];
}

export interface Languages {
  [key: string]: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: Latlng[];
}
