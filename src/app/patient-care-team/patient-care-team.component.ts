import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-patient-care-team',
  templateUrl: './patient-care-team.component.html',
  styleUrls: ['./patient-care-team.component.css']
})
export class PatientCareTeamComponent implements OnInit {

  @Input() careteam= [];
  constructor() { }

  ngOnInit() {
  }
  getcontentcenter() {
    if(this.careteam.length==1) {
      return "col-md-6 wow fadeInUp col-md-offset-3";
    } else {
      return "col-sm-6 wow fadeInUp";
    }
}
}
