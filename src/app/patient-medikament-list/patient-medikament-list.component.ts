import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Medikamente, Vitalzeichen} from '../class/patient';
import {EpdService} from '../services/epd.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-medikament-list',
  templateUrl: './patient-medikament-list.html',
  styleUrls: ['./patient-medikament-list.component.css']
})
export class PatientMedikamentListComponent implements OnInit {
  @Input() medikamente = Medikamente;
  medikament: Medikamente;
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
  medikamentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    menge: new FormControl('', Validators.required),
    form: new FormControl('', Validators.required)
  });
  constructor(private epdService: EpdService, private fb: FormBuilder,
              private route: ActivatedRoute) { }

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
  onSave() {
    if (this.submitType === 'Update') {
      this.medikament.lastModifiedDate = this.formatted_dateYMDHM();
      this.medikament.bearbeiter = this.angemUser;
      this.epdService.updateMedikamente(this.medikament).subscribe(
        data => {
          return true;
        },
        error => {
          console.error('Error updating Medikamente Patient!');
          return Observable.throw(error);
        }
      );
      // this.epdService.getMedikamente(this.medikament.patientenId).subscribe(
      //   data => {
      //     console.log(data);
      //   },
      //   error => {
      //     console.error('Error updating Medikamente Patient!');
      //     return Observable.throw(error);
      //   }
      // );
    }
    if (this.submitType === 'Save') {
      this.subscription = this.route.params
        .subscribe(params => {
          const id = (params['id'] || '');
          const medikamente = this.medikamentForm.value;
          // this.zeichen = null;
          this.epdService.getAllMedikamente().subscribe(content => {
            const maxIndex = content.length - 1;
            const medikamentWithMaxIndex = content[maxIndex];
            const medikamentWithMaxIndexId = medikamentWithMaxIndex.id;
            const medikamentId = (Number.parseInt(medikamentWithMaxIndexId) + 1);
            medikamente.id = medikamentId;
            medikamente.patientenId = id;
            medikamente.bearbeiter = this.angemUser;
            medikamente.ersteller = this.angemUser;
            medikamente.createdDate = this.formatted_dateYMDHM();
            medikamente.lastModifiedDate = this.formatted_dateYMDHM();
            medikamente.start = this.formatted_dateYMD();
            medikamente.ende = this.formatted_dateYMD();
            this.epdService.createMedikamente(medikamente).subscribe(
              data => {
                return true;
              },
              error => {
                console.error('Error Save Medikament Patient!');
                return Observable.throw(error);
              }
            );
          });
        });
    }
    this.showNew = false;
  }
  getcontentcenter() {
    if (this.medikamente.length === 1) {
      return 'col-md-6 wow fadeInUp col-md-offset-3';
    } else {
      return 'col-sm-6 wow fadeInUp';
    }
  }
  formatted_dateYMDHM() {
    let result = '';
    const d = new Date();
    result += d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() +
      ' ' + d.getHours() + ':' + d.getMinutes();
    return result;
  }
  formatted_dateYMD() {
    let result = '';
    const d = new Date();
    result += d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();
    return result;
  }
  onCancel() {
    this.showNew = false;
  }
  // This method associate to New Button.
  onNew() {
    // this.medikament = this.medikamente[0];
    this.medikament = new Medikamente();
    this.medikament.name = ' ';
    this.medikament.menge = 'mg';
    this.medikament.form = ' ';
    this.medikamentForm.setValue({ name: this.medikament.name, menge: this.medikament.menge,
    form: this.medikament.form});
// Change submitType to 'Save'.
    this.submitType = 'Save';
// display registration entry section.
    this.showNew = true;

  }
  loadMedikamentToEdit(id: number) {
    this.medikament = this.medikamente[id];
    // Display registration entry section.
    this.showNew = true;
    // Change submitType to Update.
    this.submitType = 'Update';
  }
  deleteMedikament(id: number) {
    this.medikament = this.medikamente[id];
    const mediId = this.medikament.id;
    this.epdService.deleteMedikamente(mediId).subscribe(
      data => {
        return true;
      },
      error => {
        console.error('Error Deleting Medikament Patient!');
        return Observable.throw(error);
      }
    );
  }
}
