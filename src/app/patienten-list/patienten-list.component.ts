import {Component, OnInit, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patienten-list',
  templateUrl: './patienten-list.component.html',
  styleUrls: ['./patienten-list.component.css']
})
export class PatientenListComponent implements OnInit {

  @Input() patienten = [];

  constructor() {

  }

  ngOnInit() {

  }

}
