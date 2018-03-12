
export class Address {
  title: string;
  strasse: string;
  plz: string;
  stadt: string;
  telefon: string;
}

export class Photos {
  url: string;
  urlMobile:string;
}

export class Medikamente{
  title:string;
  beschreibung:string;
  url:string;
}

export class Team{
  title:string;
  beschreibung:string;
  name:string;
  role:string;
  url:string;
}

export class Patient {
  id:string;
  fallnr: string;
  url:string;
  name: string;
  title: string;
  gebDatum: string;
  beschreibung: string;
  address: Address;
  medikament: Medikamente[];
  careTeam: Team[];
  erkrankungen: Erkrankungen[];
  zugriffsprotokoll:Zugriffsprotokoll[];
}

export class Erkrankungen{
  title:string;
  beschreibung:string;

}
export class Zugriffsprotokoll{
  zeitpunkt:string;
  zugriffvon:string;
  betrachtenteDaten:Daten[];
  geaendereDaten:Daten[];
  neueDaten:Daten[];
}
export class Daten{
  title:string;
  beschreibung:string;
}
export class Epd {
  id: string;
  title:string;
  beschreibung: string;
  patienten:Patient[];
  logoUrl:string;
  hintergrundbilder:Photos[];
}
