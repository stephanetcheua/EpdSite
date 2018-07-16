import {Component, OnInit, Input} from '@angular/core';
import {Patient, Vitalzeichen} from '../class/patient';
import {EpdService} from '../services/epd.service';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-patient-vitalparameter',
  templateUrl: './patient-vitalparameter.component.html',
  styleUrls: ['./patient-vitalparameter.component.css']
})
export class PatientVitalparameterComponent implements OnInit {

  @Input() vitalzeichen = Vitalzeichen;
  zeichen: Vitalzeichen;
  newzeichen: Vitalzeichen[];
  showNew: Boolean = false;
  isAdmin: Boolean = false;
  isPflege: Boolean = false;
  isVisitor: Boolean = false;
  angemUser: any;
  // It maintains table row index based on selection.
  selectedRow: number;
  // It will be either 'Save' or 'Update' based on operation.
  submitType = 'Save';
  subscription: Subscription;
  // Create form
  vitalparamForm = new FormGroup({
    puls: new FormControl('', Validators.required),
    systolisch: new FormControl('', Validators.required),
    diastolisch: new FormControl('', Validators.required),
    temperatur: new FormControl('', Validators.required),
    zucker: new FormControl('', Validators.required),
  });
  constructor(private epdService: EpdService, private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(params => {
        const kuerzel = (params['kuerzel'] || '');
        const patId = (params['id'] || '');
        this.epdService.getcareTeam(patId).subscribe(
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
  getcontentcenter() {
    if (this.vitalzeichen.length === 1) {
      return 'col-md-6 wow fadeInUp col-md-offset-3';
    } else {
      return 'col-sm-6 wow fadeInUp';
    }
}
  onSave() {
    if (this.submitType === 'Update') {
      this.zeichen.lastModifiedDate = this.formatted_date();
      this.zeichen.bearbeiter = this.angemUser;
      this.epdService.updateVitalzeichen(this.zeichen).subscribe(
        data => {
          return true;
        },
        error => {
          console.error('Error updating vitalzeichnen Patient!');
          return Observable.throw(error);
        }
      );
      this.epdService.getVitalzeichen(this.zeichen.patientenId).subscribe(
        data => {
      console.log(data);
        },
        error => {
          console.error('Error updating vitalzeichnen Patient!');
          return Observable.throw(error);
        }
      );
    }
    if (this.submitType === 'Save') {
      this.subscription = this.route.params
        .subscribe(params => {
          const id = (params['id'] || '');
          const vitalzeichnen = this.vitalparamForm.value;
          // this.zeichen = null;
          this.epdService.getAllVitalzeichen().subscribe(content => {
            const maxIndex = content.length - 1;
            const articleWithMaxIndex = content[maxIndex];
            const articleWithMaxIndexId = articleWithMaxIndex.id;
            const articleId = (Number.parseInt(articleWithMaxIndexId) + 1);
            vitalzeichnen.id = articleId;
            vitalzeichnen.patientenId = id;
            vitalzeichnen.bearbeiter = this.angemUser;
            vitalzeichnen.ersteller = this.angemUser;
            vitalzeichnen.createdDate = this.formatted_date();
            vitalzeichnen.lastModifiedDate = this.formatted_date();
            this.epdService.createVitalzeichen(vitalzeichnen).subscribe(
              data => {
                return true;
              },
              error => {
                console.error('Error updating vitalzeichnen Patient!');
                return Observable.throw(error);
              }
            );
          });
        });
    }
    this.showNew = false;
  }
  onDelete(index: number) {
// Delete the corresponding registration entry from the list.
   // this.registrations.splice(index, 1);
  }
   formatted_date() {
    let result = '';
    const d = new Date();
    result += d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() +
      ' ' + d.getHours() + ':' + d.getMinutes();
    return result;
  }
  onCancel() {
    this.showNew = false;
  }
  // This method associate to New Button.
  onNew() {
    this.zeichen = this.vitalzeichen[0];
    this.vitalparamForm.setValue({ puls: this.zeichen.puls, systolisch: this.zeichen.systolisch,
      diastolisch: this.zeichen.diastolisch, temperatur: this.zeichen.temperatur, zucker: this.zeichen.zucker});
// Change submitType to 'Save'.
    this.submitType = 'Save';
// display registration entry section.
    this.showNew = true;

  }
  loadVitalzeichenToEdit(id: number) {
    this.zeichen = this.vitalzeichen[id];
    // Display registration entry section.
    this.showNew = true;
    // Change submitType to Update.
    this.submitType = 'Update';
  }
  deleteVitalzeichen(id: number) {
    this.zeichen = this.vitalzeichen[id];
    const vtzeichnenId = this.zeichen.id;
    this.epdService.deleteVitalzeichen(vtzeichnenId).subscribe(
      data => {
        return true;
      },
      error => {
        console.error('Error updating vitalzeichnen Patient!');
        return Observable.throw(error);
      }
    );
  }
}
