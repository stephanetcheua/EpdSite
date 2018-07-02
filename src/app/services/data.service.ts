import {Injectable} from '@angular/core';
import {Config} from '../class/configuration';
import {CONFIG} from '../config';
import {REGIONS} from '../../api/data/regions/region';
import {Region} from '../class/region';
import * as Collections from 'typescript-collections';
import {Epd} from '../class/patient';
import {EPD} from '../../api/data/patient/patient';
@Injectable()
export class DataService {

  host2region: { [index: string]: any; } = {
    'www.spielhallen-giessen.de': 'giessen',
    'http://localhost:4200': 'epd',
    'http://localhost:63342/Soma/dist/': 'epd',
  };

  constructor() {
  }

  GetConfig(url: string): Config {
    // return CONFIG;
    const key = this.getRegionId(url);
    return {
      regionId: key
    };
  }


  GetEPD(epdId): Epd {
    const epd = EPD.find(x => x.id === epdId);
    return epd;
  }

    GetRegion(regionId: string): Region {
    const region = REGIONS.find(x => x.id === regionId);
    return region;
  }

  public getRegionId(host): string {
    for (const key in this.host2region ) {
      if (key === host) {
        var value = this.host2region [key];
      }
    }
    return value;
  }
}
