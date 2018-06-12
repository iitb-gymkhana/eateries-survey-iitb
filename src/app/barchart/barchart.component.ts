import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit, AfterViewInit {
  @Input() data: Object;

  chart = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const id = document.getElementById(this.data['id']);

    const dataset = [];
    let i;
    for (i = 0; i < this.data['labels'].length; i++) {
      const j = this.data['dataset'][this.data['labels'][i]];
      j ? dataset.push(j) : dataset.push(0);
    }
    console.log(this.data['labels']);
    console.log(dataset);
    this.chart = new Chart(id, {
      type: 'bar',
      data: {
          labels: this.data['labels'],
          datasets: [{
              label: this.data['title'],
              data: dataset,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                ticks: {
                  autoSkip: false
                }
              }]
          }
      }
  });
  }

}
