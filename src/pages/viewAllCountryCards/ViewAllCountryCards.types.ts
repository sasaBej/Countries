export interface NameType {
  common: string;
  official: string;
}

export interface FlagsType {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryCardItemType {
  name: NameType;
  flags: FlagsType;
  capital: string[];
  region: string;
  population: number;
}
