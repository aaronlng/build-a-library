class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        let average = ratingsSum / lengthOfArray;
        return average;
    }

    addRating(value) {
        this._ratings.push(value);
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
}