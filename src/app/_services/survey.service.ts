import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  apiBaseUrl = environment.apiBaseUrl;

  getHostelData(hostel): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/canteens/${hostel}`
    );
  }

  getCanteensData(): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/canteens`
    );
  }

  getAromasData(): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/aromas`
    );
  }

  saveCanteensData(data): Observable<any> {
    return this.http.post(
      `${this.apiBaseUrl}/canteens`,
      data
    );
  }

  saveAromasData(data): Observable<any> {
    return this.http.post(
      `${this.apiBaseUrl}/aromas`,
      data
    );
  }

  constructor(
    private http: HttpClient
  ) { }
}
