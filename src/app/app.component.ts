import {Component, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {


  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router) {

  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      if (isPlatformBrowser(this.platformId)) {
        var jQuery = (<any>window).jQuery;
        jQuery(document).ready(() => {
          //if (jQuery('html').hasClass('desktop')) {
          if (jQuery) {
            window.setTimeout(() => {
              new (<any>window).WOW().init();
            }, 50);
          }
        });
      }
    });

  }
}
