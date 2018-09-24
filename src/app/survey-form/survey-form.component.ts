import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Survey } from '../survey';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  @Input() form: any;
  @Input() apiUrl: string;
  @Input() surveyModel: any;
  @Output() submitted = new EventEmitter<boolean>();

  formSubmitting = false;
  formSubmitted = false;

  onDataSubmission(res) {
    this.formSubmitting = false;
    this.formSubmitted = true;
    this.submitted.emit(true);
  }

  onSubmit() {
    this.formSubmitting = true;
    this.formSubmitted = false;
    this.http.post<Survey>(this.apiUrl, this.surveyModel)
      .subscribe(
        (res) => this.onDataSubmission(res),
        (err) => {
          this.alertService.displayErrorNotification('Failed to submit survey');
          this.formSubmitting = false;
        });
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
