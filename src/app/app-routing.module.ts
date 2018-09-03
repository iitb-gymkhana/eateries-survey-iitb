import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { SunriseDhabaFormComponent } from './sunrise-dhaba-form/sunrise-dhaba-form.component';

const routes: Routes = [
  { path: 'canteens/dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: 'canteens', component: SurveyFormComponent},
  { path: 'sunrisedhaba', component: SunriseDhabaFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
