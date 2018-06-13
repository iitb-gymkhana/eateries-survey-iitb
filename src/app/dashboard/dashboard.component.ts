import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Survey } from '../survey';
import { ratings, hostels, frequencies, foodItems, hygieneOfItems, absenceMenuItemTimes, otherParameters } from '../survey-variables';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;

  ratings = ratings;
  hostels = hostels;
  frequencies = frequencies;
  foodItems = foodItems;
  hygieneOfItems = hygieneOfItems;
  absenceMenuItemTimes = absenceMenuItemTimes;
  otherParameters = otherParameters;
  fetchingData = false;

  chartData = [];
  gotData = false;
  a = false;

  getAggregatedData(data) {
    const fields = Object.keys(data);
    let i, j;

    for (i = 0; i < fields.length; i++) {
      const _data = {
        title: fields[i],
        // id: 'canvas' + i
      };

      const dataset = {};

      for (j = 0; j < data[fields[i]].length; j++) {
        const d = data[fields[i]];
        dataset[d[j]] = dataset[d[j]] ? dataset[d[j]] + 1 : 1;
      }

      _data['dataset'] = dataset;

      let labels;
      const title = _data['title'];

      if (title === 'hostel') {
        labels = hostels;
      } else if (title === 'frequency') {
        labels = frequencies;
      } else if (title === 'absenceMenuItemTimes') {
        labels = absenceMenuItemTimes;
      } else {
        labels = ratings;
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
    this.http.get<Survey[]>(`${this.apiBaseUrl}/hostel/${hostel}`)
      .subscribe((res) => this.getAggregatedData(res));
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
