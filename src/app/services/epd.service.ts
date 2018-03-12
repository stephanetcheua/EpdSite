import { Injectable } from '@angular/core';
import {Casino, Photos, Region} from "../class/region";
import {Observable} from "rxjs/Rx";
import {Epd, Patient} from "../class/patient";
import {DataService} from "./data.service";
import {ConfigurationService} from "./configuration.service";

@Injectable()
export class EpdService {
  constructor(private _dataService: DataService,private _configService: ConfigurationService) {
  }


  getEpd(): Observable<Epd> {
    var epdId= this._configService._config.regionId;
    var epd = this._dataService.GetEPD("epd");
    return Observable.create((observer) => {
      observer.next(epd)
    });

  }

  getPatient(fallNr: string): Observable<Patient> {
    var epdId= this._configService._config.regionId;
    var epd = this._dataService.GetEPD("epd");
    var patienten = epd.patienten;
    return Observable.create((observer) => {
      observer.next(patienten.find(patient => patient.fallnr == fallNr ));

    });
  }
  getPatientCareTeam(fallNr:string){
    var epdId= this._configService._config.regionId;
    var epd = this._dataService.GetEPD("epd");
    var patienten = epd.patienten;
    var patienten = epd.patienten;
    return Observable.create((observer) => {
      observer.next(patienten.find(patient => patient.fallnr == fallNr ));

    });
  }
  getBackgroundPhoto():Observable<Photos>{
    var epdId= this._configService._config.regionId;
    var epd = this._dataService.GetEPD(epdId);
    var hintergrundbild = epd.hintergrundbilder;
    return Observable.create((observer) => {
      observer.next(hintergrundbild);

    });
  }
}