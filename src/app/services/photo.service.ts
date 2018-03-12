import { Injectable } from '@angular/core';
import {Region} from "../class/region";
import {Http} from "@angular/http";

@Injectable()
export class PhotoService {

  private _regionUrl: string = "http://localhost:4200api/data/regions/{id}.json";


  public _region: Region = null;

  constructor(private _http: Http) { }

}
