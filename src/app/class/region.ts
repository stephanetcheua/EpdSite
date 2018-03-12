export class Casino {
  id: string;
  url: string;
  title: string;
  logoUrl: string;
  description: string;
  address: Address;
  oeffnungszeiten: Oeffnungszeiten[];
  zutrittskontrollen: Zutrittskontrollen[];
  photos: Photos[];
  hintergrundbilder:Photos[];

}
export class Oeffnungszeiten {

}
export class Zutrittskontrollen {

}
export class Address {
  title: string;
  latitude: number;
  longitude: number;
  strasse: string;
  plz: string;
  stadt: string;
  telefon: string;
}

export class Marker {
  id: string;
  latitude: number;
  longitude: number;
  isImportant: boolean;

}

export class Map {
  zoom: number;
  latitude: number;
  longitude: number;
  markers: Marker[]
}

export class Photos {
  url: string;
  urlMobile:string;
}
export class Region {
  id: string;
  title:string;
  beschreibung: string;
  hintergrundbilder:Photos[];
  casinos: Casino[];
  map: Map;
  logoUrl: string;
  photos: Photos[];
}
