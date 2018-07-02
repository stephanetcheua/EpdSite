import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {RegionService} from '../services/region.service';
import {isBoolean} from 'util';
import {Casino, Region} from '../class/region';
import {isPlatformBrowser} from '@angular/common';
import {Epd, Patient} from '../class/patient';
import {EpdService} from '../services/epd.service';


@Component({
  moduleId: module.id.toString(),
  selector: 'app-patient-site',
  templateUrl: './patient-site.component.html',
  styleUrls: ['./patient-site.component.css'],
})
export class PatientSiteComponent implements OnInit {
  patient: Patient;
  epd: Epd;
  urlsmall: boolean;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private epddataService: EpdService, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(params => {
        const id = (params['id'] || '');
        // const title = (params['title'] || '');
        this.patient = null;
        this.epddataService.getPatient(id).subscribe(content => {
          this.patient = content;
        });
        this.epddataService.getEpd().subscribe(epd => {
          this.epd = epd;
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
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getBackground(id: string): string {
    // return 'url(assets/wetzlar/Hintergrund_unscharf.jpg)'
    const url = '';
    if (this.urlsmall) {
      return 'url(' + this.epd.hintergrundbilder[id].urlMobile + ')';
    } else {
      return 'url(' + this.epd.hintergrundbilder[id].url + ')';
    }

  }
}

