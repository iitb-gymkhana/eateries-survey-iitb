import { Injectable } from '@angular/core';
import * as Noty from 'noty';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  displayErrorNotification(message: string) {
    new Noty({
      type: 'error',
      theme: 'nest',
      text: message,
      timeout: 5000,
      killer: true
    }).show();
  }
  constructor() { }
}
