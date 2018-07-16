import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Routes, RouterModule} from '@angular/router';
import {EpdSiteComponent} from '../epd-site/epd-site.component';
import {PatientSiteComponent} from '../patient-site/patient-site.component';
const appRoutes: Route[] = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: EpdSiteComponent},
  {path: 'patient/:id/:fallnr/:kuerzel', component: PatientSiteComponent}
  // {path:'patient/:id',component:PatientSiteComponent}


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
