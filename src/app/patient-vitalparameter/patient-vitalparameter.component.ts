import {Component, OnInit, Input} from '@angular/core';
import {Vitalzeichen} from '../class/patient';

@Component({
  selector: 'app-patient-vitalparameter',
  templateUrl: './patient-vitalparameter.component.html',
  styleUrls: ['./patient-vitalparameter.component.css']
})
export class PatientVitalparameterComponent implements OnInit {

  @Input() vitalzeichen = Vitalzeichen;
  constructor() { }

  ngOnInit() {
  }
  getcontentcenter() {
    if(this.vitalzeichen.length === 1) {
      return 'col-md-6 wow fadeInUp col-md-offset-3';
    } else {
      return 'col-sm-6 wow fadeInUp';
    }
}

  loadVitalzeichenToEdit(zeichen: Vitalzeichen) {}
  deleteVitalzeichen(zeichen: Vitalzeichen) {}
}
