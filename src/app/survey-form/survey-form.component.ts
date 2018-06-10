import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  ratings = ['1', '2', '3', '4', '5', 'No idea'];

  hostels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  frequencies = ['Almost daily', '2-3 times a week', 'Almost every week', 'Less than once a week'];
  foodItems = [
    {name: 'Tea/Coffee', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Soups', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Milkshakes', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Momos', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Parathas', rating: this.ratings[this.ratings.length - 1]},
    {name: 'South indian dishes', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Maggi', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Veg frankies', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Chicken frankies', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Veg rice and noodles', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Chicken rice and noodles', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Veg Main Course', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Paneer Main course', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Chicken Main Course', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Egg items', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Sandwiches', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Aamras', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Nimbu pani', rating: this.ratings[this.ratings.length - 1]},
    {name: 'Patties/rolls', rating: this.ratings[this.ratings.length - 1]}];

  hygieneOfItems = [
    {hygieneOf: 'Cleanliness of utensils', level: this.ratings[this.ratings.length - 1]},
    {hygieneOf: 'Cleanliness of Tables', level: this.ratings[this.ratings.length - 1]},
    {hygieneOf: 'Cleanliness of cook', level: this.ratings[this.ratings.length - 1]},
    {hygieneOf: 'Overall outlet cleanliness', level: this.ratings[this.ratings.length - 1]}];

  absenceMenuItemTimes = ['Once', 'Two or three times a week', 'Rarely'];

  otherParameters = [
    {parameter: 'Staff Behaviour', rating: this.ratings[this.ratings.length - 1]},
    {parameter: 'Serving Time', rating: this.ratings[this.ratings.length - 1]},
    {parameter: 'Overall Experience', rating: this.ratings[this.ratings.length - 1]}];
  
  // surveyModel = new Survey('', '', '', this.foodItems, this.hygieneOfItems, '', this.otherParameters, '');
  surveyModel = new Survey('s@s.com', this.hostels[0], this.frequencies[0], this.foodItems, this.hygieneOfItems, this.absenceMenuItemTimes[0], this.otherParameters, '');

  submitted = false;

  onSubmit() {
    console.log(this.surveyModel);
    console.log(this.http.get('http://localhost:3000/'));
    this.http.post<Survey>('http://localhost:3000/', this.surveyModel)
      .subscribe((res) => console.log(res));
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
