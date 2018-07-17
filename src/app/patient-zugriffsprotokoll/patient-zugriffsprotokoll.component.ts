import {Component, OnInit, Input} from '@angular/core';
import {Medikamente, Patient, Vitalzeichen, Zugriffsprotokoll} from '../class/patient';
import {EpdService} from '../services/epd.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-patient-zugriffsprotokoll',
  templateUrl: './patient-zugriffsprotokoll.component.html',
  styleUrls: ['./patient-zugriffsprotokoll.component.css']
})
export class PatientZugriffsprotokollComponent implements OnInit {

  @Input() protokoll = Zugriffsprotokoll;
  vitalparameter: Vitalzeichen;
  medikamente: Medikamente;
  subscription: Subscription;
  angemUser: any;
  isAdmin: Boolean = false;
  isPflege: Boolean = false;
  isVisitor: Boolean = false;
  constructor(private epdService: EpdService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(params => {
        const kuerzel = (params['kuerzel'] || '');
        const id = (params['id'] || '');
        this.epdService.getcareTeam(id).subscribe(
          content => {
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
            return true;
          },
          error => {
            console.error('Error updating vitalzeichnen Patient!');
            return Observable.throw(error);
          }
        );
        this.medikamente = null;
        this.epdService.getMedikamente(id).subscribe(content => {
          this.medikamente = content;
        })
        this.epdService.getVitalzeichen(id).subscribe(content => {
          this.vitalparameter = content;
        });
      });
  }
  getcontentcenter() {
    if (this.protokoll.length === 1) {
      return 'col-md-6 wow fadeInUp col-md-offset-3';
    } else {
      return 'col-sm-6 wow fadeInUp';
    }
  }
}
