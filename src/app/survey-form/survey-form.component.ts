import { Component, OnInit } from '@angular/core';
import { Survey } from "../survey";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  hostels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  frequencies = ['Almost daily', '2-3 times a week', 'Almost every week', 'Less than once a week'];
  foodItems = ['Tea/Coffee',
    'Soups',
    'Milkshakes',
    'Momos',
    'Parathas',
    'South indian dishes',
    'Maggi',
    'Veg frankies',
    'Chicken frankies',
    'Veg rice and noodles',
    'Chicken rice and noodles',
    'Veg Main Course',
    'Paneer Main course',
    'Chicken Main Course',
    'Egg items',
    'Sandwiches',
    'Aamras',
    'Nimbu pani',
    'Patties/rolls'];
  hygieneLevels = ['Cleanliness of utensils',	
    'Cleanliness of Tables',
    'Cleanliness of cook',
    'Overall outlet cleanliness'];
  absenceMenuItems = ['Once', 'Two or three times a week', 'Rarely'];
  otherParameters = ['Staff Behaviour', 'Serving Time', 'Overall Experience'];
  ratings = ['1', '2', '3', '4', '5', 'No idea'];
  
  surveyModel = new Survey(
    '',
    this.hostels[0],
    this.frequencies[0],
    this.foodItems,
    this.hygieneLevels,
    this.absenceMenuItems[0],
    this.otherParameters);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this after debugging
  get diagnostic() { return JSON.stringify(this.surveyModel); }

  constructor() { }

  ngOnInit() {
  }

}
