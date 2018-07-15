import {Component, OnInit, Input} from '@angular/core';
import {Patient, Vitalzeichen} from '../class/patient';
import {EpdService} from '../services/epd.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-patient-vitalparameter',
  templateUrl: './patient-vitalparameter.component.html',
  styleUrls: ['./patient-vitalparameter.component.css']
})
export class PatientVitalparameterComponent implements OnInit {

  @Input() vitalzeichen = Vitalzeichen;
  zeichen: Vitalzeichen;
  showNew: Boolean = false;
  // It maintains table row index based on selection.
  selectedRow: number;
  // It will be either 'Save' or 'Update' based on operation.
  submitType = 'Save';
  constructor(private epdService: EpdService) { }

  ngOnInit() {
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
      this.epdService.updateVitalzeichen(this.zeichen).subscribe(
        data => {
          return true;
        },
        error => {
          console.error('Error updating vitalzeichnen Patient!');
          return Observable.throw(error);
        }
      );
    }
    this.showNew = false;
  }
  onDelete(index: number) {
// Delete the corresponding registration entry from the list.
   // this.registrations.splice(index, 1);
  }
  onCancel() {
    this.showNew = false;
  }
  // This method associate to New Button.
  onNew() {

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
  deleteVitalzeichen(zeichen: Vitalzeichen) {}
}
