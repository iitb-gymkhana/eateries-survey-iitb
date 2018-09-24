import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit, AfterViewInit {
  @Input() barChartData: Object;
  @Input() canvasId: string;
  @Input() numData: number;
  @Input() index: number;

  chart: Subject<any> = new BehaviorSubject('loading');

  backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ];

  borderColor = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const id = document.getElementById(this.canvasId);

    const _chart = new Chart(id, {
      type: 'bar',
      data: {
        labels: this.barChartData['labels'],
        datasets: [{
          label: this.barChartData['title'],
          data: this.barChartData['data'],
          borderWidth: 1,
          backgroundColor: this.backgroundColor[this.index % this.backgroundColor.length],
          borderColor: this.borderColor[this.index % this.borderColor.length]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: this.numData
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

    this.chart.next(_chart);
  }

}
