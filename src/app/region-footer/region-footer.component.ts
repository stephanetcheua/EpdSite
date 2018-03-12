import {Component, OnInit, Input} from '@angular/core';
import {RegionService} from "../services/region.service";
import {Region, Casino} from "../class/region";
import {Epd, Patient} from "../class/patient";
import {EpdService} from "../services/epd.service";

@Component({
  selector: 'app-region-footer',
  templateUrl: './region-footer.component.html',
  styleUrls: ['./region-footer.component.css'],

})
export class RegionFooterComponent implements OnInit {
  @Input() epd : Epd;
  navRoutes:Patient;
  errorMsg;

  constructor(private _epddataService:EpdService) { }

  ngOnInit() {
    // this._epddataService.getPatient("EPD")
    //   .subscribe(_epddataService => this.navRoutes=_epddataService,
    //     resPatientenError => this.errorMsg= resPatientenError);

  }

}
