import {
  Component, OnInit, Inject, AfterViewChecked, AfterViewInit, AfterContentChecked,
  PLATFORM_ID
} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {RegionService} from '../services/region.service';
import {isPlatformBrowser} from '@angular/common';
import {Config} from '../class/configuration';
import {EpdService} from '../services/epd.service';
import {Epd, Patient, Photos} from '../class/patient';

@Component({
  selector: 'app-epd-site',
  templateUrl: './epd-site.component.html',
  styleUrls: ['./epd-site.component.css'],
  providers: [RegionService]
})
export class EpdSiteComponent implements OnInit {


  epd: Epd;
  patienten: Patient;
  subscription: Subscription;
  bilder: Photos;
  urlsmall: boolean;
  currentUrl: string;
  statusCode: number;
  constructor(private route: ActivatedRoute, private epddataService: EpdService, @Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(params => {
        var url = window.location.host;
        var config = new Config();
        config.regionId = url;
        console.log(url, config);
        // const id = (params['id'] || '');

        this.epddataService.getPatienten().subscribe(patient => this.patienten = patient);
        // this.regiondataService.getBackgroundPhoto().subscribe(bilder => this.bilder = bilder);
        if (isPlatformBrowser(this.platformId)) {
          var jQuery = (<any>window).jQuery;
          jQuery(document).ready(() => {
            if (jQuery('html').hasClass('mobile') || jQuery('html').hasClass('android')
              || jQuery('html').hasClass('ios') || jQuery('html').hasClass('windows') || jQuery('html').hasClass('tablet')) {
              this.urlsmall = true;

            } else {
              this.urlsmall = false;
            }
          });
        }
      });

  }

  getBackground(id: string): string {
    let url = '';
    if (this.urlsmall) {
      return 'url(assets/medical/doctor2.jpg)';
    }else {
      return 'url(assets/medical/doctor2.jpg)';
    }
  }

  // getBackgroundPhoto(id: string): any {
  //   this.subscription = this.route.params
  //     .subscribe(params => {
  //       this.epddataService.getBackgroundPhoto().subscribe(bilder => this.bilder = bilder);
  //     });
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
