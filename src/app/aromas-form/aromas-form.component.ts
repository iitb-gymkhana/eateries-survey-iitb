import { Component, OnInit } from '@angular/core';
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
} from './variables/variables';
import { surveyOptionsMappings } from './variables/mapping';
import { AromasSurveyModel } from './model/model';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-aromas-form',
  templateUrl: './aromas-form.component.html',
  styleUrls: ['./aromas-form.component.css']
})
export class AromasFormComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  apiUrl = `${this.apiBaseUrl}/aromas`;

  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new AromasSurveyModel (
    name,
    phoneNumber,
    email,
    frequency,
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
      type: 'radio-group',
      model: 'frequency',
      label: 'How frequently do you visit Aromas?',
      options: frequencyOptions.map(x => this.surveyOptionsMapping['frequencies'][x]),
      values: frequencyOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'breakfastItems',
      checkboxLabel: 'Breakfast Items',
      label: 'Rate the quality breakfast items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: breakfastItems.map(x => this.surveyOptionsMapping['breakfastItems'][x.id]),
      rowValues: breakfastItems.map(x => x.id),
      required: true,
      formRequired: false
    },
    {
      type: 'multiple-choice-grid',
      model: 'appetizersItems',
      label: 'Rate the quality appetizers items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: appetizersItems.map(x => this.surveyOptionsMapping['appetizersItems'][x.id]),
      rowValues: appetizersItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Appetizer Items'
    },
    {
      type: 'multiple-choice-grid',
      model: 'biryaniVegItems',
      label: 'Rate the quality biryani veg items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: biryaniVegItems.map(x => this.surveyOptionsMapping['biryaniVegItems'][x.id]),
      rowValues: biryaniVegItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Biryani Veg Items'
    },
    {
      type: 'multiple-choice-grid',
      model: 'biryaniNonVegItems',
      label: 'Rate the quality biryani non veg items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: biryaniNonVegItems.map(x => this.surveyOptionsMapping['biryaniNonVegItems'][x.id]),
      rowValues: biryaniNonVegItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Biryani Non Veg Items'
    },
    {
      type: 'multiple-choice-grid',
      model: 'tandoorItems',
      label: 'Rate the quality tandoor items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: tandoorItems.map(x => this.surveyOptionsMapping['tandoorItems'][x.id]),
      rowValues: tandoorItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Tandoor Items'
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegSpecialDishesItems',
      label: 'Rate the quality veg special dishes items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegSpecialDishesItems.map(x => this.surveyOptionsMapping['vegSpecialDishesItems'][x.id]),
      rowValues: vegSpecialDishesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Veg Special Dishes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'paneerSpecialDishesItems',
      label: 'Rate the quality paneer special dishes items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: paneerSpecialDishesItems.map(x => this.surveyOptionsMapping['paneerSpecialDishesItems'][x.id]),
      rowValues: paneerSpecialDishesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Paneer Special Dishes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'chickenSpecialDishesItems',
      label: 'Rate the quality chicken special dishes items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: chickenSpecialDishesItems.map(x => this.surveyOptionsMapping['chickenSpecialDishesItems'][x.id]),
      rowValues: chickenSpecialDishesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Chicken Special Dishes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'fishDishesItems',
      label: 'Rate the quality fish dishes items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: fishDishesItems.map(x => this.surveyOptionsMapping['fishDishesItems'][x.id]),
      rowValues: fishDishesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Fish Dishes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegRiceAndNoodlesItems',
      label: 'Rate the quality veg rice and noodles items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegRiceAndNoodlesItems.map(x => this.surveyOptionsMapping['vegRiceAndNoodlesItems'][x.id]),
      rowValues: vegRiceAndNoodlesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Veg Rice and Noodles'
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVegRiceAndNoodlesItems',
      label: 'Rate the quality non veg rice and noodles items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: nonVegRiceAndNoodlesItems.map(x => this.surveyOptionsMapping['nonVegRiceAndNoodlesItems'][x.id]),
      rowValues: nonVegRiceAndNoodlesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Non Veg Rice and Noodles'
    },
    {
      type: 'multiple-choice-grid',
      model: 'breadBasketItems',
      label: 'Rate the quality bread breakfast items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: breadBasketItems.map(x => this.surveyOptionsMapping['breadBasketItems'][x.id]),
      rowValues: breadBasketItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Bread and Basket Items'
    },
    {
      type: 'multiple-choice-grid',
      model: 'beveragesAndJuicesItems',
      label: 'Rate the quality beverages and juices items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: beveragesAndJuicesItems.map(x => this.surveyOptionsMapping['beveragesAndJuicesItems'][x.id]),
      rowValues: beveragesAndJuicesItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Beverages and Juices'
    },
    {
      type: 'multiple-choice-grid',
      model: 'dessertItems',
      label: 'Rate the quality dessert items in Aromas',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: dessertItems.map(x => this.surveyOptionsMapping['dessertItems'][x.id]),
      rowValues: dessertItems.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Dessert'
    },
    {
      type: 'multiple-choice-grid',
      model: 'hygieneOfItems',
      label: 'Rate on overall Hygiene level maintained in Aromas',
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
      placeholder: 'Your answer'
    }
  ];

  onSubmission() {
    this.surveyModel = new AromasSurveyModel (
      name,
      phoneNumber,
      email,
      frequency,
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
      otherParameters,
      otherSuggestions
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
