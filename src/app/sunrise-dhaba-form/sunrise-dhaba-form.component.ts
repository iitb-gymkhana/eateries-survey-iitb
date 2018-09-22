import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  name,
  email,
  ratingOptions,
  phoneNumber,
  frequency,
  frequencyOptions,
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
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
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
  name = name;
  email = email;
  ratingOptions = ratingOptions;
  phoneNumber = phoneNumber;
  frequency = frequency;
  frequencyOptions = frequencyOptions;
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
  absenceMenuItemTimesOptions = absenceMenuItemTimesOptions;
  otherParameters = otherParameters;
  otherSuggestions = otherSuggestions;
  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new SunriseDhabaSurvey(
    this.name,
    this.phoneNumber,
    this.email,
    this.frequency,
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
    this.absenceMenuItemTimes,
    this.otherParameters,
    this.otherSuggestions
  );

  submitted = false;
  submitting = false;

  form = [
    {
      type: 'input',
      model: 'name',
      label: 'Name',
      required: true
    },
    {
      type: 'input',
      model: 'phoneNumber',
      label: 'Mobile Number',
      required: true
    },
    {
      type: 'input',
      model: 'email',
      label: 'Email Address',
      pattern: '[^ @]*@[^ @]*',
      required: true
    },
    {
      type: 'radio-group',
      model: 'frequency',
      label: 'How frequently do you visit canteen?',
      options: this.frequencyOptions.map(x => this.surveyOptionsMapping['frequencies'][x]),
      values: this.frequencyOptions,
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'breakfastItems',
      label: 'Rate the quality breakfast items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.breakfastItems.map(x => this.surveyOptionsMapping['breakfastItems'][x.id]),
      rowValues: this.breakfastItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'appetizersItems',
      label: 'Rate the quality appetizers items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.appetizersItems.map(x => this.surveyOptionsMapping['appetizersItems'][x.id]),
      rowValues: this.appetizersItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'biryaniVegItems',
      label: 'Rate the quality biryani veg items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.biryaniVegItems.map(x => this.surveyOptionsMapping['biryaniVegItems'][x.id]),
      rowValues: this.biryaniVegItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'biryaniNonVegItems',
      label: 'Rate the quality biryani non veg items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.biryaniNonVegItems.map(x => this.surveyOptionsMapping['biryaniNonVegItems'][x.id]),
      rowValues: this.biryaniNonVegItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'tandoorItems',
      label: 'Rate the quality tandoor items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.tandoorItems.map(x => this.surveyOptionsMapping['tandoorItems'][x.id]),
      rowValues: this.tandoorItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegSpecialDishesItems',
      label: 'Rate the quality veg special dishes items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.vegSpecialDishesItems.map(x => this.surveyOptionsMapping['vegSpecialDishesItems'][x.id]),
      rowValues: this.vegSpecialDishesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'paneerSpecialDishesItems',
      label: 'Rate the quality paneer special dishes items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.paneerSpecialDishesItems.map(x => this.surveyOptionsMapping['paneerSpecialDishesItems'][x.id]),
      rowValues: this.paneerSpecialDishesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'chickenSpecialDishesItems',
      label: 'Rate the quality chicken special dishes items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.chickenSpecialDishesItems.map(x => this.surveyOptionsMapping['chickenSpecialDishesItems'][x.id]),
      rowValues: this.chickenSpecialDishesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'fishDishesItems',
      label: 'Rate the quality fish dishes items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.fishDishesItems.map(x => this.surveyOptionsMapping['fishDishesItems'][x.id]),
      rowValues: this.fishDishesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegRiceAndNoodlesItems',
      label: 'Rate the quality veg rice and noodles items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.vegRiceAndNoodlesItems.map(x => this.surveyOptionsMapping['vegRiceAndNoodlesItems'][x.id]),
      rowValues: this.vegRiceAndNoodlesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVegRiceAndNoodlesItems',
      label: 'Rate the quality non veg rice and noodles items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.nonVegRiceAndNoodlesItems.map(x => this.surveyOptionsMapping['nonVegRiceAndNoodlesItems'][x.id]),
      rowValues: this.nonVegRiceAndNoodlesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'breadBasketItems',
      label: 'Rate the quality bread breakfast items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.breadBasketItems.map(x => this.surveyOptionsMapping['breadBasketItems'][x.id]),
      rowValues: this.breadBasketItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'beveragesAndJuicesItems',
      label: 'Rate the quality beverages and juices items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.beveragesAndJuicesItems.map(x => this.surveyOptionsMapping['beveragesAndJuicesItems'][x.id]),
      rowValues: this.beveragesAndJuicesItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'dessertItems',
      label: 'Rate the quality dessert items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.dessertItems.map(x => this.surveyOptionsMapping['dessertItems'][x.id]),
      rowValues: this.dessertItems.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'hygieneOfItems',
      label: 'Rate on overall Hygiene level maintained in Canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.hygieneOfItems.map(x => this.surveyOptionsMapping['hygieneOfItems'][x.id]),
      rowValues: this.hygieneOfItems.map(x => x.id),
      required: true
    },
    {
      type: 'radio-group',
      model: 'absenceMenuItemTimes',
      label: 'How often do you encounter with the absence of menu item or any other item?',
      options: this.absenceMenuItemTimesOptions.map(x => this.surveyOptionsMapping['absenceMenuItemTimes'][x]),
      values: this.absenceMenuItemTimesOptions,
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'otherParameters',
      label: 'Other Parameters',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.otherParameters.map(x => this.surveyOptionsMapping['otherParameters'][x.id]),
      rowValues: this.otherParameters.map(x => x.id),
      required: true
    },
    {
      type: 'paragraph',
      model: 'otherSuggestions',
      label: 'Other Suggestions/Comments',
      placeholder: 'Your answer'
    }
  ];

  onDataSubmission(res) {
    this.submitting = false;
    this.submitted = true;
    this.surveyModel = new SunriseDhabaSurvey(
      this.name,
      this.phoneNumber,
      this.email,
      this.frequency,
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
      this.absenceMenuItemTimes,
      this.otherParameters,
      this.otherSuggestions
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
