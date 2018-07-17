import {Component, OnInit, Input} from '@angular/core';
import {PageScrollConfig} from "ng2-page-scroll";
import {Patient} from "../class/patient";
import {Observable} from 'rxjs/Observable';
import {EpdService} from '../services/epd.service';
import {Subscription} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {
  @Input() logo: Patient;
  subscription: Subscription;
  angemUser: any;
  isAdmin: Boolean = false;
  isPflege: Boolean = false;
  isVisitor: Boolean = false;
  constructor(private epdService: EpdService, private route: ActivatedRoute) {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };

  }

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
      });
  }

}
