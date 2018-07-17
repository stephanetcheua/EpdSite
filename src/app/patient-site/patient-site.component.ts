import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {Diagnose, Epd, Medikamente, Patient, Vitalzeichen, Zugriffsprotokoll} from '../class/patient';
import {EpdService} from '../services/epd.service';


@Component({
  moduleId: module.id.toString(),
  selector: 'app-patient-site',
  templateUrl: './patient-site.component.html',
  styleUrls: ['./patient-site.component.css'],
})
export class PatientSiteComponent implements OnInit {
  patient: Patient;
  vitalparameter: Vitalzeichen;
  diagnose: Diagnose;
  medikamente: Medikamente;
  patienten: Patient;
  protokoll: Zugriffsprotokoll;
  epd: Epd;
  urlsmall: boolean;
  subscription: Subscription;
  // role
  isAdmin: Boolean = false;
  isPflege: Boolean = false;
  isVisitor: Boolean = false;

  angemUser: any;
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
        this.vitalparameter = null;
        this.epddataService.getVitalzeichen(id).subscribe(content => {
          this.vitalparameter = content;
        });
        this.diagnose = null;
        this.epddataService.getDiagnose(id).subscribe(content => {
          this.diagnose = content;
        });
        this.medikamente = null;
        this.epddataService.getMedikamente(id).subscribe(content => {
          this.medikamente = content;
        }); this.protokoll = null;
        this.epddataService.getzugriffsprotokoll(id).subscribe(content => {
          this.protokoll = content;
        });
        const kuerzel = (params['kuerzel'] || '');
        this.epddataService.getcareTeam(id).subscribe(content => {
            const team = content;
            for (const i in team) {
              const user = team[i].kuerzel;
              if (user === kuerzel) {
                this.angemUser = kuerzel;
                const role = team[i].role;
                switch (role) {
                  case 'admin': {
                    this.isAdmin = true;
                    break;
                  }
                  case 'pflege': {
                    this.isPflege = true;
                    break;
                  }
                  case 'visitor': {
                    this.isVisitor = true;
                    break;
                  }
                }
              }
            }
        });
        this.epddataService.getPatienten().subscribe(patient => {
          this.patienten = patient;
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
    const url = '';
    if (this.urlsmall) {
      return 'url(assets/medical/doctor2.jpg)';
    } else {
      return 'url(assets/medical/doctor2.jpg)';
    }

  }
}

