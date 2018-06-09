export class Survey {
    constructor(
        public email: String,
        public hostel: number,
        public frequency: String,
        public foodRatings: Array<String>,
        public hygieneLevel: Array<String>,
        public absenceMenuItem: String,
        public otherParameters: Array<String>,
        public otherSuggestions?: String
    ) { }
}
