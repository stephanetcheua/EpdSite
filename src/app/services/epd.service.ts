import { Injectable } from '@angular/core';
import {Casino, Photos, Region} from '../class/region';
import {Observable} from 'rxjs/Rx';
import {Epd, Patient} from '../class/patient';
import {DataService} from './data.service';
import {ConfigurationService} from './configuration.service';
import {RequestOptions} from '@angular/http';

@Injectable()
export class EpdService {
  constructor(private _dataService: DataService, private _configService: ConfigurationService) {
  }


  getEpd(): Observable<Epd> {
    var epdId = this._configService._config.regionId;
    var epd = this._dataService.GetEPD('epd');
    return Observable.create((observer) => {
      observer.next(epd);
    });

  }
  updateStammdaten_old(patient: Patient) {
    const epd = this._dataService.GetEPD('epd');
    const patienten = epd.patienten;
    const itemIndex = patienten.findIndex(item => item.id === patient.id);
    console.log(itemIndex);
    patienten[itemIndex] = patient;
    // let updateItem = patienten.find(this.findIndexToUpdate, patient.id);
    // let index = patienten.indexOf(updateItem);
    // patienten[index] = patient;
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
  updateStammdaten(patient: Patient) {
    const epd = this._dataService.GetEPD('epd');
    const patienten = epd.patienten;
    patienten.map((todo, i) => {
      if (todo.id === patient.id) {
        patienten[i] = patient;
        patienten.push(patient);
      }
    });
  }
  getPatient(fallNr: string): Observable<Patient> {
    var epdId = this._configService._config.regionId;
    var epd = this._dataService.GetEPD('epd');
    var patienten = epd.patienten;
    return Observable.create((observer) => {
      observer.next(patienten.find(patient => patient.fallnr === fallNr ));

    });
  }
  getPatientCareTeam(fallNr: string) {
    var epdId = this._configService._config.regionId;
    var epd = this._dataService.GetEPD('epd');
    var patienten = epd.patienten;
    var patienten = epd.patienten;
    return Observable.create((observer) => {
      observer.next(patienten.find(patient => patient.fallnr === fallNr ));

    });
  }
  getBackgroundPhoto(): Observable<Photos> {
    var epdId = this._configService._config.regionId;
    var epd = this._dataService.GetEPD(epdId);
    var hintergrundbild = epd.hintergrundbilder;
    return Observable.create((observer) => {
      observer.next(hintergrundbild);

    });
  }
}
