import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() eateryName: string;
  @Output() submitted = new EventEmitter<boolean>();

  eateriesFeedbackUrl = 'https://gymkhana.iitb.ac.in/feedback/eateries';

  formSubmitting = false;
  formSubmitted = false;

  tab = 0;

  onDataSubmission(res) {
    this.formSubmitting = false;
    this.formSubmitted = true;
    this.submitted.emit(true);
    this.changeTab(1);
  }

  onSubmit() {
    this.formSubmitting = true;
    this.formSubmitted = false;
    this.http.post(this.apiUrl, this.surveyModel)
      .subscribe(
        (res) => this.onDataSubmission(res),
        (err) => {
          this.alertService.displayErrorNotification('Failed to submit survey');
          this.formSubmitting = false;
        });
  }

  // TODO: Remove this after debugging
  get diagnostic() { return this.surveyModel; }

  changeTab(n) {
    this.tab += n;
    if (this.tab < 0) { this.tab = 0; }
    if (this.tab > 2) { this.tab = 2; }
    window.scrollTo(0, 0);
  }

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
