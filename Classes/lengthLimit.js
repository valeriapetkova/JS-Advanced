class Stringer {
    constructor(str, initialLength) {
        this.innerString = str;
        this.innerLength = initialLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if (this.innerLength === 0) {
            return '...';
        } else {
            return this.innerString;
        }
    }
}