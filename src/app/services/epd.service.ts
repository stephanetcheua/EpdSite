import { Injectable } from '@angular/core';
import {Casino, Photos, Region} from '../class/region';
import {Diagnose, Epd, Medikamente, Patient, Team, Vitalzeichen, Zugriffsprotokoll} from '../class/patient';
import {DataService} from './data.service';
import {ConfigurationService} from './configuration.service';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class EpdService {
  // patientUrl = 'http://localhost:3000/Epd';
  patientUrl = 'http://localhost:3000/patienten';
  vitalparameterUrl = 'http://localhost:3000/vitalparameter';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     // 'Authorization': 'my-auth-token'
    })
  };
  constructor(private _dataService: DataService, private _configService: ConfigurationService,
              private http: HttpClient) {
  }


  getPatienten(): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl)
      .pipe(
        catchError(this.handleError));
  }

  // getPatient(fallNr: string): Observable<Patient> {
  //   const patienten = this.http.get<Patient>(this.patientUrl);
  //   return Observable.create((observer) => {
  //     observer.next(patienten.find(patient => patient.fallnr === fallNr ));
  //
  //   });
  // }
  getPatient(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + '/' + patientId)
      .pipe(
        catchError(this.handleError)
      );
  }
  // Update existing Patient
  updatePatient(patient: Patient) {
    const body = JSON.parse(JSON.stringify(patient));
    return this.http.put(this.patientUrl + '/' + patient.id, body, this.httpOptions )
      .map((res: Response) => res.json());
  }
  getVitalzeichen(patientId: string): Observable<Vitalzeichen> {
    return this.http.get<Vitalzeichen>(this.patientUrl + '/' + patientId + '/vitalparameter')
      .pipe(
        catchError(this.handleError)
      );
  }
  getVitalzeichenbyId(id: string): Observable<Vitalzeichen> {
    return this.http.get<Vitalzeichen>(this.vitalparameterUrl + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateVitalzeichen(zeichnen: Vitalzeichen): Observable<Vitalzeichen> {
    const body = JSON.parse(JSON.stringify(zeichnen));
    return this.http.put<Vitalzeichen>
    (this.vitalparameterUrl + '/' + zeichnen.id, body, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getDiagnose(patientId: string): Observable<Diagnose> {
    return this.http.get<Diagnose>(this.patientUrl + '/' + patientId + '/diagnose')
      .pipe(
        catchError(this.handleError)
      );
  }
  getMedikamente(patientId: string): Observable<Medikamente> {
    return this.http.get<Medikamente>(this.patientUrl + '/' + patientId + '/medikamente')
      .pipe(
        catchError(this.handleError)
      );
  }
  getcareTeam(patientId: string): Observable<Team> {
    return this.http.get<Team>(this.patientUrl + '/' + patientId + '/careTeam')
      .pipe(
        catchError(this.handleError)
      );
  }
  getzugriffsprotokoll(patientId: string): Observable<Zugriffsprotokoll> {
    return this.http.get<Zugriffsprotokoll>(this.patientUrl + '/' + patientId + '/zugriffsprotokoll')
      .pipe(
        catchError(this.handleError)
      );
  }

  // getPatient(): Observable<Patient[]> {
  //
  //   var epd =  this.http.get(this.patientUrl);
  //   var patienten = epd[0].patienten;
  //   return Observable.create((observer) => {
  //     observer.next(patienten);
  //
  //   });
  // }
  //
  // getPatient(fallNr: string): Observable<Patient> {
  //   var epdId = this._configService._config.regionId;
  //   var epd = this._dataService.GetEPD('epd');
  //   var patienten = epd.patienten;
  //   return Observable.create((observer) => {
  //     observer.next(patienten.find(patient => patient.fallnr === fallNr ));
  //
  //   });
  // }
  // getEpd(): Observable<Epd> {
  //   var epdId = this._configService._config.regionId;
  //   var epd = this._dataService.GetEPD('epd');
  //   return Observable.create((observer) => {
  //     observer.next(epd);
  //   });
  //
  // }
  // updateStammdaten_old(patient: Patient) {
  //   const epd = this._dataService.GetEPD('epd');
  //   const patienten = epd.patienten;
  //   const itemIndex = patienten.findIndex(item => item.id === patient.id);
  //   console.log(itemIndex);
  //   patienten[itemIndex] = patient;
  //   // let updateItem = patienten.find(this.findIndexToUpdate, patient.id);
  //   // let index = patienten.indexOf(updateItem);
  //   // patienten[index] = patient;
  // }
  // updateStammdaten(patient: Patient) {
  //   const epd = this._dataService.GetEPD('epd');
  //   const patienten = epd.patienten;
  //   patienten.map((todo, i) => {
  //     if (todo.id === patient.id) {
  //       patienten[i] = patient;
  //       patienten.push(patient);
  //     }
  //   });
  // }
  //
  // getPatientCareTeam(fallNr: string) {
  //   var epdId = this._configService._config.regionId;
  //   var epd = this._dataService.GetEPD('epd');
  //   var patienten = epd.patienten;
  //   var patienten = epd.patienten;
  //   return Observable.create((observer) => {
  //     observer.next(patienten.find(patient => patient.fallnr === fallNr ));
  //
  //   });
  // }
  // getBackgroundPhoto(): Observable<Photos> {
  //   var epdId = this._configService._config.regionId;
  //   var epd = this._dataService.GetEPD(epdId);
  //   var hintergrundbild = epd.hintergrundbilder;
  //   return Observable.create((observer) => {
  //     observer.next(hintergrundbild);
  //
  //   });
  // }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return null;
  }
}
