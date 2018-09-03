import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  ratings,
  frequencies,
  breakfastItems,
  appetizersItems,
  biryaniVegItems,
  biryaniNonVegItems,
  tandoorItems,
  vegSpecialDishesItems,
  paneerSpecialDishesItems,
  chickenSpecialDishesItems,
  fishDishesItems,
  vegRiceAndNoodlesItems,
  nonVegRiceAndNoodlesItems,
  breadBasketItems,
  beveragesAndJuicesItems,
  dessertItems,
  hygieneOfItems,
  absenceMenuItemTimes,
  otherParameters
} from './sunrise-dhaba-survey-variables';

import { SunriseDhabaSurvey } from './model/sunrise-dhaba';

import { surveyOptionsMappings } from './sunrise-dhaba-survey-variables.mapping';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sunrise-dhaba-form',
  templateUrl: './sunrise-dhaba-form.component.html',
  styleUrls: ['./sunrise-dhaba-form.component.css']
})
export class SunriseDhabaFormComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  ratings = ratings;
  frequencies = frequencies;
  breakfastItems = breakfastItems;
  appetizersItems = appetizersItems;
  biryaniVegItems = biryaniVegItems;
  biryaniNonVegItems = biryaniNonVegItems;
  tandoorItems = tandoorItems;
  vegSpecialDishesItems = vegSpecialDishesItems;
  paneerSpecialDishesItems = paneerSpecialDishesItems;
  chickenSpecialDishesItems = chickenSpecialDishesItems;
  fishDishesItems = fishDishesItems;
  vegRiceAndNoodlesItems = vegRiceAndNoodlesItems;
  nonVegRiceAndNoodlesItems = nonVegRiceAndNoodlesItems;
  breadBasketItems = breadBasketItems;
  beveragesAndJuicesItems = beveragesAndJuicesItems;
  dessertItems = dessertItems;
  hygieneOfItems = hygieneOfItems;
  absenceMenuItemTimes = absenceMenuItemTimes;
  otherParameters = otherParameters;
  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new SunriseDhabaSurvey(
    '',
    null,
    '',
    '',
    this.breakfastItems,
    this.appetizersItems,
    this.biryaniVegItems,
    this.biryaniNonVegItems,
    this.tandoorItems,
    this.vegSpecialDishesItems,
    this.paneerSpecialDishesItems,
    this.chickenSpecialDishesItems,
    this.fishDishesItems,
    this.vegRiceAndNoodlesItems,
    this.nonVegRiceAndNoodlesItems,
    this.breadBasketItems,
    this.beveragesAndJuicesItems,
    this.dessertItems,
    this.hygieneOfItems,
    '',
    this.otherParameters,
    ''
  );

  submitted = false;
  submitting = false;

  onDataSubmission(res) {
    this.submitting = false;
    this.submitted = true;
    this.surveyModel = new SunriseDhabaSurvey(
      '',
      null,
      '',
      '',
      this.breakfastItems,
      this.appetizersItems,
      this.biryaniVegItems,
      this.biryaniNonVegItems,
      this.tandoorItems,
      this.vegSpecialDishesItems,
      this.paneerSpecialDishesItems,
      this.chickenSpecialDishesItems,
      this.fishDishesItems,
      this.vegRiceAndNoodlesItems,
      this.nonVegRiceAndNoodlesItems,
      this.breadBasketItems,
      this.beveragesAndJuicesItems,
      this.dessertItems,
      this.hygieneOfItems,
      '',
      this.otherParameters,
      ''
    );
  }
  onSubmit() {
    this.submitting = true;
    this.http.post<SunriseDhabaSurvey>(`${this.apiBaseUrl}/sunrisedhaba/submit`, this.surveyModel)
      .subscribe((res) => this.onDataSubmission(res));
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
