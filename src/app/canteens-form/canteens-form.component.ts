import { Component, OnInit } from '@angular/core';
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
} from './survey-variables/variables';
import { surveyOptionsMappings } from './survey-variables/mapping';
import { environment } from '../../environments/environment';
import { CanteensSurveyModel } from './model/model';

@Component({
  selector: 'app-canteens-form',
  templateUrl: './canteens-form.component.html',
  styleUrls: ['./canteens-form.component.css']
})
export class CanteensFormComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  apiUrl = `${this.apiBaseUrl}/canteens`;

  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new CanteensSurveyModel(
    name,
    phoneNumber,
    email,
    hostel,
    frequency,
    foodItems,
    hygieneOfItems,
    absenceMenuItemTimes,
    otherParameters,
    otherSuggestions
  );

  form = [
    {
      type: 'input',
      model: 'name',
      label: 'Name',
      required: true,
      formRequired: true
    },
    {
      type: 'input',
      model: 'phoneNumber',
      label: 'Mobile Number',
      required: true,
      formRequired: true
    },
    {
      type: 'input',
      model: 'email',
      label: 'Email Address',
      pattern: '[^ @]*@[^ @]*',
      required: true,
      formRequired: true
    },
    {
      type: 'select',
      model: 'hostel',
      label: 'Hostel',
      options: hostelOptions.map(x => `Hostel ${this.surveyOptionsMapping['hostels'][x]}`),
      values: hostelOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'radio-group',
      model: 'frequency',
      label: 'How frequently do you visit canteen?',
      options: frequencyOptions.map(x => this.surveyOptionsMapping['frequencies'][x]),
      values: frequencyOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'foodItems',
      checkboxLabel: 'Food Items',
      label: 'Rate the quality of food items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: foodItems.map(x => this.surveyOptionsMapping['foodItems'][x.id]),
      rowValues: foodItems.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'hygieneOfItems',
      label: 'Rate on overall Hygiene level maintained in Canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: hygieneOfItems.map(x => this.surveyOptionsMapping['hygieneOfItems'][x.id]),
      rowValues: hygieneOfItems.map(x => x.id),
      required: true,
      formRequired: true
    },
    {
      type: 'radio-group',
      model: 'absenceMenuItemTimes',
      label: 'How often do you encounter with the absence of menu item or any other item?',
      options: absenceMenuItemTimesOptions.map(x => this.surveyOptionsMapping['absenceMenuItemTimes'][x]),
      values: absenceMenuItemTimesOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'otherParameters',
      label: 'Other Parameters',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: otherParameters.map(x => this.surveyOptionsMapping['otherParameters'][x.id]),
      rowValues: otherParameters.map(x => x.id),
      required: true,
      formRequired: true
    },
    {
      type: 'paragraph',
      model: 'otherSuggestions',
      label: 'Other Suggestions/Comments',
      placeholder: 'Your answer',
      formRequired: true
    }
  ];

  onSubmission() {
    this.surveyModel = new CanteensSurveyModel(
      name,
      phoneNumber,
      email,
      hostel,
      frequency,
      foodItems,
      hygieneOfItems,
      absenceMenuItemTimes,
      otherParameters,
      otherSuggestions
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
