import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-patient-stammdaten',
  templateUrl: './patient-stammdaten.component.html',
  styleUrls: ['./patient-stammdaten.component.css']
})
export class PatientStammdatenComponent implements OnInit {
  @Input() patient;
  constructor() { }

  ngOnInit() {
  }

}
