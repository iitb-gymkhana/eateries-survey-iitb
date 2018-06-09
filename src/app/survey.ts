export class Survey {
    constructor(
        public email: String,
        public hostel: String,
        public frequency: String,
        public foodRatings: Array<Object>,
        public hygieneLevel: Array<Object>,
        public absenceMenuItem: String,
        public otherParameters: Array<Object>,
        public otherSuggestions?: String
    ) { }
}
