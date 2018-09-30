import { Component, OnInit } from '@angular/core';
import {
  name,
  email,
  ratingOptions,
  phoneNumber,
  frequency,
  frequencyOptions,
  regularFruitJuice,
  mixedFruitJuice,
  iceCreamShakes,
  milkShakes,
  fruitMilkShakes,
  desserts,
  iceCreamFlavours,
  hotBeverages,
  coldBeverages,
  quickBites,
  miniMeals,
  paranthas,
  riceMeals,
  maggi,
  chaat,
  chinese,
  extras,
  sandwich,
  frankie,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
} from './variables/variables';

import { surveyOptionsMappings } from './variables/mapping';
import { CampusHubSurveyModel } from './model/model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-campus-hub-form',
  templateUrl: './campus-hub-form.component.html',
  styleUrls: ['./campus-hub-form.component.css']
})
export class CampusHubFormComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  apiUrl = `${this.apiBaseUrl}/campushub`;

  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new CampusHubSurveyModel(
    name,
    email,
    phoneNumber,
    frequency,
    regularFruitJuice,
    mixedFruitJuice,
    iceCreamShakes,
    milkShakes,
    fruitMilkShakes,
    desserts,
    iceCreamFlavours,
    hotBeverages,
    coldBeverages,
    quickBites,
    miniMeals,
    paranthas,
    riceMeals,
    maggi,
    chaat,
    chinese,
    extras,
    sandwich,
    frankie,
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
      formRequired: true,
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
      label: 'How frequently do you visit B&B?',
      options: frequencyOptions.map(x => this.surveyOptionsMapping['frequencies'][x]),
      values: frequencyOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'regularFruitJuice',
      label: 'Rate the quality of Regular Fruite Juice in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: regularFruitJuice.map(x => this.surveyOptionsMapping['regularFruitJuice'][x.id]),
      rowValues: regularFruitJuice.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Regular Fruite Juice'
    },
    {
      type: 'multiple-choice-grid',
      model: 'mixedFruitJuice',
      label: 'Rate the quality of Mixed Fruit Juice in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: mixedFruitJuice.map(x => this.surveyOptionsMapping['mixedFruitJuice'][x.id]),
      rowValues: mixedFruitJuice.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Mixed Fruit Juice'
    },
    {
      type: 'multiple-choice-grid',
      model: 'iceCreamShakes',
      label: 'Rate the quality of Ice Cream Shakes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: iceCreamShakes.map(x => this.surveyOptionsMapping['iceCreamShakes'][x.id]),
      rowValues: iceCreamShakes.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Ice Cream Shakes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'milkShakes',
      label: 'Rate the quality of Milkshakes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: milkShakes.map(x => this.surveyOptionsMapping['milkShakes'][x.id]),
      rowValues: milkShakes.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Milkshakes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'fruitMilkShakes',
      label: 'Rate the quality of Fruit Milk Shakes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: fruitMilkShakes.map(x => this.surveyOptionsMapping['fruitMilkShakes'][x.id]),
      rowValues: fruitMilkShakes.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Fruit Milk Shakes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'desserts',
      label: 'Rate the quality of Desserts in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: desserts.map(x => this.surveyOptionsMapping['desserts'][x.id]),
      rowValues: desserts.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Desserts'
    },
    {
      type: 'multiple-choice-grid',
      model: 'iceCreamFlavours',
      label: 'Rate the quality of Ice Cream Flavours in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: iceCreamFlavours.map(x => this.surveyOptionsMapping['iceCreamFlavours'][x.id]),
      rowValues: iceCreamFlavours.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Ice Cream Flavours'
    },
    {
      type: 'multiple-choice-grid',
      model: 'hotBeverages',
      label: 'Rate the quality of Hot Beverages in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: hotBeverages.map(x => this.surveyOptionsMapping['hotBeverages'][x.id]),
      rowValues: hotBeverages.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Hot Beverages'
    },
    {
      type: 'multiple-choice-grid',
      model: 'coldBeverages',
      label: 'Rate the quality of Cold Beverages in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: coldBeverages.map(x => this.surveyOptionsMapping['coldBeverages'][x.id]),
      rowValues: coldBeverages.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Cold Beverages'
    },
    {
      type: 'multiple-choice-grid',
      model: 'quickBites',
      label: 'Rate the quality of Quick Bites in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: quickBites.map(x => this.surveyOptionsMapping['quickBites'][x.id]),
      rowValues: quickBites.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Quick Bites'
    },
    {
      type: 'multiple-choice-grid',
      model: 'miniMeals',
      label: 'Rate the quality of Mini Meals in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: miniMeals.map(x => this.surveyOptionsMapping['miniMeals'][x.id]),
      rowValues: miniMeals.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Mini Meals'
    },
    {
      type: 'multiple-choice-grid',
      model: 'paranthas',
      label: 'Rate the quality of Paranthas in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: paranthas.map(x => this.surveyOptionsMapping['paranthas'][x.id]),
      rowValues: paranthas.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Paranthas'
    },
    {
      type: 'multiple-choice-grid',
      model: 'riceMeals',
      label: 'Rate the quality of Rice Meals in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: riceMeals.map(x => this.surveyOptionsMapping['riceMeals'][x.id]),
      rowValues: riceMeals.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Rice Meals'
    },
    {
      type: 'multiple-choice-grid',
      model: 'maggi',
      label: 'Rate the quality of Maggi in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: maggi.map(x => this.surveyOptionsMapping['maggi'][x.id]),
      rowValues: maggi.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Maggi'
    },
    {
      type: 'multiple-choice-grid',
      model: 'chaat',
      label: 'Rate the quality of Chaat in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: chaat.map(x => this.surveyOptionsMapping['chaat'][x.id]),
      rowValues: chaat.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Chaat'
    },
    {
      type: 'multiple-choice-grid',
      model: 'chinese',
      label: 'Rate the quality of Chinese in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: chinese.map(x => this.surveyOptionsMapping['chinese'][x.id]),
      rowValues: chinese.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Chinese'
    },
    {
      type: 'multiple-choice-grid',
      model: 'extras',
      label: 'Rate the quality of Extras in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: extras.map(x => this.surveyOptionsMapping['extras'][x.id]),
      rowValues: extras.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Extras'
    },
    {
      type: 'multiple-choice-grid',
      model: 'sandwich',
      label: 'Rate the quality of Sandwich in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: sandwich.map(x => this.surveyOptionsMapping['sandwich'][x.id]),
      rowValues: sandwich.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Sandwich'
    },
    {
      type: 'multiple-choice-grid',
      model: 'frankie',
      label: 'Rate the quality of Frankie in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: frankie.map(x => this.surveyOptionsMapping['frankie'][x.id]),
      rowValues: frankie.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Frankie'
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
    this.surveyModel = new CampusHubSurveyModel(
      name,
      email,
      phoneNumber,
      frequency,
      regularFruitJuice,
      mixedFruitJuice,
      iceCreamShakes,
      milkShakes,
      fruitMilkShakes,
      desserts,
      iceCreamFlavours,
      hotBeverages,
      coldBeverages,
      quickBites,
      miniMeals,
      paranthas,
      riceMeals,
      maggi,
      chaat,
      chinese,
      extras,
      sandwich,
      frankie,
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
