import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { surveyOptionsMappings } from '../../aromas-form/variables/mapping';
import { SurveyService } from 'src/app/_services/survey.service';
import { MatSnackBar } from '@angular/material';

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
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.gotData = false;
    this.fetchingData = true;
    const _ = this.snackbar.dismiss();
    // this.surveyData = [];

    this.surveyService.getAromasData()
      .subscribe(
        (res) => {
          this.surveyData = res;
          this.fetchingData = false;
          this.gotData = true;
        }
      );
  }

}
