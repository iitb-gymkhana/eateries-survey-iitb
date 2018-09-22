import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Survey } from '../survey';
import {
  name,
  phoneNumber,
  email,
  ratingOptions,
  hostel,
  hostelOptions,
  frequency,
  frequencyOptions,
  foodItems,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
} from '../survey-variables';
import { MatSnackBar } from '@angular/material';
import { surveyOptionsMappings } from '../survey-variables.mapping';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;

  ratings = ratingOptions;
  hostels = hostelOptions;
  frequencies = frequencyOptions;
  foodItems = foodItems;
  hygieneOfItems = hygieneOfItems;
  absenceMenuItemTimes = absenceMenuItemTimes;
  otherParameters = otherParameters;
  surveyOptionsMappings = surveyOptionsMappings;
  fetchingData = false;
  numData = 0;

  chartData = [];
  gotData = false;

  getAggregatedData(data, hostel) {
    const fields = Object.keys(data);

    if (fields.length === 0) {
      this.snackbar.open(
        `No survey data is availble for Hostel ${surveyOptionsMappings['hostels'][hostel]}`,
        'Close',
        {'duration': 15000}
      );
    } else {
      this.numData = data['hostel'].length;
    }
    let i, j;

    for (i = 0; i < fields.length; i++) {
      const _data = {
        title: fields[i],
        // id: 'canvas' + i
      };

      const dataset = {};

      const d = data[fields[i]];
      for (j = 0; j < data[fields[i]].length; j++) {
        dataset[d[j]] = dataset[d[j]] ? dataset[d[j]] + 1 : 1;
      }

      _data['dataset'] = dataset;

      let labels;
      const title = _data['title'];

      if (title === 'hostel') {
        labels = this.hostels.map((x) => surveyOptionsMappings['hostels'][x]);
      } else if (title === 'frequency') {
        labels = this.frequencies.map((x) => surveyOptionsMappings['frequencies'][x]);
      } else if (title === 'absenceMenuItemTimes') {
        labels = absenceMenuItemTimes.map((x) => surveyOptionsMappings['absenceMenuItemTimes'][x]);
      } else {
        labels = this.ratings.map((x) => surveyOptionsMappings['ratings'][x]);
      }
      _data['labels'] = labels;

      this.chartData.push(_data);
    }

    this.fetchingData = false;
    this.gotData = true;
  }

  getHostelData($event) {
    this.gotData = false;
    this.fetchingData = true;
    const hostel = $event.value;
    this.chartData = [];
    const _ = this.snackbar.dismiss();
    this.numData = 0;
    this.http.get<Survey[]>(`${this.apiBaseUrl}/hostel/${hostel}`)
      .subscribe((res) => this.getAggregatedData(res, hostel));
  }

  constructor(private http: HttpClient, public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

}
