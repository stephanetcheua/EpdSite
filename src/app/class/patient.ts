
export class Address {
  title: string;
  strasse: string;
  plz: string;
  stadt: string;
  telefon: string;
}

export class Photos {
  url: string;
  urlMobile: string;
}

export class Medikamente {
  title: string;
  menge: string;
  form: string;
  start: string;
  ende: string;
  erstellungsdatum: string;
  modifierungsdatum: string;
  erstellerkuerzel: string;
}

export class Team {
  title: string;
  beschreibung: string;
  name: string;
  role: string;
}

export class Patient {
  id: string;
  fallnr: string;
  url: string;
  name: string;
  title: string;
  gebDatum: string;
  geschlecht: string;
  aufnahmeDatum: string;
  entlassungDatum: string;
  krankenkasse: string;
  beschreibung: string;
  vitalparameter: Vitalzeichen[];
  medikamente: Medikamente[];
  careTeam: Team[];
  erkrankungen: Erkrankungen;
  zugriffsprotokoll: Zugriffsprotokoll[];
}

export class Erkrankungen {
  title: string;
  hauptdiagnose: string;
  nebendiagnose: string;
  besonderheiten: string;

}
export class Zugriffsprotokoll {
  zeitpunkt: string;
  zugriffvon: string;
  geaenderteDaten: Daten[];
}

export class Vitalzeichen {
  datum: string;
  systolisch: string;
  diastolisch: string;
  puls: string;
  temperatur: string;
  zucker: string;
}
export class Daten {
  title: string;
  beschreibung: string;
}
export class Epd {
  id: string;
  title: string;
  beschreibung: string;
  patienten: Patient[];
  logoUrl: string;
  hintergrundbilder: Photos[];
}
