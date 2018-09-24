import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { surveyOptionsMappings } from '../../canteens-form/survey-variables/mapping';
import { SurveyService } from 'src/app/_services/survey.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-canteens-dashboard',
  templateUrl: './canteens-dashboard.component.html',
  styleUrls: ['./canteens-dashboard.component.css']
})
export class CanteensDashboardComponent implements OnInit {
  hostels = Object.keys(surveyOptionsMappings['hostels']);
  apiBaseUrl = environment.apiBaseUrl;

  surveyOptionsMappings = surveyOptionsMappings;
  surveyData: any;
  fetchingData = false;
  gotData = false;

  getHostelData(hostel) {
    this.gotData = false;
    this.fetchingData = true;
    // this.surveyData = [];

    this.surveyService.getHostelData(hostel)
      .subscribe(
        (res) => {
          this.surveyData = res;
          this.fetchingData = false;
          this.gotData = true;
          if (Object.keys(this.surveyData).length === 0) {
            this.alertService.displayErrorNotification(`No data available for Hostel ${hostel}`);
          }
        },
        (err) => {
          this.fetchingData = false;
          this.alertService.displayErrorNotification('Failed to get data');
        }
      );
  }
  constructor(
    private surveyService: SurveyService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
