import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-region-description',
  templateUrl: './region-description.component.html',
  styleUrls: ['./region-description.component.css']
})
export class RegionDescriptionComponent implements OnInit {

  @Input() epd;
  constructor() { }

  ngOnInit() {
  }

}
