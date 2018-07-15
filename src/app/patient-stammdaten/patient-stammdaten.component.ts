import {Component, OnInit, Input} from '@angular/core';
import {Patient} from '../class/patient';
import {EpdService} from '../services/epd.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-patient-stammdaten',
  templateUrl: './patient-stammdaten.component.html',
  styleUrls: ['./patient-stammdaten.component.css']
})
export class PatientStammdatenComponent implements OnInit {
  @Input() patient;
  showNew: Boolean = false;
  selectedPatient: Patient;
  constructor(private epddataService: EpdService) { }

  ngOnInit() {
  }
  updateStammdaten_old() {
    console.log(typeof (this.patient));
    this.epddataService.updatePatient(this.patient);
  }
  updateStammdaten() {
    this.showNew = true;
    this.epddataService.updatePatient(this.patient).subscribe(
      data => {
        // refresh the list
       // this.getFoods();
        return true;
      },
      error => {
        console.error('Error saving Patient!');
        return Observable.throw(error);
      }
    );
  }
  onCancel() {
    this.showNew = false;
  }
  onNew() {
    this.showNew = true;
  }
  save(patient: Patient): void {
   // this.epddataService.updateStammdaten(this.patient);
  }
}
