import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
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
} from '../survey-variables';
import { surveyOptionsMappings } from '../survey-variables.mapping';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  apiBaseUrl = environment.apiBaseUrl;
  name = name;
  phoneNumber = phoneNumber;
  email = email;
  ratingOptions = ratingOptions;
  hostel = hostel;
  hostelOptions = hostelOptions;
  frequency = frequency;
  frequencyOptions = frequencyOptions;
  foodItems = foodItems;
  hygieneOfItems = hygieneOfItems;
  absenceMenuItemTimes = absenceMenuItemTimes;
  absenceMenuItemTimesOptions = absenceMenuItemTimesOptions;
  otherParameters = otherParameters;
  surveyOptionsMapping = surveyOptionsMappings;
  otherSuggestions = otherSuggestions;

  surveyModel = new Survey(
    this.name,
    this.phoneNumber,
    this.email,
    this.hostel,
    this.frequency,
    this.foodItems,
    this.hygieneOfItems,
    this.absenceMenuItemTimes,
    this.otherParameters,
    this.otherSuggestions
  );

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
      type: 'select',
      model: 'hostel',
      label: 'Hostel',
      options: this.hostelOptions.map(x => `Hostel ${this.surveyOptionsMapping['hostels'][x]}`),
      values: this.hostelOptions,
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
      model: 'foodItems',
      label: 'Rate the quality of food items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: this.ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: this.ratingOptions,
      rowLabels: this.foodItems.map(x => this.surveyOptionsMapping['foodItems'][x.id]),
      rowValues: this.foodItems.map(x => x.id),
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
  // surveyModel = new Survey('s@s.com', 'd', 'd', this.foodItems, this.hygieneOfItems, 'd', this.otherParameters, 'd');

  submitted = false;
  submitting = false;

  onDataSubmission(res) {
    this.submitting = false;
    this.submitted = true;
    this.surveyModel = new Survey(
      this.name,
      this.phoneNumber,
      this.email,
      this.hostel,
      this.frequency,
      this.foodItems,
      this.hygieneOfItems,
      this.absenceMenuItemTimes,
      this.otherParameters,
      this.otherSuggestions
    );
  }
  onSubmit() {
    this.submitting = true;
    this.http.post<Survey>(`${this.apiBaseUrl}/canteens/submit`, this.surveyModel)
      .subscribe(
        (res) => this.onDataSubmission(res),
        (err) => console.log('failed'));
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
