import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CanteensFormComponent } from './canteens-form/canteens-form.component';
import { AromasFormComponent } from './aromas-form/aromas-form.component';

const routes: Routes = [
  { path: 'canteens/dashboard', component: DashboardComponent },
  { path: 'canteens', component: CanteensFormComponent},
  { path: 'aromas', component: AromasFormComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
