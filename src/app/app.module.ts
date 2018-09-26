import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { BarchartComponent } from './barchart/barchart.component';
import { HomeComponent } from './home/home.component';
import { AromasFormComponent } from './aromas-form/aromas-form.component';
import { CanteensFormComponent } from './canteens-form/canteens-form.component';
import { CanteensDashboardComponent } from './dashboard/canteens-dashboard/canteens-dashboard.component';
import { AromasDashboardComponent } from './dashboard/aromas-dashboard/aromas-dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { BannerComponent } from './banner/banner.component';
import { BrewAndBitesFormComponent } from './brew-and-bites-form/brew-and-bites-form.component';
import { BrewandbitesDashboardComponent } from './dashboard/brewandbites-dashboard/brewandbites-dashboard.component';
import { CampusHubFormComponent } from './campus-hub-form/campus-hub-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    BarchartComponent,
    HomeComponent,
    AromasFormComponent,
    CanteensFormComponent,
    CanteensDashboardComponent,
    AromasDashboardComponent,
    ChartComponent,
    BannerComponent,
    BrewAndBitesFormComponent,
    BrewandbitesDashboardComponent,
    CampusHubFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule, 
    MatProgressBarModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
