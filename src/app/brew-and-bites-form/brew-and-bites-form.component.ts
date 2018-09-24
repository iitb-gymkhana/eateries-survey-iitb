import { Component, OnInit } from '@angular/core';
import {
  name,
  email,
  ratingOptions,
  phoneNumber,
  frequency,
  frequencyOptions,
  vegStarters,
  nonVegStarters,
  regularCoffee,
  blackCoffee,
  milkshakes,
  sundaes,
  nonVegPizzas,
  vegPizzas,
  sandwiches,
  paninis,
  wraps,
  pastas,
  burgers,
  extraToppingsOrDips,
  regularTea,
  greenTea,
  infusionTea,
  mojito,
  slush,
  iceTea,
  frappe,
  brewtastic,
  onTheRocks,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
} from './variables/variables';
import { surveyOptionsMappings } from './variables/mapping';
import { BrewAndBitesSurveyModel } from './model/model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-brew-and-bites-form',
  templateUrl: './brew-and-bites-form.component.html',
  styleUrls: ['./brew-and-bites-form.component.css']
})
export class BrewAndBitesFormComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  apiUrl = `${this.apiBaseUrl}/brewandbites`;

  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new BrewAndBitesSurveyModel(
    name,
    email,
    phoneNumber,
    frequency,
    vegStarters,
    nonVegStarters,
    regularCoffee,
    blackCoffee,
    milkshakes,
    sundaes,
    nonVegPizzas,
    vegPizzas,
    sandwiches,
    paninis,
    wraps,
    pastas,
    burgers,
    extraToppingsOrDips,
    regularTea,
    greenTea,
    infusionTea,
    mojito,
    slush,
    iceTea,
    frappe,
    brewtastic,
    onTheRocks,
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
      options: frequencyOptions.map(x => this.surveyOptionsMapping['frequencies'][x]),
      values: frequencyOptions,
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegStarters',
      label: 'Rate the quality Veg Starters in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegStarters.map(x => this.surveyOptionsMapping['vegStarters'][x.id]),
      rowValues: vegStarters.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVegStarters',
      label: 'Rate the quality Non-Veg Starters in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: nonVegStarters.map(x => this.surveyOptionsMapping['nonVegStarters'][x.id]),
      rowValues: nonVegStarters.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'regularCoffee',
      label: 'Rate the quality Regular Coffee in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: regularCoffee.map(x => this.surveyOptionsMapping['regularCoffee'][x.id]),
      rowValues: regularCoffee.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'blackCoffee',
      label: 'Rate the quality Black Coffee in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: blackCoffee.map(x => this.surveyOptionsMapping['blackCoffee'][x.id]),
      rowValues: blackCoffee.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'milkshakes',
      label: 'Rate the quality Milkshakes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: milkshakes.map(x => this.surveyOptionsMapping['milkshakes'][x.id]),
      rowValues: milkshakes.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'sundaes',
      label: 'Rate the quality Sundaes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: sundaes.map(x => this.surveyOptionsMapping['sundaes'][x.id]),
      rowValues: sundaes.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVegPizzas',
      label: 'Rate the quality Non-Veg Pizzas in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: nonVegPizzas.map(x => this.surveyOptionsMapping['nonVegPizzas'][x.id]),
      rowValues: nonVegPizzas.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegPizzas',
      label: 'Rate the quality Veg Pizzas in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegPizzas.map(x => this.surveyOptionsMapping['vegPizzas'][x.id]),
      rowValues: vegPizzas.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'sandwiches',
      label: 'Rate the quality Sanwiches in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: sandwiches.map(x => this.surveyOptionsMapping['sandwiches'][x.id]),
      rowValues: sandwiches.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'paninis',
      label: 'Rate the quality Paninis in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: paninis.map(x => this.surveyOptionsMapping['paninis'][x.id]),
      rowValues: paninis.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'wraps',
      label: 'Rate the quality Wraps in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: wraps.map(x => this.surveyOptionsMapping['wraps'][x.id]),
      rowValues: wraps.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'pastas',
      label: 'Rate the quality Pastas in canteen',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: pastas.map(x => this.surveyOptionsMapping['pastas'][x.id]),
      rowValues: pastas.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'burgers',
      label: 'Rate the quality Burgers in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: burgers.map(x => this.surveyOptionsMapping['burgers'][x.id]),
      rowValues: burgers.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'extraToppingsOrDips',
      label: 'Rate the quality Extra Toppings Or Dips in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: extraToppingsOrDips.map(x => this.surveyOptionsMapping['extraToppingsOrDips'][x.id]),
      rowValues: extraToppingsOrDips.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'regularTea',
      label: 'Rate the quality Regular Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: regularTea.map(x => this.surveyOptionsMapping['regularTea'][x.id]),
      rowValues: regularTea.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'greenTea',
      label: 'Rate the quality Green Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: greenTea.map(x => this.surveyOptionsMapping['greenTea'][x.id]),
      rowValues: greenTea.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'infusionTea',
      label: 'Rate the quality Infusion Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: infusionTea.map(x => this.surveyOptionsMapping['infusionTea'][x.id]),
      rowValues: infusionTea.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'mojito',
      label: 'Rate the quality Mojito in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: mojito.map(x => this.surveyOptionsMapping['mojito'][x.id]),
      rowValues: mojito.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'slush',
      label: 'Rate the quality Slush in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: slush.map(x => this.surveyOptionsMapping['slush'][x.id]),
      rowValues: slush.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'iceTea',
      label: 'Rate the quality Ice Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: iceTea.map(x => this.surveyOptionsMapping['iceTea'][x.id]),
      rowValues: iceTea.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'frappe',
      label: 'Rate the quality Frappe in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: frappe.map(x => this.surveyOptionsMapping['frappe'][x.id]),
      rowValues: frappe.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'brewtastic',
      label: 'Rate the quality Brewtastic in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: brewtastic.map(x => this.surveyOptionsMapping['brewtastic'][x.id]),
      rowValues: brewtastic.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'onTheRocks',
      label: 'Rate the quality On The Rocks in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: onTheRocks.map(x => this.surveyOptionsMapping['onTheRocks'][x.id]),
      rowValues: onTheRocks.map(x => x.id),
      required: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'hygieneOfItems',
      label: 'Rate on overall Hygiene level maintained in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: hygieneOfItems.map(x => this.surveyOptionsMapping['hygieneOfItems'][x.id]),
      rowValues: hygieneOfItems.map(x => x.id),
      required: true
    },
    {
      type: 'radio-group',
      model: 'absenceMenuItemTimes',
      label: 'How often do you encounter with the absence of menu item or any other item?',
      options: absenceMenuItemTimesOptions.map(x => this.surveyOptionsMapping['absenceMenuItemTimes'][x]),
      values: absenceMenuItemTimesOptions,
      required: true
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
      required: true
    },
    {
      type: 'paragraph',
      model: 'otherSuggestions',
      label: 'Other Suggestions/Comments',
      placeholder: 'Your answer'
    }
  ];

  onSubmission() {
    this.surveyModel = new BrewAndBitesSurveyModel(
      name,
      email,
      phoneNumber,
      frequency,
      vegStarters,
      nonVegStarters,
      regularCoffee,
      blackCoffee,
      milkshakes,
      sundaes,
      nonVegPizzas,
      vegPizzas,
      sandwiches,
      paninis,
      wraps,
      pastas,
      burgers,
      extraToppingsOrDips,
      regularTea,
      greenTea,
      infusionTea,
      mojito,
      slush,
      iceTea,
      frappe,
      brewtastic,
      onTheRocks,
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
