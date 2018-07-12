import { Injectable } from '@angular/core';
import {Casino, Photos, Region} from '../class/region';
import {Epd, Patient} from '../class/patient';
import {DataService} from './data.service';
import {ConfigurationService} from './configuration.service';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class EpdService {
  //patientUrl = 'http://localhost:3000/Epd';
  patientUrl = 'http://localhost:3000/patienten';
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
  getPatient(articleId: string): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + '/' + articleId)
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
