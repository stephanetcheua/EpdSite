import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RegionHeaderComponent} from "./region-header/region-header.component";
import {RegionFooterComponent} from "./region-footer/region-footer.component";
import {PatientenListComponent} from "./patienten-list/patienten-list.component";
import {RegionDescriptionComponent} from "./region-description/region-description.component";
import {PatientMedikamentListComponent} from "./patient-medikament-list/patient-medikament-list.component";
import {RoutingModule} from "./routing/routing.module";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {DataService} from "./services/data.service";
import {ConfigurationService} from "./services/configuration.service";
import {RegionService} from "./services/region.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RegionContactFormComponent} from "./region-contact-form/region-contact-form.component";
import {FormService} from "./services/form.service";
import {AgmCoreModule} from "@agm/core";
import {EpdService} from "./services/epd.service";
import {PatientSiteComponent} from "./patient-site/patient-site.component";
import {PatientZugriffsprotokollComponent} from "./patient-zugriffsprotokoll/patient-zugriffsprotokoll.component";
import {PatientCareTeamComponent} from "./patient-care-team/patient-care-team.component";
import {EpdSiteComponent} from "./epd-site/epd-site.component";
import {PatientKrankheitenComponent} from "./patient-krankheiten/patient-krankheiten.component";
import {PatientHeaderComponent} from "./patient-header/patient-header.component";
import {PatientStammdatenComponent} from "./patient-stammdaten/patient-stammdaten.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PatientSiteComponent,
    PatientZugriffsprotokollComponent,
    EpdSiteComponent,
    RegionHeaderComponent,
    PatientHeaderComponent,
    RegionFooterComponent,
    RegionDescriptionComponent,
    PatientStammdatenComponent,
    PatientenListComponent,
    PatientCareTeamComponent,
    PatientMedikamentListComponent,
    PatientKrankheitenComponent,
    RegionContactFormComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMC69m-xsQofnySoIJEzYXtuQJpv1xRes'
    }),
    Ng2PageScrollModule.forRoot()
  ],
  providers: [RegionService,ConfigurationService,DataService,FormService,EpdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
