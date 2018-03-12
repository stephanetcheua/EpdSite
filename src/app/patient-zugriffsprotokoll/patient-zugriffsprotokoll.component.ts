import {Component, OnInit, Input} from '@angular/core';
import {Patient, Zugriffsprotokoll} from "../class/patient";

@Component({
  selector: 'app-patient-zugriffsprotokoll',
  templateUrl: './patient-zugriffsprotokoll.component.html',
  styleUrls: ['./patient-zugriffsprotokoll.component.css']
})
export class PatientZugriffsprotokollComponent implements OnInit {

  @Input() protokoll= Zugriffsprotokoll;
  constructor() { }

  ngOnInit() {
  }
  getcontentcenter() {
    if(this.protokoll.length==1) {
      return "col-md-6 wow fadeInUp col-md-offset-3";
    } else {
      return "col-sm-6 wow fadeInUp";
    }
  }
}
