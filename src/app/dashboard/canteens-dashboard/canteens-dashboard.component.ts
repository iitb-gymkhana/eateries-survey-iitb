import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { surveyOptionsMappings } from '../../canteens-form/survey-variables/mapping';
import { SurveyService } from 'src/app/_services/survey.service';

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

  // computeChartData(surveyData, hostel) {
  //   const fields = Object.keys(surveyData);

  //   if (fields.length === 0) {
  //     this.snackbar.open(
  //       `No survey data is availble for Hostel ${surveyOptionsMappings['hostels'][hostel]}`,
  //       'Close',
  //       { 'duration': 15000 }
  //     );
  //   } else {
  //     const _values = Object.values(surveyData['hostel']);
  //     for (let i = 0; i < _values.length; i++) {
  //       this.numData = +(_values[i]);
  //     }

  //     for (let i = 0; i < fields.length; i++) {
  //       const _data = {
  //         title: fields[i]
  //       };

  //       let labels;
  //       const title = _data['title'];

  //       if (title === 'hostel') {
  //         labels = Object.values(surveyOptionsMappings['hostels']);
  //       } else if (title === 'frequency') {
  //         labels = Object.values(surveyOptionsMappings['frequencies']);
  //       } else if (title === 'absenceMenuItemTimes') {
  //         labels = Object.values(surveyOptionsMappings['absenceMenuItemTimes']);
  //       } else {
  //         labels = Object.values(surveyOptionsMappings['ratings']);
  //       }
  //       _data['labels'] = labels;

  //       _data['data'] = labels.map((x) => surveyData[title] ? surveyData[title][x] : 0);

  //       this.chartData.push(_data);
  //     }

  //     this.fetchingData = false;
  //     this.gotData = true;
  //   }
  // }

  getHostelData(hostel) {
    console.log('change');
    this.gotData = false;
    this.fetchingData = true;
    const _ = this.snackbar.dismiss();
    // this.surveyData = [];

    this.surveyService.getHostelData(hostel)
      .subscribe(
        (res) => {
          this.surveyData = res;
          console.log(this.surveyData);
          this.fetchingData = false;
          this.gotData = true;
        }
      );
  }
  constructor(
    public snackbar: MatSnackBar,
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
  }

}
