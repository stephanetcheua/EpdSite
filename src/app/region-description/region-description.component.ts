import {Component, OnInit, Input} from '@angular/core';
import {Epd} from '../class/patient';

@Component({
  selector: 'app-region-description',
  templateUrl: './region-description.component.html',
  styleUrls: ['./region-description.component.css']
})
export class RegionDescriptionComponent implements OnInit {

  @Input() epd;
  epdBeschreibung= 'Einrichtungsübergreifende Elektronische patientenakten (eEPA) sollten von Beginn an als....endungen für patienten';
  epdTitle= 'E.patientenakte';

  constructor() {
  }

  ngOnInit() {
  }

}
