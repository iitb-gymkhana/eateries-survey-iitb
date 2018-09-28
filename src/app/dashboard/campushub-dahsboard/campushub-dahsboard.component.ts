import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { surveyOptionsMappings } from '../../campus-hub-form/variables/mapping';
import { SurveyService } from 'src/app/_services/survey.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-campushub-dahsboard',
  templateUrl: './campushub-dahsboard.component.html',
  styleUrls: ['./campushub-dahsboard.component.css']
})
export class CampushubDahsboardComponent implements OnInit {

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

    this.surveyService.getCampusHubData()
      .subscribe(
        (res) => {
          delete res['name'];
          delete res['phoneNumber'];
          delete res['email'];
          delete res['submittedOn'];
          delete res['otherSuggestions'];
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
