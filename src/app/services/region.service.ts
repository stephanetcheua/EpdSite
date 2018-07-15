import {Injectable, Inject, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable, BehaviorSubject, Subscription} from "rxjs";
import {ConfigurationService} from "./configuration.service";
import 'rxjs/add/operator/mergeMap';
import {Region, Casino, Photos} from "../class/region";
import {DataService} from "./data.service";

@Injectable()
export class RegionService {

  private _regionUrl: string = "http://localhost:4200api/data/regions/{id}.json";


  private regionId: string;
  subscription: Subscription;
  public _region: Region = null;


  constructor(private _http: Http, private _configService: ConfigurationService, private _dataService: DataService) {

  }

  private processRegion(region: Region): Region {
    for (let casino of region.casinos) {
      if (!casino.address)
        continue;
      var marker = {
        "id": casino.id,
        "latitude": casino.address.latitude,
        "longitude": casino.address.longitude,
        "isImportant": false,
        "name": casino.address.title,
        "strasse": casino.address.strasse,
        "plz": casino.address.plz,
        "stadt": casino.address.stadt
      };
      region.map.markers.push(marker);
    }
    return region;
  }

//  var region=this.processRegion(this._region);
  // return  Observable.create((observer)=> {
  //
  //    observer.next(region)
  //  });

//   return this._configService.config$
// .flatMap((config: any) => {
//   var url = this._regionUrl.replace("{id}", config.regionId);
//   // var url = "http://localhost:4200/api/data/regions/wetzlar.json";
//   return this._http.get(url)
// .map((res: Response) => this.processRegion(res.json()));
// });
  getRegion(): Observable<Region> {
    var regionId= this._configService._config.regionId;
    //var regionId= this._configService._config.regionId;
    var region = this.processRegion(this._dataService.GetRegion(regionId));
    return Observable.create((observer) => {
      observer.next(region)
    });

  }

  getCasino(id: string): Observable<Casino> {
    var regionId= this._configService._config.regionId;
    var region = this.processRegion(this._dataService.GetRegion(regionId));
    var casino = region.casinos;
    return Observable.create((observer) => {
      observer.next(casino.find(casino => casino.id == id));

    });
    // return this._configService.config$
    //   .flatMap((config: any) => {
    //     var url = this._regionUrl.replace("{id}", config.regionId);
    //     return this._http.get(url)
    //       .map((res: Response) => {
    //         var casino = res.json().casinos.find(casino => casino.id == id);
    //         return casino;
    //       });
    //   });
  }
  // getBackgroundPhoto():Observable<Photos>{
  //   var regionId= this._configService._config.regionId;
  //   var region = this.processRegion(this._dataService.GetRegion(regionId));
  //   var hintergrundbild = region.hintergrundbilder;
  //   return Observable.create((observer) => {
  //     observer.next(hintergrundbild);
  //
  //   });
  // }


// ToDo: return type ändern
  public errorHandler(error: Response) {
    console.error(error);
    // return Observable.throw(error || "Server Error");
    return null;
  }
}
