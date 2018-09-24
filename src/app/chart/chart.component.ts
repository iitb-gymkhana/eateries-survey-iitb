import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() surveyOptionsMappings: any;
  @Input() surveyData: any;

  numData = 0;
  chartData = [];

  constructor(
    public snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    const fields = Object.keys(this.surveyData);

    if (fields.length !== 0) {
      const _values = Object.values(this.surveyData['frequency']);
      for (let i = 0; i < _values.length; i++) {
        this.numData = +(_values[i]);
      }

      for (let i = 0; i < fields.length; i++) {
        const _data = {
          title: fields[i]
        };

        let labels;
        const title = _data['title'];

        if (title === 'hostel') {
          labels = Object.values(this.surveyOptionsMappings['hostels']);
        } else if (title === 'frequency') {
          labels = Object.values(this.surveyOptionsMappings['frequencies']);
        } else if (title === 'absenceMenuItemTimes') {
          labels = Object.values(this.surveyOptionsMappings['absenceMenuItemTimes']);
        } else {
          labels = Object.values(this.surveyOptionsMappings['ratings']);
        }
        _data['labels'] = labels;

        _data['data'] = labels.map((x) => this.surveyData[title] ? this.surveyData[title][x] : 0);

        this.chartData.push(_data);
      }
    }
  }


}
