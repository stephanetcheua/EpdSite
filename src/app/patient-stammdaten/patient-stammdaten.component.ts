import {Component, OnInit, Input} from '@angular/core';
import {Patient} from '../class/patient';
import {EpdService} from '../services/epd.service';

@Component({
  selector: 'app-patient-stammdaten',
  templateUrl: './patient-stammdaten.component.html',
  styleUrls: ['./patient-stammdaten.component.css']
})
export class PatientStammdatenComponent implements OnInit {
  @Input() patient;
  selectedPatient: Patient;
  constructor(private epddataService: EpdService) { }

  ngOnInit() {
  }
  save(patient: Patient): void {
   // this.epddataService.updateStammdaten(this.patient);
  }
}
