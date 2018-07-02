import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-medikament-list',
  templateUrl: './patient-medikament-list.html',
  styleUrls: ['./patient-medikament-list.component.css']
})
export class PatientMedikamentListComponent implements OnInit {
  @Input() medikament = [];
  constructor() { }

  ngOnInit() {
  }
  getcontentcenter() {
    if (this.medikament.length === 1) {
      return 'col-md-6 wow fadeInUp col-md-offset-3';
    } else {
      return 'col-sm-6 wow fadeInUp';
    }
  }
}
