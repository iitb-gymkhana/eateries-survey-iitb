export class SunriseDhabaSurvey {
  constructor(
      public name: String,
      public phoneNumber: Number,
      public email: String,
      public frequency: String,
      public breakfastItems: Array<Object>,
      public appetizersItems: Array<Object>,
      public biryaniVegItems: Array<Object>,
      public biryaniNonVegItems: Array<Object>,
      public tandoorItems: Array<Object>,
      public vegSpecialDishesItems: Array<Object>,
      public paneerSpecialDishesItems: Array<Object>,
      public chickenSpecialDishesItems: Array<Object>,
      public fishDishesItems: Array<Object>,
      public vegRiceAndNoodlesItems: Array<Object>,
      public nonVegRiceAndNoodlesItems: Array<Object>,
      public breadBasketItems: Array<Object>,
      public beveragesAndJuicesItems: Array<Object>,
      public dessertItems: Array<Object>,
      public hygieneOfItems: Array<Object>,
      public absenceMenuItemTimes: String,
      public otherParameters: Array<Object>,
      public otherSuggestions?: String
  ) { }
}
