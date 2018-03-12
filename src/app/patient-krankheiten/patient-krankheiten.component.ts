import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-patient-krankheiten',
  templateUrl: './patient-krankheiten.component.html',
  styleUrls: ['./patient-krankheiten.component.css']
})
export class PatientKrankheitenComponent implements OnInit {
  @Input() krankheiten = [];
  constructor() {
  }

  ngOnInit() {
  }
  getcontentcenter() {
    if(this.krankheiten.length==1) {
      return "col-md-6 wow fadeInUp col-md-offset-3";
    } else {
      return "col-sm-6 wow fadeInUp";
    }
  }
}
