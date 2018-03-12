import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Config, } from "../class/configuration";
import {DataService} from "./data.service";



@Injectable()
export class ConfigurationService {
  private _url: string = "http://localhost:4200/api/data/config/config.json";
  public _config: Config = null;



  public config$: Observable<Config>;

  constructor(private _http: Http,private _dataService:DataService) {
   // this.config$ = this._http.get("http://localhost:4200/api/data/config/config.json")
   //   .map((response: Response) => response.json());

    this._config = _dataService.GetConfig(window.location.origin);

  }
}

