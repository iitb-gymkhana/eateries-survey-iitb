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
  foodItems = [
    {name: 'Tea/Coffee', rating: ''},
    {name: 'Soups', rating: ''},
    {name: 'Milkshakes', rating: ''},
    {name: 'Momos', rating: ''},
    {name: 'Parathas', rating: ''},
    {name: 'South indian dishes', rating: ''},
    {name: 'Maggi', rating: ''},
    {name: 'Veg frankies', rating: ''},
    {name: 'Chicken frankies', rating: ''},
    {name: 'Veg rice and noodles', rating: ''},
    {name: 'Chicken rice and noodles', rating: ''},
    {name: 'Veg Main Course', rating: ''},
    {name: 'Paneer Main course', rating: ''},
    {name: 'Chicken Main Course', rating: ''},
    {name: 'Egg items', rating: ''},
    {name: 'Sandwiches', rating: ''},
    {name: 'Aamras', rating: ''},
    {name: 'Nimbu pani', rating: ''},
    {name: 'Patties/rolls', rating: ''}];

  hygieneOfItems = [
    {hygieneOf: 'Cleanliness of utensils', level: ''},
    {hygieneOf: 'Cleanliness of Tables', level: ''},
    {hygieneOf: 'Cleanliness of cook', level: ''},
    {hygieneOf: 'Overall outlet cleanliness', level: ''}];

  absenceMenuItems = ['Once', 'Two or three times a week', 'Rarely'];
  otherParameters = ['Staff Behaviour', 'Serving Time', 'Overall Experience'];
  ratings = ['1', '2', '3', '4', '5', 'No idea'];
  
  surveyModel = new Survey('', '', '', this.foodItems, this.hygieneOfItems, '', [], '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this after debugging
  get diagnostic() { return JSON.stringify(this.surveyModel); }

  constructor() { }

  ngOnInit() {
  }

}
