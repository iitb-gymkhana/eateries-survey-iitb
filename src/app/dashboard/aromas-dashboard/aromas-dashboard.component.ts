import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { surveyOptionsMappings } from '../../aromas-form/variables/mapping';
import { SurveyService } from 'src/app/_services/survey.service';
import { MatSnackBar } from '@angular/material';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-aromas-dashboard',
  templateUrl: './aromas-dashboard.component.html',
  styleUrls: ['./aromas-dashboard.component.css']
})
export class AromasDashboardComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  surveyOptionsMappings = surveyOptionsMappings;
  surveyData: any;
  fetchingData = false;
  gotData = false;

  constructor(
    private surveyService: SurveyService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.gotData = false;
    this.fetchingData = true;
    // this.surveyData = [];

    this.surveyService.getAromasData()
      .subscribe(
        (res) => {
          this.surveyData = res;
          this.fetchingData = false;
          this.gotData = true;
          if (Object.keys(this.surveyData).length === 0) {
            this.alertService.displayErrorNotification(`No data available`);
          }
        },
        (err) => {
          this.fetchingData = false;
          this.alertService.displayErrorNotification('Failed to get data');
        }
      );
  }

}
