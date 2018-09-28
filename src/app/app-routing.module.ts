import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CanteensFormComponent } from './canteens-form/canteens-form.component';
import { AromasFormComponent } from './aromas-form/aromas-form.component';
import { CanteensDashboardComponent } from './dashboard/canteens-dashboard/canteens-dashboard.component';
import { AromasDashboardComponent } from './dashboard/aromas-dashboard/aromas-dashboard.component';
import { BrewAndBitesFormComponent } from './brew-and-bites-form/brew-and-bites-form.component';
import { BrewandbitesDashboardComponent } from './dashboard/brewandbites-dashboard/brewandbites-dashboard.component';
import { CampusHubFormComponent } from './campus-hub-form/campus-hub-form.component';
import { CampushubDahsboardComponent } from './dashboard/campushub-dahsboard/campushub-dahsboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/canteens', component: CanteensDashboardComponent },
  { path: 'dashboard/aromas', component: AromasDashboardComponent },
  { path: 'dashboard/brewandbites', component: BrewandbitesDashboardComponent },
  { path: 'dashboard/campushub', component: CampushubDahsboardComponent },
  { path: 'canteens', component: CanteensFormComponent},
  { path: 'aromas', component: AromasFormComponent},
  { path: 'brewandbites', component: BrewAndBitesFormComponent},
  { path: 'campushub', component: CampusHubFormComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
