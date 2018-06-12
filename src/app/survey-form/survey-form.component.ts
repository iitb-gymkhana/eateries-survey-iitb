import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ratings, hostels, frequencies, foodItems, hygieneOfItems, absenceMenuItemTimes, otherParameters } from '../survey-variables';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  apiBaseUrl = environment.apiBaseUrl;
  ratings = ratings;
  hostels = hostels;
  frequencies = frequencies;
  foodItems = foodItems;
  hygieneOfItems = hygieneOfItems;
  absenceMenuItemTimes = absenceMenuItemTimes;
  otherParameters = otherParameters;

  surveyModel = new Survey('', '', '', this.foodItems, this.hygieneOfItems, '', this.otherParameters, '');
  // surveyModel = new Survey('s@s.com', 'd', 'd', this.foodItems, this.hygieneOfItems, 'd', this.otherParameters, 'd');

  submitted = false;
  submitting = false;

  onDataSubmission(res) {
    console.log(res);
    this.submitting = false;
    this.submitted = true;
    this.surveyModel = new Survey('', '', '', this.foodItems, this.hygieneOfItems, '', this.otherParameters, '');

  }
  onSubmit() {
    this.submitting = true;
    this.http.post<Survey>(`${this.apiBaseUrl}/submit`, this.surveyModel)
      .subscribe((res) => this.onDataSubmission(res));
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
