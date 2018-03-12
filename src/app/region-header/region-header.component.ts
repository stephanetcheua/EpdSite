import {Component, OnInit, Input} from '@angular/core';
import {PageScrollConfig} from "ng2-page-scroll";

@Component({
  selector: 'app-region-header',
  templateUrl: './region-header.component.html',
  styleUrls: ['./region-header.component.css']
})
export class RegionHeaderComponent implements OnInit {

  @Input() logo = [];

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };

  }

  ngOnInit() {
  }

}
