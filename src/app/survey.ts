export class Survey {
    constructor(
        public email: String,
        public hostel: String,
        public frequency: String,
        public foodItems: Array<Object>,
        public hygieneOfItems: Array<Object>,
        public absenceMenuItemTimes: String,
        public otherParameters: Array<Object>,
        public otherSuggestions?: String
    ) { }
}
