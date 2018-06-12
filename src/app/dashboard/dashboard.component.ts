import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Survey } from '../survey';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  hostels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

  getHostelData($event) {
    const hostel = $event.value;
    this.http.get<Survey[]>(`${this.apiBaseUrl}/hostel/${hostel}`)
      .subscribe((res) => console.log(res));
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
