export class CanteensSurveyModel {
  constructor(
      public name: Array<Object>,
      public phoneNumber: Array<Object>,
      public email: Array<Object>,
      public hostel: Array<Object>,
      public frequency: Array<Object>,
      public foodItems: Array<Object>,
      public hygieneOfItems: Array<Object>,
      public absenceMenuItemTimes: Array<Object>,
      public otherParameters: Array<Object>,
      public otherSuggestions: Array<Object>
  ) { }
}