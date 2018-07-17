import {Component, OnInit, Input} from '@angular/core';
import {Team} from '../class/patient';

@Component({
  selector: 'app-patienten-list',
  templateUrl: './patienten-list.component.html',
  styleUrls: ['./patienten-list.component.css']
})
export class PatientenListComponent implements OnInit {

  @Input() patienten = [];
  careTeam: Team;
  constructor() {
  }
  ngOnInit() {
  }

}
