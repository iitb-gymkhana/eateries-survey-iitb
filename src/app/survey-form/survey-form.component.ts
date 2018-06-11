import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  apiBaseUrl = environment.apiBaseUrl;

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

  surveyModel = new Survey('', '', '', this.foodItems, this.hygieneOfItems, '', this.otherParameters, '');

  submitted = false;
  submitting = false;

  async onDataSubmission(res) {
    console.log(res);
    this.submitting = false;
    this.submitted = true;
    this.surveyModel = new Survey('', '', '', this.foodItems, this.hygieneOfItems, '', this.otherParameters, '');

  }
  onSubmit() {
    this.submitting = true;
    this.http.post<Survey>(`${this.apiBaseUrl}/eateries-survey/api/submit`, this.surveyModel)
      .subscribe((res) => this.onDataSubmission(res));
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
