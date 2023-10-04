export interface AddressContactResp {
  results: AddressContact[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface AddressContact {
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
  dob: Dob;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  postcode: number;
}

export interface Street {
  number: number;
  name: string;
}
