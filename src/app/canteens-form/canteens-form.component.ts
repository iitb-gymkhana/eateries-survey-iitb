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
  teaCoffee,
  milkshakes,
  juice,
  paratha,
  franky ,
  eggItems,
  riceAndNoodles,
  rice,
  dryChickenAndPaneer,
  sandwich,
  dryBhaji,
  vegAndPaneerGravy,
  nonVeg,
  dal,
  maggi,
  soups,
  dosa,
  extras,
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
    teaCoffee,
    milkshakes,
    juice,
    paratha,
    franky ,
    eggItems,
    riceAndNoodles,
    rice,
    dryChickenAndPaneer,
    sandwich,
    dryBhaji,
    vegAndPaneerGravy,
    nonVeg,
    dal,
    maggi,
    soups,
    dosa,
    extras,
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
      label: 'Which canteen would you want to provide feedback for?',
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
      model: 'teaCoffee',
      checkboxLabel: 'Tea/Coffee',
      label: 'Rate the quality of Tea/Coffee in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: teaCoffee.map(x => this.surveyOptionsMapping['teaCoffee'][x.id]),
      rowValues: teaCoffee.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'milkshakes',
      checkboxLabel: 'Milkshakes',
      label: 'Rate the quality of Milkshakes in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: milkshakes.map(x => this.surveyOptionsMapping['milkshakes'][x.id]),
      rowValues: milkshakes.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'juice',
      checkboxLabel: 'Juice',
      label: 'Rate the quality of Juice in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: juice.map(x => this.surveyOptionsMapping['juice'][x.id]),
      rowValues: juice.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'paratha',
      checkboxLabel: 'Paratha',
      label: 'Rate the quality of Paratha in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: paratha.map(x => this.surveyOptionsMapping['paratha'][x.id]),
      rowValues: paratha.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'franky',
      checkboxLabel: 'Franky',
      label: 'Rate the quality of Franky in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: franky.map(x => this.surveyOptionsMapping['franky'][x.id]),
      rowValues: franky.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'eggItems',
      checkboxLabel: 'Egg Items',
      label: 'Rate the quality of Egg Items in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: eggItems.map(x => this.surveyOptionsMapping['eggItems'][x.id]),
      rowValues: eggItems.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'riceAndNoodles',
      checkboxLabel: 'Rice and Noodles',
      label: 'Rate the quality of Rice and Noodles in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: riceAndNoodles.map(x => this.surveyOptionsMapping['riceAndNoodles'][x.id]),
      rowValues: riceAndNoodles.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'rice',
      checkboxLabel: 'Rice',
      label: 'Rate the quality of Rice in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: rice.map(x => this.surveyOptionsMapping['rice'][x.id]),
      rowValues: rice.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'dryChickenAndPaneer',
      checkboxLabel: 'Dry Chicken and Paneer',
      label: 'Rate the quality of Dry Chicken and Paneer in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: dryChickenAndPaneer.map(x => this.surveyOptionsMapping['dryChickenAndPaneer'][x.id]),
      rowValues: dryChickenAndPaneer.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'sandwich',
      checkboxLabel: 'Sandwich',
      label: 'Rate the quality of Sandwich in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: sandwich.map(x => this.surveyOptionsMapping['sandwich'][x.id]),
      rowValues: sandwich.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'dryBhaji',
      checkboxLabel: 'Dry Bhaji',
      label: 'Rate the quality of Dry Bhaji in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: dryBhaji.map(x => this.surveyOptionsMapping['dryBhaji'][x.id]),
      rowValues: dryBhaji.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegAndPaneerGravy',
      checkboxLabel: 'Veg and Paneer Gravy',
      label: 'Rate the quality of Veg and Paneer Gravy in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegAndPaneerGravy.map(x => this.surveyOptionsMapping['vegAndPaneerGravy'][x.id]),
      rowValues: vegAndPaneerGravy.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVeg',
      checkboxLabel: 'Non Veg',
      label: 'Rate the quality of Non Veg in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: nonVeg.map(x => this.surveyOptionsMapping['nonVeg'][x.id]),
      rowValues: nonVeg.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'dal',
      checkboxLabel: 'Dal',
      label: 'Rate the quality of Dal in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: dal.map(x => this.surveyOptionsMapping['dal'][x.id]),
      rowValues: dal.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'maggi',
      checkboxLabel: 'Maggi',
      label: 'Rate the quality of Maggi in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: maggi.map(x => this.surveyOptionsMapping['maggi'][x.id]),
      rowValues: maggi.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'soups',
      checkboxLabel: 'Soups',
      label: 'Rate the quality of Soups in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: soups.map(x => this.surveyOptionsMapping['soups'][x.id]),
      rowValues: soups.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'dosa',
      checkboxLabel: 'Dosa',
      label: 'Rate the quality of Dosa in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: dosa.map(x => this.surveyOptionsMapping['dosa'][x.id]),
      rowValues: dosa.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'extras',
      checkboxLabel: 'Extras',
      label: 'Rate the quality of Extras in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: extras.map(x => this.surveyOptionsMapping['extras'][x.id]),
      rowValues: extras.map(x => x.id),
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
      teaCoffee,
      milkshakes,
      juice,
      paratha,
      franky ,
      eggItems,
      riceAndNoodles,
      rice,
      dryChickenAndPaneer,
      sandwich,
      dryBhaji,
      vegAndPaneerGravy,
      nonVeg,
      dal,
      maggi,
      soups,
      dosa,
      extras,
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
